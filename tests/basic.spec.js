

// day 1
// import{test,expect} from"@playwright/test"
// import { log } from "console"

// test("testone",async({page})=>{
//     await page.goto("link")

//     await expect(page).toHaveTitle("")
//     await expect(page).toHaveURL("")

//     const one = await page.title
//     console.log(one);

//     const two =await page.url
//     console.log(two);
    
//     await page.waitForTimeout(5000)
// })


// day 2
// import {test,expect} from "@playwright/test"

// test("first test",async({page})=>{
//    await page.goto("https://demoblaze.com/")
//    await page.locator("#login2").click()
//    await page.locator("#loginusername").fill("skill@123")
//    await page.locator("#loginpassword").fill("skill@123")
//    await page.locator("button[onclick='logIn()']").click()

//    await page.waitForTimeout(4000)
// })



// day 3 multilocator
// import{test,expect} from "@playwright/test"

// test("testone",async({page})=>{
//     await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=815461303151&hvpos=&hvnetw=g&hvrand=1122750996502399980&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9185320&hvtargid=kwd-10573980&hydadcr=14453_2462831&mcid=4c22dcdee2bf3a71b0b832c5c4ba9c17&hvocijid=1122750996502399980--&hvexpln=nav&gad_source=1")

//     const product = page.locator("//li[@class='nav-li']/div/a")
//     await page.waitForSelector("//li[@class='nav-li']/div/a")
    
//     // await expect(product).toHaveCount(32)
//     const count = await product.count()

//     console.log(count);
    
//     let list = await page.$$("//li[@class='nav-li']/div/a")

//     await expect(list.length).toBe(32)

//     for(let newlist of list){
//         let title = await newlist . textContent()
//         console.log(title);
        
//     }
// })


// day 4 25/7/26
// input field
// import{test,expect} from "@playwright/test"

// test("inputfield",async({page})=>{
//     await page.goto("https://demoblaze.com/")
//     await page.locator("#login2").click()
//     await expect(page.locator("#loginusername")).toBeVisible()
//     await expect(page.locator("#loginusername")).toBeEmpty()
//     await expect(page.locator("#loginusername")).toBeEnabled()
//     await page.locator("#loginusername").fill("skill@123")
    
//     await expect(page.locator("#loginpassword")).toBeVisible()
//     await expect(page.locator("#loginpassword")).toBeEmpty()
//     await expect(page.locator("#loginpassword")).toBeEnabled()
//     await page.locator("#loginpassword").fill("skill@123")

//     await page.locator("//button[text()='Log in']").click()
//         await page.waitForTimeout(5000)

// })

// day 5 27/7
// beforeEach,beforeall,browser

// import{test,expect} from "@playwright/test"


// test.beforeEach(async({page})=>{
//     await page.goto("https://demoblaze.com/")
//     await page.locator("#login2").click()
//     await page.locator("#loginusername").fill("skill@123")
//     await page.locator("#loginpassword").fill("skill@123")
//     await page.locator("//button[text()='Log in']").click()
// })

// test("test one",async({page})=>{
//     await expect(page.locator("#nameofuser")).toHaveText("Welcome skill@123")

// })

// test("test two",async({page})=>{
//     await expect(page.locator("#logout2")).toHaveText("Log out")

// })

// test.afterEach(async({page})=>{
//     await page.locator("#logout2").click()

// })

// Beforeeach
// test one
// after Each

// beforeEach
// test two
// afterEach


// import{test,expect} from "@playwright/test"

// let page;

// test.beforeAll(async({browser})=>{
//     page = await browser.newPage()
//     await page.goto("https://demoblaze.com/")
//     await page.locator("#login2").click()
//     await page.locator("#loginusername").fill("skill@123")
//     await page.locator("#loginpassword").fill("skill@123")
//     await page.locator("//button[text()='Log in']").click()
// })

// test("test one",async()=>{
//     await expect(page.locator("#nameofuser")).toHaveText("Welcome skill@123")

// })

// test("test two",async()=>{
//     await expect(page.locator("#logout2")).toHaveText("Log out")

// })

// test.afterAll(async()=>{
//     await page.locator("#logout2").click()

// })

// beforeAll
// test one
// test two
// afterAll

// -----------------

// day 6 28/7/2026
// handle checkboxes,multiple checkboxes

// import{test,expect} from "@playwright/test"

// test("handle checkboxes",async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/");

//     await page.locator("#sunday").check();
//     await expect(page.locator("#sunday")).toBeChecked();
//     expect( await page.locator("#sunday").isChecked()).toBeTruthy();
//     expect(await page.locator("#Monday").isChecked()).toBeTruthy();

// })
// import{test,expect} from "@playwright/test"

// test("handling multiple checkboxes",async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     const checkboxes=[
//         "#sunday",
//         "#monday"
//     ];
// //checkall
//     for(const locator of checkboxes){
//         await page.locator(locator).check();
//     }
   
// //uncheckall
//     for(const locator of checkboxes){
//         if (await page.locator(locator).isChecked()){
//             await page.locator(locator).uncheck()
//         }
//     }
//      await page.waitForTimeout(5000);
// })

//handle frame
//url method and locator

// import{test,expect} from "@playwright/test"

// test("handle frame",async({page})=>{

//     await page.goto("https://ui.vision/demo/webtest/frames/")
//     // const allframes=await page.frames()
//     // console.log("num of frames:",allframes.length)
// //using name or url
//     await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"})
//     const frame_1= await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"})
// await frame_1.locator("input[name='mytext1']").fill("hello")

// //using frame locator
// // const box= await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
// // box.fill("hello")
// // await page.waitForTimeout( 5000);
// })

// --------------------------------
// day 7 29/7/26
// popup methods

// import{test,expect} from "@playwright/test"
// test("simple allert",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")

//     page.on("simple",async simple=>{
//         // expect(simple.type()).toContain("alert")
//         expect(simple.message()).toContain("I am an alert box!")
//         await simple.accept();
//     })

//     // await page.locator('//button[text()="Simple Alert"]').click()
//     await page.waitForTimeout(5000)
// })

// import{test,expect}from "@playwright/test"

// test("confirmation allert",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")

//     page.on("confirmation",async confirmation=>{
//         expect(confirmation.type()).toContain("cofirm")
//         expect(confirmation.message()).toContain("Press a button!")
//         await confirmation.accept();
//     })

//     await page.locator('//button[text()="Confirmation Alert"]')
//     await page.waitForTimeout(5000)
// })


// import{test,expect}from"@playwright/test"

// test("prompt allert",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")

//     page.on("prompts",async prompts=>{
//         expect(prompts.type()).toContain("prompt")
//         expect(prompts.message()).toContain("Please enter your name:")
//         //expect(prompts.defaultvalues()).toContain("Harry Potter")
//         await prompts.accept('john')
//     })
//     await page.click('//button[text()="Prompt Alert"]')

//     // await expect( page.locator("#demo")).toHaveText('Hello john! How are you today?')
//     await page.waitForTimeout(5000);
// })

//screenshot: on=> config.js file user{block}
//video: on => config.js file user{block} to see the video need to see the report page
//track: on => config.js file user{block} to see the track=> npx playwright show-trace test-results

// home page screenshot
// import{test,expect} from "@playwright/test"
// import path from "node:path"

// test("screenshot",async({page})=>{
//     await page.goto("https://demoblaze.com/")
//     await page.screenshot({path:'tests/scre/'+Date.now()+"home.png"})
// })

// full page screenshot
// test("full page screen",async({page})=>{
//     await page.goto("https://demoblaze.com/")
//     await page.screenshot({path:'tests/scre/'+Date.now()+"fullpage.png",fullPage:true})
// })

// element Screenshot
// test("element screenshot" ,async({page})=>{
//     await page.goto("https://demoblaze.com/")
//     await page.locator('//a[@id="nava"]/img').screenshot({path:'tests/scre/'+Date.now()+"Element.png"})
// })

// ------------------------
// day 8 30/7/2026

// --grep @sanity get all the sanity with combain
// --grep @sanity --grep-invert @sanity get only not sanity
// --grep @sanity@reg get only the combine one

// import{test,expect}from"@playwright/test"

// test("test1@sanity",async({page})=>{
//     console.log("test one");
// })
// test("test2@sanity",async({page})=>{
//     console.log("test two");
// })
// test("test3@reg",async({page})=>{
//     console.log("test three");
// })
// test("test4@reg",async({page})=>{
//     console.log("test four");    
// })
// test("test5@sanity@reg",async({page})=>{
//     console.log("test five"); 
// })
// to se only sanity or any 1 comment
// barath@Barathkumars-MacBook-Air Playwright-1 % npx playwright test basic.spec.js --headed --project=chromium --grep @sanity
// to se except one condition which we are mentioning
// barath@Barathkumars-MacBook-Air Playwright-1 % npx playwright test basic.spec.js --headed --project=chromium --grep-invert @sanity 
// ----------------------------
// // Handling table
// import{test,expect}from"@playwright/test"

// test("handling table",async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")
// const table=await page.locator('//table[@name="BookTable"]')

// // to find total number of rows and columns
// const columns=await table.locator('tbody tr th')
// console.log("num of col:",await columns.count())
// // to find total number of rows
// const rows = await table.locator("tbody tr")
// console.log("num of row:",await rows.count());

// expect(await columns.count()).toBe(4)
// expect(await rows.count()).toBe(7)

// const singleRowData = rows.filter({
//     hasText:"Master In JS"
// })
// const rowTexts = await singleRowData.allTextContents();
// console.log(rowTexts);
// })
// --------------------
// handle dropdowns
// import{test,expect}from"@playwright/test"
// test("handle dropdowns", async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")

//  multiple ways to select Option from the dropdown
//  await page.locator('#country').selectOption({label:"Canada"})//type 1
//  await page.locator('#country').selectOption("Canada")//type 2
// await page.locator('#country').selectOption({ value: "canada" });// type 3

//  1) check num of options in dropdown - type 1
// const options= await page.locator("#country option")
// await expect(options).toHaveCount(10);

// 2) check num of options in dropdown - type 2 easy method
// const options = await page.$$("#country option")
// console.log(options.length);
// await expect(options.length).toBe(10)//extra line

// 3) check num of options in dropdown - type 3 
// const content=await page.locator("#country").textContent()
// await expect(content.includes("India")).toBeTruthy();

// })

// -----------------------------
// day 9 31/7/2026

// mouse right click
// import{test,expect}from"@playwright/test"

// test("mouse right click",async({page})=>{
//     await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html")
//     const button=await page.locator('//span[text()="right click me"]')
//     //action happening
//     await button.click({button:"right"})
//     await page.waitForTimeout(5000)
// })

// import{test,expect}from"@playwright/test"
// test("keybord actions",async({page})=>{
//     await page.goto("https://gotranscript.com/text-compare")
//     await page.locator('textarea[name="text1"]').fill("welcome to automatio")
//     await page.keyboard.press('Control+A')
//     await page.keyboard.press('Control+C')
//     await page.keyboard.press('Tab')
    //  await page.locator('textarea[name="text2"]').click();    

//     await page.keyboard.press('Control+V')
//     await page.waitForTimeout(5000)
// })

// import{test,expect}from"@playwright/test"
// test('mouse hover',async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     //hover over the language menu
//     await page.locator('.dropbtn').hover();
// await page.locator('//a[text()="Laptops"]').hover();
//     await page.waitForTimeout(5000);

// })
// await page.locator('.dropbtn').hover();
// await page.locator('//a[text()="Laptops"]').hover();
// --------------------------------------------
// day 10 1/8/2026
// mouse double click 

// import{test,expect}from"@playwright/test"
// test("mouse double click",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     const btncopy=await page.locator('//button[text()="Copy Text"]')
//     //double click
//     await btncopy.dblclick()
//     const f2 =await page.locator("#field2")
//     await expect(f2).toHaveValue("Hello World!")
//     await page.waitForTimeout(5000)
// })

// // boostrap dropdown
// import{test,expect}from"@playwright/test"
// test("boostrap dropdown",async({page})=>{
//     await page.goto("https://www.w3schools.com/bootstrap/bootstrap_dropdowns.asp")
//     await page.locator("#menu1").click()//click on the dropdown

//     // // type 1
//     // const options=await page.locator('//ul[@role="menu"]//a')
//     // await expect(options).toHaveCount(19)//it count all the dropdown options
//     //type 2
//     const options=await page.$$('//ul[@role="menu"]//a')
//     expect(options.length).toBe(19)

// await page.waitForTimeout(5000)
// })

// ayto suggest dropdown("Autocomplete")

// import{test,expect}from"@playwright/test"
// test("ayto suggest dropdown",async({page})=>{
//     await page.goto("https://www.w3schools.com/howto/howto_js_autocomplete.asp")
//     await page.locator("#myInput").fill('Z')

//     const fromcityoptions= await page.$$('#myInputautocomplete-list')
//     for(let options of fromcityoptions)
//     {
//         const value= await options.textContent()
//         console.log(value);
//         if(value.includes('imbabwe'))
//         {
//             await options.click()
//             break
//         }
//     }
// await page.waitForTimeout(5000)
// })

// ----------------------------------------
// day 11 3/8/2026
// date picker

import{test,expect}from"@playwright/test"
test("date picker",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //date picker
    const year="2024"
    const month="March"
    const date="27"
    await page.click('//input[@id="datepicker"]')//open calender

    while (true) 
    {
        const currentyear= await page.locator('//span[@class="ui-datepicker-year"]').textContent()
        const currentmonth=await page.locator('//span[@class="ui-datepicker-month"]').textContent()
        if(currentyear==year && currentmonth==month)
        {
            break;
        }
        await page.locator('//span[text()="Prev"]').click()
    }
    await page.click(`//a[@class='ui-state-default'] [text()='${date}']`)
    await page.waitForTimeout(3000)

})

// import{test,expect}from"@playwright/test"
// test("drag and drop",async({page})=>{
//    await page.goto('https://www.w3schools.com/html/html5_draganddrop.asp')
//    const rome= await page.locator('//p[text()="Drag the W3Schools image into the second rectangle."]/following-sibling::div/img')
//    const italy =await page.locator('//p[text()="Drag the W3Schools image into the second rectangle."]/following-sibling::div[2]')
// //aproach 1 type 1
// await rome.hover()
// await page.mouse.down()
// await italy.hover()
// await page.mouse.up()

// //type 2 one line method
// // await rome.dragTo(italy)
// await page.waitForTimeout(5000)

// })

// // tools 
// // skip only fixme fail 

// import{test,expect}from"@playwright/test"

// test.skip("only",async({page})=>{
//     console.log("this is test 1");
// })

// test.only("only2",async({page})=>{
//     console.log("this is test 2");
// })

// test("fixme",async({page})=>{
//     console.log("this is test 3");
//     test.fixme()
//     console.log("this is test 4");
// })

// test("fail",async({page})=>{
//     test.fail()//this case need to fail
//     console.log("this is fail test");
//     expect(3).toBe(1)
//     await page.waitForTimeout(3000)
// })
// ------------------------------
// day 12 4/8/2026
// file uploads/ single file and multiple file 
// import{test,except}from "@playwright/test"
// test("single file",async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator("#singleFileInput").click()
//     await page.locator("#singleFileInput").setInputFiles()
//     await page.waitForTimeout(3000)
// })
// test("multiple file",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.locator("#multipleFilesInput").click()
//     await page.locator("#multipleFilesInput").setInputFiles([])//array method by[]
//     await page.waitForTimeout(3000)
//     except(await page.locator()).tohavetext()//1st file
//     except(await page.locator()).tohavetext()//2nd file

// }) doubtttttttttttttttt

// ----------qq-------------------------

// day 13 5/8/2026
// habdle multiple pages/windows
// import{test,except, chromium, expect}from "@playwright/test"
// test('handle multiple pages,windows',async({})=>{
//     const browser= await chromium.launch({headless:false})
//     const context= await browser.newContext()
//     //first tab
//     const page1=await context.newPage()

//     await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     await expect(page1).toHaveTitle('OrangeHRM')//extra step for expect

//     //opening new tab by context method
//     const pagepromise= context.waitForEvent('page')

//     await page1.locator('//p[@class="oxd-text oxd-text--p orangehrm-copyright"][2]/a').click()

//     //opening
//     const newPage = await pagepromise
//     await newPage.waitForLoadState()

//     await except(newPage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM')

// await page1.waitForTimeout(3000)

//     //close the second tab 1 method
//     await newPage.close()
//     //switch back to first tab 2nd method
//     await page1.bringToFront()
// })

// import{test,except}from "@playwright/test"
// import { type } from "node:os"
// test('inbuild',async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     //locating the image with the help of image text
//     await page.locator('//img[@alt="company-branding"]')
// //    await page.getByAltText("company-branding")//to be visible not appearing

//    const logo =await page.getByAltText("company-branding")
// //    await except(logo)//to be visible not appearing

//    await page.getByPlaceholder("Username").fill("Admin")
//    await page.getByPlaceholder("Password").fill("admin123")

//    await page.getByRole("button",{type:"Submit"}).click()

   
// })

// --------------------------------
// day 14 6/8/2026
// page object module
// loginpage
// homescreen
// cart

import{test,expect}from "@playwright/test"
test("login",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.getByPlaceholder('Search').fill('car');
await page.getByPlaceholder('Search').press('Enter');
})





