class UIKitCatalog {

    get alertViewsBtn() {
        return $('~Alert Views');
    }

    get alertViewsBtnXpath() {
        return $('//*[@name="Alert Views"]');
    }

    get simpleBtn() {
        return $('~Simple');
    }

    get simpleBtnXpath() {
        return $('//*[@label="Simple"]');
    }

    async alertBoxText() {
        await driver.getAlertText();
    }

    get staticText() {
        return $('XCUIElementTypeStaticText');
    }

    get multiStaticText() {
        return $$('XCUIElementTypeStaticText');
    }

    get signInBtn() {
        return $('//android.widget.Button[@resource-id="com.cbs.app:id/thirdCTAButton"]');
    }
}

module.exports = new UIKitCatalog();