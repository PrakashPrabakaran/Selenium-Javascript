const {By} = require("selenium-webdriver");

module.exports = {
  searchInput: By.name('q'),
  signInbutton: By.xpath("//span[@class='gb_Sd']")
};
