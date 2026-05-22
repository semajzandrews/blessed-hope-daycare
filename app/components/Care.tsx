"use client";

import { motion } from "motion/react";

const PROMISES = [
  {
    title: "Licensed + insured",
    body: "Registered with the State of New Jersey for home childcare. Insured. Background-checked staff.",
    badge: "NJ",
  },
  {
    title: "CPR + first aid current",
    body: "Pediatric CPR and first aid certifications kept current. Allergy plans documented and respected.",
    badge: "★",
  },
  {
    title: "Tight ratios",
    body: "We keep group sizes small. Every child gets the time they need, especially the quieter ones.",
    badge: "✿",
  },
  {
    title: "Daily notes home",
    body: "Photos, meals, mood, and milestones. So you don't miss the small moments that happened while you were at work.",
    badge: "✎",
  },
  {
    title: "Healthy food",
    body: "Hot meals and snacks prepared on site. Whole grains, fresh fruit, vegetables. No artificial dyes.",
    badge: "♡",
  },
  {
    title: "Outside time, every day",
    body: "Fresh air twice a day in any weather that isn't dangerous. Boots and coats kept at the door.",
    badge: "☀",
  },
];

export default function Care() {
  return (
    <section id="care" className="relative bg-milk-2 py-24 md:py-32">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-14">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-sage-deep">
            04 · Our promises to you
          </div>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.02] tracking-tight text-cocoa">
            What you can count on, <br />
            <span className="italic text-peach">every single day.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROMISES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="deckle relative bg-milk p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage font-display text-xl text-milk">
                {p.badge}
              </div>
              <div className="mt-4 font-display text-2xl tracking-tight text-cocoa">
                {p.title}
              </div>
              <p className="mt-3 leading-relaxed text-cocoa-soft">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
