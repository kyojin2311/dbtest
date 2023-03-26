const mongoose = require("mongoose");

const car = require("./Car");
const CenterStaff = require("./CentreStaff");

const RegistrySchema = new mongoose.Schema({
  regisplace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CenterStaff",
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cars",
  },
  regisDate: {
    type: Date,
    default: date.now,
    required: true,
  },
  expiredDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Registry", RegistrySchema);
