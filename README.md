# 🧱 Frontend Mentor – Basic Challenges

Tento repozitář obsahuje moje řešení základních HTML/CSS výzev z platformy [Frontend Mentor](https://www.frontendmentor.io/).  
Každý projekt je umístěn ve své vlastní složce a je navržen jako **samostatná statická stránka** s vlastním SCSS a výstupem do `dist/`.

Repozitář slouží jako **cvičný prostor**, ale zároveň i jako **modulární portfolio** – každý projekt může být snadno nasazen zvlášť např. přes Netlify.

---

## 🔧 Struktura repozitáře

```
frontend-mentor-basic/
├── faq-accordion/
│   ├── index.html
│   ├── scss/
│   │   └── main.scss
│   ├── dist/
│   │   ├── style.css
│   │   └── style.css.map
│   └── README.md (volitelně)
├── ...
├── package.json
└── scripts/
    ├── init-project.js     # skript pro vytvoření nového projektu ze šablony
    └── build-all.js        # sestaví všechny projekty najednou
```

---

## 🚀 Použité technologie

- **HTML5 + BEM**
- **SCSS** – každý projekt má vlastní izolovaný SCSS
- **Sass CLI** – centrální kompilace přes `package.json` skripty
- **Node.js skripty** – pro vytváření a build projektů
- (volitelně) **Netlify** – nasazení každého projektu samostatně

---

## 📦 Práce s projektem

### Instalace závislostí (pouze jednou v rootu):

```bash
npm install
```

### Vytvoření nového projektu:

```bash
npm run init <nazev-projektu>
```

Tím se vytvoří nová složka např. `faq-accordion`, naklonuje se šablona, smaže se `package.json` a aktualizuje se centrální `package.json` o nové `sass:` skripty.

### Build jednoho projektu:

```bash
npm run sass:faq-accordion
```

### Watch mód (během vývoje):

```bash
npm run sass:watch:faq-accordion
```

### Build všech projektů:

```bash
npm run sass:build
```

---

## 🌐 Nasazení na Netlify

Každý projekt může být nasazen samostatně – např. složka `faq-accordion/`.

**Build command:** *(žádný – builduj lokálně)*  
**Publish directory:** `faq-accordion`

Nezapomeň, že `index.html` musí odkazovat na CSS ve složce `./dist/style.css`.

---

## 📚 Projekty

| Projekt             | Live demo               | Popis                     |
|---------------------|--------------------------|---------------------------|
| `faq-accordion`     | *(odkaz sem později)*    | Interaktivní accordion    |
| `qr-code-component` | *(odkaz sem později)*    | Základní centrální karta  |
| ...                 | ...                      | ...                       |

---

## 🧠 Cíle tohoto projektu

- Naučit se a procvičit čistý HTML + SCSS + BEM přístup
- Udržet **každý projekt nezávislý**, ale s centrálním buildem
- Vytvořit čisté a snadno nasaditelné výstupy
- Automatizovat tvorbu složek a kompilaci pomocí Node.js

---

## 📌 Poznámky

- Každý projekt má svou vlastní složku – nedochází ke sdílení SCSS mezi projekty.
- Centrální `package.json` obsahuje všechny build/watch skripty.
- Skripty jsou generovány automaticky pomocí `scripts/init-project.js`.

---

## 🤝 Kontakt

Pokud máš dotaz, připomínku nebo chceš spolupracovat, ozvi se!  
> *http://...*
