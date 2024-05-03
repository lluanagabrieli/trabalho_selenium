const { Builder, By, until } = require('selenium-webdriver');

(async function teste() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.netshoes.com.br/');

        const menuHamburguer = await driver.wait(until.elementLocated(By.css('.navbar__header .navbar__hamburger')), 10000);
        await menuHamburguer.click();

        const abaMasculino = await driver.wait(until.elementLocated(By.xpath(`//a[contains(@href, "/lst/mi-masculino?mi=hm_ger_mntop_H-&psn=Menu_Top")]`)), 10000);
        await abaMasculino.click();

         const checkbox = await driver.wait(until.elementLocated(By.css('.filters__filter__list__item__label')), 10000);
         await checkbox.click();

        await driver.sleep(3000);
    } finally{    
    }
}
)();