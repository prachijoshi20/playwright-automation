import{test,expect, Locator} from '@playwright/test'

// test('verify title',async({page})=>{
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

//     await expect(page).toHaveTitle("Practice Page")
// })

test.skip('locators test',async({page})=>{
    await page.goto("https://demo.nopcommerce.com/")
    await page.reload();
   
    //by ALT text
    const logo:Locator=page.getByAltText("nopCommerce demo store")
    await expect(logo).toBeVisible()
    //by text
    await expect(page.getByText(/Welcome to our store/i)).toBeVisible()
    //by role
    await expect(page.getByRole("link",{name:'Register'})).toBeVisible()
    await page.getByRole("link",{name:'Register'}).click()
    await expect (page.getByRole("heading",{name:'Register'})).toBeVisible()
    //by label
    await page.getByLabel(/first name:/i).fill('abc');

 
    
  
})


test.skip('locators test1',async({page})=>{
    await page.goto("https://practice.expandtesting.com/")
   
    //by ALT text
    const tips:Locator=page.getByAltText("Automation Tips")
    await expect(tips).toBeVisible()
    //by text
    await expect(page.getByText("Sample applications for practice test automation")).toBeVisible()
    
    //by role
    //  await page.locator('#search-input').fill('abc');
    //  await page.getByRole("button",{name:'Search'}).click()

     //xpath
     await page.locator('//section[@id="examples"]//a[@type="button"]').first().click()
//      await page.getByRole('heading', { 
//   name: 'Web inputs page for Automation Testing Practice' 
// }).isVisible();

await expect(page.getByRole('heading', { 
  name: 'Web inputs page for Automation Testing Practice' 
 })).toBeVisible()

 //filter
 await page.locator('//div[contains(@class,"col")]').filter({ hasText: 'Input: Text' }).getByRole('textbox', { name: 'input-text' }).fill('abcd')

})