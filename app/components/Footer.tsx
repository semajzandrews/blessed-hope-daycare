export default function Footer() {
  return (
    <footer className="relative border-t border-rule-2 bg-milk-2 pt-14 pb-10">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-peach">
                {[0, 72, 144, 216, 288].map((rot) => (
                  <ellipse key={rot} cx="18" cy="9" rx="4" ry="6" fill="currentColor" opacity="0.85" transform={`rotate(${rot} 18 18)`} />
                ))}
                <circle cx="18" cy="18" r="3.5" fill="#F2C879" />
                <circle cx="18" cy="18" r="1.2" fill="#4B2D1A" />
              </svg>
              <span className="font-display text-2xl tracking-tight text-cocoa">
                Blessed <span className="italic text-peach">Hope</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-cocoa-soft">
              A licensed home daycare on Joyce Street, Orange NJ. Caring for
              infants, toddlers, and preschoolers with the same warm faces,
              every day.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-sage px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-milk">
              <span className="h-1.5 w-1.5 rounded-full bg-milk heart-soft" />
              Licensed · NJ
            </div>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-sage-deep">
              Find us
            </div>
            <address className="mt-4 not-italic leading-relaxed text-cocoa">
              Joyce Street<br />
              Orange, NJ 07050
            </address>
          </div>

          <div className="col-span-6 md:col-span-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-sage-deep">
              Tours + enrollment
            </div>
            <a
              href="tel:+19736780098"
              className="mt-4 block font-display text-3xl tracking-tight text-cocoa tabnum hover:text-peach"
            >
              (973) 678-0098
            </a>
            <div className="mt-2 text-[14px] text-cocoa-soft">
              Most afternoons after nap, around 3 PM.
            </div>
          </div>
        </div>

        <div className="crayon-rule mt-10" />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-[12px] text-cocoa-soft">
          <span>© {new Date().getFullYear()} Blessed Hope Daycare Center · Joyce Street · Orange, NJ 07050</span>
          <span className="font-script text-base text-sage-deep">built · bysemaj.com</span>
        </div>
      </div>
    </footer>
  );
}
