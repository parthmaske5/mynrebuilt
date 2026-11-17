export function About() {
  const benefits = [
    { title: 'Skilled people who know their trade.' },
    { title: 'Everything we need, brought to you.' },
    { title: 'Every job, done with care.' },
  ];

  return (
    <section id="about" className="scroll-mt-20 border-t border-cream-300 bg-[#FBF8F3] py-16 sm:py-20 lg:py-24">
      <div className="section-container max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline with strike-through and CTA button under it */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-[620px]">
            <h2 className="font-display font-bold text-[clamp(38px,4.8vw,64px)] leading-[1.06] tracking-[-0.02em] text-[#1C1B1A]">
              <span className="block">Stop chasing</span>
              <span className="block text-[#C46F05] line-through decoration-[#1C1B1A] decoration-[4px] sm:decoration-[5px]">
                five contractors.
              </span>
              <span className="block mt-3.5">
                One team. Every trade.
              </span>
              <span className="block">
                Start to finish.
              </span>
            </h2>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 mt-10 h-16 px-8 sm:px-9 rounded-full bg-[#1C1B1A] text-white font-semibold text-lg transition-all duration-300 hover:opacity-90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C46F05]"
            >
              <span>Start your project</span>
              <svg
                className="w-[18px] h-[18px] transition-transform duration-300 ease-out group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          {/* Right Column: 01, 02, 03 Connected Timeline Pills */}
          <div className="lg:col-span-5 relative flex flex-col gap-6 sm:gap-[30px] max-w-[500px]">
            {/* Vertical Connecting Line running behind circles 01 to 03 */}
            <div
              className="absolute left-[31px] sm:left-[39px] top-[50px] sm:top-[61px] bottom-[35px] sm:bottom-[44px] w-[2px] bg-[#F3CE87] pointer-events-none"
              aria-hidden="true"
            />

            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="relative flex items-center gap-5 sm:gap-6 group">
                {/* Number Circle */}
                <div className="relative z-10 flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full bg-[#FFEBC8] text-[#9A4A04] font-semibold text-lg sm:text-[22px] transition-transform duration-200 group-hover:scale-105">
                  0{index + 1}
                </div>

                {/* Rounded Pill Card */}
                <div className="flex-1 px-6 sm:px-[30px] py-5 sm:py-7 rounded-[22px] sm:rounded-[28px] bg-[#F6F1EA] border border-[#EDE6DB] font-display font-medium text-base sm:text-lg lg:text-[22px] leading-[1.55] text-[#1C1B1A] transition-all duration-200 group-hover:shadow-sm">
                  {benefit.title}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
