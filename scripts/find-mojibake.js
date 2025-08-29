const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TARGET_DIRS = ['client', 'scripts', 'IMPLEMENTATION_SUMMARY.md'];
const TEXT_EXTENSIONS = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.md', '.json', '.sql', '.txt', '.html', '.css', '.scss', '.yml', '.yaml'
]);

function isTextFile(filePath) {
  return TEXT_EXTENSIONS.has(path.extname(filePath)) || path.basename(filePath) === 'IMPLEMENTATION_SUMMARY.md';
}

function walk(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // skip node_modules and .git
      if (entry.name === 'node_modules' || entry.name === '.git') continue;
      walk(full, fileList);
    } else if (entry.isFile()) {
      if (isTextFile(full)) fileList.push(full);
    }
  }
  return fileList;
}

function scanFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  const lines = data.split(/\r?\n/);
  const findings = [];

  const replacementCharRegex = /\uFFFD|�/u;
  const suspiciousLatin1Regex = /Ã[\x80-\xBF]?/; // rough heuristic for mojibake

  lines.forEach((line, idx) => {
    if (replacementCharRegex.test(line) || suspiciousLatin1Regex.test(line)) {
      findings.push({ line: idx + 1, text: line.trim() });
    }
  });

  return findings;
}

function main() {
  console.log('Scanning repository for mojibake / replacement characters...');
  const targets = [];

  // Gather files
  TARGET_DIRS.forEach((entry) => {
    const p = path.join(ROOT, entry);
    if (fs.existsSync(p)) {
      const stat = fs.statSync(p);
      if (stat.isDirectory()) {
        walk(p).forEach((f) => targets.push(f));
      } else if (stat.isFile() && isTextFile(p)) {
        targets.push(p);
      }
    }
  });

  // also include client/lib/products.ts explicitly if present
  const explicit = path.join(ROOT, 'client', 'lib', 'products.ts');
  if (!targets.includes(explicit) && fs.existsSync(explicit)) targets.push(explicit);

  const report = [];

  targets.forEach((file) => {
    try {
      const findings = scanFile(file);
      if (findings.length) {
        report.push({ file: path.relative(ROOT, file), findings });
      }
    } catch (err) {
      console.error('Failed to scan', file, err.message);
    }
  });

  const outJson = path.join(ROOT, 'scripts', 'mojibake-report.json');
  const outMd = path.join(ROOT, 'scripts', 'mojibake-report.md');

  fs.writeFileSync(outJson, JSON.stringify({ scannedAt: new Date().toISOString(), report }, null, 2));

  const mdLines = [];
  mdLines.push('# Mojibake / Replacement Character Scan Report');
  mdLines.push('Generated: ' + new Date().toISOString());
  mdLines.push('');

  if (report.length === 0) {
    mdLines.push('No issues found.');
  } else {
    report.forEach((r) => {
      mdLines.push('## ' + r.file);
      r.findings.forEach((f) => {
        mdLines.push(`- Line ${f.line}: ${f.text}`);
      });
      mdLines.push('');
    });
  }

  fs.writeFileSync(outMd, mdLines.join('\n'));

  console.log(`Scan complete. ${report.length} file(s) with findings.`);
  console.log('Report written to', outJson, 'and', outMd);

  if (report.length > 0) {
    process.exitCode = 2; // non-zero to indicate findings for CI
  }
}

main();