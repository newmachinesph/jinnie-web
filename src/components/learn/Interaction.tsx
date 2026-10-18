"use client";

import { useEffect, useRef, useState } from "react";
import { t, u } from "@learn/src/i18n.js";
import { dispose } from "@learn/src/lifecycle.js";
import { speak, stop } from "@learn/src/speech.js";
import { useLearn } from "./LearnProvider";
import { Icon } from "./LearnUI";

export type LocalizedText = string | { en: string; tl?: string };
export type InteractionSpec = {
  type: string;
  prompt?: LocalizedText;
  [field: string]: unknown;
};
export type InteractionResult = { score: number };

const interactionTypes = new Set([
  "choice", "swipe", "predict", "allocate", "spot", "order",
  "number", "compare", "story", "rapid", "match",
]);

/** React owns the session; the existing engine owns only this exercise's DOM. */
export function Interaction({ spec, onComplete }: {
  spec: InteractionSpec;
  onComplete: (result: InteractionResult) => void;
}) {
  const { state } = useLearn();
  return <MountedInteraction key={state.lang} spec={spec} onComplete={onComplete} />;
}

export default function ExerciseInteraction({ exercise, onComplete }: {
  exercise: InteractionSpec;
  onComplete: (result: InteractionResult) => void;
}) {
  return <Interaction spec={exercise} onComplete={onComplete} />;
}

function MountedInteraction({ spec, onComplete }: {
  spec: InteractionSpec;
  onComplete: (result: InteractionResult) => void;
}) {
  const root = useRef<HTMLDivElement>(null);
  const callback = useRef(onComplete);
  const [attempt, setAttempt] = useState(0);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => { callback.current = onComplete; }, [onComplete]);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    let active = true;
    import("@learn/src/interactions.js").then(async ({ mount }) => {
      if (!active) return;
      if (!interactionTypes.has(spec.type)) throw new Error("Unsupported activity");
      const completion = mount(element, spec);
      setLoading(false);
      const result = await completion as { score?: unknown };
      if (!active) return;
      if (typeof result.score !== "number" || !Number.isFinite(result.score)) throw new Error("Invalid activity result");
      active = false;
      callback.current({ score: Math.max(0, Math.min(1, result.score)) });
    }).catch(() => {
      if (!active) return;
      dispose(element);
      element.replaceChildren();
      setLoading(false);
      setFailed(true);
    });
    return () => {
      active = false;
      dispose(element);
      element.replaceChildren();
    };
  }, [spec, attempt]);

  return <div className="learn-interaction" aria-busy={loading}>
    {loading && <p className="small" role="status">{t({ en: "Getting your activity ready…", tl: "Inihahanda ang gawain mo…" })}</p>}
    <div ref={root} />
    {failed && <div className="card border-negative px-4 py-4" role="alert">
      <p className="body">{t({ en: "This activity could not load. Your saved progress is safe. Try it again.", tl: "Hindi ma-load ang gawain. Naka-save pa rin ang progreso mo. Subukan ulit." })}</p>
      <button type="button" className="btn-ghost mt-3" onClick={() => { setFailed(false); setLoading(true); setAttempt(value => value + 1); }}>
        {t({ en: "Try again", tl: "Subukan ulit" })}
      </button>
    </div>}
  </div>;
}

export function ReadAloud({ text }: { text: string }) {
  return <div className="learn-audio-controls flex shrink-0 items-center gap-1">
    <button type="button" className="chip" aria-label={u("readAloud")} title={u("readAloud")} onClick={() => { void speak(text); }}>
      <Icon name="speaker" /><span className="sr-only">{u("readAloud")}</span>
    </button>
    <button type="button" className="chip" onClick={stop} aria-label={t({ en: "Stop narration", tl: "Ihinto ang pagbasa" })} title={t({ en: "Stop narration", tl: "Ihinto ang pagbasa" })}>
      <Icon name="close" /><span className="sr-only">{t({ en: "Stop narration", tl: "Ihinto ang pagbasa" })}</span>
    </button>
  </div>;
}

export function useNarration(text: string, enabled = true) {
  const { state } = useLearn();
  useEffect(() => {
    stop();
    if (enabled && state.voice && text) void speak(text);
    return stop;
  }, [text, enabled, state.voice, state.lang]);
}
