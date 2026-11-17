import { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { company } from '@/content/site';

type PartKey = 'roof' | 'inside' | 'kitchen' | 'doors' | 'bath' | 'elec' | 'out' | 'base' | 'non';

interface PartConfig {
  color: string;
  pastel: string;
  label: string;
}

const PARTS: Record<PartKey, PartConfig> = {
  roof: { color: '#A9573F', pastel: '#EBCDC2', label: 'Roof' },
  inside: { color: '#E58F7F', pastel: '#F7DDD6', label: 'Walls, floors and ceilings' },
  kitchen: { color: '#D9A25F', pastel: '#F4E3C8', label: 'Kitchen' },
  doors: { color: '#4C8FCC', pastel: '#D3E4F4', label: 'Doors and windows' },
  bath: { color: '#2FA08A', pastel: '#CFEAE3', label: 'Bathroom' },
  elec: { color: '#F2C230', pastel: '#FBF1C2', label: 'Electrical and climate' },
  out: { color: '#5E9E5A', pastel: '#D6E9D2', label: 'Outdoors' },
  base: { color: '#7B8794', pastel: '#DEE2E7', label: 'Structure and foundation' },
  non: { color: '#3F6FA8', pastel: '#D1DEE9', label: 'Offices, shops and commercial sites' },
};

const PINS: { id: PartKey; x: number; y: number; label: string; num: number }[] = [
  { id: 'roof', x: 200, y: 92, label: 'Roof', num: 1 },
  { id: 'inside', x: 130, y: 150, label: 'Walls, floors', num: 2 },
  { id: 'kitchen', x: 135, y: 205, label: 'Kitchen', num: 3 },
  { id: 'doors', x: 200, y: 222, label: 'Doors, windows', num: 4 },
  { id: 'bath', x: 262, y: 200, label: 'Bathroom', num: 5 },
  { id: 'elec', x: 326, y: 160, label: 'Electrical, AC', num: 6 },
  { id: 'out', x: 372, y: 222, label: 'Outdoors', num: 7 },
  { id: 'base', x: 200, y: 272, label: 'Structure', num: 8 },
];

interface ServiceItem {
  track: 'q' | 'l' | 'b';
  subgroup: string;
  title: string;
  parts: PartKey[];
}

const SERVICES: ServiceItem[] = [
  // A quick job
  { track: 'q', subgroup: 'Fix and replace', title: 'Heater installation', parts: ['elec'] },
  { track: 'q', subgroup: 'Fix and replace', title: 'Tile replacement and changes', parts: ['inside', 'bath', 'kitchen'] },
  { track: 'q', subgroup: 'Fix and replace', title: 'Window pane installation', parts: ['doors'] },
  { track: 'q', subgroup: 'Fix and replace', title: 'Door replacement', parts: ['doors'] },
  { track: 'q', subgroup: 'Fix and replace', title: 'Door and lock repairs', parts: ['doors'] },
  { track: 'q', subgroup: 'Fix and replace', title: 'Tap and pipe replacement', parts: ['bath', 'kitchen'] },
  { track: 'q', subgroup: 'Fix and replace', title: 'Ceiling repairs', parts: ['inside'] },
  { track: 'q', subgroup: 'Fix and replace', title: 'General handyman maintenance', parts: ['inside', 'kitchen', 'doors', 'bath', 'elec', 'out'] },
  { track: 'q', subgroup: 'Freshen up', title: 'Painting (rooms and minor jobs)', parts: ['inside'] },
  { track: 'q', subgroup: 'Freshen up', title: 'Wallpaper installation', parts: ['inside'] },
  { track: 'q', subgroup: 'Freshen up', title: 'LED lighting installation', parts: ['elec', 'inside'] },

  // Needs a look first
  { track: 'l', subgroup: 'Water and electrics', title: 'Bathroom leak repair', parts: ['bath'] },
  { track: 'l', subgroup: 'Water and electrics', title: 'Concealed leak detection', parts: ['bath', 'kitchen', 'inside'] },
  { track: 'l', subgroup: 'Water and electrics', title: 'Plumbing repairs', parts: ['bath', 'kitchen'] },
  { track: 'l', subgroup: 'Water and electrics', title: 'Electrical fault finding', parts: ['elec'] },
  { track: 'l', subgroup: 'Water and electrics', title: 'Electrical installation and repairs', parts: ['elec'] },
  { track: 'l', subgroup: 'Climate and power', title: 'AC installation', parts: ['elec'] },
  { track: 'l', subgroup: 'Climate and power', title: 'EV charger installation', parts: ['elec', 'out'] },
  { track: 'l', subgroup: 'Roofs and outdoors', title: 'Roof replacement', parts: ['roof'] },
  { track: 'l', subgroup: 'Roofs and outdoors', title: 'Custom roofs and pergolas', parts: ['roof'] },
  { track: 'l', subgroup: 'Roofs and outdoors', title: 'Shed installation or replacement', parts: ['out'] },
  { track: 'l', subgroup: 'Building safety', title: 'Fire hydrant repair', parts: ['out', 'non'] },

  // A big build
  { track: 'b', subgroup: 'Build', title: 'Full home construction, from a blank site', parts: ['base', 'roof'] },
  { track: 'b', subgroup: 'Build', title: 'Pillar and structural construction', parts: ['base'] },
  { track: 'b', subgroup: 'Build', title: 'Extensions and structural additions', parts: ['base', 'roof'] },
  { track: 'b', subgroup: 'Build', title: 'Construction supporting industrial machinery', parts: ['non'] },
  { track: 'b', subgroup: 'Renovate', title: 'Major house renovation', parts: ['inside', 'kitchen', 'bath', 'doors', 'roof'] },
  { track: 'b', subgroup: 'Renovate', title: 'Apartment renovation', parts: ['inside', 'kitchen', 'bath', 'doors'] },
  { track: 'b', subgroup: 'Renovate', title: 'Kitchen cabinets and renovation', parts: ['kitchen'] },
  { track: 'b', subgroup: 'Renovate', title: 'Bathroom renovation', parts: ['bath'] },
  { track: 'b', subgroup: 'Renovate', title: 'Wall renovation and removal', parts: ['inside'] },
  { track: 'b', subgroup: 'Renovate', title: 'Flooring overhaul', parts: ['inside'] },
  { track: 'b', subgroup: 'Renovate', title: 'Office renovation', parts: ['non'] },
  { track: 'b', subgroup: 'Large painting and signs', title: 'Major building exterior painting', parts: ['non'] },
  { track: 'b', subgroup: 'Large painting and signs', title: 'Billboards, signboards and stickers', parts: ['non'] },
];

const COMMERCIAL_OFFERINGS = [
  { title: 'Office renovation', desc: 'A workspace your team will actually want to walk into.', featured: true },
  { title: 'Major building painting', desc: 'A fresh, durable face for the whole building.', featured: false },
  { title: 'Industrial groundwork', desc: 'We build the solid base your machines stand on.', featured: false },
  { title: 'Signs and billboards', desc: 'Signs that make your shopfront impossible to miss.', featured: false },
  { title: 'Fire hydrant repair', desc: 'Critical safety equipment kept in verified working order.', featured: false },
];

export function Capabilities() {
  const [selectedPart, setSelectedPart] = useState<PartKey | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const cleanWhatsApp = company.whatsapp.replace(/[^0-9]/g, '');

  const togglePart = (part: PartKey) => {
    setHasInteracted(true);
    setSelectedPart((prev) => (prev === part ? null : part));
  };

  const resetSelection = () => {
    setSelectedPart(null);
  };

  // Allow Esc key to reset selection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') resetSelection();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeColor = selectedPart ? PARTS[selectedPart].color : '#55625A';

  return (
    <section id="what-we-do" className="bg-cream-100 pt-16 pb-12 lg:pt-20 lg:pb-14 scroll-mt-16">
      <div className="section-container">
        
        {/* Constrained Balanced Wrapper */}
        <div className="max-w-[1040px] mx-auto">

          {/* Single Headline */}
          <div className="mb-10 sm:mb-12 max-w-3xl">
            <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.15] text-ink-900 tracking-tight text-balance">
              Pick a part of the house. See what we build and fix.
            </h2>
          </div>
          
          {/* Top Interactive Widget: House SVG + Detail Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            {/* Left: House Diagram Card */}
            <div className="rounded-2xl border border-cream-300 bg-cream-50 p-4 sm:p-5 shadow-xs flex flex-col justify-between">
              
              <div className="relative w-full aspect-[440/300] max-w-[440px] mx-auto select-none">
                
                {/* SVG House Illustration */}
                <svg
                  viewBox="0 0 440 300"
                  role="img"
                  aria-label="Interactive house diagram with eight selectable zones"
                  className="w-full h-full block"
                  stroke="#1A1A1A"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                >
                  {/* 8. Structure and Foundation */}
                  <g
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => togglePart('base')}
                  >
                    <rect
                      x="90"
                      y="250"
                      width="220"
                      height="24"
                      fill={selectedPart === 'base' ? PARTS.base.color : PARTS.base.pastel}
                      strokeDasharray="4 3"
                      className="transition-colors duration-200"
                    />
                  </g>

                  {/* 2. Inside: Walls, floors and ceilings */}
                  <g
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => togglePart('inside')}
                  >
                    <rect
                      x="90"
                      y="130"
                      width="220"
                      height="120"
                      fill={selectedPart === 'inside' ? PARTS.inside.color : PARTS.inside.pastel}
                      className="transition-colors duration-200"
                    />
                  </g>

                  {/* Interior Floor & Wall Dividing Wireframe Lines */}
                  <g pointerEvents="none">
                    <line x1="90" y1="152" x2="310" y2="152" stroke="#1A1A1A" strokeWidth="1.5" />
                    <line x1="200" y1="152" x2="200" y2="205" stroke="#1A1A1A" strokeWidth="1.5" />
                  </g>

                  {/* 1. Roof & Chimney */}
                  <g
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => togglePart('roof')}
                  >
                    <polygon
                      points="70,130 200,62 330,130"
                      fill={selectedPart === 'roof' ? PARTS.roof.color : PARTS.roof.pastel}
                      className="transition-colors duration-200"
                    />
                    <rect
                      x="250"
                      y="76"
                      width="22"
                      height="34"
                      fill={selectedPart === 'roof' ? PARTS.roof.color : PARTS.roof.pastel}
                      className="transition-colors duration-200"
                    />
                  </g>

                  {/* 3. Kitchen */}
                  <g
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => togglePart('kitchen')}
                  >
                    <rect
                      x="100"
                      y="215"
                      width="70"
                      height="35"
                      fill={selectedPart === 'kitchen' ? PARTS.kitchen.color : PARTS.kitchen.pastel}
                      className="transition-colors duration-200"
                    />
                    <rect
                      x="104"
                      y="160"
                      width="62"
                      height="20"
                      fill={selectedPart === 'kitchen' ? PARTS.kitchen.color : PARTS.kitchen.pastel}
                      className="transition-colors duration-200"
                    />
                  </g>

                  {/* 4. Doors and windows */}
                  <g
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => togglePart('doors')}
                  >
                    <rect
                      x="186"
                      y="205"
                      width="28"
                      height="45"
                      fill={selectedPart === 'doors' ? PARTS.doors.color : PARTS.doors.pastel}
                      className="transition-colors duration-200"
                    />
                    <rect
                      x="232"
                      y="166"
                      width="34"
                      height="22"
                      fill={selectedPart === 'doors' ? PARTS.doors.color : PARTS.doors.pastel}
                      className="transition-colors duration-200"
                    />
                  </g>

                  {/* 5. Bathroom */}
                  <g
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => togglePart('bath')}
                  >
                    <rect
                      x="222"
                      y="226"
                      width="76"
                      height="24"
                      fill={selectedPart === 'bath' ? PARTS.bath.color : PARTS.bath.pastel}
                      className="transition-colors duration-200"
                    />
                  </g>

                  {/* 6. Electrical and climate */}
                  <g
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => togglePart('elec')}
                  >
                    <rect
                      x="316"
                      y="155"
                      width="26"
                      height="16"
                      fill={selectedPart === 'elec' ? PARTS.elec.color : PARTS.elec.pastel}
                      className="transition-colors duration-200"
                    />
                    <circle
                      cx="200"
                      cy="166"
                      r="5"
                      fill={selectedPart === 'elec' ? PARTS.elec.color : PARTS.elec.pastel}
                      className="transition-colors duration-200"
                    />
                    <rect
                      x="176"
                      y="236"
                      width="8"
                      height="8"
                      fill={selectedPart === 'elec' ? PARTS.elec.color : PARTS.elec.pastel}
                      className="transition-colors duration-200"
                    />
                  </g>

                  {/* 7. Outdoors & Shed */}
                  <g
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => togglePart('out')}
                  >
                    <rect
                      x="345"
                      y="215"
                      width="55"
                      height="35"
                      fill={selectedPart === 'out' ? PARTS.out.color : PARTS.out.pastel}
                      className="transition-colors duration-200"
                    />
                    <polygon
                      points="340,215 372,198 405,215"
                      fill={selectedPart === 'out' ? PARTS.out.color : PARTS.out.pastel}
                      className="transition-colors duration-200"
                    />
                  </g>

                  {/* Ground Level Baseline */}
                  <line x1="20" y1="250" x2="90" y2="250" stroke="#1A1A1A" strokeWidth="1.5" />
                  <line x1="310" y1="250" x2="420" y2="250" stroke="#1A1A1A" strokeWidth="1.5" />
                </svg>

                {/* Interactive Numbered Pins */}
                {PINS.map((pin) => {
                  const isSelected = selectedPart === pin.id;
                  const pinColor = PARTS[pin.id].color;

                  return (
                    <button
                      key={pin.id}
                      type="button"
                      onClick={() => togglePart(pin.id)}
                      style={{
                        left: `${(pin.x / 440) * 100}%`,
                        top: `${(pin.y / 300) * 100}%`,
                      }}
                      className="group absolute w-10 h-10 -ml-5 -mt-5 flex items-center justify-center cursor-pointer focus:outline-none z-20"
                    >
                      {/* Circle Number Badge */}
                      <span
                        style={{
                          backgroundColor: isSelected ? pinColor : '#FBF8F4',
                          borderColor: isSelected ? pinColor : '#1A1A1A',
                          color: isSelected ? '#FFFFFF' : '#1A1A1A',
                        }}
                        className="relative flex h-6 w-6 items-center justify-center rounded-full border-[1.5px] text-[11px] font-bold transition-all duration-200 shadow-sm group-hover:scale-115"
                      >
                        {pin.num}
                        {!hasInteracted && !selectedPart && (
                          <span
                            className="absolute -inset-1 rounded-full border border-ink-900/60 animate-ping opacity-75 pointer-events-none"
                            style={{ animationDuration: '2.5s' }}
                          />
                        )}
                      </span>

                      {/* Label badge */}
                      <span className="absolute top-[28px] left-1/2 -translate-x-1/2 rounded bg-cream-50/95 px-1.5 py-0.2 text-[10px] font-semibold text-ink-900 whitespace-nowrap shadow-xs pointer-events-none border border-cream-300/80">
                        {pin.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="mt-3 text-center text-xs text-ink-500">
                Tap any room or numbered pin to explore services.
              </p>
            </div>

            {/* Right: Dynamic Selection Panel */}
            <div className="rounded-2xl border border-cream-300 bg-cream-50 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
              <div>
                {/* Not a house toggle chip */}
                <button
                  type="button"
                  onClick={() => togglePart('non')}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                    selectedPart === 'non'
                      ? 'bg-blueprint-600 text-cream-50 border border-blueprint-600 shadow-xs'
                      : 'border border-cream-300 bg-cream-100/70 text-ink-800 hover:bg-cream-200 hover:border-ink-900/20'
                  }`}
                >
                  Not a house? Offices, shops and sites
                </button>

                {/* Dynamic Content Band */}
                {!selectedPart && (
                  <div className="mt-5 overflow-hidden rounded-xl border border-cream-300 bg-cream-50">
                    <div className="border-t-4 border-ink-500 bg-cream-100 p-4 sm:p-5">
                      <h3 className="font-display text-xl font-medium text-ink-900">
                        Tap a part of the house
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-ink-600 leading-relaxed">
                        See what our in-house crew handles, from the roof down to the foundations.
                      </p>
                    </div>
                    <ul className="divide-y divide-cream-200 bg-cream-50">
                      <li className="px-5 py-2.5 text-xs sm:text-sm text-ink-700">Quick fixes, repairs &amp; replacements</li>
                      <li className="px-5 py-2.5 text-xs sm:text-sm text-ink-700">Waterproofing &amp; electrical inspections</li>
                      <li className="px-5 py-2.5 text-xs sm:text-sm text-ink-700">Complete renovations &amp; structural builds</li>
                    </ul>
                  </div>
                )}

                {selectedPart === 'non' && (
                  <div className="mt-5 overflow-hidden rounded-xl border border-cream-300 bg-cream-50">
                    <div
                      className="border-t-4 p-4 sm:p-5"
                      style={{
                        borderColor: PARTS.non.color,
                        backgroundColor: PARTS.non.pastel,
                      }}
                    >
                      <h3 className="font-display text-xl font-medium text-ink-900">
                        Not a house? We build for business too.
                      </h3>
                      <p className="mt-1 text-xs text-ink-700 leading-relaxed">
                        Offices, shopfronts and industrial sites, built by our own crew with our own equipment.
                      </p>
                    </div>
                    <ul className="divide-y divide-cream-200 bg-cream-50">
                      {COMMERCIAL_OFFERINGS.map((o) => (
                        <li key={o.title} className="px-5 py-2.5">
                          <span className="text-xs font-semibold text-ink-900 block">{o.title}</span>
                          <span className="text-[11px] text-ink-600 block mt-0.5">{o.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedPart && selectedPart !== 'non' && (
                  <div className="mt-5 overflow-hidden rounded-xl border border-cream-300 bg-cream-50 transition-all">
                    {/* Header banner: Color applied ONLY to this first heading */}
                    <div
                      className="border-t-4 p-4 sm:p-5"
                      style={{
                        borderColor: PARTS[selectedPart].color,
                        backgroundColor: PARTS[selectedPart].pastel,
                      }}
                    >
                      <h3 className="font-display text-2xl font-medium text-ink-900">
                        {PARTS[selectedPart].label}
                      </h3>
                    </div>

                    {/* Clean list with NO bullet points and NO 'matching services' text - expanded by 3+ rows */}
                    <ul className="divide-y divide-cream-200 bg-cream-50">
                      {SERVICES.filter((s) => s.parts.includes(selectedPart)).map((s) => (
                        <li
                          key={s.title}
                          className="px-5 py-2.5 text-xs sm:text-sm font-medium text-ink-800 transition-colors hover:text-ink-900 hover:bg-cream-100/60"
                        >
                          {s.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Quick Action Row */}
              <div className="mt-6 pt-4 border-t border-cream-300 flex items-center justify-between gap-3">
                <a
                  href="https://wa.me/60179585418?text=Hi%20MYN%2C%20I%20need%20help%20with%20a%20job."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-xs font-semibold text-cream-50 transition-colors hover:bg-ink-800"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-marigold-400" />
                  <span>WhatsApp us</span>
                </a>

                <a
                  href="#our-work"
                  className="text-xs font-semibold text-ink-800 hover:text-marigold-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>See our work</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


export default Capabilities;
