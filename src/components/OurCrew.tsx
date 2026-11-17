import { useState, useRef, useEffect } from 'react';

export function OurCrew() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMeetCrew = (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    if (isBusy) return;

    setIsBusy(true);
    setIsPlaying(true);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const CREW_URL = '/our-crew';

    // Animation completes at ~3.4s; give a 1-second gap to admire before opening /our-crew
    const duration = prefersReducedMotion ? 600 : 4400;

    timeoutRef.current = setTimeout(() => {
      if (CREW_URL) {
        window.history.pushState({}, '', CREW_URL);
        window.dispatchEvent(new PopStateEvent('popstate'));
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setIsPlaying(false);
        setIsBusy(false);
      }
    }, duration);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section id="our-crew" className="border-t border-cream-300 bg-[#fbf8f4] py-14 sm:py-20 lg:py-24 scroll-mt-16">
      <style>{`
        /* Headline word reveal */
        .crew-line {
          display: block;
          overflow: hidden;
          padding: 0.14em 0;
          margin: -0.14em 0;
        }
        .crew-w {
          display: inline-block;
          animation: crew-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        @keyframes crew-up {
          from { transform: translateY(110%); }
          to { transform: translateY(0); }
        }
        @keyframes crew-fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .crew-lede {
          animation: crew-fade 1s ease-out 0.8s both;
        }
        
        /* Interactive CTA button */
        .crew-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          height: 64px;
          padding: 0 36px;
          border-radius: 9999px;
          background: #3a2a1d;
          color: #fffaf3;
          font-family: Inter, system-ui, sans-serif;
          font-weight: 500;
          font-size: 18px;
          border: none;
          text-decoration: none;
          animation: crew-fade 1s ease-out 0.95s both;
          transition: background-color 0.7s ease, color 0.7s ease;
          cursor: pointer;
        }
        .crew-btn svg {
          width: 18px;
          height: 18px;
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .crew-btn:hover svg {
          transform: translateX(5px);
        }
        .crew-btn:focus-visible {
          outline: 3px solid #f29a1a;
          outline-offset: 4px;
        }
        .crew-busy .crew-btn {
          pointer-events: none;
        }

        /* Photo frame */
        .crew-frame {
          width: min(100%, 500px);
          padding: 16px;
          border: 1px solid #eadccb;
          border-radius: 44px;
          animation: crew-fade 1.1s ease-out 0.2s both;
          background-color: #fbf8f4;
        }
        .crew-card {
          position: relative;
          margin: 0;
          aspect-ratio: 469/586;
          border-radius: 30px;
          overflow: hidden;
        }
        .crew-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: crew-settle 2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s both;
        }
        @keyframes crew-settle {
          from { transform: scale(1.07); }
          to { transform: scale(1); }
        }

        /* Construction Stage Animation */
        .crew-stage {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.7s ease, visibility 0s 0.7s;
          background-color: #fbf8f4;
        }
        .crew-frame.play .crew-stage {
          opacity: 1;
          visibility: visible;
          transition-delay: 0s;
        }
        .crew-stage svg {
          width: 92%;
          height: auto;
          overflow: visible;
        }
        .crew-ground, .crew-ol {
          fill: none;
          stroke: #f29a1a;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1 2;
        }
        .crew-ground { stroke-width: 3.5; }
        .crew-ol { stroke-width: 2.5; }
        .crew-wall {
          fill: #ee8f7e;
          fill-opacity: 0.3;
          transform-origin: 150px 250px;
        }
        .crew-rf {
          fill: #fde6b8;
          stroke: #f29a1a;
          stroke-width: 2.5;
          stroke-linejoin: round;
        }
        .crew-door {
          fill: #f29a1a;
          fill-opacity: 0.9;
          transform-origin: 150px 250px;
        }
        .crew-win rect {
          fill: #fde6b8;
          stroke: #f29a1a;
          stroke-width: 2;
        }
        .crew-win path {
          fill: none;
          stroke: #f29a1a;
          stroke-width: 1.6;
        }
        .crew-ln {
          fill: none;
          stroke: #f29a1a;
          stroke-width: 2.2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .crew-vest {
          fill: #f29a1a;
          fill-opacity: 0.35;
          stroke: #f29a1a;
          stroke-width: 2;
        }
        .crew-hd {
          fill: none;
          stroke: #f29a1a;
          stroke-width: 2.2;
        }
        .crew-hat {
          fill: #ee8f7e;
          fill-opacity: 0.5;
          stroke: #f29a1a;
          stroke-width: 2.2;
          stroke-linejoin: round;
        }
        .crew-pk {
          fill: none;
          stroke: #f29a1a;
          stroke-width: 4;
          stroke-linecap: round;
        }

        .crew-frame.play .crew-ground { animation: crew-draw 0.8s cubic-bezier(0.5, 0, 0.2, 1) 0.25s both; }
        .crew-frame.play .fg.a { animation: crew-from-l 0.8s cubic-bezier(0.3, 0.8, 0.3, 1) 0.5s both; }
        .crew-frame.play .fg.b { animation: crew-from-r 0.8s cubic-bezier(0.3, 0.8, 0.3, 1) 0.6s both; }
        .crew-frame.play .fg.c { animation: crew-from-b 0.8s cubic-bezier(0.3, 0.8, 0.3, 1) 0.7s both; }
        .crew-frame.play .crew-wall { animation: crew-rise 1s cubic-bezier(0.5, 0, 0.2, 1) 0.9s both; }
        .crew-frame.play .crew-ol { animation: crew-draw 1s cubic-bezier(0.5, 0, 0.2, 1) 0.9s both; }
        .crew-frame.play .crew-rf { animation: crew-lift 0.8s cubic-bezier(0.3, 0.8, 0.3, 1) 1.9s both; }
        .crew-frame.play .crew-door { animation: crew-rise 0.5s cubic-bezier(0.3, 0.8, 0.3, 1) 2.5s both; }
        .crew-frame.play .crew-win { animation: crew-appear 0.5s ease-out calc(2.6s + var(--n) * 0.15s) both; }
        .crew-frame.play .ham { animation: crew-hit 0.55s ease-in-out 1.1s 4 both; }

        @keyframes crew-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
        @keyframes crew-rise { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes crew-lift { from { transform: translateY(-22px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes crew-appear { from { opacity: 0; } to { opacity: 1; } }
        @keyframes crew-from-l { from { transform: translateX(-30px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes crew-from-r { from { transform: translateX(30px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes crew-from-b { from { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes crew-hit { 0%, 100% { transform: rotate(10deg); } 45% { transform: rotate(-38deg); } }

        @media (prefers-reduced-motion: reduce) {
          .crew-w, .crew-lede, .crew-btn, .crew-frame, .crew-card img,
          .crew-frame.play .crew-ground, .crew-frame.play .fg.a, .crew-frame.play .fg.b, .crew-frame.play .fg.c,
          .crew-frame.play .crew-wall, .crew-frame.play .crew-ol, .crew-frame.play .crew-rf,
          .crew-frame.play .crew-door, .crew-frame.play .crew-win, .crew-frame.play .ham {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="section-container">
        <div className={`max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${isBusy ? 'crew-busy' : ''}`}>
          
          {/* Left Content */}
          <div className="lg:col-span-7 max-w-[640px]">
            <h2
              className="font-display font-semibold text-[clamp(36px,4.5vw,64px)] leading-[1.06] tracking-[-0.02em] text-[#1c1b19] mb-7"
              aria-label="Built by the hands that make it happen."
            >
              <span className="crew-line" aria-hidden="true">
                <span className="crew-w" style={{ animationDelay: '100ms' }}>Built</span>{' '}
                <span className="crew-w" style={{ animationDelay: '170ms' }}>by</span>{' '}
                <span className="crew-w" style={{ animationDelay: '240ms' }}>the</span>{' '}
                <span className="crew-w" style={{ animationDelay: '310ms' }}>hands</span>
              </span>
              <span className="crew-line" aria-hidden="true">
                <span className="crew-w" style={{ animationDelay: '380ms' }}>that</span>{' '}
                <span className="crew-w" style={{ animationDelay: '450ms' }}>make</span>{' '}
                <span className="crew-w" style={{ animationDelay: '520ms' }}>it</span>{' '}
                <span className="crew-w" style={{ animationDelay: '590ms' }}>happen.</span>
              </span>
            </h2>
            
            <p className="crew-lede text-base sm:text-lg lg:text-[19px] leading-[1.75] text-[#5b5853] mb-10 max-w-[34em]">
              The work carries our name, but it is made by the people on site — the ones who turn up, solve problems, bring their skill, and take pride in the finish.
            </p>
            
            <div>
              <button
                type="button"
                id="btn"
                onClick={handleMeetCrew}
                className="crew-btn"
              >
                <span>Meet the crew</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Photo Frame with Construction Stage Animation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className={`crew-frame ${isPlaying ? 'play' : ''}`} id="frame">
              <figure className="crew-card">
                <img
                  src="/images/crew-walking.jpg"
                  alt="Three construction workers in hi-vis vests carrying a wooden frame down a city street"
                  loading="lazy"
                />
                
                {/* SVG Blueprint construction animation */}
                <div className="crew-stage" aria-hidden="true">
                  <svg viewBox="0 0 300 300">
                    <path className="crew-ground" pathLength={1} d="M10 250H290" />
                    <rect className="crew-wall" x="70" y="140" width="160" height="110" />
                    <path className="crew-ol" pathLength={1} d="M70 250V140H230V250" />
                    <rect className="crew-door" x="136" y="195" width="28" height="55" rx="2" />
                    <g className="crew-win" style={{ '--n': 0 } as React.CSSProperties}>
                      <rect x="88" y="158" width="28" height="26" />
                      <path d="M102 158V184M88 171H116" />
                    </g>
                    <g className="crew-win" style={{ '--n': 1 } as React.CSSProperties}>
                      <rect x="184" y="158" width="28" height="26" />
                      <path d="M198 158V184M184 171H212" />
                    </g>
                    <path className="crew-rf" d="M55 146L150 75L245 146Z" />

                    {/* Hard-hat figure 1 (Worker A: carries timber plank) */}
                    <g transform="translate(38 250)">
                      <g className="fg a">
                        <path className="crew-ln" d="M0 -34V-18M0 -18L-6 0M0 -18L6 0M0 -32L10 -26" />
                        <path className="crew-pk" d="M-6 -27H32" />
                        <rect className="crew-vest" x="-5" y="-38" width="10" height="18" rx="3" />
                        <circle className="crew-hd" cy="-45" r="5.5" />
                        <path className="crew-hat" d="M-8 -47a8 8 0 0 1 16 0zM-10 -47H10" />
                      </g>
                    </g>

                    {/* Hard-hat figure 2 (Worker B: hammering walls) */}
                    <g transform="translate(250 250)">
                      <g className="fg b">
                        <path className="crew-ln" d="M0 -34V-18M0 -18L-6 0M0 -18L6 0M0 -32L-9 -25" />
                        <g transform="translate(-9 -25)">
                          <g className="ham">
                            <path className="crew-ln" d="M0 0L-6 -10" />
                            <path className="crew-pk" d="M-11 -10H-1" />
                          </g>
                        </g>
                        <rect className="crew-vest" x="-5" y="-38" width="10" height="18" rx="3" />
                        <circle className="crew-hd" cy="-45" r="5.5" />
                        <path className="crew-hat" d="M-8 -47a8 8 0 0 1 16 0zM-10 -47H10" />
                      </g>
                    </g>

                    {/* Hard-hat figure 3 (Worker C: directing and pointing) */}
                    <g transform="translate(196 250)">
                      <g className="fg c">
                        <path className="crew-ln" d="M0 -34V-18M0 -18L-6 0M0 -18L6 0M0 -34L10 -46M0 -33L-7 -24" />
                        <rect className="crew-vest" x="-5" y="-38" width="10" height="18" rx="3" />
                        <circle className="crew-hd" cy="-45" r="5.5" />
                        <path className="crew-hat" d="M-8 -47a8 8 0 0 1 16 0zM-10 -47H10" />
                      </g>
                    </g>
                  </svg>
                </div>
              </figure>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurCrew;
