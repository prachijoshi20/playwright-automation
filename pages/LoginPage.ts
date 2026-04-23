import { Page, Locator } from '@playwright/test';

export class LoginPage {
      readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly loginError: Locator;

    constructor(page: Page) {
    this.page = page;
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginBtn = page.locator('[data-test="login-button"]');
    this.loginError = page.locator('[data-test="login-button"]');
  }

   async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

    async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}