import puppeteer from 'puppeteer';

export async function countH2Sections(url: string): Promise<number> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const count = await page.$$eval('h2', elements => elements.length);
  await browser.close();
  return count;
}