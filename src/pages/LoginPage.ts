
import HomePage from './HomePage';

const loginSelectors = require('../selectors/login.page.json');

export default class LoginPage {
    constructor() {}

    // +> Start definition element page

    get inputUserName() : WebdriverIO.Element {
        return browser.$(loginSelectors.inputUserNameLocator);
    }

    get inputPassword() : WebdriverIO.Element {
        return browser.$(loginSelectors.inputPasswordLocator);
    }

    get inputClientID() : WebdriverIO.Element {
        return browser.$(loginSelectors.inputClientIDLocator);
    }

    get btnLogin() : WebdriverIO.Element {
        return browser.$(loginSelectors.btnLoginLocator);
    }

    // => Finish definition Page's element

    // => Start definition Page's action

    enterLoginInformation(usernameValue:string, passwordValue:string, clientIDValue:string) : void {
        let isFilledField: boolean = false;
        while (!isFilledField) {
            this.inputClientID.doubleClick();
            browser.keys('Delete');
            this.inputClientID.setValue(clientIDValue);
            this.inputUserName.doubleClick();
            browser.keys('Delete');
            this.inputUserName.setValue(usernameValue);
            this.inputPassword.doubleClick();
            browser.keys('Delete');
            this.inputPassword.setValue(passwordValue);
            this.inputClientID.getAttribute('value') === clientIDValue  && this.inputUserName.getAttribute('value') === usernameValue && this.inputPassword.getAttribute('value') === passwordValue
            ? isFilledField = true
            : isFilledField = false;
        }
    }

    clickSubmitButton() : void {
        this.btnLogin.click();
    }

    login(usernameValue:string, passwordValue:string, clientIDValue:string): HomePage {
        this.enterLoginInformation(usernameValue, passwordValue, clientIDValue);
        this.clickSubmitButton();
        return new HomePage();
    }

    // => Finish definition Page's action
}
