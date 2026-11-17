import { useEffect } from 'react';
import { ArrowLeft, Shield, Wrench, Sparkles, Camera, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { MobileBottomBar } from '@/components/MobileBottomBar';
import { crewPage } from '@/content/about';

const tradeDisciplines = [
  {
    trade: 'Carpentry & Architectural Joinery',
    image: 'https://images.pexels.com/photos/5691502/pexels-photo-5691502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Carpenter installing door and hardware',
    focus: 'Doors, custom cabinetry, acoustic timber panelling, and structural timber framing.',
    equipment: 'Precision miter saws, pneumatic nailers, track saws, laser levels.',
  },
  {
    trade: 'Electrical & Power Systems',
    image: 'https://images.pexels.com/photos/3614763/pexels-photo-3614763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Electrician inspecting distribution board wiring',
    focus: 'Distribution board upgrades, concealed conduit routing, 3-phase wiring, and fault detection.',
    equipment: 'Insulation testers, digital multimeters, cable tracers, dedicated isolators.',
  },
  {
    trade: 'Roofing & Structural Steel',
    image: 'https://images.pexels.com/photos/34524716/pexels-photo-34524716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Roofing specialists installing structural underlayment',
    focus: 'Truss replacement, weatherproofing membranes, slate/tile roofing, and Colorbond gutters.',
    equipment: 'Fall-arrest safety harnesses, steel cutters, seam sealers, boom access.',
  },
  {
    trade: 'Plumbing & Concealed Pipework',
    image: 'https://images.pexels.com/photos/19866415/pexels-photo-19866415.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Plumbing and leak detection work in progress',
    focus: 'Leak isolation, pressure testing, PVC/PPR hot-water line replacement, and drainage systems.',
    equipment: 'Acoustic pipe detectors, hydrostatic pressure pumps, thermal cameras.',
  },
  {
    trade: 'Masonry, Tiling & Waterproofing',
    image: 'https://images.pexels.com/photos/5691515/pexels-photo-5691515.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Tiling and surface alignment work',
    focus: 'Hollow tile remediation, PU chemical injection waterproofing, slab repair, and epoxy regrouting.',
    equipment: 'High-pressure injection pumps, wet tile cutters, precision suction clamps.',
  },
  {
    trade: 'Surface Preparation & Architectural Painting',
    image: 'https://images.pexels.com/photos/6764270/pexels-photo-6764270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Painter applying smooth wall coating',
    focus: 'Multi-coat interior wall repaints, exterior weather shields, elastomeric crack repair, and spray finishing.',
    equipment: 'Airless paint sprayers, high-pressure washers, dustless sanders.',
  },
];

const crewPrinciples = [
  {
    icon: Shield,
    title: 'Zero Outsourcing',
    desc: 'We do not subcontract core trades to unknown third parties. The people on your site answer directly to our lead coordinator.',
  },
  {
    icon: Wrench,
    title: 'Commercial-Grade Equipment',
    desc: 'Our vans arrive loaded with high-specification tools, scaffolding, and safety gear to execute each trade cleanly and safely.',
  },
  {
    icon: Sparkles,
    title: 'Respect & Fair Practice',
    desc: 'Good building starts with valuing our craftspeople. Proper safety equipment, fair compensation, and honest pride of workmanship on every job.',
  },
];

export function OurCrewPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 text-ink-900 flex flex-col">
      <Header currentPath="/our-crew" />

      <main className="flex-grow pt-28 lg:pt-36">
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-cream-50 pb-16 lg:pb-24 border-b border-cream-200">
          {/* Subtle blueprint grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #2B2B2B 1px, transparent 1px), linear-gradient(to bottom, #2B2B2B 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="section-container relative">
            {/* Back to Home Link */}
            <div className="mb-8">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-xs font-semibold text-ink-600 hover:text-marigold-600 transition-colors uppercase tracking-wider"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </a>
            </div>

            <div className="max-w-3xl">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-ink-900">
                {crewPage.heading}
              </h1>
              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-ink-600 text-pretty">
                {crewPage.body}
              </p>
            </div>
          </div>
        </section>

        {/* Trade Disciplines Grid — Ready for Profiles & Photography */}
        <section className="py-20 lg:py-28 bg-cream-100/70 border-b border-cream-300/60">
          <div className="section-container">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 tracking-tight">
                Our Trade Teams On Site
              </h2>
              <p className="mt-3 text-sm sm:text-base text-ink-600 leading-relaxed">
                Every trade is represented in-house. Below are the key specialist divisions dispatched to projects across our service area.
              </p>
            </div>

            {/* Profile & Photography Grid */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {tradeDisciplines.map((item) => (
                <div
                  key={item.trade}
                  className="group rounded-3xl bg-cream-50 border border-cream-300 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/5 flex flex-col"
                >
                  {/* Photo Slot */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-cream-200">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-cream-50 text-xs">
                      <span className="font-semibold bg-ink-900/60 backdrop-blur-md px-3 py-1 rounded-full">
                        In-House Crew
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink-900 leading-snug">
                        {item.trade}
                      </h3>
                      <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                        {item.focus}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-ink-900/6">
                      <p className="text-xs font-semibold text-ink-500 uppercase tracking-wider mb-1">
                        Core Gear &amp; Methods:
                      </p>
                      <p className="text-xs text-ink-700 leading-relaxed">
                        {item.equipment}
                      </p>

                      {/* Ready for Profile Card Slot */}
                      <div className="mt-4 rounded-xl border border-dashed border-cream-300 bg-cream-100/60 p-3 text-center">
                        <span className="text-[11px] font-medium text-ink-500 flex items-center justify-center gap-1.5">
                          <Camera className="h-3.5 w-3.5 text-marigold-600" />
                          Individual crew portraits to be added
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Crew Standards & Values */}
        <section className="py-20 lg:py-28 bg-cream-50">
          <div className="section-container">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 tracking-tight">
                Standards Every Crew Member Upholds
              </h2>
              <p className="mt-3 text-sm sm:text-base text-ink-600 leading-relaxed">
                Consistency across jobs is no accident. We operate by three strict principles on every site we enter.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {crewPrinciples.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="rounded-3xl bg-cream-100 border border-ink-900/6 p-8 shadow-xs"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-marigold-100 text-marigold-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section — Same Site Style */}
        <ContactSection />
      </main>

      <Footer currentPath="/our-crew" />
      <MobileBottomBar />
    </div>
  );
}


export default OurCrewPage;
