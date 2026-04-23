import { test, expect } from '@playwright/test';

const BASE_URL = 'https://fakerestapi.azurewebsites.net/api/v1';
test('GET Request - Get all users', async ({ request }) => {
    const response = await request.get('https://fakerestapi.azurewebsites.net/api/v1/Users');
    
    const body=await response.json();
    debugger;
    expect(response.status()).toBe(200);
    console.log('--- API RESPONSE START ---');
  console.log(JSON.stringify(body, null, 2));
  console.log('--- API RESPONSE END ---');
   
  });

  test('GET Request - Get specific user with id', async ({ request }) => {
    const response = await request.get('https://fakerestapi.azurewebsites.net/api/v1/Users/9');
    
    const body=await response.json();
    debugger;
    expect(response.status()).toBe(200);
    console.log('--- API RESPONSE START ---');
  console.log(JSON.stringify(body, null, 2));
  console.log('--- API RESPONSE END ---');
   
  });

  test('POST Reguest - Create and then fetch user', async ({ request }) => {
  // 1. Create User
  const postResponse = await request.post('https://fakerestapi.azurewebsites.net/api/v1/Users', {
    data: {
  "id": 12,
  "userName": "user12",
  "password": "user12"
}
  });
  const newUser = await postResponse.json();
  const createdId = newUser.id; // Get the ID from the response

  // Fetch User using the parameter from step 1-Not working as API does notr support
  const getResponse = await request.get(`https://fakerestapi.azurewebsites.net/api/v1/Users/${createdId}`);
  
  expect(getResponse.status()).toBe(200);
  const getBody = await getResponse.json();
  expect(getBody.userName).toBe('user11');
});