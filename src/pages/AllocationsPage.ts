import HomePage from "./HomePage";

const allocationsSelectors = require('../selectors/allocations.page.json');

export default class AllocationsPage{
    constructor() {}

    // => Start definition Page's Element

    get listAllocations(): WebdriverIO.Element{
        return browser.$(allocationsSelectors.listOfAlocationsLocator);
    }

    get header() : WebdriverIO.Element {
        return browser.$(allocationsSelectors.headerLocator);
    }

    get btnConfirm() : WebdriverIO.Element {
        return browser.$(allocationsSelectors.btnConfirmLocator);
    }

    get btnOk() : WebdriverIO.Element {
        return browser.$(allocationsSelectors.btnOkLocator);
    }

    get statusConfirmated() : WebdriverIO.Element {
        return browser.$(allocationsSelectors.statusConfirmatedLocator);
    }

    // => Finish definition Page's Element

    // => Start definition Page's Action

    public getAllocation(date:string, task:string): WebdriverIO.Element{
        const element: WebdriverIO.Element =  this.listAllocations.$("//div[contains(@id, '"+ date +"')]/div/div/ul/li/div/div/span[text()='"+ task +"']");
        return element;
    }

    public clickAllocation(date:string, task:string){
        let element = this.getAllocation(date, task);
        element.scrollIntoView({block: "end"});
        element.doubleClick();
    }

    public clickBtnConfirm(){
        this.btnConfirm.click();
    }

    public clickBtnOk(){
        this.btnOk.click();
    }

    public confirmAllocation(date:any, task:string): AllocationsPage{
        let dateAux = this.trasformDate(date);
        this.clickAllocation(dateAux, task);
        this.btnConfirm.waitForDisplayed();
        this.clickBtnConfirm();
        this.btnOk.waitForDisplayed();
        this.clickBtnOk();
        return new AllocationsPage();
    }

    public trasformDate(date:any):string{
        let dateAux:string = null;
        switch (date.month) {
            case "01":
                dateAux = "January "+date.day+", "+date.year;
                break;
            case "02":
                dateAux = "February "+date.day+", "+date.year;
                break;
            case "03":
                dateAux = "March "+date.day+", "+date.year;
                break;
            case "04":
                dateAux = "April "+date.day+", "+date.year;
                break;
            case "05":
                dateAux = "May "+date.day+", "+date.year;
                break;
            case "06":
                dateAux = "June "+date.day+", "+date.year;
                break;
            case "07":
                dateAux = "July "+date.day+", "+date.year;
                break;
            case "08":
                dateAux = "August "+date.day+", "+date.year;
                break;
            case "09":
                dateAux = "September "+date.day+", "+date.year;
                break;
            case "10":
                dateAux = "October "+date.day+", "+date.year;
                break;
            case "11":
                dateAux = "November "+date.day+", "+date.year;
                break;
            case "12":
                dateAux = "December "+date.day+", "+date.year;
                break;
            default:
                break;
        }
        return dateAux;
    }

    // => Finish definition Page's Action

}