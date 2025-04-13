# 🧱 Frontend Mentor – Basic Challenges

This repository contains my solutions to basic HTML/CSS challenges from the [Frontend Mentor](https://www.frontendmentor.io/) platform.
Each project is placed in its own folder and designed as a **standalone static page** with its own SCSS and output to `dist/`.

The repository serves as a **practice space**, but also as a **modular portfolio** – each project can be easily deployed individually, e.g., via Netlify.

---

## 📚 Projects

### [X] results-summary-component
![Not started](https://img.shields.io/badge/status-🔴%20not%20started-red)  
![In progress](https://img.shields.io/badge/status-🟡%20in%20progress-yellow)  
![Testing](https://img.shields.io/badge/status-🧪%20testing-blue)  
![Deployed](https://img.shields.io/badge/status-🚀%20deployed-brightgreen)  
![Refactoring](https://img.shields.io/badge/status-♻️%20refactoring-lightgrey)  
![Done](https://img.shields.io/badge/status-🟢%20done-green)  

**🔗 Live:** [Demo Link](url)  
**📁 Repo:** [`results-summary-component`]([url](https://github.com/pavel-jiranek-tech/frontend-mentor-basic/tree/main/results-summary-component))  
**📝 Summary:**  
Lorem ipsum...  

**🔧 Tech stack:** 

Technologies  
![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-%23CD6799.svg?&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?&logo=javascript&logoColor=black)
![Vue.js](https://img.shields.io/badge/Vue.js-%2335495e.svg?&logo=vue.js&logoColor=%234FC08D)
![Nuxt.js](https://img.shields.io/badge/Nuxt.js-00C58E?logo=nuxt&logoColor=white)

Methodologies  
![BEM](https://img.shields.io/badge/BEM-blue)
![Responsive](https://img.shields.io/badge/Responsive_Design-2196f3)
![a11y](https://img.shields.io/badge/Accessibility_AA-5cb85c)
![No Framework](https://img.shields.io/badge/No_Framework-lightgrey)

Tools  
![Figma](https://img.shields.io/badge/Figma_Design-FF7262?logo=figma&logoColor=white)

Deployment  
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-444444?logo=vercel&logoColor=white)

---


### [2] Product Preview Card Component  
![Deployed](https://img.shields.io/badge/status-🚀%20deployed-brightgreen)  

**🔗 Live:** [pj-fm-ppc.netlify.app](https://pj-fm-ppc.netlify.app/)  
**📁 Repo:** [`product-preview-card-component`](https://github.com/pavel-jiranek-tech/frontend-mentor-basic/tree/main/product-preview-card-component)   
**📝 Summary:**  
A responsive product preview card built with semantic HTML and modular SCSS.
Focus was placed on faithful reproduction of the Figma design, responsive image handling, and accessible structure using `picture`, `h1`, `p`, `button`, and meaningful `alt` attributes.  

**🔧 Tech stack:**  
![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-%23CD6799.svg?&logo=sass&logoColor=white)
![BEM](https://img.shields.io/badge/BEM-blue)
![Responsive](https://img.shields.io/badge/Responsive_Design-2196f3)
![a11y](https://img.shields.io/badge/Accessibility_AA-5cb85c)
![No Framework](https://img.shields.io/badge/No_Framework-lightgrey)
![Figma](https://img.shields.io/badge/Figma_Design-FF7262?logo=figma&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)

---

### [1] QR Code Component
![Status](https://img.shields.io/badge/status-🚀%20deployed-brightgreen)  

**🔗 Live:** [pj-fm-qr.netlify.app](https://pj-fm-qr.netlify.app/)  
**📁 Repo:** [`qr-code-component`](https://github.com/pavel-jiranek-tech/frontend-mentor-basic/tree/main/qr-code-component)  
**📝 Summary:**  
A minimal, centered QR card built with semantic HTML and modular SCSS.  
Focused on pixel-perfect reproduction from Figma and accessible markup (with `h1`, `p`, and `alt` text).  

**🔧 Tech stack:**  
![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-%23CD6799.svg?&logo=sass&logoColor=white)
![BEM](https://img.shields.io/badge/BEM-blue)
![a11y](https://img.shields.io/badge/Accessibility_AA-5cb85c)
![No Framework](https://img.shields.io/badge/No_Framework-lightgrey)
![Figma](https://img.shields.io/badge/Figma_Design-FF7262?logo=figma&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)

---

## 🚀 Technologies used

- **HTML5 + BEM**
- **SCSS** – each project has its own isolated SCSS
- **Vite** – central compilation via `package.json` scripts
- **Node.js skripty** – for creating and building projects
- (optional) **Netlify** – deploy each project individually

---

## 📦 Working with the project

### Install dependencies (only once in the root)

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