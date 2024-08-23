const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  uid: Number,
  name: String,
  email: String,
  designation: String,
  salary: Number,
});

module.exports = mongoose.model("Employee", employeeSchema);
