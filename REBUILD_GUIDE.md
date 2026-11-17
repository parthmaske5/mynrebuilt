# Master Blueprint: Rebuilding This Website From Scratch

This document contains everything needed to reconstruct this complete website from an empty directory, either manually with standard developer tools or automatically with an AI platform (Bolt, Cursor, Claude, ChatGPT, v0, Lovable).

---

## Part 1: Quick 3-Step Setup (If You Already Have the Code)

If starting on a new computer with the exported files:

```powershell
# 1. Unzip the project-source-export.zip into a folder, e.g. D:\my-new-site
# 2. Open PowerShell in that folder:
cd D:\my-new-site

# 3. Install dependencies and start:
npm install
npm run dev
```

---

## Part 2: Manual Step-by-Step Rebuild (From Zero)

### 1. Initialize Vite + React + TypeScript
In your terminal:
```bash
npm create vite@latest renovation-site -- --template react-ts
cd renovation-site
```

### 2. Install Required Packages
```bash
# Production dependencies
npm install lucide-react

# Dev dependencies (Tailwind CSS, PostCSS, Autoprefixer)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configure Fonts (`index.html`)
In `index.html`, load Google Fonts **Fraunces** (display serif) and **Inter** (body sans):
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### 4. Configure Tailwind Theme (`tailwind.config.js`)
Replace `tailwind.config.js` with the site's warm off-white and restrained orange visual system:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF8F4',
          100: '#F7F2EB',
          200: '#EFE7D8',
          300: '#E4D6C0',
        },
        ink: {
          900: '#1A1A1A',
          800: '#2B2B2B',
          700: '#3D3D3D',
          600: '#525252',
          500: '#6B6B6B',
          400: '#8A8A8A',
        },
        marigold: {
          50: '#FFF8EC',
          100: '#FFEDCC',
          200: '#FFDFA3',
          300: '#FFCB66',
          400: '#FFB52E',
          500: '#F59E0B',
          600: '#D97D06',
          700: '#B45E09',
          800: '#92480C',
        },
        sage: {
          50: '#F4F6F2',
          100: '#E6EAE0',
          200: '#CDD6C3',
          300: '#AAB89A',
          700: '#424E36',
        },
        blueprint: {
          50: '#EAF0F4',
          100: '#D1DEE9',
          600: '#2D5570',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

### 5. Global Styles (`src/index.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    background-color: #FBF8F4;
    color: #1A1A1A;
  }
}

.section-container {
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
}

/* Custom discreet scrollbars for split gallery columns */
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: #E4D6C0 transparent;
}
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: #E4D6C0;
  border-radius: 999px;
}
```

---

## Part 3: Architecture & Section Map

The application follows a clean single-page layout with lightweight hash/history routing:

```
src/
├── App.tsx                     # Routing switch: '/' (Home) vs '/our-crew' (OurCrewPage)
├── content/
│   └── site.ts                 # Single source of truth for company phone, whatsapp, projects data
├── pages/
│   └── OurCrewPage.tsx         # Dedicated /our-crew page with in-house trade disciplines
└── components/
    ├── Header.tsx              # Sticky nav: What We Do · Our Work · Our Crew · Contact
    ├── Hero.tsx                # 'For the love of building.' + single CTA 'See our work →'
    ├── Capabilities.tsx        # Interactive house picker wireframe + 3 service tracks
    ├── ProofOfWork.tsx         # Centered 2-column split portfolio (Major + Everyday jobs)
    ├── About.tsx               # 'Stop chasing ~~five contractors.~~' with orange strike
    ├── OurCrew.tsx             # Homepage teaser card with 'Meet the crew →' button
    ├── ContactSection.tsx      # Direct WhatsApp and Call cards (no quote form)
    └── Footer.tsx              # Matching nav links and legal info
```

---

## Part 4: Ready-to-Paste AI Master Prompt (For Bolt, Claude, Cursor, v0)

Copy and paste the block below into any AI coding assistant to generate the entire site from a blank prompt:

````markdown
Build a production-grade, responsive website in React, TypeScript, and Tailwind CSS for a high-end, practical renovation and construction company.

### 1. Visual Design System
- Backgrounds: Warm off-white system (`#FBF8F4` cream-50, `#F7F2EB` cream-100, `#E4D6C0` cream-300 borders).
- Text: Near-black (`#1A1A1A` ink-900) and muted dark gray (`#525252` ink-600).
- Accents: Restrained marigold/orange (`#F59E0B` / `#D97D06`) and soft sage green tags (`#E6EAE0` bg, `#424E36` text).
- Typography: Fraunces (serif) for headings, Inter for body and metadata.
- Tone: Honest, craftsman-like, direct, grounded, practical. No generic corporate marketing fluff.
- No repetitive section eyebrow badges (do NOT put 'WHAT WE DO' or 'PROOF OF WORK' eyebrows).

### 2. Page Structure (Strict Order)
Header → Hero → What We Do → Proof of Work (`#our-work`) → About → Our Crew → Contact → Footer

### 3. Section Specifications

1. **HEADER**:
   - Logo: Clean text brand badge.
   - Navigation: `What We Do · Our Work · Our Crew · Contact`.
   - Anchors for What We Do (`#what-we-do`), Our Work (`#our-work`), Contact (`#contact`).
   - `Our Crew` links to `/our-crew`.
   - Direct header CTAs: WhatsApp, Call, and 'Get in Touch' button.

2. **HERO**:
   - Tagline: `RENOVATION · CONSTRUCTION · REPAIR`
   - Main Heading: `For the love of building.`
   - Body: "You bring the plan — or the problem. We bring the crew, the equipment and the skill to make it happen, from a leaking bathroom to a whole house."
   - Single CTA button: "See our work →" (smoothly scrolls to `#our-work`).
   - Social proof metrics row: `[XX]+ Projects completed`, `[XX] Years of experience`, `1 Team, start to finish`.

3. **WHAT WE DO (`#what-we-do`)**:
   - Single headline: "Pick a part of the house. See what we build and fix."
   - Interactive SVG architectural house illustration with 8 selectable zones: Roof (1), Walls/floors (2), Kitchen (3), Doors/windows (4), Bathroom (5), Electrical/AC (6), Outdoors (7), Structure/foundation (8).
   - Tapping any room highlights the area and filters the adjacent detail panel.
   - Three categorized service columns below:
     - "A quick job" (Fix, replace or freshen up)
     - "Needs a look first" (Inspection first, then a clear quote)
     - "A big build" (Real projects, shown as proof)

4. **OUR WORK (`#our-work`)**:
   - Single centered headline: "From a leaking bathroom to a full house, every job is carried out with the skill and care it deserves."
   - Symmetrical centered 2-column container (`max-w-[1040px] mx-auto`):
     - **Left Column (Major Projects)**: Centered column title "Major Projects" and description. Displays 1 card per row (~430px wide max). Each card has 4:3 photo with working BEFORE / AFTER toggle pills, category tag, scale tag, and 'Scope' modal button. NEVER show prices on major projects.
     - **Right Column (Everyday Jobs)**: Centered column title "Every job, done with care." and description. Displays a 2-column grid of 1:1 square photo cards. Every everyday job card has a circular orange badge showing "From RM ___".
     - Reassuring disclaimer box below right gallery: "Prices shown for everyday jobs are approximate starting points. Once we understand the work, our team will share a clear quote."
     - On desktop, both columns scroll independently with clean thin scrollbars.

5. **ABOUT**:
   - Two-line heading:
     "Stop chasing ~~five contractors.~~
     One team. Every trade. Start to finish."
     (with an orange strike-through on "five contractors.")
   - 3 benefit cards:
     1. Skilled people who know their trade.
     2. Everything we need, brought to you.
     3. Every job, done with care.

6. **OUR CREW (Homepage Section)**:
   - Heading: "Built by the hands that make it happen."
   - Body: "The work carries our name, but it is made by the people on site — the ones who turn up, solve problems, bring their skill, and take pride in the finish..."
   - CTA: "Meet the crew →" linking to `/our-crew`.
   - Side card with authentic construction crew photo.

7. **DEDICATED `/our-crew` PAGE**:
   - Heading: "The people behind every job well done."
   - Body: "A company is only as good as the people doing the work..."
   - Trade discipline cards: Carpentry & Joinery, Electrical & Power, Roofing & Structural Steel, Plumbing, Masonry & Waterproofing, Painting.
   - Photo placeholders ready for real crew portraits and bios.
   - "← Back to Home" link at top.

8. **CONTACT (`#contact`)**:
   - Heading: "Tell us what needs doing."
   - Body: "Tell us about the job. Add a few photos if you can, and we’ll take it from there."
   - Direct WhatsApp and Phone action cards with hours and 'Photos welcome' note. No database quote forms.
````
