import MainLayout from "../../../../layouts/MainLayout";
import { styled } from "@mui/material/styles";
import { FormControlLabel, Switch } from "@mui/material";
import { NavLink } from "react-router-dom";

const AppointmentRequest = () => {
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#e0001a" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <MainLayout>
      <div>
        <>
          {/* Page Wrapper */}
          <div className="page-wrapper">
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Appointment Request</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Appointment Request
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-md-12">
                  {/* Recent Orders */}
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="datatable table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Doctor Name</th>
                              <th>Speciality</th>
                              <th>Patient Name</th>
                              <th>Apointment Time</th>
                              <th>Status</th>
                              {/* <th className="text-right">Amount</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-01.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Ruby Perrin</NavLink>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient1.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Charlene Reed </NavLink>
                                </h2>
                              </td>
                              <td>
                                9 Nov 2019{" "}
                                <span className="text-primary d-block">
                                  11.00 AM - 11.15 AM
                                </span>
                              </td>
                              <td>
                                {/* <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                    defaultChecked=""
                                  />  
                                  <label
                                    htmlFor="status_1"
                                    className="checktoggle"
                                  >
                                    checkbox
                                  </label>
                                </div> */}
                                {/* <Switch   {...label} defaultChecked /> */}
                                <FormControlLabel
                                  control={
                                    <IOSSwitch sx={{ m: 1 }} defaultChecked />
                                  }
                                />
                              </td>
                              {/* <td className="text-right">$200.00</td> */}
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-02.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Darren Elder</NavLink>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient2.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Travis Trimble </NavLink>
                                </h2>
                              </td>
                              <td>
                                5 Nov 2019{" "}
                                <span className="text-primary d-block">
                                  11.00 AM - 11.35 AM
                                </span>
                              </td>
                              <td>
                                <FormControlLabel
                                  control={
                                    <IOSSwitch sx={{ m: 1 }} defaultChecked />
                                  }
                                />
                              </td>
                              {/* <td className="text-right">$300.00</td> */}
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-03.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Deborah Angel</NavLink>
                                </h2>
                              </td>
                              <td>Cardiology</td>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient3.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Carl Kelly</NavLink>
                                </h2>
                              </td>
                              <td>
                                11 Nov 2019{" "}
                                <span className="text-primary d-block">
                                  12.00 PM - 12.15 PM
                                </span>
                              </td>
                              <td>
                                <FormControlLabel
                                  control={
                                    <IOSSwitch sx={{ m: 1 }} defaultChecked />
                                  }
                                />
                              </td>
                              {/* <td className="text-right">$150.00</td> */}
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-04.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Sofia Brient</NavLink>
                                </h2>
                              </td>
                              <td>Urology</td>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient4.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile"> Michelle Fairfax</NavLink>
                                </h2>
                              </td>
                              <td>
                                7 Nov 2019{" "}
                                <span className="text-primary d-block">
                                  1.00 PM - 1.20 PM
                                </span>
                              </td>
                              <td>
                                <FormControlLabel
                                  control={
                                    <IOSSwitch sx={{ m: 1 }} defaultChecked />
                                  }
                                />
                              </td>
                              {/* <td className="text-right">$150.00</td> */}
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-05.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Marvin Campbell</NavLink>
                                </h2>
                              </td>
                              <td>Orthopaedics</td>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient5.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Gina Moore</NavLink>
                                </h2>
                              </td>
                              <td>
                                15 Nov 2019{" "}
                                <span className="text-primary d-block">
                                  1.00 PM - 1.15 PM
                                </span>
                              </td>
                              <td>
                                <FormControlLabel
                                  control={
                                    <IOSSwitch sx={{ m: 1 }} defaultChecked />
                                  }
                                />
                              </td>
                              {/* <td className="text-right">$200.00</td> */}
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-06.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">
                                    Dr. Katharine Berthold
                                  </NavLink>
                                </h2>
                              </td>
                              <td>Orthopaedics</td>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient6.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Elsie Gilley</NavLink>
                                </h2>
                              </td>
                              <td>
                                16 Nov 2019{" "}
                                <span className="text-primary d-block">
                                  1.00 PM - 1.15 PM
                                </span>
                              </td>
                              <td>
                                <FormControlLabel
                                  control={
                                    <IOSSwitch sx={{ m: 1 }} defaultChecked />
                                  }
                                />
                              </td>
                              {/* <td className="text-right">$250.00</td> */}
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-07.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Linda Tobin</NavLink>
                                </h2>
                              </td>
                              <td>Neurology</td>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient7.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Joan Gardner</NavLink>
                                </h2>
                              </td>
                              <td>
                                18 Nov 2019{" "}
                                <span className="text-primary d-block">
                                  1.10 PM - 1.25 PM
                                </span>
                              </td>
                              <td>
                                <FormControlLabel
                                  control={
                                    <IOSSwitch sx={{ m: 1 }} defaultChecked />
                                  }
                                />
                              </td>
                              {/* <td className="text-right">$260.00</td> */}
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-08.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Paul Richard</NavLink>
                                </h2>
                              </td>
                              <td>Dermatology</td>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient8.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile"> Daniel Griffing</NavLink>
                                </h2>
                              </td>
                              <td>
                                18 Nov 2019{" "}
                                <span className="text-primary d-block">
                                  11.10 AM - 11.25 AM
                                </span>
                              </td>
                              <td>
                                <FormControlLabel
                                  control={
                                    <IOSSwitch sx={{ m: 1 }} defaultChecked />
                                  }
                                />
                              </td>
                              {/* <td className="text-right">$260.00</td> */}
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-09.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. John Gibbs</NavLink>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient9.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Walter Roberson</NavLink>
                                </h2>
                              </td>
                              <td>
                                21 Nov 2019{" "}
                                <span className="text-primary d-block">
                                  12.10 PM - 12.25 PM
                                </span>
                              </td>
                              <td>
                                <FormControlLabel
                                  control={
                                    <IOSSwitch sx={{ m: 1 }} defaultChecked />
                                  }
                                />
                              </td>
                              {/* <td className="text-right">$300.00</td> */}
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-10.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Olga Barlow</NavLink>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient10.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Robert Rhodes</NavLink>
                                </h2>
                              </td>
                              <td>
                                23 Nov 2019{" "}
                                <span className="text-primary d-block">
                                  12.10 PM - 12.25 PM
                                </span>
                              </td>
                              <td>
                                <FormControlLabel
                                  control={
                                    <IOSSwitch sx={{ m: 1 }} defaultChecked />
                                  }
                                />
                              </td>
                              {/* <td className="text-right">$300.00</td> */}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* /Recent Orders */}
                </div>
              </div>
            </div>
          </div>
          {/* /Page Wrapper */}
        </>
      </div>
    </MainLayout>
  );
};
export default AppointmentRequest;
