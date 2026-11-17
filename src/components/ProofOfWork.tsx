import { useState } from 'react';
import { ArrowRight, X, MessageCircle, Info, CheckCircle2 } from 'lucide-react';
import { company } from '@/content/site';

interface MajorProject {
  id: string;
  title: string;
  category: string;
  desc: string;
  afterImg: string;
  beforeImg: string;
  scale: string;
  location: string;
  scope: string[];
  summary: string;
}

interface SmallJob {
  id: string;
  title: string;
  category: string;
  price: string;
  desc: string;
  img: string;
  scope: string[];
  turnaround: string;
}

const majorProjects: MajorProject[] = [
  {
    id: 'office-renovation',
    title: 'Commercial Office Renovation',
    category: 'Renovation',
    desc: 'Complete corporate workspace overhaul with acoustic slatted timber partitions, executive meeting suites, open workstations, and ambient architectural LED lighting.',
    afterImg: 'https://images.pexels.com/photos/5505931/pexels-photo-5505931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    beforeImg: 'https://images.pexels.com/photos/14840813/pexels-photo-14840813.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    scale: 'Commercial Suite · 4,200 sq.ft',
    location: 'Kuala Lumpur',
    scope: [
      'Partition wall framing and acoustic ceiling baffles',
      'High-traffic commercial vinyl plank flooring',
      'HVAC distribution and insulated ventilation trunking',
      'Dedicated server electrical routing and ambient warm LED fixtures',
      'Custom reception counter joinery and acoustic slat panelling',
    ],
    summary: 'Turnkey renovation delivered on a phased schedule to ensure minimal operational disruption to adjacent business operations.',
  },
  {
    id: 'full-house-construction',
    title: 'Full House Ground-Up Construction',
    category: 'Construction',
    desc: 'Ground-up residential build including reinforced concrete foundation, steel structural columns, exterior masonry, and multi-tier architectural framing.',
    afterImg: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    beforeImg: 'https://images.pexels.com/photos/31197870/pexels-photo-31197870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    scale: 'New Residential Build · 3-Storey',
    location: 'Petaling Jaya',
    scope: [
      'Foundation groundworks, soil testing, and piling',
      'Reinforced concrete framework, columns, and floor slabs',
      'Thermal perimeter masonry and acoustic insulation',
      'Complete concealed plumbing, drainage, and 3-phase wiring',
      'Architectural glazing, perimeter waterproofing, and roof trusses',
    ],
    summary: 'Engineered and constructed by our permanent crew with comprehensive milestone inspections and full structural warranty sign-off.',
  },
  {
    id: 'roof-replacement',
    title: 'Full Building Roof Replacement',
    category: 'Roofing',
    desc: 'Complete structural tear-off of aged timber trusses, replaced with treated light-gauge steel framing, heavy-duty underlayment, and interlocking slate tiles.',
    afterImg: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    beforeImg: 'https://images.pexels.com/photos/34524716/pexels-photo-34524716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    scale: 'Full Roof Envelope · Commercial & Residential',
    location: 'Shah Alam',
    scope: [
      'Removal of decayed timber rafters and weathered tiles',
      'Light-gauge anti-corrosion structural steel truss system',
      'High-performance breathable waterproof radiant barrier',
      'Colorbond valley flashings, eaves, and seamless downpipes',
      'Thermal ceiling blanket insulation for heat reduction',
    ],
    summary: 'Restored absolute watertight integrity with enhanced thermal reflection, tested under severe tropical downpours.',
  },
];

const smallJobs: SmallJob[] = [
  {
    id: 'plumbing-repairs',
    title: 'Plumbing Repairs & Pipework',
    category: 'Plumbing',
    price: 'From RM 150',
    desc: 'Leak detection, concealed pipe repair, pressure valve replacements, and rapid drain unclogging.',
    img: 'https://images.pexels.com/photos/19866415/pexels-photo-19866415.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    scope: [
      'Acoustic leak isolation and water pressure testing',
      'Damaged PVC / PPR pipe replacement',
      'Angle valve and fitting renewal',
      'Full drain flow clearance and watertight check',
    ],
    turnaround: 'Same-day or next-day dispatch',
  },
  {
    id: 'water-leakage',
    title: 'Water Leakage & Waterproofing',
    category: 'Waterproofing',
    price: 'From RM 280',
    desc: 'Polyurethane chemical grouting, concrete slab injection, and perimeter sealant reinstatement.',
    img: 'https://images.pexels.com/photos/32998547/pexels-photo-32998547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    scope: [
      'Thermal moisture detection on slabs and joints',
      'High-pressure PU foam chemical injection',
      'Perimeter silicone sealant replacement',
      'Non-invasive repair with zero tile hacking',
    ],
    turnaround: '1-2 business days',
  },
  {
    id: 'electrical-troubleshooting',
    title: 'Electrical Wiring & Troubleshooting',
    category: 'Electrical',
    price: 'From RM 180',
    desc: 'Tripping circuit diagnosis, distribution board checks, socket replacements, and wiring fixes.',
    img: 'https://images.pexels.com/photos/3614763/pexels-photo-3614763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    scope: [
      'Circuit breaker and RCCB trip diagnosis',
      'Earth loop and short circuit isolation',
      'Damaged socket and isolator replacement',
      'Safe circuit rewiring by certified electricians',
    ],
    turnaround: 'Same-day emergency support',
  },
  {
    id: 'door-lock-repairs',
    title: 'Door & Lock Repairs',
    category: 'Carpentry',
    price: 'From RM 120',
    desc: 'Door realignment, mortise lock replacement, hinge adjustments, and hardware repair.',
    img: 'https://images.pexels.com/photos/5691502/pexels-photo-5691502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    scope: [
      'Door frame rebate planning and hinge shimming',
      'Sagging door realignment for smooth closure',
      'Mortise lock and cylinder replacement',
      'Handle, strike plate, and deadbolt fitting',
    ],
    turnaround: '1-2 business days',
  },
  {
    id: 'tap-pipe-replacement',
    title: 'Tap & Mixer Replacement',
    category: 'Plumbing',
    price: 'From RM 140',
    desc: 'Supply and installation of kitchen mixer taps, basin faucets, angle valves, and flexi hoses.',
    img: 'https://images.pexels.com/photos/34938442/pexels-photo-34938442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    scope: [
      'Old corroded fixture removal',
      'Teflon high-pressure thread sealing',
      'Heavy-duty braided flexi hose connection',
      'Full water pressure and drip inspection',
    ],
    turnaround: 'Same-day dispatch',
  },
  {
    id: 'room-painting',
    title: 'Room Accent & Touch-up Painting',
    category: 'Painting',
    price: 'From RM 380',
    desc: 'Single room wall repainting, plaster crack patching, baseboard edging, and clean finishes.',
    img: 'https://images.pexels.com/photos/6764270/pexels-photo-6764270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    scope: [
      'Wall sanding and plaster crack patching',
      'Full masking of floors, switches, and trim',
      'One coat sealer primer on repaired areas',
      'Two coats of durable low-VOC interior paint',
    ],
    turnaround: 'Completed in 1 day',
  },
  {
    id: 'tile-repair',
    title: 'Floor Tile Repair & Regrouting',
    category: 'Masonry',
    price: 'From RM 320',
    desc: 'Hollow or popped floor tile replacement, epoxy mold-resistant regrouting, and flush leveling.',
    img: 'https://images.pexels.com/photos/5691515/pexels-photo-5691515.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    scope: [
      'Careful extraction of hollow/damaged tiles',
      'Mortar bed preparation and leveling',
      'Fresh adhesive tile setting flush with floor',
      'Anti-fungal epoxy grout joint application',
    ],
    turnaround: '1-2 business days',
  },
  {
    id: 'water-heater',
    title: 'Water Heater Install & Safety Test',
    category: 'Electrical',
    price: 'From RM 220',
    desc: 'Instant water heater unit mounting, dedicated 20A isolator switch check, and plumbing hookup.',
    img: 'https://images.pexels.com/photos/14840813/pexels-photo-14840813.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    scope: [
      'Wall mounting with heavy-duty anchors',
      'Dedicated 20A switch and RCCB test',
      'Water inlet connection and pressure filter setup',
      'Full thermal run test and earth continuity check',
    ],
    turnaround: 'Same-day dispatch',
  },
];

function MajorCard({
  project,
  onOpenDetails,
}: {
  project: MajorProject;
  onOpenDetails: () => void;
}) {
  const [view, setView] = useState<'before' | 'after'>('after');

  const toggle = () => {
    setView((v) => (v === 'before' ? 'after' : 'before'));
  };

  return (
    <article className="group relative rounded-2xl bg-cream-50 overflow-hidden border border-cream-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/5 flex flex-col justify-between w-full">
      <div>
        {/* 4:3 Image Frame with Before/After Toggle */}
        <div
          className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200 cursor-pointer select-none"
          onClick={toggle}
        >
          <img
            src={project.beforeImg}
            alt={`${project.title} before`}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-600 ${
              view === 'before' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          />
          <img
            src={project.afterImg}
            alt={`${project.title} after`}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-600 ${
              view === 'after' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          />

          {/* Category tag */}
          <span className="absolute top-2.5 left-2.5 z-20 rounded-full bg-cream-50/95 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-ink-900 shadow-sm pointer-events-none backdrop-blur-sm">
            {project.category}
          </span>

          {/* BEFORE / AFTER switch pill */}
          <div
            className="absolute top-2.5 right-2.5 z-20 flex rounded-full bg-ink-900/75 p-0.5 backdrop-blur-md shadow-md"
            onClick={(e) => e.stopPropagation()}
            role="group"
            aria-label="Toggle before and after"
          >
            <button
              type="button"
              onClick={() => setView('before')}
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider transition-all duration-200 ${
                view === 'before'
                  ? 'bg-cream-50 text-ink-900 shadow-sm'
                  : 'text-cream-50/80 hover:text-white'
              }`}
            >
              BEFORE
            </button>
            <button
              type="button"
              onClick={() => setView('after')}
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider transition-all duration-200 ${
                view === 'after'
                  ? 'bg-cream-50 text-ink-900 shadow-sm'
                  : 'text-cream-50/80 hover:text-white'
              }`}
            >
              AFTER
            </button>
          </div>

          {/* Hint pill */}
          <div className="absolute bottom-2.5 left-2.5 z-20 rounded-full bg-ink-900/65 px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase text-cream-50/90 pointer-events-none backdrop-blur-sm">
            Tap to toggle
          </div>
        </div>

        {/* Body — NO PRICES on major projects */}
        <div className="p-4 sm:p-4.5">
          <h4 className="font-display text-base sm:text-lg font-semibold text-ink-900 leading-snug">
            {project.title}
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-ink-600 leading-relaxed line-clamp-2">
            {project.desc}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 sm:px-4.5 sm:pb-4.5 pt-2.5 border-t border-ink-900/6 flex items-center justify-between">
        <span className="rounded-full bg-sage-100 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-sage-700">
          {project.scale}
        </span>
        <button
          type="button"
          onClick={onOpenDetails}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-ink-900 transition-colors hover:text-marigold-600"
        >
          <span>Scope</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </article>
  );
}

function SmallJobCard({
  job,
  onOpenDetails,
}: {
  job: SmallJob;
  onOpenDetails: () => void;
}) {
  return (
    <article
      onClick={onOpenDetails}
      className="group relative rounded-2xl bg-cream-50 overflow-hidden border border-cream-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/5 cursor-pointer flex flex-col w-full"
    >
      {/* 1:1 Square Frame with Circular "From RM ___" Price Badge */}
      <div className="relative aspect-square w-full overflow-hidden bg-cream-200">
        <img
          src={job.img}
          alt={job.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
        />

        {/* Circular Price Badge showing "From RM ___" */}
        <div className="absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 z-20 flex h-12 w-12 sm:h-13 sm:w-13 flex-col items-center justify-center rounded-full bg-marigold-500 text-center text-ink-900 shadow-md ring-2.5 ring-cream-50/95 transition-transform duration-300 group-hover:scale-108 pointer-events-none">
          <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold opacity-85 leading-none">
            From
          </span>
          <span className="text-[11px] sm:text-xs font-extrabold leading-tight">
            {job.price.replace('From ', '')}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between">
        <div>
          <h4 className="font-display text-xs sm:text-sm font-semibold text-ink-900 leading-snug">
            {job.title}
          </h4>
          <p className="mt-1 text-[11px] sm:text-xs text-ink-600 leading-relaxed line-clamp-2">
            {job.desc}
          </p>
        </div>

        <div className="mt-3 pt-2 flex items-center justify-between border-t border-ink-900/6">
          <span className="rounded-full bg-sage-100 px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold text-sage-700">
            {job.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-ink-900 transition-colors group-hover:text-marigold-600">
            Details &rarr;
          </span>
        </div>
      </div>
    </article>
  );
}

export function ProofOfWork() {
  const [activeModal, setActiveModal] = useState<
    | { type: 'major'; project: MajorProject }
    | { type: 'small'; job: SmallJob }
    | null
  >(null);

  const cleanPhone = company.whatsapp.replace(/[^0-9]/g, '');

  return (
    <section id="our-work" className="relative bg-cream-50 pt-10 pb-14 lg:pt-12 lg:pb-16 scroll-mt-16">
      <div id="proof-of-work" className="absolute -top-16 left-0" aria-hidden="true" />
      
      <div className="section-container">
        {/* Section Headline */}
        <div className="max-w-[1040px] mx-auto mb-8 sm:mb-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] text-ink-900 tracking-tight">
            From a leaking bathroom to a full house.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ink-600 leading-relaxed max-w-2xl">
            Every job is carried out with the skill and care it deserves.
          </p>
        </div>

        {/* Unified Two-Column Galleries Container — Centered & Width Constrained */}
        <div className="max-w-[1040px] mx-auto bg-cream-100 border border-cream-300 rounded-3xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* LEFT GALLERY: Major Projects — Centered */}
          <div className="flex flex-col items-center">
            <div className="mb-6 text-center max-w-sm mx-auto">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 tracking-tight">
                Major Projects
              </h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                Full builds, renovations and larger works, from first plans to final handover.
              </p>
            </div>

            {/* Scrollable Major Projects Column (1 Card per row) */}
            <div className="w-full lg:max-h-[960px] lg:overflow-y-auto lg:pr-2 scrollbar-thin">
              <div className="space-y-5 max-w-[430px] mx-auto">
                {majorProjects.map((p) => (
                  <MajorCard
                    key={p.id}
                    project={p}
                    onOpenDetails={() => setActiveModal({ type: 'major', project: p })}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT GALLERY: Everyday Jobs — Centered */}
          <div className="flex flex-col items-center lg:border-l lg:border-dashed lg:border-cream-300 lg:pl-10">
            <div className="mb-6 text-center max-w-sm mx-auto">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 tracking-tight">
                Every job, done with care.
              </h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                Repairs, replacements and maintenance, handled with the same care as our biggest builds.
              </p>
            </div>

            {/* Scrollable Everyday Jobs 2-Column Grid */}
            <div className="w-full lg:max-h-[960px] lg:overflow-y-auto lg:pr-2 scrollbar-thin">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-[430px] mx-auto">
                {smallJobs.map((j) => (
                  <SmallJobCard
                    key={j.id}
                    job={j}
                    onOpenDetails={() => setActiveModal({ type: 'small', job: j })}
                  />
                ))}
              </div>
            </div>

            {/* Reassuring Pricing Note below Everyday Jobs */}
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-cream-300 bg-cream-50/90 p-4 shadow-2xs max-w-[430px] mx-auto text-left">
              <Info className="h-4 w-4 shrink-0 text-marigold-600 mt-0.5" />
              <p className="text-xs leading-relaxed text-ink-600">
                Prices shown for everyday jobs are approximate starting points. Once we understand the work, our team will share a clear quote.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-cream-50 p-6 sm:p-8 shadow-2xl border border-cream-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-cream-200/80 text-ink-800 transition-colors hover:bg-cream-300"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {activeModal.type === 'major' ? (
              <div>
                <span className="rounded-full bg-sage-100 px-3 py-1 text-xs font-semibold text-sage-700">
                  {activeModal.project.category} · Major Work
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-ink-900">
                  {activeModal.project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-500">
                  {activeModal.project.scale} · {activeModal.project.location}
                </p>

                <div className="mt-5 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-cream-200">
                  <img
                    src={activeModal.project.afterImg}
                    alt={activeModal.project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400">
                      Project Overview
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700">
                      {activeModal.project.desc}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400">
                      Key Scope Completed
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {activeModal.project.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-ink-700 leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-marigold-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-cream-300 bg-cream-100 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-blueprint-600">
                      Custom Project Quotation
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-600">
                      Every major build or renovation is quoted following on-site measurements and review of specifications. All labor, equipment, and materials are coordinated by our single in-house team.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                      `Hi! I would like to inquire about a project similar to: ${activeModal.project.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-marigold-500 px-7 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-marigold-400"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="w-full sm:w-auto rounded-full border border-ink-900/15 px-6 py-3 text-sm font-semibold text-ink-800 hover:bg-cream-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="rounded-full bg-sage-100 px-3 py-1 text-xs font-semibold text-sage-700">
                  {activeModal.job.category} · Everyday Repair
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-ink-900">
                  {activeModal.job.title}
                </h3>
                <p className="mt-1 font-display text-xl font-bold text-marigold-700">
                  {activeModal.job.price}
                </p>

                <div className="mt-5 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-cream-200">
                  <img
                    src={activeModal.job.img}
                    alt={activeModal.job.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400">
                      Service Scope
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700">
                      {activeModal.job.desc}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400">
                      Included Work
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {activeModal.job.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-ink-700 leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-marigold-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-cream-300 bg-cream-100 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-blueprint-600">
                      Transparent Starting Rate
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-600">
                      Starting rates include inspection and standard repair labor. Final quote is confirmed before any work begins, backed by our 30-day workmanship guarantee.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                      `Hi! I'd like to book or inquire about: ${activeModal.job.title} (${activeModal.job.price}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-marigold-500 px-7 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-marigold-400"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Book via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="w-full sm:w-auto rounded-full border border-ink-900/15 px-6 py-3 text-sm font-semibold text-ink-800 hover:bg-cream-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}


export default ProofOfWork;
