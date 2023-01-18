import { NavLink, useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { deleteApiHandler, getApiHandler } from "../../../apiHandler";
import EditIcon from "@mui/icons-material/Edit";
import DoctorModal from "./doctorModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { userContext } from "../../../../App";
import swal from "sweetalert";

const Dashboard = () => {
  const user = React.useContext(userContext);
  const { currentId, setCurrentId, handleOpen, rows, getDoctorDashboard } =
    user;
  console.log("currentId", currentId);

  const columns = [
    {
      field: "Sno.",
      headerName: "S.No",
      width: 100,
      renderCell: (params) => params.api.getRowIndex(params.row._id) + 1,
    },
    { field: "patientName", headerName: "Patient Name", width: 150 },
    { field: "apptDate", headerName: "Appt Date", width: 150 },
    { field: "purpose", headerName: "Purpose", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    {
      field: "paidAmount",
      headerName: "Paid Amount",
      width: 100,
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => (
        console.log("params=>", params.row._id),
        (
          <EditIcon
            onClick={() => {
              setCurrentId(params.row._id);
              handleOpen();
            }}
          />
        )
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
        console.log("paramsssssss=>", params.id),
        (<DeleteIcon onClick={() => deleteData(params.id)} />)
      ),
    },
  ];

  const deleteData = async (id) => {
    console.log("delete==>", id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const deleteId = deleteApiHandler(`/delete-doctor-dashboard/${id}`);
        console.log("deleteId=>", deleteId);
        swal("OOPSSS! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
      getDoctorDashboard();
    });
  };

  return (
    <MainLayout>
      <div>
        <>
          {/* Breadcrumb */}
          <div className="breadcrumb-bar">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-12 col-12">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <NavLink to="/logout-doctor">Home</NavLink>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Dashboard
                      </li>
                    </ol>
                  </nav>
                  <h2 className="breadcrumb-title">Dashboard</h2>
                </div>
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Page Content */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                  {/* Profile Sidebar */}
                  <div className="profile-sidebar">
                    <div className="widget-profile pro-widget-content">
                      <div className="profile-info-widget">
                        <a href="#" className="booking-doc-img">
                          <img
                            src="assets/img/doctors/doctor-thumb-02.jpg"
                            alt="User Image"
                          />
                        </a>
                        <div className="profile-det-info">
                          <h3>Dr. Darren Elder</h3>
                          <div className="patient-details">
                            <h5 className="mb-0">
                              BDS, MDS - Oral &amp; Maxillofacial Surgery
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-widget">
                      <nav className="dashboard-menu">
                        <ul>
                          <li className="active">
                            <NavLink to="/dashboard">
                              <i className="fas fa-columns" />
                              <span>Dashboard</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/history-of-appointment">
                              <i className="fas fa-calendar-check" />
                              <span>History of Appointments</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/patient-list">
                              <i className="fas fa-user-injured" />
                              <span>Patients Details</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/total-earnings">
                              <i className="fas fa-hourglass-start" />
                              <span>Total Earnings</span>
                            </NavLink>
                          </li>

                          <li>
                            <NavLink to="/sign-in-doctor">
                              <i className="fas fa-sign-out-alt" />
                              <span>Logout</span>
                            </NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* /Profile Sidebar */}
                </div>
                <div className="col-md-7 col-lg-8 col-xl-9">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card dash-card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12 col-lg-4">
                              <div className="dash-widget dct-border-rht">
                                <div className="circle-bar circle-bar1">
                                  <div
                                    className="circle-graph1"
                                    data-percent={75}
                                  >
                                    <img
                                      src="assets/img/icon-01.png"
                                      className="img-fluid"
                                      alt="patient"
                                    />
                                  </div>
                                </div>
                                <div className="dash-widget-info">
                                  <h6>Total Patient</h6>
                                  <h3>1500</h3>
                                  <p className="text-muted">Till Today</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                              <div className="dash-widget dct-border-rht">
                                <div className="circle-bar circle-bar2">
                                  <div
                                    className="circle-graph2"
                                    data-percent={65}
                                  >
                                    <img
                                      src="assets/img/icon-02.png"
                                      className="img-fluid"
                                      alt="Patient"
                                    />
                                  </div>
                                </div>
                                <div className="dash-widget-info">
                                  <h6>Today Patient</h6>
                                  <h3>160</h3>
                                  <p className="text-muted">06, Nov 2019</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                              <div className="dash-widget">
                                <div className="circle-bar circle-bar3">
                                  <div
                                    className="circle-graph3"
                                    data-percent={50}
                                  >
                                    <img
                                      src="assets/img/icon-03.png"
                                      className="img-fluid"
                                      alt="Patient"
                                    />
                                  </div>
                                </div>
                                <div className="dash-widget-info">
                                  <h6>Appoinments</h6>
                                  <h3>85</h3>
                                  <p className="text-muted">06, Apr 2019</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="mb-4">Patient Appoinment</h4>
                      <div className="appointment-tab">
                        {/* Appointment Tab */}
                        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#upcoming-appointments"
                              data-toggle="tab"
                            >
                              Upcoming
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#today-appointments"
                              data-toggle="tab"
                            >
                              Today
                            </a>
                          </li>
                          <DoctorModal />
                        </ul>
                        {/* /Appointment Tab */}
                        <div className="tab-content">
                          {/* Upcoming Appointment Tab */}
                          <div
                            className="tab-pane show active"
                            id="upcoming-appointments"
                          >
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <table className="table table-hover table-center mb-0">
                                    <div style={{ height: 400, width: "100%" }}>
                                      <DataGrid
                                        getRowId={(row) => row._id}
                                        rows={rows ? rows : []}
                                        columns={columns}
                                        pageSize={5}
                                        rowsPerPageOptions={[5]}
                                        // checkboxSelection
                                      />
                                    </div>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Upcoming Appointment Tab */}
                          {/* Today Appointment Tab */}
                          <div className="tab-pane" id="today-appointments">
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <table className="table table-hover table-center mb-0">
                                    <div style={{ height: 400, width: "100%" }}>
                                      <DataGrid
                                        getRowId={(row) => row._id}
                                        rows={rows ? rows : []}
                                        columns={columns}
                                        pageSize={5}
                                        rowsPerPageOptions={[5]}
                                        // checkboxSelection
                                      />
                                    </div>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Today Appointment Tab */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </>
      </div>
    </MainLayout>
  );
};
export default Dashboard;
