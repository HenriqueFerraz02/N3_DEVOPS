const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runTest() {
  const options = new chrome.Options();
  options.addArguments('--headless');
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.get('http://localhost:3000');
    await driver.wait(until.titleContains(''), 5000);
    const body = await driver.findElement(By.tagName('h1')).getText();
    if (!body.includes('N3 DevOps')) {
      throw new Error('Texto esperado nao encontrado na pagina');
    }
    console.log('Teste Selenium passou! Texto encontrado:', body);
  } finally {
    await driver.quit();
  }
}

runTest().catch(err => {
  console.error('Teste Selenium falhou:', err);
  process.exit(1);
});
