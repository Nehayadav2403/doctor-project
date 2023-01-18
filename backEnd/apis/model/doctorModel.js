const mongoose = require("mongoose");

const doctorDashboardSchema = mongoose.Schema({
  patientName: String,
  apptDate: String,
  purpose: String,
  type: String,
  paidAmount: String,
});

const dashboard = mongoose.model("doctor-dashboard", doctorDashboardSchema);

const doctorDashboardModal = async (body) => {
  try {
    const data = await dashboard.create(body);
    return { data: data, status: 200, message: "success" };
  } catch (error) {
    return { data: error, status: 400, message: "failed" };
  }
};

const getDoctorDashboardModal = async () => {
  try {
    const data = await dashboard.find();
    return { data: data, status: 200, message: "success" };
  } catch (error) {
    return { data: error, status: 400, message: "failed" };
  }
};
const getByIdDoctorDashboardModal = async (id) => {
  try {
    const data = await dashboard.findById(id);
    return { data: data, status: 200, message: "success" };
  } catch (error) {
    return { data: error, status: 400, message: "failed" };
  }
};
const updateDoctorDashboardModal = async ({ id, body }) => {
  try {
    const data = await dashboard.findByIdAndUpdate(id, { $set: body });
    return { data: data, status: 200, message: "success" };
  } catch (error) {
    return { data: error, status: 400, message: "failed" };
  }
};
const deleteDoctorDashboardModal = async (id) => {
  try {
    const data = await dashboard.findByIdAndDelete(id);
    return { data: data, status: 200, message: "success" };
  } catch (error) {
    return { data: error, status: 400, message: "failed" };
  }
};

module.exports = {
  doctorDashboardModal,
  getDoctorDashboardModal,
  getByIdDoctorDashboardModal,
  updateDoctorDashboardModal,
  deleteDoctorDashboardModal,
};
