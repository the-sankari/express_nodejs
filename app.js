const express = require("express");
const citiesRoutes = require("./routes/cities");
const countriesRoutes = require("./routes/countries");
const capitalRoutes = require("./routes/capitals");
const app = express();
app.use(express.json());

app.use("/api/cities", citiesRoutes);
app.use("/api/countries", countriesRoutes);
app.use("/api/capitals", capitalRoutes);

app.get("/api/:id/:name", (req, res) => {
  res.send(req.params);
});

module.exports = app;
