const express = require('express');
const puppeteer = require('puppeteer');
const { service } = require('./service');

const app = express();

// const settings = {}

app.get('/', async (req, res) => {
  const scrapedData = [];
  try {
    // if (req.body.url) throw new Error('Missing url');
    // if (req.body.titleSelector) throw new Error('Missing titleSelector');
    // const {url, titleSelector } = req.body

    const url = 'https://www.onet.pl/';
    const titleSelector = '.TitleWrapper_titleWrapper__1v73l';

    scrapedData = service({ url, titleSelector });

    if (scrapedData.length === 0) throw new Error('Empty Result');

    res.set('Content-Type', 'application/json');
    res.send(scrapedData);
  } catch (e) {
    res.send(e.message);
  }
  // const browser = await puppeteer.launch({
  //   headless: true,
  //   executablePath: '/usr/bin/google-chrome',
  //   args: ['--no-sandbox', '--disable-gpu'],
  // });
  // const page = await browser.newPage();
  // await page.goto('https://www.onet.pl/');
  // const imageBuffer = await page.screenshot();
  // await browser.close();

  // res.set('Content-Type', 'image/png');
});

/*
app.post('/', async (req, res) => {
  const scrapedData = [];
  try {
    // if (req.body.url) throw new Error('Missing url');
    // if (req.body.titleSelector) throw new Error('Missing titleSelector');
    // const {url, titleSelector } = req.body

    const url = 'https://www.onet.pl/';
    const titleSelector = '.TitleWrapper_titleWrapper__1v73l';

    scrapedData = service({ url, titleSelector });

    if (scrapedData.length === 0) throw new Error('Empty Result');

    res.set('Content-Type', 'application/json');
    res.send(scrapedData);
  } catch (e) {
    res.send(e.message);
  }
  // const browser = await puppeteer.launch({
  //   headless: true,
  //   executablePath: '/usr/bin/google-chrome',
  //   args: ['--no-sandbox', '--disable-gpu'],
  // });
  // const page = await browser.newPage();
  // await page.goto('https://www.onet.pl/');
  // const imageBuffer = await page.screenshot();
  // await browser.close();

  // res.set('Content-Type', 'image/png');
});
*/

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
