import React, { useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { useForm, Controller } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { postApiHandler } from "../../../apiHandler";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import swal from "sweetalert";
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = ["Male", "Female", "Other"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
let schema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  gender: yup.string().required("gender is required"),
  address: yup.string().required("address is required"),
  mobileNo: yup.string().required("mobile no is required"),
  email: yup.string().required("email is required"),
  password: yup.string().required("password is required"),
  qualificationDetails: yup
    .string()
    .required("qualification Details is required"),
  doctorDesignation: yup.string().required("doctor Designation is required"),
  certification: yup.string().required("certification is required"),
  workingExperience: yup.string().required("working Experience is required"),
});

const DoctorRegistration = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  console.log("error->", errors);

  const onSubmit = async (values) => {
    console.log("values====>", values);

    const postres = await postApiHandler("/doctor-register", values);
    console.log("postres -> ", postres);
    if (postres.status == 200) {
      swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "ok!",
      });
      history("/sign-in-doctor");
    } else {
      swal({
        title: "Oopsss!",
        text: "error occured!",
        icon: "error",
        button: "ok!",
      });
      reset();
    }
 
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
              <ul className="main-nav">
                <li className="active">
                  <NavLink to={"/"}>Home</NavLink>
                </li>

                <li>
                  <NavLink to="/admin" target="_blank">
                    Admin
                  </NavLink>
                </li>
                <li className="login-link">
                  <NavLink to="/login">Logout</NavLink>
                  <a>aaaa</a>
                </li>
              </ul>
            </div>
            <Button onClick={handleOpen}> </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              style={{ marginLeft: "30rem", marginBottom: "300px" }}
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
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
                        <span className="noti-title">Travis Trimble</span> sent
                        a amount of $210 for his{" "}
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
              <li className="nav-item contact-item">
                <div className="header-contact-img">
                  <i className="far fa-hospital"></i>
                </div>
                <div className="header-contact-detail">
                  <p className="contact-header">Contact</p>
                  <p className="contact-info-header"> +1 315 369 5943</p>
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link header-login"
                  to={"/sign-in-doctor"}
                >
                  SignIn{" "}
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="main-wrapper">
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Login Tab Content */}
                <div className="account-content">
                  <div
                    className="row align-items-center justify-content-center "
                    style={{ width: "75rem", marginLeft: "-162px" }}
                  >
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src="assets/img/login-banner.png"
                        className="img-fluid"
                        alt="Doccure Login"
                      />
                    </div>
                    <div className="col-lg-6 login-right">
                      <div
                        className="login-header"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="h5"> Registration</Typography>
                      </div>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <div
                          className="form-group form-focus"
                          style={{ marginTop: "6px" }}
                        >
                          <TextField
                            type="firstName"
                            label="First Name"
                            {...register("firstName")}
                            error={!!errors.firstName}
                            helperText={
                              errors.firstName && errors.firstName.message
                            }
                            fullWidth
                          />
                        </div>

                        <div
                          className="form-group form-focus"
                          style={{ marginTop: "6px" }}
                        >
                          <TextField
                            type="lastName"
                            label="Last Name"
                            {...register("lastName")}
                            error={!!errors.lastName}
                            helperText={
                              errors.lastName && errors.lastName.message
                            }
                            fullWidth
                          />
                        </div>

                        <div
                          className="form-group form-focus"
                          style={{ marginTop: "6px" }}
                        >
                          <TextField
                            type="address"
                            label="Address"
                            {...register("address")}
                            error={!!errors.address}
                            helperText={
                              errors.address && errors.address.message
                            }
                            fullWidth
                          />
                        </div>
                        <div
                          className="form-group form-focus"
                          style={{ marginTop: "6px" }}
                        >
                          <TextField
                            type="mobileNo"
                            label="Mobile no"
                            {...register("mobileNo")}
                            error={!!errors.mobileNo}
                            helperText={
                              errors.mobileNo && errors.mobileNo.message
                            }
                            fullWidth
                          />
                        </div>
                        <div
                          className="form-group form-focus"
                          style={{ marginTop: "6px" }}
                        >
                          <TextField
                            type="email"
                            label="Email"
                            {...register("email")}
                            error={!!errors.email}
                            helperText={errors.email && errors.email.message}
                            fullWidth
                          />
                        </div>
                        <div
                          className="form-group form-focus"
                          style={{ marginTop: "6px" }}
                        >
                          <TextField
                            type="password"
                            label="password"
                            {...register("password")}
                            error={!!errors.password}
                            helperText={
                              errors.password && errors.password.message
                            }
                            fullWidth
                          />
                        </div>
                        <div
                          className="form-group form-focus"
                          style={{ marginTop: "6px" }}
                        >
                          <TextField
                            type="qualificationDetails"
                            label="Qualification Details"
                            {...register("qualificationDetails")}
                            error={!!errors.qualificationDetails}
                            helperText={
                              errors.qualificationDetails &&
                              errors.qualificationDetails.message
                            }
                            fullWidth
                          />
                        </div>
                        <div
                          className="form-group form-focus"
                          style={{ marginTop: "6px" }}
                        >
                          <TextField
                            type="doctorDesignation"
                            label="Doctor Designation"
                            {...register("doctorDesignation")}
                            error={!!errors.doctorDesignation}
                            helperText={
                              errors.doctorDesignation &&
                              errors.doctorDesignation.message
                            }
                            fullWidth
                          />
                        </div>
                        <div
                          className="form-group form-focus"
                          style={{ marginTop: "6px" }}
                        >
                          <TextField
                            type="certification"
                            label="Certification"
                            {...register("certification")}
                            error={!!errors.certification}
                            helperText={
                              errors.certification &&
                              errors.certification.message
                            }
                            fullWidth
                          />
                        </div>
                        <div
                          className="form-group form-focus"
                          style={{ marginTop: "6px" }}
                        >
                          <TextField
                            type="number"
                            label="Working Experience"
                            {...register("workingExperience")}
                            error={!!errors.workingExperience}
                            helperText={
                              errors.workingExperince &&
                              errors.workingExperince.message
                            }
                            fullWidth
                          />
                        </div>
                        <div
                          className="form-group form-focus"
                          style={{ marginTop: "6px" }}
                        >
                          {/* <FormControl
                            sx={{ m: 1, width: 474 }}
                            error={!!errors.gender}
                          >
                            <InputLabel id="demo-multiple-name-label">
                              Gender
                            </InputLabel>
                            <Select
                              labelId="demo-multiple-name-label"
                              id="demo-multiple-name"
                              style={{ marginLeft: "-7px" }}
                              value={personName[0]}
                              onChange={handleChange}
                              input={<OutlinedInput label="Name" />}
                              MenuProps={MenuProps}
                              {...register("gender")}
                              
                            >
                              {names.map((name) => (
                                <MenuItem
                                  key={name}
                                  value={name}
                                  style={getStyles(name, personName, theme)}
                                >
                                  {name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl> */}
                          <FormControl
                            sx={{ m: 1, width: 474 }}
                            error={Boolean(!!errors.gender)}
                            fullWidth
                          >
                            <InputLabel id="demo-multiple-name-label">
                              Gender
                            </InputLabel>
                            <Controller
                              name="gender"
                              control={control}
                              rules={{ required: "Please select" }}
                              render={({ field }) => (
                                <Select
                                  labelId="demo-multiple-name-label"
                                  id="demo-multiple-name"
                                  style={{ marginLeft: "-7px" }}
                                  value={field.value}
                                  onChange={field.onChange}
                                  input={<OutlinedInput label="Name" />}
                                  MenuProps={MenuProps}
                                  {...register("gender")}
                                  {...field}
                                >
                                  {names.map((name) => (
                                    <MenuItem
                                      key={name}
                                      value={name}
                                      style={getStyles(name, personName, theme)}
                                    >
                                      {name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              )}
                            />
                            <FormHelperText error={true}>
                              {errors.gender?.message}
                            </FormHelperText>
                          </FormControl>
                          {/*  */}

                          {/*  */}
                        </div>

                        <div
                          style={{
                            position: "relative",
                            left: "3rem",
                            top: "2rem",
                          }}
                        >
                          <Button
                            className="btn btn-primary btn-block btn-lg login-btn"
                            type="submit"
                          >
                            Submit
                          </Button>
                        </div>
                        <div
                          className="text-center dont-have "
                          style={{ marginTop: "6rem", marginLeft: " -18rem" }}
                        >
                          Don’t have an account?{" "}
                          <NavLink to="/sign-in-doctor">sign in</NavLink>
                        </div>
                      </form>

                      {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="container">
                          <div className="row">
                            <div className="col-md-6 offset-md-3">
                              <div
                                className="form-group form-focus"
                                style={{ marginTop: "6px" }}
                              >
                                <TextField
                                  type="firstName"
                                  label="First Name"
                                  {...register("firstName")}
                                  error={!!errors.firstName}
                                  helperText={
                                    errors.firstName && errors.firstName.message
                                  }
                                  fullWidth
                                />
                              </div>

                              <div
                                className="form-group form-focus"
                                style={{ marginTop: "6px" }}
                              >
                                <TextField
                                  type="lastName"
                                  label="Last Name"
                                  {...register("lastName")}
                                  error={!!errors.lastName}
                                  helperText={
                                    errors.lastName && errors.lastName.message
                                  }
                                  fullWidth
                                />
                              </div>

                              <Button
                                className="btn btn-primary btn-block btn-lg login-btn"
                                type="submit"
                              >
                                Submit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </form> */}
                    </div>
                  </div>
                </div>
                {/* /Login Tab Content */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
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
                      that provides patients or any user an easy way of booking
                      a doctor’s appointment online. This is a web based
                      application that overcomes the issue of managing and
                      booking appointments according to user’s choice or
                      demands.
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
                      <NavLink to={"#"}>
                        <i className="fas fa-angle-double-right"></i> Search for
                        Doctors
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/sign-in-doctor"}>
                        <i className="fas fa-angle-double-right"></i> Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/doctor-registration"}>
                        <i className="fas fa-angle-double-right"></i> Register
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"#"}>
                        <i className="fas fa-angle-double-right"></i> Booking
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
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
                      <NavLink to={"#"}>
                        <i className="fas fa-angle-double-right"></i>{" "}
                        Appointments
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"#"}>
                        <i className="fas fa-angle-double-right"></i> Chat
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/sign-in-doctor"}>
                        <i className="fas fa-angle-double-right"></i> Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/doctor-registration"}>
                        <i className="fas fa-angle-double-right"></i> Register
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sign-in-doctor">
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
export default DoctorRegistration;