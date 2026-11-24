// exports.LoginPage= class LoginPage{
//     constructor(page){
//         this.page=page;
//         this.loginlink='#login2'
//         this.usernameinput='#loginusername'
//         this.passwordinput='#loginpassword'
//         this.loginbutton='//button[@onclick="logIn()"]'
//     }

const { expect } = require("@playwright/test");

//     async gotologinpage(){
//         await this.page.goto("https://demoblaze.com/")
//     }

// async login(username,Password){

// await this.page.locator(this.loginlink).click();//await this.loginLink.click();
// await this.page.locator(this.usernameinput).fill(username)
// await this.page.locator(this.passwordinput).fill(Password);
// await this.page.locator(this.loginbutton).click()

// }
// }

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.homeURL = 'https://demoblaze.com/';
        this.loginLink = '#login2';
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.loginButton = '//button[@onclick="logIn()"]';
        this.loginText = page.locator("//a[text()='Log in']");
        this.welcomeText = page.locator('#nameofuser');
    }

    async gotoLoginPage() {
        await this.page.goto(this.homeURL);
    }

    async openLoginModal() {
        await this.page.locator(this.loginLink).click();
        await this.page.locator('#logInModal').waitFor({ state: 'visible' });
    }

    async login(username, password) {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }

    async expectLoginSuccess(username) {
        await expect(this.welcomeText).toContainText(`Welcome ${username}`);
    }

    async expectLoginFailure() {
        const nameLabel = this.welcomeText;
        const visible = await nameLabel.isVisible().catch(() => false);
        expect(visible).toBeFalsy();
    }
}
