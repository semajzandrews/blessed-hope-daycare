"use client";

import { motion } from "motion/react";

const PROGRAMS = [
  {
    age: "Infants",
    range: "6 weeks – 12 months",
    ratio: "1 : 3",
    bg: "bg-blush",
    icon: (
      <svg viewBox="0 0 60 60" className="h-10 w-10" fill="none">
        <circle cx="30" cy="22" r="12" stroke="#4B2D1A" strokeWidth="2.5" />
        <path d="M 18 36 Q 30 50 42 36" stroke="#4B2D1A" strokeWidth="2.5" fill="#F4A88B" />
        <circle cx="25" cy="20" r="2" fill="#4B2D1A" />
        <circle cx="35" cy="20" r="2" fill="#4B2D1A" />
        <path d="M 27 27 Q 30 29 33 27" stroke="#4B2D1A" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    points: ["Held often. Carried always.", "Tummy time + sensory play", "Personal feeding + sleep schedules", "Daily notes home with photos"],
  },
  {
    age: "Toddlers",
    range: "1 – 2 years",
    ratio: "1 : 4",
    bg: "bg-butter",
    icon: (
      <svg viewBox="0 0 60 60" className="h-10 w-10" fill="none">
        <rect x="14" y="20" width="32" height="24" rx="4" stroke="#4B2D1A" strokeWidth="2.5" fill="#F2C879" />
        <rect x="22" y="14" width="6" height="8" fill="#4B2D1A" />
        <rect x="32" y="14" width="6" height="8" fill="#4B2D1A" />
        <circle cx="22" cy="32" r="3" fill="#4B2D1A" />
        <circle cx="38" cy="32" r="3" fill="#4B2D1A" />
      </svg>
    ),
    points: ["Words, songs, and naming the world", "Movement + balance games", "Beginning self-feeding + sippy cups", "Outdoor time twice daily"],
  },
  {
    age: "Preschool",
    range: "3 – 4 years",
    ratio: "1 : 6",
    bg: "bg-sky",
    icon: (
      <svg viewBox="0 0 60 60" className="h-10 w-10" fill="none">
        <path d="M 30 12 L 12 28 L 18 28 L 18 48 L 42 48 L 42 28 L 48 28 Z" stroke="#4B2D1A" strokeWidth="2.5" fill="#B6D2D8" />
        <rect x="26" y="36" width="8" height="12" stroke="#4B2D1A" strokeWidth="2" fill="#4B2D1A" />
        <circle cx="32" cy="42" r="0.8" fill="#F4A88B" />
      </svg>
    ),
    points: ["Letter + number readiness", "Circle time + storybook reading", "Art, music, and dramatic play", "Pre-K kindergarten preparation"],
  },
  {
    age: "Pre-K",
    range: "4 – 5 years",
    ratio: "1 : 8",
    bg: "bg-peach/30",
    icon: (
      <svg viewBox="0 0 60 60" className="h-10 w-10" fill="none">
        <rect x="10" y="16" width="40" height="28" rx="2" stroke="#4B2D1A" strokeWidth="2.5" fill="#FBF5EA" />
        <line x1="16" y1="24" x2="44" y2="24" stroke="#4B2D1A" strokeWidth="1.5" />
        <line x1="16" y1="30" x2="38" y2="30" stroke="#4B2D1A" strokeWidth="1.5" />
        <line x1="16" y1="36" x2="40" y2="36" stroke="#4B2D1A" strokeWidth="1.5" />
        <circle cx="50" cy="14" r="4" fill="#C97455" />
      </svg>
    ),
    points: ["Reading + writing fundamentals", "Math + science exploration", "Social skills + cooperation", "Confident kindergarten launch"],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative bg-milk-2 py-24 md:py-32">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-14 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-sage-deep">
              02 · Programs
            </div>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.02] tracking-tight text-cocoa">
              Four ages. <br />
              <span className="italic text-sage-deep">Four little worlds.</span>
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-cocoa-soft md:col-span-5 md:pt-8">
            Each group has its own rhythm, its own room corner, and its own
            mix of activities. Tight ratios so every child gets the time they
            need.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PROGRAMS.map((p, i) => (
            <motion.div
              key={p.age}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="deckle bg-milk p-7"
            >
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${p.bg}`}>
                {p.icon}
              </div>
              <div className="font-display text-3xl tracking-tight text-cocoa">
                {p.age}
              </div>
              <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-cocoa-soft">
                {p.range} · ratio {p.ratio}
              </div>
              <ul className="mt-5 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-[14px] text-cocoa-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-peach" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
