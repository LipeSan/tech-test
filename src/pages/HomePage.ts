import LoginPage from './LoginPage';
import AllocationPage from './AllocationsPage';

const homeSelectors = require('../selectors/home.page.json');

export default class HomePage {
    constructor() {}

    // => Start definition Page's Element

    get header() : WebdriverIO.Element {
        return browser.$(homeSelectors.headerLocator);
    }

    get btnClose() : WebdriverIO.Element {
        return browser.$(homeSelectors.btnCloseHeaderLocator);
    }

    // => Finish definition Page's Element

    // => Start definition Page's Action

    public getMenu(name:string): WebdriverIO.Element {
        return browser.$(homeSelectors.menuLocator + "//span[text()='" + name + "']");
    }

    public clickMenu(name:string):any {
        this.getMenu(name).click();
        if (name === 'Log out') {
            return new LoginPage();
        }else if(name === 'Allocations'){
            return new AllocationPage();
        }
        return new HomePage();

    }

    public clickButtonClose(): HomePage {
        this.btnClose.click();
        return new HomePage();
    }

    // => Finish definition Page's Action
}
