const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const propertySchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  postcode: { type: String, required: true },
  latitude: { type: Number },
  longitude: { type: Number },
  bedrooms: { type: Number },
  description: { type: String },
  price: { type: Number },
  images: [
    {
      url: { type: String },
      thumb: { type: String },
      caption: { type: String },
    },
  ],
});

module.exports = model.Properties || model("properties", propertySchema);
