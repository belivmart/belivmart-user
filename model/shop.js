const mongoose = require("mongoose");
const subcategories = require("./subcategories");

const subservice = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Isclosed: {
    type: String,
    default: "false",
  },
  active: {
    type: String,
    default: "true",
  },
  image: {
    type: String,
    required: true,
  },
  positionId: {
    type: Number,
  },
  subcategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcategories",
  }],
});

module.exports = mongoose.model("Shop", subservice);
