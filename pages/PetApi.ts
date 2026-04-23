import { APIRequestContext, expect } from '@playwright/test';

export class PetApi {
    private request: APIRequestContext;
    private baseUrl = 'https://petstore.swagger.io/v2/pet';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async getPetById(id: number) {
        return await this.request.get(`${this.baseUrl}/${id}`);
        // We handle the basic assertion here so the test stays clean
       // expect(response.status()).toBe(200);
        //return await response.json();
    }

    async addNewPet(petData: object) {
        return  await this.request.post(this.baseUrl, {
            data: petData,
        });
        //expect(response.status()).toBe(200);
        //return await response.json();
    }
}