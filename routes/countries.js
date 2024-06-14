const express = require("express");
const router = express.Router();

const countries = [
  { id: 1, name: "India" },
  { id: 2, name: "USA" },
  { id: 3, name: "Canada" },
  { id: 4, name: "Australia" },
];

router.get("/", (req, res) => {
  res.json(countries);
});

router.get("/:id", (req, res) => {
  res.send(countries[req.params.id]);
});
module.exports = router;
