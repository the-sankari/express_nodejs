const express = require("express");
const router = express.Router();
// Array of capital objects, each with an id, country, and capital
const capitals = [
  { id: 1, country: "France", capital: "Paris" },
  { id: 2, country: "Spain", capital: "Madrid" },
  { id: 3, country: "Germany", capital: "Berlin" },
  { id: 4, country: "Italy", capital: "Rome" },
  { id: 5, country: "Portugal", capital: "Lisbon" },
];

// GET request to retrieve all capitals
router.get("/", (req, res) => {
  // Return the entire capitals array as JSON
  res.json(capitals);
});

// GET request to retrieve a capital by ID
router.get("/:id", (req, res) => {
  // Find the capital object with the matching ID
  const capital = capitals.find(
    (capital) => capital.id === parseInt(req.params.id)
  );
  // If no capital is found, return a 404 error
  if (!capital) res.status(404).send("Capital not found");
  // Return the found capital object as JSON
  res.json(capital);
});

// POST request to create a new capital
router.post("/", (req, res) => {
  // Create a new capital object with the next available ID
  const capital = {
    id: capitals.length + 1,
    country: req.body.country,
    capital: req.body.capital,
  };
  // Add the new capital to the capitals array
  capitals.push(capital);
  // Return the new capital object as JSON
  res.json(capital);
});

// PUT request to update a capital by ID
router.put("/:id", (req, res) => {
  // Find the capital object with the matching ID
  const capital = capitals.find(
    (capital) => capital.id === parseInt(req.params.id)
  );
  // If no capital is found, return a 404 error
  if (!capital) res.status(404).send("Capital not found");
  // Update the capital object with the new country and capital
  capital.country = req.body.country;
  capital.capital = req.body.capital;
  // Return the updated capital object as JSON
  res.json(capital);
});

// DELETE request to delete a capital by ID
router.delete("/:id", (req, res) => {
  // Find the index of the capital object with the matching ID
  const index = capitals.findIndex(
    (capital) => capital.id === parseInt(req.params.id)
  );
  // If no capital is found, return a 404 error
  if (index === -1) res.status(404).send("Capital not found");
  // Remove the capital object from the capitals array
  capitals.splice(index, 1);
  // Return a success message as JSON
  res.json({ message: "Capital deleted successfully" });
});

// Export the router
module.exports = router;
