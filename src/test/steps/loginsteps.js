const { Before, After, Given, When, Then } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

let browser;
let page;
let loginPage;

Before(async function () {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  this.page = page;
  this.loginPage = loginPage;
  this.username = '';
  this.password = '';
  this.dialogMessage = '';
  this.page.on('dialog', async (dialog) => {
    this.dialogMessage = dialog.message();
    await dialog.accept();
  });
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});

Given('user navigates to the application', async function () {
  await this.loginPage.gotoLoginPage();
});

Given('User click on the login link', async function () {
  await this.loginPage.openLoginModal();
});

Given('user enter the username as {string}', async function (username) {
  this.username = username;
  await this.page.locator(this.loginPage.usernameInput).fill(username);
});

Given('user enter the password as {string}', async function (password) {
  this.password = password;
  await this.page.locator(this.loginPage.passwordInput).fill(password);
});

When('use click on the login button', async function () {
  await this.page.locator(this.loginPage.loginButton).click();
  await this.page.waitForTimeout(1000);
});

Then('login should be success', async function () {
  await this.loginPage.expectLoginSuccess(this.username);
});

Then('login should fail', async function () {
  const welcomeVisible = await this.page.locator('#nameofuser').isVisible().catch(() => false);

  if (welcomeVisible) {
    throw new Error('Expected login to fail but the welcome element is visible.');
  }

  const msg = (this.dialogMessage || '').toLowerCase();
  expect(msg).toMatch(/user does not exist|wrong password|invalid|alert/i);
});
