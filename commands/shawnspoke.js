module.exports = {
    name: 'shawnspoke',
    description: "here we translate shawn",
    async execute(client, message, args, Discord) {
        const cdriver = require('chromedriver');
        const {Builder, By, Key, until} = require('selenium-webdriver');
        let driver = await new Builder().forBrowser('chrome').build();
        try {
          await driver.get('https://www.reverso.net/spell-checker/english-spelling-grammar/');
          await driver.findElement(By.id('startText')).sendKeys(args);
          await driver.findElement(By.id('btnSpell')).click();
          await driver.wait(until.elementLocated(By.className('sentence corrected')));
          const sentence = await driver.findElement(By.className('sentence corrected')).getText();
          message.channel.send(sentence);
        } finally {
            await driver.quit();
        }
    }
}