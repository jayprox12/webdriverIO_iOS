const ui_kit_po = require("../pageObject/ui_kit_po")


describe('iOS', () => {
    it('find element by accessibility id', async () => {
        await ui_kit_po.alertViewsBtn.click()

        await ui_kit_po.simpleBtn.click()

        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
        //await expect(await ui_kit_po.alertBoxText()).toContain("A Short Title Is Best")
    })

    it('find element by tag name', async () => {
        // single element
        console.log(await ui_kit_po.staticText.getText());

        // multiple elements
        const textElements = await ui_kit_po.multiStaticText;

        for (const element of textElements) {
            console.log(await element.getText());
        }
    })
    it('find element by xpath', async () => {
        // xpath = (//tagname[@attribute='value'])
       // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        
       // await $('//XCUIElementTypeStaticText[@label="Simple"]').click();

        await ui_kit_po.alertViewsBtnXpath.click();
        
        await ui_kit_po.simpleBtnXpath.click();

        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    })

    it('find element by class chain', async () => {
        const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        
        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    })
    it('find element by predicate string', async () => {
        //const alertText = 'label == "Alert Views"';
        const alertText = 'value BEGINSWITH[c] "alert"';
        await $(`-ios predicate string:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    })
    xit('Exercise: Enter text in the search field', async () => {
        await $('~Search').click();
        await $('~Default').click();
        await $('//XCUIElementTypeSearchField').addValue("I love this course!");
        await expect($('//XCUIElementTypeSearchField')).toHaveAttr("value");
    
        await $('~Clear text').click();
        await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value");    
      });
})