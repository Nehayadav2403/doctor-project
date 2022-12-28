import * as React from "react";

import { NavLink } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Badge,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ShareIcon from "@mui/icons-material/Share";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "white",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const NavBar = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className="main-wrapper">
        <header className="header">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <NavLink to={"/"} className="navbar-brand logo">
                <img
                  src="assets/img/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </NavLink>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <NavLink to="/" className="menu-logo">
                  <img
                    src="assets/img/logo.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </NavLink>
                <a
                  id="menu_close"
                  className="menu-close"
                  href="javascript:void(0);"
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <ul className="main-nav" style={{ marginRight: "12rem" }}>
                <li className="active">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="has-submenu">
                  <a href="#">
                    Doctors <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <NavLink to={"/create-profile"}>Create Profile</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/dashboard"}>Dashboard</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/appointment-request"}>
                        Appointment Request
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/patient-list"}>Patient List</NavLink>
                    </li>
                    <li className="has-submenu">
                      <NavLink to={"/audio-consultation"}>Calling</NavLink>

                      <ul className="submenu">
                        <li>
                          <NavLink to={"/audio-consultation"}>
                            Audio Consultation
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/video-consultation"}>
                            Video Consultation
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <NavLink to={"/payment"}>Payment</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/history-of-appointment"}>
                        History Of Appointment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/doctor-profile"}>Doctor Profile</NavLink>
                    </li>

                    <li>
                      <NavLink to={"/reviews-and-rating"}>
                        Reviews And Rating
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/admin-support"}>
                        Admin Support
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/privacy-policy"}>Privacy Policy</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/term-and-condition"}>
                        Term and Condition
                      </NavLink>
                    </li>

                    {/* <li>
                      <NavLink to={"/logout-doctor"}>Log Out</NavLink>
                    </li> */}
                  </ul>
                </li>

                <li className="has-submenu">
                  <a href="#">
                    Patients <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    {/* <li>
                      <NavLink to={"/sign-in-patient"}>Sign In</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/patient-registration"}>
                        Registration
                      </NavLink>
                    </li> */}
                    <li>
                      <NavLink to={"/profile"}>Profile</NavLink>
                    </li>
                    <li className="has-submenu">
                      <NavLink to={"/audio-consultation"}>
                        Nearby Doctor's
                      </NavLink>

                      <ul className="submenu">
                        <li>
                          <NavLink to={"/profile-and-reviews"}>
                            Profile and Reviews
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/doctors-availability"}>
                            Doctor's Availability
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/book-appointment"}>
                            Book Appointment
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/category-specification"}>
                            Category Specification
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li className="has-submenu">
                      <NavLink to={"/audio-consultation"}>Calling</NavLink>

                      <ul className="submenu">
                        <li>
                          <NavLink to={"/voice-call"}>
                            Audio Consultation
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/video-call"}>
                            Video Consultation
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                      <NavLink to={"/appointment-status-tracking"}>
                    Appointment Status Tracking
                      </NavLink>
                    </li> */}
                    <li>
                      <NavLink to={"/favourites-doctor"}>
                        Favourite Doctor's
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/rate-and-reviews"}>
                        Rate and Reviews
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/appointmentHistory"}>
                        Appointment History
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/request-product"}>
                        Request a Product
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/payment-gateway-integration"}>
                        Payment gateway integration
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/customer-support"}>
                        Customer Support
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/faq's"}>FAQ's</NavLink>
                    </li>

                    <li>
                      <NavLink to={"/patient-privacy-policy"}>
                        Privacy Policy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/terms-and-conditions"}>
                        Terms and Conditions
                      </NavLink>
                    </li>

                    {/* <li>
                      <NavLink to={"sign-in-doctor"}>Log Out</NavLink>
                    </li> */}
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">
                    Vendor <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <NavLink to={"/video-call"}>Video Call</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/search-doctor"}>Search Doctor</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/calendar"}>Calender</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/components"}>Components</NavLink>
                    </li>
                    <li className="has-submenu">
                      <NavLink to={"/video-call"}>Invoices</NavLink>

                      <ul className="submenu">
                        <li>
                          <NavLink to={"/invoices"}>Invoices</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/invoice-view"}>Invoice view</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to={"/starter-page"}>Starter page</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/login"}>Login</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/register"}>Register</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/forgot-password"}>Forgot Password</NavLink>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <NavLink to="/admin" target="_blank">
                    Admin
                  </NavLink>
                </li> */}

                <li className="login-link">
                  <NavLink to="/login">Login / Signup</NavLink>
                  <a>aaaa</a>
                </li>
              </ul>
            </div>
            <div>
              <ShareIcon
                style={{ marginLeft: "-8rem", marginBottom: "-4rem" }}
              />
              <Button
                onClick={handleOpen}
                style={{ position: "absolute", top: "25px" }}
              >
                {" "}
                <Badge badgeContent={3} color="primary">
                  <NotificationsIcon style={{ color: "darkslategray" }} />
                </Badge>
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ marginLeft: "30rem", marginBottom: "300px" }}
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Notifications
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2, color: "black" }}
                  >
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="assets/img/doctors/doctor-thumb-01.jpg"
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Dr. Ruby Perrin</span>{" "}
                          Schedule{" "}
                          <span className="noti-title">her appointment</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
                        </p>
                      </div>
                    </div>
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="assets/img/patients/patient2.jpg"
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Travis Trimble</span>{" "}
                          sent a amount of $210 for his{" "}
                          <span className="noti-title">appointment</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">8 mins ago</span>
                        </p>
                      </div>
                    </div>
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="assets/img/patients/patient3.jpg"
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Carl Kelly</span> send a
                          message{" "}
                          <span className="noti-title"> to his doctor</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 mins ago</span>
                        </p>
                      </div>
                    </div>

                    <div className="topnav-dropdown-footer">
                      <a href="#">View all Notifications</a>
                      <div className="topnav-dropdown-header">
                        {/* <span className="notification-title">Notifications</span> */}
                        <a href="javascript:void(0)" className="clear-noti">
                          {" "}
                          Clear All{" "}
                        </a>
                      </div>
                    </div>
                  </Typography>
                </Box>
              </Modal>

              <ul className="nav header-navbar-rht">
                <li
                  className="nav-item contact-item"
                  style={{ marginTop: "-2rem" }}
                >
                  <div className="header-contact-img">
                    <i className="far fa-hospital"></i>
                  </div>
                  <div className="header-contact-detail">
                    <p className="contact-header">Contact</p>
                    <p className="contact-info-header"> +1 315 369 5943</p>
                  </div>
                </li>

                <li className="nav-item" style={{ marginTop: "-1rem" }}>
                  <FormControl
                    variant="filled"
                    sx={{ m: 1, minWidth: 120 }}
                    style={{ backgroundColor: "#09e5ab" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      Register
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      // value={age}
                      onChange={handleChange}
                    >
                      <NavLink to="/doctor-registration">
                        <MenuItem>Doctor</MenuItem>
                      </NavLink>
                      <NavLink to="/patient-registration">
                        <MenuItem>Patient</MenuItem>
                      </NavLink>
                    </Select>
                  </FormControl>
                </li>
                <li>
                  <NavLink
                    className="nav-link header-login"
                    style={{ marginTop: "-1rem" }}
                    to="/sign-in-doctor"
                  >
                    <Button>Sign In</Button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
export default NavBar;
