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
