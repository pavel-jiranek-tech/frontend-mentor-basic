const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const projectName = args[0];
const templateRepo = "git@github.com:pavel-jiranek-tech/template-html-css.git";

if (!projectName) {
  console.error("❌ Zadej název projektu:");
  console.log("např. npm run init faq-accordion");
  process.exit(1);
}

// složka, kam se projekt naklonuje
const dest = path.join(__dirname, "..", projectName);

// 🛡️ Ověření, jestli složka už existuje
if (fs.existsSync(dest)) {
  console.log(`❌ Složka '${projectName}' už existuje. Zvol jiné jméno nebo ji nejprve smaž.`);
  process.exit(1);
}

// 1. Klonuj repozitář
console.log(`📥 Klonuji šablonu do složky '${projectName}'...`);
execSync(`git clone ${templateRepo} ${projectName}`, { stdio: "inherit" });

// 2. Odstraň nepotřebné soubory
fs.rmSync(path.join(dest, ".gitignore"), { force: true });
fs.rmSync(path.join(dest, ".git"), { recursive: true, force: true });
fs.rmSync(path.join(dest, "package.json"), { force: true });
fs.rmSync(path.join(dest, "package-lock.json"), { force: true });

// 3. Uprav hlavní package.json
const packageJsonPath = path.join(__dirname, "..", "package.json");
const packageData = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

const sassBuildKey = `sass:${projectName}`;
const sassWatchKey = `sass:watch:${projectName}`;
const sassBuildCmd = `sass ${projectName}/scss/main.scss ${projectName}/dist/style.css`;
const sassWatchCmd = `sass --watch ${projectName}/scss/main.scss ${projectName}/dist/style.css`;

packageData.scripts = {
  ...packageData.scripts,
  [sassBuildKey]: sassBuildCmd,
  [sassWatchKey]: sassWatchCmd
};

// 4. Zapiš zpět
fs.writeFileSync(packageJsonPath, JSON.stringify(packageData, null, 2));

console.log(`✅ Projekt '${projectName}' vytvořen.`);
console.log(`🛠 Do hlavního package.json přidány skripty: "${sassBuildKey}" a "${sassWatchKey}"`);
