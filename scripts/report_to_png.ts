const fun = async () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const browser = await require('playwright')['chromium'].launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const reportFile =
    'file://' + __dirname.substr(0, __dirname.lastIndexOf('/')) + '/reports/report.html';
  // eslint-disable-next-line no-console
  console.log(reportFile);
  await page.goto(reportFile);
  // await page.ge('#content').exists();
  const screenshot = await page.screenshot();
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('fs').writeFileSync('image.png', screenshot);
};
fun();
