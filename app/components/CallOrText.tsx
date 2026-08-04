"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "../lib/site";

/**
 * Call OR Text — plenty of parents will never dial a stranger about their child
 * but will happily text a question at 9pm. Styled in this build's storybook
 * idiom: cream deckle card, crayon rule, Caveat sub-labels, a peach heartbeat dot.
 */

function HandsetIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" className={className}>
      <path
        d="M5.5 4h3l1.4 3.4-2 1.4a11 11 0 0 0 5.3 5.3l1.4-2L18 13.5v3A2.5 2.5 0 0 1 15.5 19 12.5 12.5 0 0 1 5 8.5 2.5 2.5 0 0 1 5.5 4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" className={className}>
      <path
        d="M4.5 5.5h15v10h-8.5L6 19.5v-4H4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M8.5 10h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

type Props = {
  variant?: "pill" | "inline";
  /** pill only — cocoa is the solid brand button, cream is the quiet one */
  tone?: "cocoa" | "cream";
  /** short line above the chooser rows, e.g. "Tour" */
  eyebrow?: string;
  className?: string;
};

export default function CallOrText({
  variant = "pill",
  tone = "cocoa",
  eyebrow = "Tour",
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const cotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!cotRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-3 rounded-full bg-cocoa px-7 py-4 text-sm font-bold text-milk transition-transform hover:-translate-y-0.5"
        >
          <span className="relative h-2 w-2 rounded-full bg-peach heart-soft" />
          Call {site.phone}
        </a>
        <a
          href={site.smsHref}
          className="inline-flex items-center gap-2 rounded-full border border-cocoa/30 px-7 py-4 text-sm font-semibold text-cocoa transition-colors hover:bg-blush"
        >
          <NoteIcon />
          Or text us
          <span className="font-script text-lg text-sage-deep">it&apos;s okay, we answer</span>
        </a>
      </div>
    );
  }

  const triggerTone =
    tone === "cream"
      ? "border border-cocoa/30 bg-milk text-cocoa hover:bg-blush"
      : "bg-cocoa text-milk";

  return (
    <div className={`relative ${className}`} ref={cotRef}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className={`group inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-[13px] font-bold transition-transform hover:-translate-y-0.5 min-[560px]:px-5 ${triggerTone}`}
      >
        <span className="relative h-1.5 w-1.5 rounded-full bg-peach heart-soft" />
        <span className="hidden min-[560px]:inline">
          {eyebrow} · {site.phone}
        </span>
        <HandsetIcon className="min-[560px]:hidden" />
      </button>

      <div
        role="menu"
        data-open={open}
        className={`deckle absolute right-0 top-[calc(100%+12px)] z-[70] w-max min-w-[248px] bg-milk p-2 transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1.5 opacity-0"
        }`}
      >
        <div className="px-3 pb-2 pt-2 font-script text-xl leading-none text-sage-deep">
          how would you rather reach us?
        </div>
        <div className="crayon-rule mx-3 opacity-30" />
        <a
          role="menuitem"
          href={site.phoneHref}
          onClick={() => setOpen(false)}
          className="mt-1 flex items-center gap-3 rounded-2xl px-3 py-3 text-cocoa transition-colors hover:bg-blush/60"
        >
          <HandsetIcon className="text-terracotta" />
          <span>
            <strong className="block font-display text-lg leading-tight tracking-tight">
              Call {site.phone}
            </strong>
            <span className="block text-[12px] text-cocoa-soft">
              Weekdays, 7 AM to 6 PM
            </span>
          </span>
        </a>
        <a
          role="menuitem"
          href={site.smsHref}
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 rounded-2xl px-3 py-3 text-cocoa transition-colors hover:bg-blush/60"
        >
          <NoteIcon className="text-sage-deep" />
          <span>
            <strong className="block font-display text-lg leading-tight tracking-tight">
              Text us instead
            </strong>
            <span className="block text-[12px] text-cocoa-soft">
              Ask about openings, rates, or a tour time
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
