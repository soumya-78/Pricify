const getSelector= require('./getSelector');
const puppeteer= require('puppeteer')

let browser;

async function getPrice(url){
  if(!browser) browser = await puppeteer.launch({headless:"new"});
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({width: 1080, height: 1024});
  const priceSelector = getSelector(url);
  console.log(url);
  console.log(priceSelector);
  const elm = await page.$(`.${priceSelector}`)
  let priceText = await (await elm.getProperty('textContent')).jsonValue();
  const price= parseInt(priceText.replace(',', '').replace('₹', ''));
  console.log(price)
  await page.close();
  return price;
}

module.exports = getPrice;