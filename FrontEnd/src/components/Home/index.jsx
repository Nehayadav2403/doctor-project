import SearchDocterAppointment from "../../components/SearchDocterAp";
import ClinicSpecialities from "../../components/ClinicSpecialities";
import BookOurDoctor from "../BookOurDoctor";
import AvailableFeatures from "../Available Features";
import { NavLink } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Badge,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
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
const Home = () => {
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
              <ul className="main-nav" style={{ marginRight: "20rem" }}>
                <li className="active">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/admin" target="_blank">
                    Admin
                  </NavLink>
                </li>

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
      <SearchDocterAppointment />
      <ClinicSpecialities />
      <BookOurDoctor />
      <AvailableFeatures />
      <footer className="footer">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <img src="assets/img/footer-logo.png" alt="logo" />
                </div>
                <div className="footer-about-content">
                  <p>
                    The proposed project is a smart appointment booking system
                    that provides patients or any user an easy way of booking a
                    doctor’s appointment online. This is a web based application
                    that overcomes the issue of managing and booking
                    appointments according to user’s choice or demands.
                  </p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-facebook-f"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-twitter"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-dribbble"></i>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Patients</h2>
                <ul>
                  <li>
                    <NavLink to={"/search-doctor"}>
                      <i className="fas fa-angle-double-right"></i> Search for
                      Doctors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/login"}>
                      <i className="fas fa-angle-double-right"></i> Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/register"}>
                      <i className="fas fa-angle-double-right"></i> Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/book-appointment"}>
                      <i className="fas fa-angle-double-right"></i> Booking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/patient-dashboard">
                      <i className="fas fa-angle-double-right"></i> Patient
                      Dashboard
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Doctors</h2>
                <ul>
                  <li>
                    <NavLink to={"/doctor-appointments"}>
                      <i className="fas fa-angle-double-right"></i> Appointments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/chat-doctor"}>
                      <i className="fas fa-angle-double-right"></i> Chat
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/login"}>
                      <i className="fas fa-angle-double-right"></i> Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/register"}>
                      <i className="fas fa-angle-double-right"></i> Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/sign-up-doctor">
                      <i className="fas fa-angle-double-right"></i> Sign up
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-contact">
                <h2 className="footer-title">Contact Us</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <p>
                      {" "}
                      3556 Beech Street, San Francisco,
                      <br /> California, CA 94108{" "}
                    </p>
                  </div>
                  <p>
                    <i className="fas fa-phone-alt"></i>
                    +1 315 369 5943
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-envelope"></i>
                    doccure@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="copyright-text">
                  <p className="mb-0">
                    <a href="templateshub.net">Templates Hub</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="copyright-menu">
                  <ul className="policy-menu">
                    <li>
                      <NavLink to="/term-and-condition">
                        Terms and Conditions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/privacy-policy">Policy</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};
export default Home;
