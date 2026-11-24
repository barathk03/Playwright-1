exports.purchase= class purchase{
    constructor(page){
        this.page=page
        this.placeorder= "//button[text()='Place Order']"
        this.name="#name"
        this.country="#country"
        this.city="#city"
        this.card="#card"
        this.month="#month"
        this.year="#year"
        this .purchase='//button[text()="Purchase"]'
        this.ok='//button[text()="OK"]'
    }
    async purchaseitem(namee,countryy,cityy,cardd,monthh,yearr){
        await this.page.locator(this.placeorder).click();
        await this.page.locator(this.name).fill(namee);
        await this.page.locator(this.country).fill(countryy);
        await this.page.locator(this.city).fill(cityy);
        await this.page.locator(this.card).fill(cardd);
        await this.page.locator(this.month).fill(monthh);
        await this.page.locator(this.year).fill(yearr);
        await this.page.locator(this.purchase).click();
        await this.page.locator(this.ok).click()
    }

    

}