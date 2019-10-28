import { assert } from 'chai';
import Navigation from '../pages/Navigation';

const dataTest = require('../data-test/data-test.json');

describe("Check to comfirm a allocation test suite", () => {
    let loginPage;
    let homePage;
    let allocationsPage;
    const nav: Navigation = new Navigation();
    before('setup', () => {
        loginPage = nav.loadFormAuthenticationPage();
        assert.isTrue(loginPage.inputUserName.isDisplayed());
        homePage = loginPage.login(dataTest.User.UserName, dataTest.User.Password, dataTest.User.ClientID);
        homePage.header.waitForDisplayed();
    });

    it('Test 01 -> Check if it is possible to access Allocations', () => {
        homePage.header.waitForDisplayed();
        allocationsPage = homePage.clickMenu(dataTest.MenuHome.Allocations);
        allocationsPage.header.waitForDisplayed();
        assert.equal(allocationsPage.header.getText(), dataTest.MenuHome.Allocations);
    });

    it('Test 02 -> Check if it is possible to Confirm a Allocation at '+dataTest.Allocation.date.year+"-"+dataTest.Allocation.date.month+"-"+dataTest.Allocation.date.day, () => {
        nav.loadAllocationsPage(dataTest.Allocation.date.year+"-"+dataTest.Allocation.date.month+"-"+dataTest.Allocation.date.day);
        allocationsPage = allocationsPage.confirmAllocation(dataTest.Allocation.date, dataTest.Allocation.task);
        allocationsPage.statusConfirmated.waitForDisplayed();
        assert.isTrue(allocationsPage.statusConfirmated.isDisplayed());
    });
});
