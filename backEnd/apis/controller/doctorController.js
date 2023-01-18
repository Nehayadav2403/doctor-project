const {
  doctorDashboardModal,
  getDoctorDashboardModal,
  getByIdDoctorDashboardModal,
  updateDoctorDashboardModal,
  deleteDoctorDashboardModal,
} = require("../model/doctorModel");

const doctorDashboardController = async (req, res) => {
  console.log("req=>", req.body);
  const dashboard = await doctorDashboardModal(req.body);
  res.send(dashboard);
};

const getDoctorDashboardController = async (req, res) => {
  const dashboard = await getDoctorDashboardModal();
  res.send(dashboard);
};

const getByIdDoctorDashboardController = async (req, res) => {
  const getByIdDashboard = await getByIdDoctorDashboardModal(req.params.id);
  res.send(getByIdDashboard);
};

const updateDoctorDashboardController = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const update = await updateDoctorDashboardModal({id, body});
  res.send(update);
};

const deleteDoctorDashboardController = async (req, res) => {
  const id = req.params.id;
  const deleteDashboard = await deleteDoctorDashboardModal(id);
  res.send(deleteDashboard);
}

module.exports = {
  doctorDashboardController,
  getDoctorDashboardController,
  getByIdDoctorDashboardController,
  updateDoctorDashboardController,
  deleteDoctorDashboardController
};
