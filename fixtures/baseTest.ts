import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PetApi } from '../pages/PetApi';

import loginData from '../testData/login.json'; 




//////////////////////////////

type MyFixtures = {
    loginPage: LoginPage;
    userCredentials: typeof loginData;
    petApi: PetApi;
};

export const test = base.extend<MyFixtures>({
    
   
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    
    userCredentials: async ({}, use) => {
        await use(loginData);
    },

    petApi: async ({ request }, use) => {
        await use(new PetApi(request));
    },
});


export { expect } from '@playwright/test';