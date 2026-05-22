"use client";

import { motion } from "motion/react";

export default function Visit() {
  return (
    <section id="visit" className="relative isolate overflow-hidden py-28 md:py-36 wash">
      <div className="absolute inset-0 -z-10 storybook-dots opacity-40" />

      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-7"
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-sage-deep">
              05 · Come visit
            </div>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.02] tracking-tight text-cocoa">
              The kettle&apos;s on. <br />
              <span className="italic text-peach">Bring the little one.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cocoa-soft">
              Tours run most afternoons after nap (around 3 PM). Give us a
              call and we&apos;ll set a time that works for both of you.
              First visits usually take about thirty minutes.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
              <div className="deckle bg-milk p-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-sage-deep">
                  Phone
                </div>
                <a href="tel:+19736780098" className="mt-1 block font-display text-2xl tracking-tight text-cocoa hover:text-peach">
                  (973) 678-0098
                </a>
              </div>
              <div className="deckle bg-milk p-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-sage-deep">
                  Address
                </div>
                <div className="mt-1 font-display text-lg leading-tight text-cocoa">
                  Joyce Street<br />Orange, NJ
                </div>
              </div>
              <div className="deckle bg-milk p-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-sage-deep">
                  Hours
                </div>
                <div className="mt-1 font-display text-lg tracking-tight text-cocoa">
                  Mon – Fri<br />7 AM to 6 PM
                </div>
              </div>
              <div className="deckle bg-milk p-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-sage-deep">
                  Tours
                </div>
                <div className="mt-1 font-display text-lg tracking-tight text-cocoa">
                  Afternoons<br />after 3 PM
                </div>
              </div>
            </div>

            <a
              href="tel:+19736780098"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-cocoa px-7 py-4 text-sm font-bold text-milk transition-transform hover:-translate-y-0.5"
            >
              <span className="relative h-2 w-2 rounded-full bg-peach heart-soft" />
              Call to schedule a tour
              <span>→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="col-span-12 md:col-span-5"
          >
            <div className="deckle relative aspect-square bg-blush p-8">
              <svg viewBox="0 0 200 200" className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)]" fill="none">
                {/* house silhouette */}
                <path d="M 100 30 L 30 90 L 30 170 L 80 170 L 80 130 L 120 130 L 120 170 L 170 170 L 170 90 Z" fill="#FBF5EA" stroke="#4B2D1A" strokeWidth="3" />
                {/* roof line */}
                <path d="M 100 30 L 30 90 L 170 90" stroke="#C97455" strokeWidth="3" strokeLinejoin="round" />
                {/* chimney */}
                <rect x="140" y="50" width="14" height="22" fill="#4B2D1A" />
                {/* windows */}
                <rect x="48" y="105" width="22" height="22" fill="#F2C879" stroke="#4B2D1A" strokeWidth="2" />
                <line x1="59" y1="105" x2="59" y2="127" stroke="#4B2D1A" strokeWidth="1.5" />
                <line x1="48" y1="116" x2="70" y2="116" stroke="#4B2D1A" strokeWidth="1.5" />
                <rect x="130" y="105" width="22" height="22" fill="#F2C879" stroke="#4B2D1A" strokeWidth="2" />
                <line x1="141" y1="105" x2="141" y2="127" stroke="#4B2D1A" strokeWidth="1.5" />
                <line x1="130" y1="116" x2="152" y2="116" stroke="#4B2D1A" strokeWidth="1.5" />
                {/* door */}
                <rect x="90" y="135" width="20" height="35" fill="#8FA585" stroke="#4B2D1A" strokeWidth="2" />
                <circle cx="106" cy="153" r="1.5" fill="#4B2D1A" />
                {/* heart on door */}
                <path d="M 100 142 Q 98 140 96 142 Q 94 144 100 148 Q 106 144 104 142 Q 102 140 100 142 Z" fill="#C97455" />
                {/* tree */}
                <circle cx="22" cy="110" r="18" fill="#8FA585" />
                <rect x="20" y="120" width="4" height="20" fill="#4B2D1A" />
                {/* path */}
                <path d="M 100 170 L 95 195 L 105 195 Z" fill="#C97455" opacity="0.5" />
                {/* clouds */}
                <ellipse cx="50" cy="40" rx="14" ry="6" fill="#FBF5EA" stroke="#4B2D1A" strokeWidth="1.5" opacity="0.85" />
                <ellipse cx="160" cy="30" rx="12" ry="5" fill="#FBF5EA" stroke="#4B2D1A" strokeWidth="1.5" opacity="0.85" />
              </svg>
              <div className="pointer-events-none absolute bottom-4 left-0 right-0 text-center font-script text-2xl text-cocoa">
                our front door
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
