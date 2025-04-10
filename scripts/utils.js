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

module.exports = {
  createPrefix,
  generateUniquePrefix
};
