import { test, expect } from '../fixtures/baseTest';


test('Valid login test@smoke', async ({ loginPage, userCredentials, page }) => {
  //const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(userCredentials.validUser.username, userCredentials.validUser.password);

  await expect(page).toHaveURL(/inventory/);
});

test('Invalid login test',  async ({ loginPage, userCredentials, page }) => {
  

  await loginPage.goto();
  await loginPage.login(userCredentials.invalidUser.username, userCredentials.invalidUser.password);

 
   await expect(loginPage.loginError).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toHaveText(userCredentials.invalidUser.errorMsg);
});