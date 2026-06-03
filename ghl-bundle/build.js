/* build.js — pre-compile JSX → vanilla JS and inline React so the output works
 * inside GHL's custom-code box. GHL strips `<script type="text/babel">` (non-
 * standard MIME) and sometimes blocks unpkg.com, so we ship one self-contained
 * <script> tag with React + ReactDOM + the compiled app bundled together.
 *
 *   node build.js
 *
 * NOTE on images: source files use stripe placeholders by default. When Jessica
 * provides portrait + logo CDN URLs, replace src= paths in the per-page JSX
 * before re-running this build.
 */

const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const SRC = path.resolve(__dirname, '..');
const OUT = __dirname;

const PAGES = [
  { out: 'index.html',         jsx: 'home.jsx',         title: "Jessica Medler — Wild Prairie Coaching · Rooted, Grounded, Loved" },
  { out: 'about.html',         jsx: 'about.jsx',        title: "About Jessica — Wild Prairie Coaching" },
  { out: 'work-with-me.html',  jsx: 'work.jsx',         title: "Walk With Me — Jessica Medler · Wild Prairie Coaching" },
  { out: 'testimonials.html',  jsx: 'testimonials.jsx', title: "Stories — Jessica Medler · Wild Prairie Coaching" },
  { out: 'faq.html',           jsx: 'faq.jsx',          title: "FAQ — Jessica Medler · Wild Prairie Coaching" },
  { out: 'contact.html',       jsx: 'contact.jsx',      title: "Contact — Jessica Medler · Wild Prairie Coaching" },
  { out: 'legal.html',         jsx: 'legal.jsx',        title: "Legal — Jessica Medler · Wild Prairie Coaching" },
  { out: 'book.html',          jsx: 'book.jsx',         title: "Book a Call — Jessica Medler · Wild Prairie Coaching" },
];

const css         = fs.readFileSync(path.join(SRC, 'shared.css'), 'utf8');
const tweaksPanel = fs.readFileSync(path.join(SRC, 'tweaks-panel.jsx'), 'utf8');
const sharedJsx   = fs.readFileSync(path.join(SRC, 'shared.jsx'), 'utf8');
const reactJs     = fs.readFileSync(path.join(__dirname, 'vendor', 'react.production.min.js'), 'utf8');
const reactDomJs  = fs.readFileSync(path.join(__dirname, 'vendor', 'react-dom.production.min.js'), 'utf8');

/* CSS overrides that neutralize GHL's container padding/margins so the design
 * goes edge-to-edge ("do not cut both sides"). */
const GHL_RESET = `
/* Make GHL's page container go full-bleed for this custom code block */
html, body { margin: 0 !important; padding: 0 !important; max-width: none !important; }
.c-section, .c-row, .c-wrapper, .c-element, .c-section .row, .container-fluid,
.hl_page-creator--full-screen, .hl_page-creator, [data-section], [data-row], [data-element] {
  max-width: none !important;
  width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
`;

function compileJsx(source, filename) {
  const result = esbuild.transformSync(source, {
    loader: 'jsx',
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    target: 'es2018',
    sourcefile: filename,
  });
  return result.code;
}

/* shared.jsx already does `const { useState, useEffect, useMemo, useRef } = React;`
 * and the per-page files re-declare a subset. Strip the redundant destructure
 * line out of the per-page source so the combined bundle doesn't redeclare. */
function stripReactHookRedeclares(source) {
  return source.replace(/^\s*const\s*\{[^}]*\}\s*=\s*React\s*;\s*$/m, '');
}

async function bundle({ out, jsx, title }) {
  const pageJsx = stripReactHookRedeclares(fs.readFileSync(path.join(SRC, jsx), 'utf8'));

  const combinedJsx = [
    `/* ===== tweaks-panel.jsx ===== */\n${tweaksPanel}`,
    `/* ===== shared.jsx ===== */\n${sharedJsx}`,
    `/* ===== ${jsx} ===== */\n${pageJsx}`,
  ].join('\n\n');

  const compiledApp = compileJsx(combinedJsx, jsx);

  const script = `(function(){
${reactJs}
${reactDomJs}
${compiledApp}
})();`;

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Source+Serif+4:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
${GHL_RESET}
${css}
  </style>
</head>
<body>
  <div id="root"></div>
  <script>
${script}
  </script>
</body>
</html>
`;

  fs.writeFileSync(path.join(OUT, out), html);
  const kb = (html.length / 1024).toFixed(1);
  console.log(`wrote ${out} (${kb} KB)`);
}

(async () => {
  for (const page of PAGES) await bundle(page);
  console.log(`\nDone. ${PAGES.length} bundles in ${OUT}`);
})();
