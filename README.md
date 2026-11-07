# K. Madhavi - Personal Developer Portfolio (React + Vite)

A modern, responsive, and recruiter-ready personal portfolio web application built with **React 19**, **Vite**, and **Lucide Icons** for **K. Madhavi** (Aspiring Software Developer | MCA Student).

## 🚀 Technology Stack

- **Framework**: React 19 (Component-based architecture)
- **Bundler & Dev Server**: Vite
- **Icons**: Lucide React + custom inline SVG icons
- **Styling**: Glassmorphism dark mode with modern CSS custom properties
- **Code Intelligence**: Fully indexed with `@colbymchenry/codegraph` (`.codegraph/`)

---

## 📁 Project Architecture

```
project portfolio/
├── public/
│   ├── profile.jpg             # Profile image
│   └── K_Madhavi_Resume.pdf    # Direct downloadable resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header with active section tracking
│   │   ├── Hero.jsx            # Typewriter title effect, avatar glow, CTA buttons
│   │   ├── About.jsx           # Background, career objective, contact summary
│   │   ├── Skills.jsx          # Languages, DB, Cloud, Web, and Core Concepts
│   │   ├── Education.jsx       # Academic timeline (MCA, BCA, Inter, SSC)
│   │   ├── Project.jsx         # IoT Smart Bulb academic project spotlight
│   │   ├── Internship.jsx      # AWS Cloud Computing Intern (Adhoc Networks)
│   │   ├── Certifications.jsx  # Cisco, Oracle, AWS, Cyber Security, MEPRO
│   │   ├── Contact.jsx         # Direct contact channels & message form
│   │   ├── Footer.jsx          # Responsive footer with resume download
│   │   ├── AmbientCanvas.jsx   # Interactive canvas particle background
│   │   ├── BackToTop.jsx       # Smooth back to top navigation
│   │   └── SocialIcons.jsx     # GitHub and LinkedIn SVG components
│   ├── portfolioData.js        # Centralized data model
│   ├── App.jsx                 # Main application root
│   ├── main.jsx                # React DOM mount point
│   └── index.css               # Premium dark glassmorphism styling
├── dist/                       # Production build output
├── index.html                  # HTML entry point with fonts & metadata
├── vite.config.js              # Vite configuration.
└── package.json                # Dependencies and scripts
```

---

## 🛠️ Available Scripts

In the project root directory:

### Run Development Server
```powershell
npm run dev
```
Starts the local dev server at `http://localhost:3000`.

### Build for Production
```powershell
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### Preview Production Build
```powershell
npm run preview
```

---

## 📊 CodeGraph Integration

CodeGraph is initialized and indexed for this codebase:
```powershell
codegraph.cmd explore
codegraph.cmd status
```
Indexed: **20 files, 110 nodes, 180 edges**.
