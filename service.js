const puppeteer = require('puppeteer');

const evaluate = async (selector, page) => {
  const data = await page.evaluate(
    (selector) => document.querySelectorAll(selector)[0].innerText,
    selector
  );
  return data;
};

const service = async ({ url, titleSelector }) => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-gpu'],
  });

  try {
    const page = await browser.newPage();
    await page.goto(url);

    const titles = evaluate(titleSelector, page);
    // const imgs = evaluate(imgSelector, page)

    await browser.close();

    if (list.length === 0) throw new Error('List is empty!');

    // return list;
    return titles;
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { service };
