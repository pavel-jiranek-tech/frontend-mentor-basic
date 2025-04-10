# 🧱 Frontend Mentor – Basic Challenges

This repository contains my solutions to basic HTML/CSS challenges from the [Frontend Mentor](https://www.frontendmentor.io/) platform.
Each project is placed in its own folder and designed as a **standalone static page** with its own SCSS and output to `dist/`.

The repository serves as a **practice space**, but also as a **modular portfolio** – each project can be easily deployed individually, e.g., via Netlify.

---

## 🔧 Repository structure

```
frontend-mentor-basic/
├── qr-code-component/
│   ├── index.html
│   ├── scss/
│   │   └── main.scss
│   ├── dist/
│   │   ├── style.css
│   │   └── style.css.map
│   └── README.md (optional)
├── ...
├── package.json
└── scripts/
    ├── init-project.js     # script for creating a new project from template
    └── build-all.js        # builds all projects at once
```

---

## 🚀 Technologies used

- **HTML5 + BEM**
- **SCSS** – each project has its own isolated SCSS
- **Sass CLI** – central compilation via `package.json` scripts
- **Node.js skripty** – for creating and building projects
- (optional) **Netlify** – deploy each project individually

---

## 📦 Working with the project

### Install dependencies (only onee in root)

```bash
npm install
```

### Create a new project

```bash
npm run init <nazev-projektu>
```

This creates a new folder, e.g., `faq-accordion`, clones the template, removes `package.json` inside, and updates the central `package.json` with new `sass:` scripts.

### Run `qr` project in dev mode

```bash
npm run dev:qr
```

### Build `qr` project

```bash
npm run build:qr
```

### Preview `qr` project

```bash
npm run preview:qr
```

---

## 🌐 Deployment on Netlify

Each project can be deployed individually - e.g., the folder `qr-code-component/`.

**Build command:** *(none - build locally)*  
**Publish directory:** `qr-code-component`

Make sure that `index.html` links to the CSS file in `./dist/style.css`.

---

## 📚 Projects

| Project             | Live demo               | Decription                     |
|---------------------|--------------------------|---------------------------|
| [qr-code-component](https://github.com/pavel-jiranek-tech/frontend-mentor-basic/tree/main/qr-code-component) | [go to demo](https://pj-fm-qr.netlify.app/)    | Basic centered QR card  |
| ... | ... | ... |

---

## 🧠 Project goals

- Revisiting and practice a clean HTML + SCSS + BEM approach
- Keep **each project independent**, but with centralized build
- Create clean and easily deployable outputs
- Automate folder creation and compilation with Node.js

---

## 📌 Notes

- Each project has its own folder - no SCSS is shared between them.
- The central `package.json` contains all build/watch scripts.
- Scripts are generated automatically via `scripts/init-project.js`.

---

## 🤝 Contact

If you have a question, feedback, or want to collaborate, feel free to reach out!

- LinkedIn - [pavel-jiranek-tech](https://www.linkedin.com/in/pavel-jiranek-tech/)
- GitHub – [pavel-jiranek-tech](https://github.com/pavel-jiranek-tech)
- Frontend Mentor – [@pavel-jiranek-tech](https://www.frontendmentor.io/profile/pavel-jiranek-tech)