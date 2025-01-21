const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
  },
  shop: {
    type: String,
  },
  totalAmount: {
    type: Number,
  },
  singleproductprice: {
    type: Number,
  },
  sallerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Saller",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Assuming category is another collection
  },
});

module.exports = mongoose.model("OrderSummary", orderSchema);
