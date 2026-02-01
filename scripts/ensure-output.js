const fs = require("fs");
const path = require("path");

const outputDir = path.join(process.cwd(), "out");

if (!fs.existsSync(outputDir)) {
  console.error("ERROR: Expected output directory 'out' was not created.");
  console.error("Make sure next.config.js includes output: 'export'.");
  process.exit(1);
}

console.log("Output directory 'out' found.");
