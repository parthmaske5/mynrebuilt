# MYN Deco Enterprise Website (v3)

A modern, responsive React + TypeScript website built with Vite, Tailwind CSS, and Firebase Hosting.

- **Live Production URL:** [https://myndeco-enterprise.web.app](https://myndeco-enterprise.web.app)
- **Alternate URL:** [https://myndeco-enterprise.firebaseapp.com](https://myndeco-enterprise.firebaseapp.com)

---

## 🚀 How to Run Locally

1. **Extract this zip** to any folder on your computer.
2. Open your terminal in that folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```
5. Open your browser at `http://localhost:5173/` (or the port Vite displays).

---

## 📦 How to Build for Production

To build the static HTML/CSS/JS files ready for deployment:

```bash
npm run build
```

The compiled production files will be output to the `dist/` directory.

---

## ☁️ Deploy to Firebase Hosting

This project is configured with `firebase.json` and `.firebaserc`. To deploy:

```bash
npx -y firebase-tools@latest deploy --only hosting
```

---

## 📁 Project Structure

```
├── public/                 # Static prototypes, icons, and assets
├── src/
│   ├── components/         # Core UI components (Header, Hero, Capabilities, ProofOfWork, About, OurCrew, ContactSection, Footer, MobileBottomBar)
│   ├── content/            # Site copy, company info, and project data
│   ├── pages/              # SPA Pages (OurCrewPage.tsx)
│   ├── App.tsx             # Main routing and layout
│   ├── main.tsx            # React entry point
│   └── index.css           # Tailwind directives & styles
├── dist/                   # Production build output
├── firebase.json           # Firebase Hosting configuration
├── .firebaserc             # Firebase project definition (myndeco-enterprise)
├── tailwind.config.js      # Palette and typography configuration
├── index.html              # HTML shell with Google Fonts (Fraunces & Inter)
└── package.json            # Scripts & dependencies
```
