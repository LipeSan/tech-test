import LoginPage from './LoginPage';
import HomePage from './HomePage';
import AllocationsPage from './AllocationsPage';

const loginLocators = require('../selectors/login.page.json');
const homeLocators = require('../selectors/home.page.json');
const allocationsLocators = require('../selectors/allocations.page.json');

export default class Navigation {

    public loadFormAuthenticationPage() : LoginPage {
        browser.url('/#/login');
        browser.$(loginLocators.inputUserNameLocator).waitForDisplayed();
        return new LoginPage();
    }

    public loadHomePage() : HomePage {
        browser.url('/#/menu');
        browser.$(homeLocators.headerLocator).waitForDisplayed();
        browser.pause(2000);
        return new HomePage();
    }

    public loadAllocationsPage(date:string) : AllocationsPage {
        browser.url('/#/allocations/calendar/'+date);
        browser.$(allocationsLocators.headerLocator).waitForDisplayed();
        return new AllocationsPage();
    }
}
