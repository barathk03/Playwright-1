// | What you want to check  | Assertion         |
// | ----------------------- | ----------------- |
// | Element is displayed    | `toBeVisible()`   |
// | Exact text              | `toHaveText()`    |
// | Text contains something | `toContainText()` |
// | Input contains a value  | `toHaveValue()`   |
// | Checkbox selected       | `toBeChecked()`   |
// | Element is enabled      | `toBeEnabled()`   |
// | Element is disabled     | `toBeDisabled()`  |
// | Element exists in DOM   | `toBeAttached()`  |




// import{test,expect} from "@playwright/test"

// test("handling",async({page})=>{
//     await page .goto("https://testautomationpractice.blogspot.com/");

//     await page.locator("#sunday").check();
//     await expect(page.locator("#sunday")).toBeChecked();
//     expect(await page.locator("#sunday").isChecked()).toBeTruthy();
//     expect(await page.locator("#monday").isChecked()).toBeTruthy();

// })

// test("handle checkboxes",async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     const boxes=[
//         "#sunday",
//         "#monday"
//     ];
// //checkall
//     for(const loc of boxes){
//         await page.locator(loc).check();
//     }
   
// //uncheckall
//     for(const loc of boxes){
//         if (await page.locator(loc).isChecked()){
//             await page.locator(loc).uncheck()
//         }
//     }
//      await page.waitForTimeout(5000);
// })

// import{test,expect} from "@playwright/test"

// test("handle checkboxes",async({page})=>{

//     await page.goto("https://ui.vision/demo/webtest/frames/")

//     const allframes=await page.frames()
//     console.log("num of frames:",allframes.length)
// // //using name or url
//     await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"})
//     const frame_1= await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"})
//     await frame_1.locator("input[name='mytext1']").fill("hello")

// // //using frame locator
// const box= await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
// box.fill("hello")
// await page.waitForTimeout(5000);
// })

// ----------------------------

// import{test,expect} from "@playwright/test"
// test("end to end",async({page})=>{
//     await page.goto('https://demoblaze.com/')
//     await page.locator('//a[text()="Log in"]').click();
//     await page.locator("#loginusername").fill('skill@123');
//     await page.locator('#loginpassword').fill('skill@123');
//     await page.locator("//button[text()='Log in']").click();
//     //assertion for login
//     await expect(page.locator("#nameofuser")).toContainText("Welcome skill@123");

//     await page.locator("//a[text()='Samsung galaxy s6']").click();
//     //assertion product page visible
//     await expect (page.locator("//h2[text()='Samsung galaxy s6']")).toBeVisible()

//     // assertion alert BEFORE clicking Add to cart

//     page.on("dialog",async dialog=>{
//         expect(dialog.message()).toContain("Product added.") 
//         await dialog.accept();
//     })

//     await page.locator('//a[text()="Add to cart"]').click();

//     await page.locator('//a[text()="Cart"]').click();
// await expect(page.locator('//input[@id="city"]')).toHaveValue('chennai')

//     await page.locator('//input[@id="card"]').fill('12345678901234')
// await expect(page.locator('//input[@id="card"]')).toHaveValue('12345678901234')

//     await page.locator('//input[@id="month"]').fill('august')
// await expect(page.locator('//input[@id="month"]')).toHaveValue('august')

//     await page.locator('//input[@id="year"]').fill('2026')
// await expect(page.locator('//input[@id="year"]')).toHaveValue('2026')

// await expect(page.locator("//button[text()='Purchase']")).toBeVisible();
//     await page.locator("//button[text()='Purchase']").click();

//      // Assertion: purchase successful
//     await expect( page.locator('//h2[text()="Thank you for your purchase!"]')).toBeVisible();

//     await page.locator("//button[text()='OK']").click()

//     // await expect(page).toHaveURL('https://demoblaze.com/index.html')

// await page.waitForTimeout(5000);
// })    // assertion product exixtance in cart
//     await expect (page.locator('//tbody[@id="tbodyid"]/tr/td[2]').first()).toContainText('Samsung galaxy s6')

//     await page.locator("//button[text()='Place Order']").click();
//     //assertion to see placeorder tab is opened
//     await expect(page.locator('//h5[text()="Place order"]')).toBeVisible();
//  //to check the name content to be empty
//  await expect(page.locator('//input[@id="name"]')).toBeEmpty()
//     await page.locator('//input[@id="name"]').fill('barathkumar');
// await expect(page.locator('//input[@id="name"]')).toHaveValue('barathkumar')

//     await page.locator('#country').fill('india');
// await expect(page.locator('#country')).toHaveValue('india')

//     await page.locator('//input[@id="city"]').fill('chennai');
// 




