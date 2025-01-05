const mongoose = require("mongoose");
const service = require("./categories");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: { 
    type: String,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  active: { 
    type: String,
    default: "true",
  },
  poistionId: {
    type: String,
  },
  Isclosed: {
    type: String,
    default: "false",
  },
  // ShopId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "ShopName",
  // },

  ourprice: {
    type: Number,
  },
  price: {
    type: Number,
  },
  FinalPrice: {
    type: Number,
  },
  discountPrice: {
    type: Number,
  },

  ShopId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
    },
  ],
  subcategories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcategories",
    },
  ],

  openTime: {
    type: String,
  },
  closeTime: {
    type: String,
  },

  minorderquantity: {
    type: Number,
  },
  packof: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", serviceSchema);
