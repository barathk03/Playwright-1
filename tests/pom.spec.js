import{test,expect}from '@playwright/test';
import{LoginPage}from'../pages/LoginPage'
import {Homepage } from '../pages/HomePage';
// import { purchase } from '../pages/PurchasePage';

test("test",async({page})=>{
// //Login
const login=new LoginPage(page);
await login.gotoLoginPage();
await login.login('pavanol', 'test123')
await page.waitForTimeout(5000)


// Home
 const home = new Homepage(page);
    await home.addproducttocart('Nexus 6');
    await page.waitForEvent();
    await home.gotocart();

//cart

const cart = new CartPage(page);
await page.waitForTimeout(3000);
const status = await cart.checkProductInCart('Nexus 6');
expect(status).toBe(true);

// //purchase
const purchasemob = new purchase(page);
await purchasemob.purchaseitem(barathkumar,india,chennai,12345678901234,august,2026)

});



