"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Welcome", href: "#welcome" },
  { label: "Programs", href: "#programs" },
  { label: "A Day", href: "#day" },
  { label: "Care", href: "#care" },
  { label: "Visit", href: "#visit" },
];

// Small hand-drawn flower used as the brand mark
function Mark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-peach">
      <g className="sway">
        {/* petals */}
        {[0, 72, 144, 216, 288].map((rot) => (
          <ellipse
            key={rot}
            cx="18" cy="9"
            rx="4" ry="6"
            fill="currentColor"
            opacity="0.85"
            transform={`rotate(${rot} 18 18)`}
          />
        ))}
        {/* center */}
        <circle cx="18" cy="18" r="3.5" fill="#F2C879" />
        <circle cx="18" cy="18" r="1.2" fill="#4B2D1A" />
      </g>
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-milk/90 backdrop-blur-xl border-b border-rule"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1380px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <Mark />
          <span className="font-display text-2xl tracking-tight text-cocoa">
            Blessed <span className="italic text-peach">Hope</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-semibold text-cocoa-soft transition-colors hover:text-cocoa"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+19736780098"
          className="group inline-flex items-center gap-2 rounded-full bg-cocoa px-5 py-2.5 text-[13px] font-bold text-milk transition-transform hover:-translate-y-0.5"
        >
          <span className="relative h-1.5 w-1.5 rounded-full bg-peach heart-soft" />
          Tour · (973) 678-0098
        </a>
      </div>
    </header>
  );
}
