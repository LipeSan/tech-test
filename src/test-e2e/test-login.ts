import { assert } from 'chai';
import Navigation from '../pages/Navigation';

const dataTest = require('../data-test/data-test.json');

describe('Check to Login functionality test suite', () => {
    let loginPage;
    let homePage;
    const nav: Navigation = new Navigation();
    before('setup', () => {
        loginPage = nav.loadFormAuthenticationPage();
        assert.isTrue(loginPage.inputUserName.isDisplayed());
    });

    it('Test 01 -> Check if it is possible to do login', () => {
        homePage = loginPage.login(dataTest.User.UserName, dataTest.User.Password, dataTest.User.ClientID);
        homePage.header.waitForDisplayed();
        browser.pause(1000);
    });

    it('Test 02 -> Check if it is possible to do Log out', () => {
        loginPage = homePage.clickMenu(dataTest.MenuHome.LogOut);
        loginPage.inputUserName.waitForDisplayed();
        assert.isTrue(loginPage.inputUserName.isDisplayed());
    });
});
