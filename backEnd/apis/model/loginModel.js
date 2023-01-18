const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  //   gender: String,
  mobileNo: String,
  qualificationDetails: String,
  doctorDesignation: String,
  certification: String,
  workingExperience: String,
  email: String,
  password: String,
});

const loginModel = mongoose.model("login", loginSchema);

module.exports = loginModel;
