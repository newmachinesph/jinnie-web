"use client";

import { useEffect, useRef, useState } from "react";
import { findBite, pathProgress } from "@learn/content/index.js";
import { commitments } from "@learn/content/commitments.js";
import { addWish, completeBite, get, set, startCommitment } from "@learn/src/store.js";
import { t, u } from "@learn/src/i18n.js";
import { track } from "@learn/src/events.js";
import { openInHost } from "@learn/src/host.js";
import { stop } from "@learn/src/speech.js";
import { useLearn } from "./LearnProvider";
import type { LearnState } from "./types";
import { Icon, Illustration, Progress } from "./LearnUI";
import { Interaction, ReadAloud, useNarration, type InteractionSpec, type LocalizedText } from "./Interaction";

type KeepAction = {
  kind: "wish" | "commitment" | "drill" | "open";
  label: LocalizedText;
  payload: { key?: string; title?: LocalizedText; amount?: number; id?: string; app?: string };
};
export type CourseBite = {
  id: string;
  title: LocalizedText;
  minutes: number;
  hook: { text: LocalizedText; illo: string };
  show: { text: LocalizedText; illo: string; points?: LocalizedText[]; animate?: boolean };
  do: InteractionSpec;
  keep: { text: LocalizedText; action?: KeepAction | null };
};
type CourseLesson = { id: string; title: LocalizedText; competency: LocalizedText; wish: string; bites: CourseBite[]; status?: string };
type FoundBite = { bite: CourseBite; lesson: CourseLesson; path: { id: string; gate?: string; title: LocalizedText; lessons: CourseLesson[] } };
const beats = ["hook", "show", "do", "keep"] as const;

export function LessonReader({ id }: { id: string }) {
  const { state, ready, navigate } = useLearn();
  if (!ready) return <p className="small" role="status">{t({ en: "Opening your lesson…", tl: "Binubuksan ang aralin mo…" })}</p>;
  const found = findBite(id) as FoundBite | null;
  if (!found) return <section className="card px-5 py-6">
    <h1 className="h2">{t({ en: "Let’s find your next lesson", tl: "Hanapin natin ang susunod mong aralin" })}</h1>
    <p className="body mt-2">{t({ en: "This lesson is unavailable. Your progress is saved, and you can choose another lesson.", tl: "Hindi available ang araling ito. Naka-save ang progreso mo at maaari kang pumili ng ibang aralin." })}</p>
    <button className="btn-primary mt-4" onClick={() => navigate("paths")}>{u("paths")}<Icon name="arrow" /></button>
  </section>;
  if (found.path.gate === "family" && !state.family) return <section className="card px-5 py-6">
    <Illustration id="family" className="mx-auto w-48" />
    <h1 className="h2 mt-4">{t(found.bite.title)}</h1>
    <p className="lede mt-3">{u("familyGate")}</p>
    <button className="btn-primary mt-4 w-full" onClick={() => set({ family: true })}>{u("iAmParent")}</button>
    <button className="btn-ghost mt-2 w-full" onClick={() => navigate("paths")}>{u("back")}</button>
  </section>;
  return <BiteSession key={id} found={found} />;
}

function BiteSession({ found }: { found: FoundBite }) {
  const { state, navigate } = useLearn();
  const { bite, lesson, path } = found;
  const [beat, setBeat] = useState(0);
  const [score, setScore] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [actionDone, setActionDone] = useState(false);
  const [actionBusy, setActionBusy] = useState(false);
  const [actionError, setActionError] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const root = useRef<HTMLElement>(null);
  const active = useRef(false);
  const busy = useRef(false);
  const finished = useRef(false);
  const currentBeat = useRef(0);
  const name = beats[beat];
  const points = bite.show.points?.map(point => t(point)) || [];
  const narration = completed ? "" : name === "hook" ? t(bite.hook.text) : name === "show" ? [t(bite.show.text), ...points].join(" ") : name === "do" ? t(bite.do.prompt) : t(bite.keep.text);
  useNarration(narration, !completed);

  useEffect(() => { active.current = true; return () => { active.current = false; stop(); }; }, []);
  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
    root.current?.closest("main")?.scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
  }, [beat, completed, state.lang]);

  function leave(route: string) { stop(); navigate(route); }
  function advance() {
    if (currentBeat.current !== beat) return;
    currentBeat.current = Math.min(beat + 1, 3);
    stop();
    setBeat(currentBeat.current);
  }
  async function runAction() {
    const action = bite.keep.action;
    if (!action || busy.current || actionDone) return;
    busy.current = true;
    setActionBusy(true);
    setActionError(false);
    try {
      let result: unknown = false;
      if (action.kind === "wish") {
        const { key, title, amount } = action.payload;
        if (!key || !title || !Number.isFinite(amount) || Number(amount) <= 0) throw new Error("Invalid wish");
        addWish({ key, kind: lesson.wish, title, amount });
        track("wish_added", { key });
        result = true;
      } else if (action.kind === "commitment") {
        const definition = commitments[action.payload.id as keyof typeof commitments];
        if (!definition) throw new Error("Missing commitment");
        startCommitment(definition.id, definition.days);
        track("commitment_started", { id: definition.id });
        result = true;
      } else if (action.kind === "drill") {
        set({ drillEnrolled: true });
        result = true;
      } else if (action.kind === "open") {
        stop();
        result = await openInHost(action.payload.app, action.label);
      }
      if (active.current && result !== false) setActionDone(true);
    } catch {
      if (active.current) setActionError(true);
    } finally {
      busy.current = false;
      if (active.current) setActionBusy(false);
    }
  }

  function finish() {
    if (finished.current || !active.current) return;
    finished.current = true;
    stop();
    completeBite(bite.id, score);
    track("bite_complete", { id: bite.id, type: bite.do.type, score });
    const next = lesson.bites[lesson.bites.findIndex(item => item.id === bite.id) + 1];
    const latest = get() as LearnState;
    if (!next && lesson.bites.every(item => latest.bites[item.id]?.done)) setCompleted(true);
    else leave(next ? "bite/" + next.id : "lesson/" + lesson.id);
  }

  if (completed) {
    const progress = pathProgress(path, state);
    const nextLesson = path.lessons.slice(path.lessons.findIndex(item => item.id === lesson.id) + 1).find(item => item.bites?.length);
    return <section ref={root} className="learn-lesson-complete reader text-center">
      <Illustration id="lamp" progress={progress} className="mx-auto my-6 w-32" />
      <p className="eyebrow">{u("lessonDone")}</p>
      <h1 ref={heading} tabIndex={-1} className="h1 mt-2">{t(lesson.title)}</h1>
      <div className="keep-card card mt-5 border-primary bg-primary-soft px-5 py-5">
        <p className="eyebrow">{u("youCanNow")}</p>
        <p className="mt-2 text-xl font-semibold text-primary-deep">{t(lesson.competency)}</p>
      </div>
      <div className="mt-5"><Progress value={progress} /></div>
      <p className="small mt-2">{t(path.title)} · {Math.round(progress * 100)}%</p>
      <button className="btn-primary mt-6 w-full" onClick={() => leave(nextLesson ? "lesson/" + nextLesson.id : "path/" + path.id)}>
        {nextLesson ? t({ en: "Next lesson", tl: "Susunod na aralin" }) : u("continue")}<Icon name="arrow" />
      </button>
      {nextLesson && <button className="btn-ghost mt-2 w-full" onClick={() => leave("path/" + path.id)}>{t({ en: "Back to my path", tl: "Bumalik sa path ko" })}</button>}
    </section>;
  }

  const action = bite.keep.action;
  const actionLabel = action ? ({ wish: "added", commitment: "started", drill: "enrolled", open: "openIn" }[action.kind]) : "done";
  return <article ref={root} className="reader learn-reader">
    <header className="reader-header mb-5">
      <div className="flex items-start gap-3">
        <button className="btn-ghost shrink-0 px-3 py-2" aria-label={u("back")} onClick={() => leave("lesson/" + lesson.id)}><Icon name="back" /></button>
        <div className="min-w-0 flex-1"><p className="small mb-1">{t(lesson.title)}</p><h1 className="reader-title text-lg font-semibold leading-snug">{t(bite.title)}</h1></div>
        <span className="small tnum shrink-0">{bite.minutes} {u("minutes")}</span>
      </div>
      <ol className="reader-steps mt-4" aria-label={t({ en: "Lesson steps", tl: "Mga hakbang ng aralin" })}>
        {beats.map((step, index) => <li key={step} className="reader-step" aria-current={index === beat ? "step" : undefined} data-state={index < beat ? "complete" : index === beat ? "current" : "upcoming"}>
          <span className="reader-step-number" aria-hidden="true">{index < beat ? <Icon name="check" /> : index + 1}</span>
          <span className="reader-step-label">{u(step)}</span>
        </li>)}
      </ol>
    </header>
    <section key={name} className="reader-body beat-in" aria-labelledby="reader-beat-heading">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 id="reader-beat-heading" ref={heading} tabIndex={-1} className="reader-beat-heading eyebrow">{u(name)}</h2>
        <ReadAloud text={narration} />
      </div>
      {name === "hook" && <>
        <div className="reader-art"><Illustration id={bite.hook.illo} className="my-5" /></div>
        <p className="lede">{t(bite.hook.text)}</p>
      </>}
      {name === "show" && <>
        <div className="reader-art"><Illustration id={bite.show.illo} className="my-5" /></div>
        <p className="lede">{t(bite.show.text)}</p>
        {!!points.length && <ul className="mt-4 flex flex-col gap-3">{points.map((point, index) => <li key={index} className="body flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />{point}</li>)}</ul>}
      </>}
      {(name === "hook" || name === "show") && <button className="btn-primary mt-6 w-full" onClick={advance}>{u("continue")}<Icon name="arrow" /></button>}
      {name === "do" && <Interaction spec={bite.do} onComplete={result => { stop(); currentBeat.current = 3; setScore(result.score); setBeat(3); }} />}
      {name === "keep" && <>
        <div className="reader-art my-4"><Illustration id="lamp" className="mx-auto w-24" /></div>
        <div className="keep-card card my-5 border-primary bg-primary-soft px-5 py-5"><p className="text-xl font-semibold leading-snug text-primary-deep">{t(bite.keep.text)}</p></div>
        {action && <button className="btn-ghost w-full" disabled={actionDone || actionBusy} aria-busy={actionBusy} onClick={() => { void runAction(); }}>
          {actionDone && <Icon name="check" />}{actionDone ? u(actionLabel) : t(action.label)}
        </button>}
        {actionError && <p role="alert" className="small mt-2 text-negative">{t({ en: "That action could not be completed. Try again, or continue your lesson.", tl: "Hindi natapos ang aksyon. Subukan ulit, o magpatuloy sa aralin." })}</p>}
        <button className="btn-primary mt-3 w-full" disabled={actionBusy} onClick={finish}>{u("done")}<Icon name="check" /></button>
      </>}
    </section>
  </article>;
}

export default LessonReader;
