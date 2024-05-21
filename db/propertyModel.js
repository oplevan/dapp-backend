const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const propertySchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  bathrooms: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  images: [
    {
      url: { type: String },
      thumb: { type: String },
      caption: { type: String },
    },
  ],
});

module.exports = model.Properties || model("properties", propertySchema);
