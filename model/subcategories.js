const mongoose = require("mongoose");

const subservice = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categoriesId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
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
  }
});

module.exports = mongoose.model("Subcategories", subservice);
