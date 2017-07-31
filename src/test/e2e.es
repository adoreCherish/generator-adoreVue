var webdriver = require('selenium-webdriver'),
    By = webdriver.By;

var driver = new webdriver.Builder()
    .withCapabilities({
        browserName: 'chrome',
        'chromeOptions': {
            args: ['test-type']
        }
    })
    .build();

driver.get("http://localhost:3000/index");
const items = driver.findElement(By.tagName('a'));
items.click();
// driver.wait(items.getText(), 1000);
driver.quit();