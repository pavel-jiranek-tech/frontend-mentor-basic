const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const packageJsonPath = path.join(__dirname, "..", "package.json");
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

const allBuildScripts = Object.keys(pkg.scripts)
  .filter(key => key.startsWith("sass:") && !key.startsWith("sass:watch") && key !== "sass:build");

console.log(`🔧 Spouštím ${allBuildScripts.length} buildů:`);

for (const script of allBuildScripts) {
  console.log(`➡️  ${script}`);
  execSync(`npm run ${script}`, { stdio: "inherit" });
}
