import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Droplets, Hammer, House, Menu, MessageCircle, Paintbrush, Phone, PlugZap, ShowerHead, Wrench, X, PanelsTopLeft, Layers, MapPin } from 'lucide-react';
import { company } from '@/content/site';
import './repair-home.css';

const services = [
  { name: 'Painting', problem: 'Time for a fresh coat?', detail: 'Interior and exterior repainting, peeling walls and surface preparation.', icon: Paintbrush, group: 'Refresh & replace' },
  { name: 'Roof leaks', problem: 'Water comes in when it rains?', detail: 'Roof leak assessment, damaged roofing and gutter repairs.', icon: House, group: 'Leaks & water' },
  { name: 'Bathroom leaks', problem: 'Bathroom leaking downstairs?', detail: 'Find the source of recurring leaks and assess waterproofing repairs.', icon: Droplets, group: 'Leaks & water' },
  { name: 'Plumbing & blocked drains', problem: 'A leaking pipe or a blocked sink?', detail: 'Leaking taps and pipes, blocked toilets, sinks and drains.', icon: Wrench, group: 'Leaks & water' },
  { name: 'Electrical faults', problem: 'Power keeps tripping?', detail: 'Fault assessment, sockets, switches, lighting and wiring repairs.', icon: PlugZap, group: 'Repairs & faults' },
  { name: 'Water heaters', problem: 'Shower not getting hot?', detail: 'Water-heater faults, leaks, installation and replacement.', icon: ShowerHead, group: 'Repairs & faults' },
  { name: 'Ceiling repairs', problem: 'A stained or damaged ceiling?', detail: 'Ceiling board repairs and replacement, after checking the cause of damage.', icon: Layers, group: 'Refresh & replace' },
  { name: 'Doors & windows', problem: 'Sliding door stuck again?', detail: 'Sliding doors, rollers, hinges, window frames and replacements.', icon: PanelsTopLeft, group: 'Repairs & faults' },
  { name: 'Tiles & carpentry', problem: 'Lifting tiles or damaged cabinets?', detail: 'Tile replacement, flooring repairs, cabinets and door frames.', icon: Hammer, group: 'Refresh & replace' },
];
const filters = ['All services', 'Leaks & water', 'Repairs & faults', 'Refresh & replace'];
const wa = (service = 'a repair or renovation') => `https://wa.me/${company.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi MYN Deco, I need help with ${service}.\nLocation / postcode: \nWhat is happening: \nPreferred timing: \nI can share photos here.`)}`;
const phone = `tel:${company.phone.replace(/[^+\d]/g, '')}`;
function ChatLink({ service, children, className = 'repair-button' }: { service?: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={wa(service)} target="_blank" rel="noopener noreferrer">{children}</a>;
}
export function RepairHome() {
  const [filter, setFilter] = useState('All services');
  const [menu, setMenu] = useState(false);
  const [job, setJob] = useState('Not sure — help me identify it');
  return <div className="repair-site">
    <a className="repair-skip" href="#main">Skip to content</a>
    <div className="repair-top"><div className="repair-wrap"><span><MapPin size={14} /> Kuala Lumpur & Selangor</span><span>Mon–Sat · 8am–6pm</span></div></div>
    <header className="repair-header"><div className="repair-wrap repair-nav">
      <a className="repair-logo" href="/" aria-label="MYN Deco home">MYN<span>DECO.</span><small>REPAIR · RENOVATE · BUILD</small></a>
      <nav className={menu ? 'repair-links is-open' : 'repair-links'} id="repair-navigation" aria-label="Main navigation" onClick={() => setMenu(false)}>
        <a href="#what-we-do">Our services</a><a href="#how-it-works">How it works</a><a href="#our-work">Renovation</a><a href="#contact">Contact</a>
      </nav>
      <ChatLink className="repair-button repair-nav-cta"><MessageCircle size={18} /> WhatsApp us</ChatLink>
      <button className="repair-menu" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} aria-controls="repair-navigation" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
    </div></header>
    <main id="main">
      <section className="repair-hero repair-wrap">
        <div className="repair-hero-copy"><p className="repair-eyebrow">YOUR HOME. OUR HANDS.</p><h1>Small fixes.<br />Fresh starts.<br /><em>One team.</em></h1><p className="repair-intro">Home repairs & renovation in Kuala Lumpur and Selangor. From a leaking bathroom to a fresh coat of paint, tell us what needs doing.</p>
          <div className="repair-actions"><ChatLink><MessageCircle size={19} /> Send us your problem <ArrowRight size={18} /></ChatLink><a className="repair-text-link" href="#what-we-do">Explore services <ArrowRight size={18} /></a></div>
          <p className="repair-caption">A few photos + your postcode is a good place to start.</p>
        </div>
        <div className="repair-hero-art"><img src="https://images.pexels.com/photos/5691502/pexels-photo-5691502.jpeg?auto=compress&cs=tinysrgb&w=1100" alt="Illustrative photograph of a tradesperson fitting a door" fetchPriority="high" /><span className="repair-image-label">Illustrative service photo</span><div className="repair-photo-card"><span className="repair-tool"><Wrench size={25} /></span><div><strong>Fix it. Refresh it.<br />Make it feel like home.</strong><span>MYN Deco Enterprise</span></div></div></div>
      </section>
      <div className="repair-reassurance"><div className="repair-wrap"><span><Check /> Everyday repairs welcome</span><span><Check /> One point of contact</span><span><Check /> Scope agreed before work</span></div></div>
      <section className="repair-section repair-wrap" id="what-we-do">
        <div className="repair-section-head"><div><p className="repair-eyebrow">WHAT NEEDS DOING?</p><h2>Find your problem.<br /><em>We’ll take it from there.</em></h2></div><p>You don’t need to know the technical name.<br />Start with what you can see, hear or feel.</p></div>
        <div className="repair-filters" aria-label="Filter services">{filters.map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div>
        <div className="repair-service-grid">{services.filter(s => filter === 'All services' || filter === s.group).map(s => <article className="repair-service" key={s.name}><s.icon size={27} strokeWidth={1.5} /><h3>{s.name}</h3><p className="repair-problem">{s.problem}</p><p>{s.detail}</p><ChatLink service={s.name} className="repair-service-link">Ask about this <ArrowRight size={18} /></ChatLink></article>)}</div>
        <div className="repair-unsure"><span><strong>Not sure where the leak is coming from?</strong> Tell us when it happens and send a photo. We’ll help work out the next step.</span><ChatLink className="repair-text-link">Talk to MYN <ArrowRight size={18} /></ChatLink></div>
      </section>
      <section className="repair-process" id="how-it-works"><div className="repair-wrap"><div className="repair-section-head"><div><p className="repair-eyebrow">LESS CHASING. MORE GETTING IT DONE.</p><h2>From “can you fix this?”<br />to a clear next step.</h2></div><p>A simple conversation starts the process.<br />No long forms. No guessing the repair.</p></div><div className="repair-steps">{[
        ['01', 'Show us the problem', 'WhatsApp a few photos, your postcode and a short description of what is happening.'],
        ['02', 'Understand the work', 'We discuss the scope and whether a site assessment is needed before a quotation.'],
        ['03', 'Agree & get started', 'Review the proposed work, price and timing before arranging the job.'],
      ].map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="repair-section repair-wrap repair-renovation" id="our-work"><figure><img loading="lazy" src="https://images.pexels.com/photos/8146144/pexels-photo-8146144.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Illustrative renovated kitchen and living space" /><figcaption>Renovation inspiration · illustrative photo</figcaption></figure><div><p className="repair-eyebrow">THINKING BIGGER?</p><h2>A better space,<br /><em>from start to finish.</em></h2><p>Planning a home refresh, an office renovation or a larger build? Bring us your ideas. We’ll discuss the space, the trades involved and the work needed.</p><ul><li><Check /> Home & apartment renovation</li><li><Check /> Office & shop improvements</li><li><Check /> Carpentry, finishes & installation</li></ul><ChatLink service="a renovation project">Tell us about your project <ArrowRight size={18} /></ChatLink></div></section>
      <section className="repair-faq repair-wrap"><div><p className="repair-eyebrow">A FEW THINGS TO KNOW</p><h2>Before we<br /><em>get started.</em></h2></div><div>{[
        ['Do you take small repair jobs?', 'Yes. Tell us what needs fixing, where you are and how many areas are affected so we can discuss the scope.'],
        ['Which areas do you cover?', 'We serve Kuala Lumpur and Selangor. Send your postcode so we can confirm availability for your location.'],
        ['Can I get a price from photos?', 'Photos help us understand the job. Hidden leaks, electrical faults and larger work may need a site assessment before a firm quotation. Ask about any assessment charges when arranging a visit.'],
        ['What should I send on WhatsApp?', 'Send your postcode, a short description, when the problem started, a few clear photos and your preferred timing. For a recurring problem, mention any previous repairs.'],
      ].map(([q,a]) => <details key={q}><summary>{q}<ChevronDown size={19} /></summary><p>{a}</p></details>)}</div></section>
      <section className="repair-contact" id="contact"><div className="repair-wrap"><div><p className="repair-eyebrow">LET’S SORT IT OUT.</p><h2>What needs<br /><em>doing at yours?</em></h2><p>Send us the problem. We’ll talk through the next step.</p><a href={phone} className="repair-contact-phone"><Phone size={20} /> {company.phone}</a><p className="repair-hours">{company.hours}</p></div><div className="repair-enquiry"><label htmlFor="job-type">I need help with…</label><select id="job-type" value={job} onChange={e => setJob(e.target.value)}><option>Not sure — help me identify it</option>{services.map(s => <option key={s.name}>{s.name}</option>)}<option>A renovation project</option></select><p>Have your postcode and photos ready. Your selected service will be added to the message.</p><ChatLink service={job}><MessageCircle size={20} /> Continue on WhatsApp <ArrowRight size={18} /></ChatLink><small>Opens WhatsApp. You review and send the message.</small></div></div></section>
    </main>
    <footer className="repair-footer repair-wrap"><div><a className="repair-logo" href="/">MYN<span>DECO.</span></a><p>For the love of building.</p></div><div><strong>Kuala Lumpur / Selangor</strong><p>Lot 16613-2, Lorong C6, Kampung Pandan,<br />55100 Kuala Lumpur</p></div><div><a href={`mailto:${company.email}`}>{company.email}</a><a href="/our-crew">Meet our crew <ArrowRight size={15} /></a><small>© {new Date().getFullYear()} MYN Deco Enterprise</small></div></footer>
    <div className="repair-mobile-bar"><a href={phone}><Phone size={18} /> Call MYN</a><ChatLink><MessageCircle size={18} /> WhatsApp</ChatLink></div>
  </div>;
}
