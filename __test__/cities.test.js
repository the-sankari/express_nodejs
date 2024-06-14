/* eslint-disable no-undef */
// const describe = require('jest');

const request = require("supertest");

const app = require("../app");

describe("The GET cities route", () => {
  it("should return alist of cities ", async () => {
    const response = await request(app).get("/api/cities");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        id: 1,
        name: "New York",
        country: "USA",
      },
      {
        id: 2,
        name: "London",
        country: "UK",
      },
      {
        id: 3,
        name: "Paris",
        country: "France",
      },
      {
        id: 4,
        name: "Tokyo",
        country: "Japan",
      },
    ]);
  });

  it("should return a 1 city of if id is present  ", async () => {
    const response = await request(app).get("/api/cities/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: 1,
      name: "New York",
      country: "USA",
    });
  });
});

describe("The POST /api/cities endpoint", () => {
  it("should create a new city", async () => {
    const newCity = {
      name: "Berlin",
      country: "Germany",
    };
    const response = await request(app)
      .post("/api/cities")
      .set("content", "application/json") // meta data writing standard
      .send(newCity);
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBeTruthy();
    expect(response.body.name).toEqual(newCity.name);
    expect(response.body.country).toEqual(newCity.country);
  });
});
