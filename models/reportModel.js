const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  msg: {
    type: String,
  },
  currentLocation: {
    type: String,
  },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
