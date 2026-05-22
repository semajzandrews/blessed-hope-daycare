"use client";

import { motion } from "motion/react";

// Signature moment: a hand-drawn flower bloom + growing vine.
// Petals pop in with the bloom-pop keyframe; leaves sway gently.
function BloomArt() {
  return (
    <svg viewBox="0 0 420 480" className="absolute inset-0 h-full w-full">
      <defs>
        <radialGradient id="petalGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F4A88B" />
          <stop offset="100%" stopColor="#C97455" />
        </radialGradient>
        <radialGradient id="petalGrad2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F2C879" />
          <stop offset="100%" stopColor="#C97455" />
        </radialGradient>
      </defs>

      {/* ground / vase */}
      <ellipse cx="210" cy="460" rx="120" ry="10" fill="#E2D2B8" opacity="0.5" />
      <path
        d="M 165 460 L 175 410 Q 175 400 185 400 L 235 400 Q 245 400 245 410 L 255 460 Z"
        fill="#C97455" opacity="0.85"
      />
      <path d="M 165 460 L 255 460" stroke="#4B2D1A" strokeWidth="2" opacity="0.6" />

      {/* main stem */}
      <path
        d="M 210 400 Q 200 320 215 240 Q 230 160 210 80"
        stroke="#5F7A57" strokeWidth="6" fill="none" strokeLinecap="round"
      />

      {/* side stems */}
      <path d="M 215 280 Q 260 260 290 230" stroke="#5F7A57" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 213 340 Q 165 320 130 280" stroke="#5F7A57" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* leaves */}
      <g className="sway" style={{ transformOrigin: "210px 400px" }}>
        <path d="M 215 280 Q 250 250 290 230 Q 280 270 240 280 Z" fill="#8FA585" />
        <path d="M 213 340 Q 175 310 130 280 Q 145 320 195 340 Z" fill="#8FA585" />
        <path d="M 210 220 Q 240 200 260 170 Q 250 210 220 220 Z" fill="#5F7A57" opacity="0.8" />
      </g>

      {/* small buds (delayed pops) */}
      <g
        className="bloom-pop"
        style={{ transformOrigin: "290px 230px", animationDelay: "0.6s", opacity: 0 }}
      >
        <circle cx="290" cy="230" r="10" fill="url(#petalGrad2)" />
        <circle cx="290" cy="230" r="3" fill="#4B2D1A" />
      </g>
      <g
        className="bloom-pop"
        style={{ transformOrigin: "130px 280px", animationDelay: "0.9s", opacity: 0 }}
      >
        <circle cx="130" cy="280" r="10" fill="url(#petalGrad2)" />
        <circle cx="130" cy="280" r="3" fill="#4B2D1A" />
      </g>

      {/* main bloom - 8 petals pop in around the center */}
      <g
        className="bloom-pop"
        style={{ transformOrigin: "210px 80px", animationDelay: "0.3s", opacity: 0 }}
      >
        {/* back petals (larger, lighter) */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((rot) => (
          <ellipse
            key={`back-${rot}`}
            cx="210" cy="50"
            rx="14" ry="26"
            fill="url(#petalGrad)"
            opacity="0.75"
            transform={`rotate(${rot} 210 80)`}
          />
        ))}
        {/* front petals (smaller, denser) */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((rot) => (
          <ellipse
            key={`front-${rot}`}
            cx="210" cy="56"
            rx="10" ry="20"
            fill="url(#petalGrad)"
            transform={`rotate(${rot} 210 80)`}
          />
        ))}
        {/* center */}
        <circle cx="210" cy="80" r="14" fill="#F2C879" />
        <circle cx="210" cy="80" r="4" fill="#4B2D1A" />
        {/* freckles on center */}
        <circle cx="205" cy="76" r="1.5" fill="#4B2D1A" opacity="0.6" />
        <circle cx="215" cy="78" r="1.5" fill="#4B2D1A" opacity="0.6" />
        <circle cx="210" cy="86" r="1.5" fill="#4B2D1A" opacity="0.6" />
      </g>

      {/* sparkle dots scattered */}
      {[
        [340, 120, 0.4], [320, 380, 0.6], [80, 140, 0.5], [100, 360, 0.45],
        [380, 280, 0.55], [50, 240, 0.5],
      ].map(([x, y, op], i) => (
        <g key={i} className="float-soft" style={{ animationDelay: `${i * 0.4}s` }}>
          <path
            d={`M ${x} ${(y as number) - 4} L ${(x as number) + 1} ${y} L ${(x as number) + 5} ${(y as number) + 1} L ${(x as number) + 1} ${(y as number) + 2} L ${x} ${(y as number) + 6} L ${(x as number) - 1} ${(y as number) + 2} L ${(x as number) - 5} ${(y as number) + 1} L ${(x as number) - 1} ${y} Z`}
            fill="#F2C879"
            opacity={op as number}
          />
        </g>
      ))}
    </svg>
  );
}

const FACTS = [
  { k: "Location",   v: "Joyce Street, Orange NJ" },
  { k: "Ages",       v: "6 weeks to 5 years" },
  { k: "Hours",      v: "Mon-Fri · 7 AM to 6 PM" },
  { k: "Phone",      v: "(973) 678-0098" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-20 md:pt-48 md:pb-32 wash">
      <div className="absolute inset-0 -z-10 storybook-dots opacity-60" />

      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-8 flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.18em] text-sage-deep">
          <span className="h-px w-10 bg-rule-2" />
          <span className="text-peach">·</span>
          Licensed home childcare in Orange, NJ
          <span className="h-px w-10 bg-rule-2" />
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="font-display text-[clamp(2.6rem,6.5vw,6.5rem)] leading-[1.02] tracking-[-0.015em] text-cocoa">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.05 }}
                className="block"
              >
                Where small hands
              </motion.span>
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.22 }}
                className="block italic text-peach"
              >
                learn big things.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-cocoa-soft"
            >
              A licensed home childcare on Joyce Street in Orange, NJ, where
              infants, toddlers, and preschoolers are met with patience,
              warmth, and a steady daily rhythm. We grow alongside your child,
              one small step at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="tel:+19736780098"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-cocoa px-6 py-3.5 text-sm font-bold text-milk transition-transform hover:-translate-y-0.5"
              >
                <span className="relative h-1.5 w-1.5 rounded-full bg-peach heart-soft" />
                Schedule a tour
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#programs"
                className="group inline-flex items-center gap-2 rounded-full border border-cocoa/30 px-6 py-3.5 text-sm font-semibold text-cocoa hover:bg-cocoa hover:text-milk"
              >
                Our programs
                <span className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">↓</span>
              </a>
            </motion.div>

            <div className="mt-6 font-script text-2xl text-sage-deep">
              tours available most afternoons, just ask.
            </div>
          </div>

          {/* Bloom signature moment */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.15 }}
              className="relative aspect-square w-full"
            >
              <BloomArt />
            </motion.div>
          </div>
        </div>

        {/* Soft facts strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4"
        >
          {FACTS.map((f) => (
            <div key={f.k} className="deckle bg-milk-2 p-5">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-sage-deep">
                {f.k}
              </div>
              <div className="mt-2 font-display text-xl tracking-tight text-cocoa">
                {f.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
