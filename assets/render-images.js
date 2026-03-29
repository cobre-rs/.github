const puppeteer = require('puppeteer');
const path = require('path');

async function render(htmlFile, outputFile, width, height) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // 2x device scale for crisp rendering on retina displays
  await page.setViewport({ width, height, deviceScaleFactor: 2 });

  const filePath = path.resolve(htmlFile);
  await page.goto(`file://${filePath}`, {
    waitUntil: 'networkidle0',
    timeout: 15000
  });

  // Wait for Google Fonts to fully load
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 500));

  await page.screenshot({
    path: outputFile,
    clip: { x: 0, y: 0, width, height }
  });

  console.log(`✓ ${outputFile} (${width}x${height} @2x)`);
  await browser.close();
}

(async () => {
  await render('social-preview.html', 'social-preview.png', 1280, 640);
  await render('org-banner.html', 'org-banner.png', 1280, 320);
  console.log('Done.');
  console.log('');
  console.log('Next steps:');
  console.log('  1. Copy org-banner.png to assets/org-banner.png and commit');
  console.log('  2. Upload social-preview.png via GitHub repo Settings → Social preview');
})();
