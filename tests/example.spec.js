// @ts-check
// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

import { test, expect } from '@playwright/test';

test('orange', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.locator('//input[@name="username"]').fill('Admin');
await page.locator('//input[@type="password"]').fill('admin123');
await page.locator('//button[@type="submit"]').click();
   page.on('dialog', async dialog => {
         expect(dialog.type()).toBe('alert');
         expect(dialog.message()).toContain('Change your password');
         await dialog.accept();
     });
     await page.waitForTimeout(5000);
 await page.locator('//button[@title="Assign Leave"]').click();
 await page.waitForTimeout(2000);
await page.locator('//input[@placeholder="Type for hints..."]').fill('Vimal');
await page.locator('//div[@class="oxd-select-text--after"]').click()
await page.getByRole('option',{name:"CAN - Matternity"}).click()

await page.locator("//label[text()='Leave Balance']//following::input[1]").click()
await page.waitForTimeout(5000);
})