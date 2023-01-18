const express = require("express");
const authVerification = require("../controller/authController");
const {
  doctorDashboardController,
  getDoctorDashboardController,
  getByIdDoctorDashboardController,
  updateDoctorDashboardController,
  deleteDoctorDashboardController,
} = require("../controller/doctorController");
const {
  loginController,
  registerController,
  otpGeneratorController,
} = require("../controller/loginController");
const router = express.Router();

//login api

router.post("/login", loginController);
router.post("/doctor-register", registerController);
router.post("/otp-sent", otpGeneratorController);

// doctor api

router.post("/doctor-dashboard", doctorDashboardController);
router.get(
  "/get-doctor-dashboard",
  authVerification,
  getDoctorDashboardController
);
router.get("/getById-doctor-dashboard/:id", getByIdDoctorDashboardController);
router.put("/update-doctor-dashboard/:id", updateDoctorDashboardController);
router.delete ("/delete-doctor-dashboard/:id",deleteDoctorDashboardController);

module.exports = router;
