const { By } = require("selenium-webdriver");
const locators = require("./locators");

class Methods {
  constructor(driver) {
    this.driver = driver;
    this.locators = locators;
  }

  async signIN() {
    await this.driver.findElement(this.locators.signInbutton).click();
    console.log("Successfully clicked on location");
  }
}

module.exports = Methods;
