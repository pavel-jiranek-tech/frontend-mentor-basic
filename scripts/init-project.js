const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { createPrefix, generateUniquePrefix } = require('./utils');

const args = process.argv.slice(2);
const projectName = args[0];
const templateRepo = "git@github.com:pavel-jiranek-tech/template-html-css.git";

if (!projectName) {
  console.error("❌ Add project name:");
  console.log("např. npm run init faq-accordion");
  process.exit(1);
}

// The folder where the project is cloned
const dest = path.join(__dirname, "..", projectName);

// Verify if the folder already exists
if (fs.existsSync(dest)) {
  console.log(`❌ The folder '${projectName}' already exists. Choose another name or delete it first.`);
  process.exit(1);
}

// 1. Clone repository
console.log(`📥 I'm cloning the template into the '${projectName}' folder...`);
execSync(`git clone ${templateRepo} ${projectName}`, { stdio: "inherit" });

// 2. Remove unused files
fs.rmSync(path.join(dest, ".gitignore"), { force: true });
fs.rmSync(path.join(dest, ".git"), { recursive: true, force: true });
fs.rmSync(path.join(dest, "package.json"), { force: true });
fs.rmSync(path.join(dest, "package-lock.json"), { force: true });

// 3. Update main package.json
const packageJsonPath = path.join(__dirname, "..", "package.json");
const packageData = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const scripts = packageData.scripts || {};

// 3.1. Generate prefix
const basePrefix = createPrefix(projectName);
const existingPrefixes = Object.keys(scripts)
  .filter(key => key.startsWith('sass:'))
  .map(key => key.replace('sass:', ''));

const uniquePrefix = generateUniquePrefix(basePrefix, existingPrefixes);

const devKey = `dev:${uniquePrefix}`;
const devCmd = `PROJECT=${projectName} vite`;
const buildKey = `build:${uniquePrefix}`;
const buildCmd = `PROJECT=${projectName} vite build`;
const previewKey = `preview:${uniquePrefix}`;
const previewCmd = `PROJECT=${projectName} vite preview`;

packageData.scripts = {
  ...packageData.scripts,
  [devKey]: devCmd,
  [buildKey]: buildCmd,
  [previewKey]: previewCmd
};

// 4. Write back
fs.writeFileSync(packageJsonPath, JSON.stringify(packageData, null, 2));

console.log(`✅ The project '${projectName}' has been created.`);
console.log(`🛠 Scripts added to the main package.json.`);
