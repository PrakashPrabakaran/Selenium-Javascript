const { Builder, By, Key } = require('selenium-webdriver');
const { OpenABrowser } = require('./OpenBrowser');

describe('Google Search', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('it should search for a term and click a location', async () => {
    const searchString = 'Automation testing with Selenium and JavaScript';

    await driver.get('https://www.google.com');

    await driver.findElement(By.name('q')).sendKeys(searchString, Key.ENTER);

    const title = await driver.getTitle();
    expect(title).toEqual(searchString + ' - Google Search');

    await driver.findElement(By.css('a[href="https://www.selenium.dev/"]')).click();

    const url = await driver.getCurrentUrl();
    expect(url).toEqual('https://www.selenium.dev/');
  });
});
