import { company } from '@/content/site';

export function ContactSection() {
  const whatsappHref = 'https://wa.me/60179585418?text=Hi%20MYN%2C%20I%20need%20help%20with%20a%20job.';
  const mapsHref = 'https://maps.google.com/?q=Lot+16613-2,+Lorong+C6,+Kampung+Pandan,+55100+Kuala+Lumpur';

  return (
    <section id="contact" className="border-t border-[#e3dacf] bg-[#fbf8f4] py-16 sm:py-20 lg:py-24 scroll-mt-16">
      <style>{`
        .contact-row-svg {
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .contact-row:hover .contact-row-svg {
          transform: translateX(8px);
        }
        .contact-row:focus-visible {
          outline: 3px solid #f5a21b;
          outline-offset: 2px;
        }
      `}</style>
      <div className="section-container">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div>
            <h2 className="font-display font-semibold text-[clamp(38px,4.5vw,64px)] leading-[1.05] tracking-[-0.02em] text-[#1c1b19] mb-7 max-w-[9em]">
              Tell us what needs doing.
            </h2>
            <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.7] text-[#5b5853] mb-7 max-w-[28em]">
              Tell us about the job. Add a few photos if you can, and we’ll take it from there.
            </p>
            <p className="text-[15px] text-[#5b5853]">
              {company.hours}
            </p>
          </div>

          {/* Right Action Rows */}
          <div className="border-b border-[#e3dacf]">
            {/* WhatsApp Row */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row group flex items-center justify-between gap-6 py-7 sm:py-8 px-1 border-t border-[#e3dacf] transition-colors"
            >
              <div>
                <h3 className="font-display font-semibold text-[clamp(24px,2.5vw,32px)] tracking-[-0.01em] text-[#1c1b19] mb-1.5 group-hover:text-[#f5a21b] transition-colors">
                  WhatsApp us
                </h3>
                <p className="text-base text-[#5b5853]">
                  Photos welcome
                </p>
              </div>
              <svg
                className="contact-row-svg flex-none w-[26px] h-[26px] text-[#1c1b19] group-hover:text-[#f5a21b]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </a>

            {/* Phone Row */}
            <a
              href="tel:+60179585418"
              className="contact-row group flex items-center justify-between gap-6 py-7 sm:py-8 px-1 border-t border-[#e3dacf] transition-colors"
            >
              <div>
                <h3 className="font-display font-semibold text-[clamp(24px,2.5vw,32px)] tracking-[-0.01em] text-[#1c1b19] mb-1.5 group-hover:text-[#f5a21b] transition-colors">
                  Call {company.phone}
                </h3>
                <p className="text-base text-[#5b5853]">
                  Speak to the team directly
                </p>
              </div>
              <svg
                className="contact-row-svg flex-none w-[26px] h-[26px] text-[#1c1b19] group-hover:text-[#f5a21b]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </a>

            {/* Visit us Row */}
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row group flex items-center justify-between gap-6 py-7 sm:py-8 px-1 border-t border-[#e3dacf] transition-colors"
            >
              <div>
                <h3 className="font-display font-semibold text-[clamp(24px,2.5vw,32px)] tracking-[-0.01em] text-[#1c1b19] mb-1.5 group-hover:text-[#f5a21b] transition-colors">
                  Visit us
                </h3>
                <p className="text-base text-[#5b5853]">
                  Lot 16613-2, Lorong C6, Kampung Pandan, 55100 Kuala Lumpur
                </p>
              </div>
              <svg
                className="contact-row-svg flex-none w-[26px] h-[26px] text-[#1c1b19] group-hover:text-[#f5a21b]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
