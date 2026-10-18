"use client";

import { useEffect, useRef, useState } from "react";
import { allBites, pathProgress } from "@learn/content/index.js";
import { drills, drillOfTheWeek } from "@learn/content/drills.js";
import { glossary } from "@learn/content/glossary.js";
import { commitments } from "@learn/content/commitments.js";
import { get, set, reviewResult, markCommitment, localDay } from "@learn/src/store.js";
import { t, u } from "@learn/src/i18n.js";
import { track } from "@learn/src/events.js";
import { stop } from "@learn/src/speech.js";
import { useLearn } from "./LearnProvider";
import { Icon, Illustration, Progress } from "./LearnUI";
import { Interaction, ReadAloud, useNarration, type InteractionSpec, type LocalizedText } from "./Interaction";
import type { CourseBite } from "./LessonReader";

type Drill = {
  id: string;
  title: LocalizedText;
  do: InteractionSpec & { message: { channel: string; from: LocalizedText; lines: { suspicious: boolean }[] } };
};
type DrillRecord = { id: string; hit: number; of: number; at: number };
type ReviewItem = { bite: CourseBite; lesson: { title: LocalizedText } };
type PracticeSession =
  | { kind: "drill"; drill: Drill; run: number }
  | { kind: "review"; items: ReviewItem[]; index: number; correct: number; run: number };
type SessionResult = { kind: "drill" | "review"; title: LocalizedText; correct: number; of: number };

export function PracticeScreen() {
  const { state, ready } = useLearn();
  const [now, setNow] = useState(() => Date.now());
  const [query, setQuery] = useState("");
  const [showAllWords, setShowAllWords] = useState(false);
  const [session, setSession] = useState<PracticeSession | null>(null);
  const [result, setResult] = useState<SessionResult | null>(null);
  const sessionNumber = useRef(0);
  const sessionHeading = useRef<HTMLHeadingElement>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const weekly = drillOfTheWeek(new Date(now)) as Drill;
  const due = (allBites() as ReviewItem[]).filter(item => state.bites[item.bite.id]?.done && (state.review[item.bite.id]?.due || 0) <= now).slice(0, 5);
  const exercise = session?.kind === "drill" ? session.drill.do : session?.items[session.index]?.bite.do;
  const sessionTitle = session?.kind === "drill" ? t(session.drill.title) : session ? t(session.items[session.index].bite.title) : "";
  const questionKey = session?.kind === "review" ? session.items[session.index].bite.id : session?.drill.id;
  useNarration(exercise ? t(exercise.prompt) : "");

  useEffect(() => {
    const updateTime = () => setNow(Date.now());
    window.addEventListener("focus", updateTime);
    return () => { window.removeEventListener("focus", updateTime); stop(); };
  }, []);
  useEffect(() => {
    if (sessionHeading.current) {
      sessionHeading.current.focus({ preventScroll: true });
      sessionHeading.current.closest("section")?.scrollIntoView({ block: "start", behavior: "auto" });
    } else resultHeading.current?.focus({ preventScroll: true });
  }, [session?.run, questionKey, result]);

  function endSession() { sessionNumber.current++; stop(); setSession(null); setNow(Date.now()); }
  function runDrill(drill: Drill) {
    stop();
    setResult(null);
    setSession({ kind: "drill", drill, run: ++sessionNumber.current });
  }
  function runReview() {
    if (!due.length) return;
    stop();
    setResult(null);
    setSession({ kind: "review", items: due, index: 0, correct: 0, run: ++sessionNumber.current });
  }
  function finishExercise(score: number) {
    if (!session || session.run !== sessionNumber.current) return;
    stop();
    if (session.kind === "drill") {
      const total = session.drill.do.message.lines.filter(line => line.suspicious).length;
      const hit = Math.round(score * total);
      set((current: ReturnType<typeof get>) => ({ ...current, drills: [{ id: session.drill.id, at: Date.now(), hit, of: total }, ...current.drills.filter((item: DrillRecord) => item.id !== session.drill.id)] }));
      track("drill_done", { id: session.drill.id, hit, of: total });
      setResult({ kind: "drill", title: session.drill.title, correct: hit, of: total });
      endSession();
    } else {
      reviewResult(session.items[session.index].bite.id, score >= 0.7);
      const correct = session.correct + Number(score >= 0.7);
      if (session.index + 1 < session.items.length) setSession({ ...session, index: session.index + 1, correct });
      else {
        setResult({ kind: "review", title: { en: "Review complete", tl: "Tapos na ang review" }, correct, of: session.items.length });
        endSession();
      }
    }
  }

  const normalizedQuery = query.trim().toLocaleLowerCase();
  const matchingWords = glossary.filter(word => !normalizedQuery || [word.term, word.en, word.tl].some(value => value.toLocaleLowerCase().includes(normalizedQuery)));
  const visibleWords = normalizedQuery || showAllWords ? matchingWords : matchingWords.slice(0, 12);
  const commitmentIds = Object.keys(state.commitments).filter(id => id in commitments);

  function drillCard(drill: Drill, isWeekly = false) {
    const last = state.drills.find((item: DrillRecord) => item.id === drill.id) as DrillRecord | undefined;
    return <button key={drill.id} type="button" className={`learn-drill-card card flex w-full items-center gap-3 px-4 py-4 text-left ${isWeekly ? "border-primary" : ""}`} onClick={() => runDrill(drill)}>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-2"><span className="font-semibold leading-snug">{t(drill.title)}</span>{isWeekly && <span className="chip border-primary text-primary">{u("thisWeek")}</span>}</span>
        <span className="small mt-1 block">{drill.do.message.channel.toUpperCase()} · {t(drill.do.message.from)}</span>
      </span>
      {last ? <span className="small tnum shrink-0" aria-label={`${u("score")}: ${last.hit} / ${last.of}`}>{last.hit} / {last.of}</span> : <Icon name="arrow" className="shrink-0 text-primary" />}
    </button>;
  }

  if (!ready) return <p className="small" role="status">{t({ en: "Loading your practice…", tl: "Inihahanda ang practice mo…" })}</p>;
  return <div className="learn-practice">
    <header className="learn-practice-hero mb-6">
      <div><p className="eyebrow">Jinnie · Wishes</p><h1 className="h1 mt-2">{u("practice")}</h1></div>
      <Illustration id="shield" className="w-28 shrink-0" />
    </header>

    {session && exercise && <section className="learn-session card mb-6 border-primary px-5 py-5" aria-labelledby="practice-session-title">
      <div className="mb-3 flex items-center justify-between gap-3"><span className="eyebrow">{u(session.kind === "drill" ? "drill" : "review")}</span><button className="btn-ghost px-3 py-2" onClick={endSession}>{t({ en: "Exit practice", tl: "Lumabas sa practice" })}<Icon name="close" /></button></div>
      {session.kind === "drill" ? <span className="chip border-accent text-accent">{u("simulated")}</span> : <><p className="small tnum mb-2">{session.index + 1} / {session.items.length} · {t(session.items[session.index].lesson.title)}</p><Progress value={session.index / session.items.length} /></>}
      <div className="mb-5 mt-3 flex items-start justify-between gap-3"><h2 id="practice-session-title" ref={sessionHeading} tabIndex={-1} className="h2">{sessionTitle}</h2><ReadAloud text={t(exercise.prompt)} /></div>
      <Interaction key={`${session.run}:${questionKey}`} spec={exercise} onComplete={({ score }) => finishExercise(score)} />
    </section>}

    {result && <section className="learn-session-result card mb-6 border-accent px-5 py-5" aria-labelledby="practice-result-title">
      <div className="flex items-center gap-3"><Illustration id="lamp" progress={1} className="w-16" /><div><p className="eyebrow">{u("done")}</p><h2 id="practice-result-title" ref={resultHeading} tabIndex={-1} className="h2 mt-1">{t(result.title)}</h2></div></div>
      <p className="body mt-3">{result.kind === "drill" ? t({ en: `You spotted ${result.correct} of ${result.of} warning signs. Every practice makes the next one easier to notice.`, tl: `Nakita mo ang ${result.correct} sa ${result.of} na babala. Mas madaling makilala ang susunod sa bawat practice.` }) : t({ en: `${result.of} ideas revisited. Your next reviews have been scheduled.`, tl: `${result.of} ideya ang nabalikan. Naitakda na ang susunod mong review.` })}</p>
      <button className="btn-ghost mt-3" onClick={() => setResult(null)}>{u("continue")}<Icon name="arrow" /></button>
    </section>}

    <div className="learn-practice-grid mb-7">
      <section aria-labelledby="weekly-drill-title"><h2 id="weekly-drill-title" className="eyebrow mb-3">{u("drill")}</h2>{drillCard(weekly, true)}</section>
      <section className="card px-4 py-4" aria-labelledby="review-title"><div className="flex items-center justify-between gap-3"><h2 id="review-title" className="eyebrow">{u("review")}</h2><span className="small tnum">{due.length} {u("dueNow")}</span></div><p className="small mt-2">{due.length ? t({ en: "A few familiar ideas, just when you need to revisit them.", tl: "Ilang pamilyar na ideya, sa tamang oras para balikan." }) : u("noReview")}</p>{!!due.length && <button className="btn-ghost mt-3 w-full" onClick={runReview}>{u("start")}<Icon name="arrow" /></button>}</section>
    </div>

    <section className="mb-7" aria-labelledby="drill-library-title">
      <div className="mb-3 flex items-center justify-between gap-3"><h2 id="drill-library-title" className="eyebrow">{u("drillLibrary")}</h2><span className="small tnum">{drills.length} {t({ en: "real-life scenarios", tl: "sitwasyon sa totoong buhay" })}</span></div>
      <details className="practice-library card"><summary className="practice-library-heading">{t({ en: "Explore every scam drill", tl: "Tingnan ang lahat ng scam drill" })}</summary><div className="practice-library-body learn-drill-grid">{(drills as Drill[]).map(drill => drillCard(drill))}</div></details>
    </section>

    <section className="mb-7" aria-labelledby="glossary-title">
      <div className="mb-3 flex items-center justify-between gap-3"><h2 id="glossary-title" className="eyebrow">{u("glossary")}</h2><span className="small tnum">{glossary.length} {t({ en: "words, made simple", tl: "salita, pinasimple" })}</span></div>
      <label className="sr-only" htmlFor="learn-glossary-search">{u("search")}</label><input id="learn-glossary-search" type="search" className="w-full rounded-brand border border-line bg-card px-4 py-3" placeholder={u("search")} value={query} onChange={event => setQuery(event.target.value)} aria-controls="learn-glossary-results" />
      <p className="small my-3" role="status">{normalizedQuery ? t({ en: `${matchingWords.length} matching terms`, tl: `${matchingWords.length} katugmang salita` }) : t({ en: `${visibleWords.length} of ${glossary.length} terms`, tl: `${visibleWords.length} sa ${glossary.length} salita` })}</p>
      <dl id="learn-glossary-results" className="learn-glossary-grid">{visibleWords.map(word => <div key={word.term} className="card px-4 py-3"><dt className="font-semibold">{word.term}</dt><dd className="small mt-1 text-ink">{state.lang === "tl" ? word.tl : word.en}</dd></div>)}</dl>
      {!matchingWords.length && <p className="body mt-3">{t({ en: "No matching words yet. Try a shorter word, or search in English or Filipino.", tl: "Walang katugmang salita. Subukan ang mas maikling salita, o maghanap sa English o Filipino." })}</p>}
      {!normalizedQuery && <button className="btn-ghost mt-3 w-full" onClick={() => setShowAllWords(value => !value)}>{showAllWords ? t({ en: "Show fewer words", tl: "Ipakita ang mas kaunting salita" }) : t({ en: `See all ${glossary.length} words`, tl: `Tingnan ang lahat ng ${glossary.length} salita` })}</button>}
    </section>

    <section aria-labelledby="practice-commitments-title"><h2 id="practice-commitments-title" className="eyebrow mb-3">{t({ en: "Commitments", tl: "Mga pangako" })}</h2>{commitmentIds.length ? <div className="flex flex-col gap-3">{commitmentIds.map(id => <CommitmentRow key={id} id={id} />)}</div> : <div className="card px-4 py-4"><p className="body">{t({ en: "Your next good habit starts in a lesson.", tl: "Sa aralin nagsisimula ang susunod mong mabuting gawi." })}</p><p className="small mt-1">{t({ en: "At the Keep step, choose a commitment. You can check in on it here.", tl: "Sa hakbang na Tandaan, pumili ng pangako. Dito mo ito masusubaybayan." })}</p></div>}</section>
  </div>;
}

export function CommitmentRow({ id }: { id: string }) {
  const { state } = useLearn();
  const definition = commitments[id as keyof typeof commitments];
  const commitment = state.commitments[id];
  if (!definition || !commitment) return null;
  const marked = commitment.marks.includes(localDay());
  return <div className="card px-4 py-4">
    <div className="flex items-start justify-between gap-3"><h3 className="font-semibold leading-snug">{t(definition.title)}</h3>{commitment.done && <span className="text-positive" aria-label={u("done")}><Icon name="check" /></span>}</div>
    <p className="small mt-2">{t(definition.hint)}</p>
    <div className="mt-3 flex items-center gap-3"><div className="flex-1"><Progress value={commitment.marks.length / commitment.days} /></div><span className="small tnum">{commitment.marks.length} / {commitment.days} {u("days")}</span></div>
    {!commitment.done && <button className="btn-ghost mt-3 w-full" disabled={marked} onClick={() => { markCommitment(id); track("commitment_marked", { id }); }}>{marked ? u("marked") : u("markToday")}{marked && <Icon name="check" />}</button>}
  </div>;
}

type CheckBite = Pick<CourseBite, "id" | "title" | "do">;
type CheckPath = { id: string; lessons: { bites?: CheckBite[] }[] };
type CheckSession = { bites: CheckBite[]; index: number; correct: number; run: number };

export function PathCheck({ path }: { path: CheckPath }) {
  const { state } = useLearn();
  const [session, setSession] = useState<CheckSession | null>(null);
  const [finished, setFinished] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const run = useRef(0);
  const heading = useRef<HTMLHeadingElement>(null);
  const check = state.checks?.[path.id];
  const current = session?.bites[session.index];
  useNarration(current ? t(current.do.prompt) : "");
  useEffect(() => { if (current || finished) heading.current?.focus({ preventScroll: true }); }, [current, finished]);
  if (pathProgress(path, state) < 1) return null;

  function start() {
    const pool = path.lessons.flatMap(lesson => lesson.bites || []).filter(bite => bite.do.type !== "story");
    const picked: CheckBite[] = [];
    while (picked.length < 8 && pool.length) picked.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    if (!picked.length) { setUnavailable(true); return; }
    stop();
    setUnavailable(false);
    setFinished(false);
    setSession({ bites: picked, index: 0, correct: 0, run: ++run.current });
  }
  function finishQuestion(score: number) {
    if (!session || session.run !== run.current) return;
    const correct = session.correct + Number(score >= 0.7);
    stop();
    if (session.index + 1 < session.bites.length) setSession({ ...session, index: session.index + 1, correct });
    else {
      const result = { correct, of: session.bites.length, passed: correct / session.bites.length >= 0.7, at: Date.now() };
      set((latest: ReturnType<typeof get>) => ({ ...latest, checks: { ...latest.checks, [path.id]: result } }));
      track("path_check", { path: path.id, correct, of: result.of, passed: result.passed });
      run.current++;
      setSession(null);
      setFinished(true);
    }
  }

  return <section className={`learn-path-check card mt-5 px-5 py-5 ${check?.passed ? "border-accent" : ""}`} aria-labelledby={`path-check-${path.id}`}>
    <div className="flex items-start justify-between gap-3"><h2 id={`path-check-${path.id}`} ref={heading} tabIndex={-1} className="eyebrow">{u("pathCheck")}</h2>{check && !session && <span className="small tnum">{check.correct} / {check.of}</span>}</div>
    {session && current ? <>
      <div className="my-3 flex items-center justify-between gap-3"><p className="small tnum">{session.index + 1} / {session.bites.length}</p><button className="btn-ghost px-3 py-2" onClick={() => { run.current++; stop(); setSession(null); }}>{t({ en: "Exit check", tl: "Lumabas sa check" })}</button></div>
      <Progress value={session.index / session.bites.length} />
      <div className="my-4 flex items-start justify-between gap-3"><h3 className="h2">{t(current.title)}</h3><ReadAloud text={t(current.do.prompt)} /></div>
      <Interaction key={`${session.run}:${current.id}`} spec={current.do} onComplete={({ score }) => finishQuestion(score)} />
    </> : <>
      {finished && <Illustration id="lamp" progress={1} className="mx-auto mt-4 w-24" />}
      <p className="body mt-3" role={finished ? "status" : undefined}>{check?.passed ? u("passed") : finished ? u("notYet") : u("pathCheckIntro")}</p>
      {unavailable && <p className="small mt-2" role="alert">{t({ en: "This check is unavailable. Please try again later.", tl: "Hindi available ang check. Subukan ulit mamaya." })}</p>}
      <button className={`${check?.passed ? "btn-ghost" : "btn-primary"} mt-4 w-full`} onClick={start}>{check ? u("retake") : u("start")}<Icon name="arrow" /></button>
    </>}
  </section>;
}

export default PracticeScreen;
