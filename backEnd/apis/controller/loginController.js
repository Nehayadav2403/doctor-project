const loginModel = require("../model/loginModel");

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/config");
const otpGenerator = require("otp-generator");
const accountSid = "AC2f5efe1c698c021c16b8715547e6f125";
const authToken = "08e7b2a0beb0df63ca300bd50a594878";
const client = require("twilio")(accountSid, authToken);
const OTP = otpGenerator.generate(6, {
  digits: true,
  lowerCaseAlphabets: false,
  upperCaseAlphabets: false,
  specialChars: false,
});

const loginController = async (req, res) => {
  const loginRes = await loginModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!loginRes) {
    res.send({ message: "Invalid User", status: 400 });
    return;
  }
  client.messages
    .create({
      body: OTP,
      from: "+12676098954",
      to: "+919174949868",
    })
    .then((message) => console.log(message.sid));
  res.send({ messasge: "Success", status: 200 });
};
const registerController = async (req, res) => {
  const register = await loginModel.findOne({ email: req.body.email });
  if (register) {
    res.send({ message: "email already registered", status: 400 });
    return;
  }
  const insert = await loginModel.create(req.body);
  res.send({ insert, message: "successfully", status: 200 });
  return;
};
const otpGeneratorController = async (req, res) => {
  console.log(OTP === req.body.otp);
  if (OTP === req.body.otp) {
    const loginRes = await loginModel.find();
    console.log(loginRes[0]);
    const {
      _id,
      firstName,
      lastName,
      address,
      mobileNo,
      qualificationDetails,
      doctorDesignation,
      certification,
      workingExperience,
      email,
      password,
    } = loginRes[0];
    const token = jwt.sign({ userId: _id }, SECRET_KEY, { expiresIn: "5h" });
    const data = {
      _id,
      firstName,
      lastName,
      address,
      mobileNo,
      qualificationDetails,
      doctorDesignation,
      certification,
      workingExperience,
      email,
      password,
    };
    data.token = token;
    console.log("token=>", data);
    res.send({ auth: true, data: data, message: "Success", status: 200 });
    return;
  } else {
    res.send({ auth: false, message: "otp not matched", status: 400 });
    return;
  }
};
module.exports = {
  loginController,
  registerController,
  otpGeneratorController,
};
