/**
 * Generates a prefix from the project name (např. 'qr-code-component' → 'qc')
 */
function createPrefix(projectName, maxLength = 3) {
  return projectName
    .split('-')
    .map(part => part[0])
    .join('')
    .slice(0, maxLength)
    .toLowerCase();
}

/**
 * Creates a unique prefix by adding a numeric postfix if needed
 */
function generateUniquePrefix(basePrefix, existingKeys) {
  if (!existingKeys.includes(basePrefix)) return basePrefix;
  let i = 2;
  while (existingKeys.includes(`${basePrefix}${i}`)) {
    i++;
  }
  return `${basePrefix}${i}`;
}

function updateReadmeFile(fs, path, projectName) {
  const root = path.join(__dirname, '..')
  const readmePath = path.join(root, 'README.md');
  const templatePath = path.join(root, projectName, 'project-template.md');
  
  // Load templated
  let template = fs.readFileSync(templatePath, 'utf-8');
  
  // update placeholder
  template = template.replace(/\[PROJECT_NAME\]/g, projectName);
  
  // 📍 Najdi místo kam to vložit
  const insertAfter = '## 📚 Projects';
  const readme = fs.readFileSync(readmePath, 'utf-8');
  const parts = readme.split(insertAfter);
  
  if (parts.length === 2) {
    const updatedReadme = `${parts[0]}${insertAfter}\n\n${template}\n${parts[1]}`;
    fs.writeFileSync(readmePath, updatedReadme);
    console.log(`✅ Template for "${projectName}" added to README.md`);
  } else {
    console.warn('⚠️ "## 📚 Projects" not found in README.md');
  }
  
  // Remove project-template.md
  fs.unlinkSync(templatePath);
}

module.exports = {
  createPrefix,
  generateUniquePrefix,
  updateReadmeFile
};
