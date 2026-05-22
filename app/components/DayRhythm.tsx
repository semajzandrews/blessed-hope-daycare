"use client";

import { motion } from "motion/react";

const SCHEDULE = [
  { t: "7:00 AM",  label: "Drop-off begins", note: "Warm welcome at the door. Quiet table activities while the room fills." },
  { t: "8:30 AM",  label: "Breakfast", note: "Family-style table. Whole-grain cereal, fruit, milk." },
  { t: "9:15 AM",  label: "Circle time", note: "Songs, story, the day's theme, the weather, the calendar." },
  { t: "10:00 AM", label: "Learning blocks", note: "Letters, numbers, fine-motor stations, art." },
  { t: "11:00 AM", label: "Outside", note: "Back yard play. Bikes, balls, chalk, gardening in season." },
  { t: "12:00 PM", label: "Lunch", note: "Hot meal prepared on site. Vegetable, protein, grain." },
  { t: "12:45 PM", label: "Rest", note: "Cots, blankets, a quiet song. Most rest 60-90 minutes." },
  { t: "2:30 PM",  label: "Snack + free play", note: "Choice of stations. Blocks, dress-up, kitchen, reading nook." },
  { t: "4:00 PM",  label: "Outside (weather permitting)", note: "Second outdoor block." },
  { t: "5:00 PM",  label: "Wind down + pickup", note: "Calm activities, daily notes ready, parents come in." },
];

export default function DayRhythm() {
  return (
    <section id="day" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-12 grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-7">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-sage-deep">
              03 · A day at Blessed Hope
            </div>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.02] tracking-tight text-cocoa">
              A steady rhythm <br />
              <span className="italic text-peach">small ones can count on.</span>
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-cocoa-soft md:col-span-5">
            Predictability helps small bodies and minds settle. We keep
            the same daily flow, with room to slow down when someone needs it.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {SCHEDULE.map((s, i) => (
            <motion.li
              key={s.t}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.05 }}
              className="deckle relative flex items-start gap-5 bg-milk p-5"
            >
              <div className="shrink-0 rounded-2xl bg-peach px-3 py-2 text-[12px] font-bold tabnum text-cocoa">
                {s.t}
              </div>
              <div>
                <div className="font-display text-xl tracking-tight text-cocoa">
                  {s.label}
                </div>
                <div className="mt-1 text-[14px] leading-relaxed text-cocoa-soft">
                  {s.note}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
