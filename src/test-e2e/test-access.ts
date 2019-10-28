import { assert } from 'chai';
import Navigation from '../pages/Navigation';

const dataTest = require('../data-test/data-test.json');


describe("Check to Access Home's link test suite", () => {
    let loginPage;
    let homePage;
    const nav: Navigation = new Navigation();
    before('setup', () => {
        loginPage = nav.loadFormAuthenticationPage();
        assert.isTrue(loginPage.inputUserName.isDisplayed());
        homePage = loginPage.login(dataTest.User.UserName, dataTest.User.Password, dataTest.User.ClientID);
        homePage.header.waitForDisplayed();
    });

    it('Test 01 -> Check if it is possible to access My Items', () => {
        homePage.header.waitForDisplayed();
        homePage = homePage.clickMenu(dataTest.MenuHome.MyItems);
        homePage.header.waitForDisplayed();
        assert.equal(homePage.header.getText(), dataTest.MenuHome.MyItems);

    });

    it('Test 02 -> Check if it is possible to access Allocations', () => {
        homePage = nav.loadHomePage();
        homePage.header.waitForDisplayed();
        homePage = homePage.clickMenu(dataTest.MenuHome.Allocations);
        homePage.header.waitForDisplayed();
        assert.equal(homePage.header.getText(), dataTest.MenuHome.Allocations);
    });

    it('Test 03 -> Check if it is possible to access Timesheets', () => {
        homePage = nav.loadHomePage();
        homePage.header.waitForDisplayed();
        homePage = homePage.clickMenu(dataTest.MenuHome.Timesheets);
        homePage.header.waitForDisplayed();
        assert.equal(homePage.header.getText(), dataTest.MenuHome.Timesheets);
    });

    it('Test 04 -> Check if it is possible to access Dockets', () => {
        homePage = nav.loadHomePage();
        homePage.header.waitForDisplayed();
        homePage = homePage.clickMenu(dataTest.MenuHome.Dockets);
        homePage.header.waitForDisplayed();
        assert.equal(homePage.header.getText(), dataTest.MenuHome.Dockets);
    });

    it('Test 05 -> Check if it is possible to access Forms', () => {
        homePage = nav.loadHomePage();
        homePage.header.waitForDisplayed();
        homePage = homePage.clickMenu(dataTest.MenuHome.Forms);
        homePage.header.waitForDisplayed();
        assert.equal(homePage.header.getText(), dataTest.MenuHome.Forms);
    });

    it('Test 06 -> Check if it is possible to access My Profile', () => {
        homePage = nav.loadHomePage();
        homePage.header.waitForDisplayed();
        homePage = homePage.clickMenu(dataTest.MenuHome.MyProfile);
        homePage.header.waitForDisplayed();
        assert.equal(homePage.header.getText(), dataTest.MenuHome.Profile);
    });

    it('Test 07 -> Check if it is possible to access Log out', () => {
        homePage = nav.loadHomePage();
        homePage.header.waitForDisplayed();
        loginPage = homePage.clickMenu(dataTest.MenuHome.LogOut);
        loginPage.inputUserName.waitForDisplayed();
        assert.isTrue(loginPage.inputUserName.isDisplayed());
    });
});
