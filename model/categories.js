const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  Isclosed: {
    type: String,
    default: "false",
  },
  image: {
    type: String,
    required: true,
  },
  poistionId: {
    type: String,
  },
});

module.exports = mongoose.model("Categories", serviceSchema);
