const request = require('supertest');

const app = require('../app');

describe('The Get capital route', () => {
  it('should return a list of capitals', async()=>{
    const response = await request(app).get('/api/capitals');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
        {
            "id": 1,
            "country": "France",
            "capital": "Paris"
            },
            {
            "id": 2,
            "country": "Spain",
            "capital": "Madrid"
            },
            {
            "id": 3,
            "country": "Germany",
            "capital": "Berlin"
            },
            {
            "id": 4,
            "country": "Italy",
            "capital": "Rome"
            },
            {
            "id": 5,
            "country": "Portugal",
            "capital": "Lisbon"
            }
    ]);
  })
})
