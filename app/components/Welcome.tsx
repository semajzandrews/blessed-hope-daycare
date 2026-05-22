"use client";

import { motion } from "motion/react";

export default function Welcome() {
  return (
    <section id="welcome" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-sage-deep">
              01 · Welcome
            </div>
            <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight text-cocoa">
              A small house. <br />
              <span className="italic text-peach">A whole lot of room to grow.</span>
            </h2>
            <div className="crayon-rule mt-8 w-32" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-7 space-y-5 text-lg leading-relaxed text-cocoa-soft"
          >
            <p>
              Blessed Hope is a home daycare on Joyce Street in Orange. The
              house is bright, the back yard is fenced, and there&apos;s
              always a tray of fruit on the kitchen counter. We&apos;re
              licensed by the State of New Jersey and certified in pediatric
              CPR and first aid.
            </p>
            <p>
              What sets us apart isn&apos;t the curriculum on the wall.
              It&apos;s that the same warm faces meet your child at the door
              every morning. We learn what soothes them. What makes them
              laugh. What scares them. And we keep notes so you do too.
            </p>
            <p>
              Tours run most afternoons after nap time. Call ahead and
              we&apos;ll have the kettle on.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
