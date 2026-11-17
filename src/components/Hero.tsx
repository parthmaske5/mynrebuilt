import { ArrowRight } from 'lucide-react';
import { hero } from '@/content/site';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-50 pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Decorative blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #2B2B2B 1px, transparent 1px), linear-gradient(to bottom, #2B2B2B 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Decorative floral SVG — right side, blooms with stem draw & petals sway */}
      <div className="absolute -right-8 top-16 hidden lg:block w-[440px] h-[440px] pointer-events-none z-0" aria-hidden="true">
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 200 200"
          fill="none"
        >
          {/* Stem & Branches (Draws smoothly on load) */}
          <g className="text-marigold-500">
            <path
              d="M100 185 Q98 135 100 95 Q101 68 105 48"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw"
              style={{ strokeDasharray: 400, strokeDashoffset: 0 }}
            />
            <path
              d="M100 135 Q78 124 68 108"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw"
              style={{ strokeDasharray: 200, strokeDashoffset: 0, animationDelay: '0.6s' }}
            />
            <path
              d="M100 112 Q122 102 132 86"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw"
              style={{ strokeDasharray: 200, strokeDashoffset: 0, animationDelay: '0.8s' }}
            />
          </g>

          {/* Leaves */}
          <g>
            <path
              d="M68 108 Q52 104 46 90 Q60 90 68 108 Z"
              fill="#FFB52E"
              fillOpacity="0.2"
              stroke="#F59E0B"
              strokeWidth="1.2"
              className="animate-fade-in"
              style={{ animationDelay: '1s' }}
            />
            <path
              d="M132 86 Q148 82 154 68 Q140 68 132 86 Z"
              fill="#FFB52E"
              fillOpacity="0.2"
              stroke="#F59E0B"
              strokeWidth="1.2"
              className="animate-fade-in"
              style={{ animationDelay: '1.2s' }}
            />
          </g>

          {/* Flower petals (Blooms with soft scale & gentle sway) */}
          <g className="animate-bloom origin-center" style={{ animationDelay: '1.3s' }}>
            <circle cx="105" cy="42" r="21" fill="#F0B7A8" fillOpacity="0.45" />
            <circle cx="88" cy="34" r="16" fill="#F0B7A8" fillOpacity="0.32" />
            <circle cx="120" cy="36" r="16" fill="#F0B7A8" fillOpacity="0.32" />
            <circle cx="98" cy="22" r="14" fill="#F0B7A8" fillOpacity="0.28" />
            <circle cx="112" cy="24" r="14" fill="#F0B7A8" fillOpacity="0.28" />
            <circle cx="105" cy="42" r="9" fill="#F59E0B" fillOpacity="0.65" />
          </g>
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wider uppercase text-marigold-600 animate-fade-in">
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-ink-900 animate-fade-up">
            {hero.headline}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-600 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {hero.subhead}
          </p>

          <div className="mt-10 flex items-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#our-work"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink-900 px-7 py-3.5 text-base font-medium text-cream-50 transition-all duration-300 hover:bg-ink-800 hover:shadow-lg hover:shadow-ink-900/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marigold-500"
            >
              <span>See our work</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </div>

                              {/* Stats strip (divider line removed, exact vertical spacing preserved) */}
          <dl className="mt-7 sm:mt-10 grid grid-cols-3 gap-6 sm:gap-10 max-w-xl animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-3xl sm:text-4xl font-medium text-ink-900">{stat.value}</dd>
                <dt className="mt-1 text-xs sm:text-sm leading-snug text-ink-600">{stat.label}</dt>
              </div>
            ))}
          </dl>

          {/* Single accreditation line in uniform style */}
          <p className="mt-5 text-[14px] leading-snug text-ink-600 font-sans text-left animate-fade-up" style={{ animationDelay: '0.35s' }}>
            G2 · CIDB registered contractor
          </p>

        </div>
      </div>
    </section>
  );
}


export default Hero;
