
import { test, expect } from '../fixtures/baseTest';

test('GET Request - GET Pet by ID @smoke', async ({ petApi }) => {
    const response = await petApi.getPetById(5);
    
   
    expect(response.status()).toBe(200);
   console.log('--- GET pet API RESPONSE START ---');
  console.log(JSON.stringify(response.body, null, 2));
  console.log('--- GET pet API RESPONSE END ---');
   
  });

  test('POST Request - Add new Pet', async ({ request }) => {
  const requestBody = {
  "id": 10,
  "category": {
    "id": 0,
    "name": "ABC"
  },
  "name": "CAT",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
};
  const response = await request.post('https://petstore.swagger.io/v2/pet', {
    data: requestBody,
  })
   expect(response.status()).toBe(200);
     const responseBody = await response.json();
  console.log(responseBody);
  //verify using get
   const getResponse = await request.get('https://petstore.swagger.io/v2/pet/10');
    
    const body=await getResponse.json();
expect(getResponse.status()).toBe(200);
//console.log(JSON.stringify(body, null, 2));
     expect(body.id).toBe(10);
 
  });


  test('POST1 Request - Add and Verify new Pet', async ({ petApi }) => {
        const newPetData = {
            id: 10,
            name: "CAT",
            status: "available",
            category: { id: 0, name: "ABC" }
        };

        // Add the pet
        await petApi.addNewPet(newPetData);

        // Verify using the GET method from our API object
        const body = await petApi.getPetById(10);
        expect(body.name).toBe("CAT");
        expect(body.id).toBe(10);
    });