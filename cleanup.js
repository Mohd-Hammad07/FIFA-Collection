const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove custom cursor HTML
html = html.replace('<div class="custom-cursor" id="custom-cursor"></div>', '');

// 2. Remove custom cursor CSS
const cssRegex = /\/\* ---- CUSTOM CURSOR ---- \*\/[\s\S]*?\/\* ---- PRELOADER ---- \*\//;
html = html.replace(cssRegex, '/* ---- PRELOADER ---- */');

// 3. Remove custom cursor JS
const jsRegex = /\/\/ Custom Cursor Logic[\s\S]*?\/\/ Smart Navbar Logic/;
html = html.replace(jsRegex, '// Smart Navbar Logic');

// 4. Ensure no Pakistani
html = html.replace(/Pakistani/gi, '');
html = html.replace(/Pakistan/gi, '');

fs.writeFileSync('index.html', html);
console.log('Cursor removed successfully');
