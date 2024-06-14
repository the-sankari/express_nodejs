const express = require("express");
const router = express.Router();

// Array of city objects, each with an id, name, and country
const cities = [
  { id: 1, name: "New York", country: "USA" },
  { id: 2, name: "London", country: "UK" },
  { id: 3, name: "Paris", country: "France" },
  { id: 4, name: "Tokyo", country: "Japan" },
];

// GET request to retrieve all cities
router.get("/", (req, res) => {
  // Return the entire cities array as JSON
  res.json(cities);
});

// GET request to retrieve a city by ID
router.get("/:id", (req, res) => {
  // Convert the ID to an integer
  const id = parseInt(req.params.id);
  // Find the city object with the matching ID
  const city = cities.find((city) => city.id === id);
  // If no city is found, return a 404 error
  if (!city) res.status(404).json({ error: "City not found" });
  // Return the found city object as JSON
  res.json(city);
});

// POST request to create a new city
router.post("/", (req, res) => {
  if (!req.body.name || !req.body.country) {
    res.status(400).json({ error: "Name and country are required" });
    return;
  }
  const newCity = { id: cities.length + 1, name: req.body.name, country: req.body.country };
  cities.push(newCity);
  res.json(newCity);
  res.sendStatus(200);
});

module.exports = router;