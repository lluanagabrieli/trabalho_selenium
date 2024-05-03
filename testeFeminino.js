const { Builder, By, until } = require('selenium-webdriver');

(async function teste2() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.netshoes.com.br/');

        const menuHamburguer = await driver.wait(until.elementLocated(By.css('.navbar__header .navbar__hamburger')), 10000);
        await menuHamburguer.click();

        const abaFeminino = await driver.wait(until.elementLocated(By.xpath(`//a[contains(@href, "/lst/mi-feminino?mi=hm_ger_mntop_M_sub&psn=Menu_Top")]`)), 10000);
        await abaFeminino.click();

         const checkbox = await driver.wait(until.elementLocated(By.css('.filters__filter__list__item__label')), 10000);
         await checkbox.click();
 
    } finally{    
    }
}
)();
