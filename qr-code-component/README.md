# Frontend Mentor – [QR code component]

![Status](https://img.shields.io/badge/status-🚀%20deployed-brightgreen)

<details>
  <summary>Other status options</summary>

- ![Not started](https://img.shields.io/badge/status-🔴%20not%20started-red)
- ![In progress](https://img.shields.io/badge/status-🟡%20in%20progress-yellow)
- ![Testing](https://img.shields.io/badge/status-🧪%20testing-blue)
- ![Deployed](https://img.shields.io/badge/status-🚀%20deployed-brightgreen)
- ![Refactoring](https://img.shields.io/badge/status-♻️%20refactoring-lightgrey)
- ![Done](https://img.shields.io/badge/status-🟢%20done-green)

</details>
<br />

This is my solution for the [QR code component](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H) challenge from Frontend Mentor.  
The goal was to create a simple, centered QR code card component that closely matches the provided Figma design, using semantic HTML and modern SCSS practices.

![Screenshot](./assets/images/screenshot.png)

---

## 🔗 Live demo

👉 [View deployed version](https://pj-fm-qr.netlify.app/)

---

## 🛠 Technologies used

- HTML5 + [BEM](https://en.bem.info/methodology/) naming convention
- SCSS with `@use` and modular structure
- Flexbox + aspect-ratio for layout and scaling
- Decorative elements with `::before` / `::after`
- Manual SCSS build (no framework)

---

## 📁 Project structure

- **`assets/`** - static files, e.g. images or favicons
- **`assets/images/`** - images used in the component (QR code)
- **`scss/`** - modules with global styles, variables, mixins
- **`index.html`** - HTML structure of the component with [BEM](https://en.bem.info/methodology/) classes
- **`main.js`** - entry point for loading styles (via SCSS)
- **`dist/`** - folder for built output (ignored in Git)

---

## ✨ What I focused on

- A deliberately minimalist project where I focused on a consistent HTML and SCSS structure
- Using a modern SCSS approach with `@use`, variables and component modularity
- Maintaining visual fidelity of the design in Figma, including subtle shadows and backgrounds with decorative circles
- Working with `aspect-ratio` to maintain proper QR box ratio across devices
- Consistent use of [BEM](https://en.bem.info/methodology/) naming and clean layout without relying on JS or CSS frameworks

---

## 🧠 Key implementation notes

- The design for desktop and mobile used an identical component - I decided not to use media queries because they were not needed
- Box-shadow and spacings were exactly replicated according to Figma specifications, including opacity conversion (e.g. `4.77%` to `rgba`)
- Decorative circles in the background were implemented via pseudo-elements with absolute positioning
- The font "Outfit" was loaded via Google Fonts and plugged in as a SCSS variable for possible scalability in other components
- Paying attention to accessibility through semantic HTML (e.g., `h1`, `p`, `img` with `alt`) and proper document language declaration

---

## ✍️ Author

- GitHub – [pavel-jiranek-tech](https://github.com/pavel-jiranek-tech)
- Frontend Mentor – [@pavel-jiranek-tech](https://www.frontendmentor.io/profile/pavel-jiranek-tech)

---

## 📝 License

This project is part of a challenge on Frontend Mentor and is intended for educational and portfolio purposes only.
