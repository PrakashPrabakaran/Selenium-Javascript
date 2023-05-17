const {Builder, By, Key} = require("selenium-webdriver");
const locators = require("./locators");
const Methods = require("./Methods");

require("chromedriver");

// Set up the options for the Chrome browser
const chromeOptions = require("selenium-webdriver/chrome");
const options = new chromeOptions.Options();
options.addArguments("--start-maximized");

// Define the driver instance for the Chrome browser in the global scope
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(options)
  .build();

async function OpenABrowser(){
    const methods = new Methods(driver);


     await driver.get("http://google.com");
    
     await driver.findElement(locators.searchInput).sendKeys(searchString, Key.ENTER);

     var title = await driver.getTitle();
     console.log('Title is:', title);

     await driver.quit();

}

OpenBrowser().catch((err) => {
    console.error('Something went wrong!', err.stack);
});

module.exports = { OpenABrowser };
