import { company } from '@/content/site';

const navItems = [
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'Our Crew', href: '/our-crew' },
  { label: 'Contact', href: '#contact' },
];

export function Footer({ currentPath = '/' }: { currentPath?: string }) {
  const getNavHref = (href: string) => {
    if (href.startsWith('#') && currentPath !== '/') {
      return `/${href}`;
    }
    return href;
  };

  const mapsHref = 'https://maps.google.com/?q=Lot+16613-2,+Lorong+C6,+Kampung+Pandan,+55100+Kuala+Lumpur';

  return (
    <footer className="bg-[#33241a] text-[#f3ece1] border-t border-[#33241a] pt-14 sm:pt-16 lg:pt-20 pb-[calc(56px+3.5rem+env(safe-area-inset-bottom))] md:pb-16 lg:pb-20 px-6 sm:px-10 lg:px-16 transition-colors duration-500">
      <style>{`
        .footer-logo {
          font-family: Fraunces, Georgia, serif;
          font-weight: 600;
          font-size: 30px;
          letter-spacing: -0.01em;
        }
        .footer-logo i {
          color: #f5a21b;
          font-style: normal;
        }
        .footer-logo small {
          font-size: 17px;
          font-weight: 400;
          color: #b9ae9f;
          margin-left: 10px;
          letter-spacing: 0;
        }
        .footer-tag {
          font-family: Fraunces, Georgia, serif;
          font-style: italic;
          font-weight: 500;
          font-size: 21px;
          color: #f5a21b;
          margin: 0;
        }
        .footer-lab {
          font-family: Fraunces, Georgia, serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b9ae9f;
          margin: 6px 0 22px;
        }
      `}</style>
      
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Column 1: Logo, Blurb, and Tagline (1.5fr / 5 cols) */}
        <div className="md:col-span-6 lg:col-span-5">
          <a href="/" className="footer-logo inline-flex items-baseline text-[#f3ece1]">
            MYN Deco Enterprise<i>.</i>
          </a>
          <p className="text-base leading-[1.7] text-[#b9ae9f] my-5 max-w-[27em]">
            A renovation, construction and repair company handling everything from small fixes to full builds — bringing all the equipment and labour ourselves.
          </p>
          <p className="footer-tag">
            For the love of building.
          </p>
        </div>

        {/* Column 2: Navigation (1fr / 3-4 cols) */}
        <nav aria-label="Footer" className="md:col-span-3 lg:col-span-3">
          <p className="footer-lab">Navigation</p>
          <ul className="grid gap-4 list-none p-0 m-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={getNavHref(item.href)}
                  className="text-[17px] text-[#f3ece1] hover:text-[#f5a21b] transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: Contact (1fr / 3-4 cols) */}
        <div className="md:col-span-3 lg:col-span-4">
          <p className="footer-lab">Contact</p>
          <div>

            <p className="text-[17px] mb-2">
              <a
                href="tel:+60179585418"
                className="text-[#f3ece1] hover:text-[#f5a21b] transition-colors duration-300 font-medium"
              >
                Phone: {company.phone}
              </a>
            </p>
            <p className="text-[17px] mb-2">
              <a
                href="mailto:myndeco@gmail.com"
                className="text-[#f3ece1] hover:text-[#f5a21b] transition-colors duration-300 font-medium"
              >
                Email: myndeco@gmail.com
              </a>
            </p>
            <p className="text-[17px] mb-2.5">
              <a
                href="https://www.facebook.com/myndecoenterprise/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f3ece1] hover:text-[#f5a21b] transition-colors duration-300 font-medium"
              >
                Facebook
              </a>
            </p>
            <p className="text-[15px] leading-relaxed text-[#b9ae9f] mb-3.5">
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5a21b] transition-colors duration-300"
              >
                Lot 16613-2, Lorong C6, Kampung Pandan, 55100 Kuala Lumpur
              </a>
            </p>
            <p className="text-base text-[#b9ae9f] m-0">
              WhatsApp or call. Hours are above.
            </p>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1240px] mx-auto mt-12 sm:mt-14 pt-6 border-t border-[rgba(255,255,255,0.13)] text-sm text-[#b9ae9f]">
        © 2026 MYN Deco &amp; Enterprise (SSM 002170620-T) · CIDB G2 Reg. 0120170314-WP185887
      </div>
    </footer>
  );
}

export default Footer;
