const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dbConnect = require("./db/dbConnect");
const Property = require("./db/propertyModel");

dbConnect();

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/properties", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/properties/add", (req, res) => {
  const { name, location, type, bathrooms, bedrooms, price, description, images } = req.body;
  const property = new Property({
    name,
    location,
    type,
    bathrooms,
    bedrooms,
    price,
    description,
    images,
  });

  property
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Property added successfully!",
        createdProperty: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

app.get("/properties/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = app;
