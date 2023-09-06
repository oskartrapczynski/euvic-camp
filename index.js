const functions = require('@google-cloud/functions-framework');
const { service } = require('./service');

functions.http('scraper', (req, res) => {
  try {
    // if (!req.titleSelector) throw new Error('Missing titleSelector');
    // if (!req.url) throw new Error('Missing url');

    // const { url, titleSelector } = req.body;

    const url = 'https://www.onet.pl/';
    const titleSelector = '.TitleWrapper_titleWrapper__1v73l';

    const resp = service({ url, titleSelector });

    console.log(resp);

    res.send(`Hello ${req.query.name || req.body.name || 'World'}!`);
  } catch (e) {
    res.send(e.message);
  }
});
