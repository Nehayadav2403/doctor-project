import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="main-wrapper">
      {/* Header */}
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <NavLink to="/" className="navbar-brand logo">
              <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
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
                <i className="fas fa-times" />
              </a>
            </div>
            <ul className="main-nav">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="has-submenu">
                <a href="#">
                  Doctors <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <NavLink to="/sign-up-doctor">Doctor Dashboard</NavLink>
                  </li>
                  <li>
                    <NavLink to="/history-of-appointment">Appointments</NavLink>
                  </li>
                  <li>
                    <a href="schedule-timings.html">Schedule Timing</a>
                  </li>
                  <li>
                    <NavLink to="/patient-list">Patients List</NavLink>
                  </li>
                  <li>
                    <a href="patient-profile.html">Patients Profile</a>
                  </li>
                  <li>
                    <a href="chat-doctor.html">Chat</a>
                  </li>
                  <li>
                    <a href="invoices.html">Invoices</a>
                  </li>
                  <li>
                    <a href="doctor-profile-settings.html">Profile Settings</a>
                  </li>
                  <li>
                    <a href="reviews.html">Reviews</a>
                  </li>
                  <li>
                    <NavLink to="/registers">Doctor Register</NavLink>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">
                  Patients <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="search.html">Search Doctor</a>
                  </li>
                  <li>
                    <NavLink to="/doctor-profilel">Doctor Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/book-appointment">Booking</NavLink>
                  </li>
                  <li>
                    <NavLink to="/payment">Payment</NavLink>
                  </li>
                  <li>
                    <a href="booking-success.html">Booking Success</a>
                  </li>
                  <li>
                    <a href="patient-dashboard.html">Patient Dashboard</a>
                  </li>
                  <li>
                    <a href="favourites.html">Favourites</a>
                  </li>
                  <li>
                    <a href="chat.html">Chat</a>
                  </li>
                  <li>
                    <a href="profile-settings.html">Profile Settings</a>
                  </li>
                  <li>
                    <a href="change-password.html">Change Password</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu active">
                <a href="#">
                  Pages <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <NavLink to="/voice-call">Voice Call</NavLink>
                  </li>
                  <li>
                    <NavLink to="/video-call">Video Call</NavLink>
                  </li>
                  <li>
                    <NavLink to="/search-doctor">Search Doctors</NavLink>
                  </li>
                  <li>
                    <NavLink to="/calendar">Calendar</NavLink>
                  </li>
                  <li>
                    <NavLink to="/components">Components</NavLink>
                  </li>
                  <li className="has-submenu">
                    <NavLink to="/invoices">Invoices</NavLink>
                    <ul className="submenu">
                      <li>
                        <NavLink to="/invoices">Invoices</NavLink>
                      </li>
                      <li>
                        <NavLink to="/invoice-view">Invoice View</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/starter-page">Starter Page</NavLink>
                  </li>
                  <li className="active">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/registers">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/forgot-password">Forgot Password</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/admin" target="_blank">
                  Admin
                </NavLink>
              </li>
              <li className="login-link">
                <NavLink to="/login">Login / Signup</NavLink>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item contact-item">
              <div className="header-contact-img">
                <i className="far fa-hospital" />
              </div>
              <div className="header-contact-detail">
                <p className="contact-header">Contact</p>
                <p className="contact-info-header"> +1 315 369 5943</p>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link header-login" href="/login">
                login / Signup{" "}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* /Header */}
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Login Tab Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src="assets/img/login-banner.png"
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>Doccure</span>
                      </h3>
                    </div>
                    <form action="https://dreamguys.co.in/demo/doccure/index.html">
                      <div className="form-group form-focus">
                        <input type="email" className="form-control floating" />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                        />
                        <label className="focus-label">Password</label>
                      </div>
                      <div className="text-right">
                        <a className="forgot-link" href="/forgot-password">
                          Forgot Password ?
                        </a>
                      </div>
                      <button
                        className="btn btn-primary btn-block btn-lg login-btn"
                        type="submit"
                      >
                        Login
                      </button>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <a href="#" className="btn btn-facebook btn-block">
                            <i className="fab fa-facebook-f mr-1" /> Login
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#" className="btn btn-google btn-block">
                            <i className="fab fa-google mr-1" /> Login
                          </a>
                        </div>
                      </div>
                      <div className="text-center dont-have">
                        Don’t have an account?{" "}
                        <NavLink to="/doctor-registration">Register</NavLink>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Login Tab Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Footer */}
      <footer className="footer">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <img src="assets/img/footer-logo.png" alt="logo" />
                  </div>
                  <div className="footer-about-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-facebook-f" />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-twitter" />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-dribbble" />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Patients</h2>
                  <ul>
                    <li>
                      <a href="search.html">
                        <i className="fas fa-angle-double-right" /> Search for
                        Doctors
                      </a>
                    </li>
                    <li>
                      <NavLink to="/login">
                        <i className="fas fa-angle-double-right" /> Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/doctor-registration">
                        <i className="fas fa-angle-double-right" /> Register
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/book-appointment">
                        <i className="fas fa-angle-double-right" /> Booking
                      </NavLink>
                    </li>
                    <li>
                      <a href="patient-dashboard.html">
                        <i className="fas fa-angle-double-right" /> Patient
                        Dashboard
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Doctors</h2>
                  <ul>
                    <li>
                      <NavLink to="/history-of-appointment">
                        <i className="fas fa-angle-double-right" /> Appointments
                      </NavLink>
                    </li>
                    <li>
                      <a href="chat.html">
                        <i className="fas fa-angle-double-right" /> Chat
                      </a>
                    </li>
                    <li>
                      <NavLink to="/login">
                        <i className="fas fa-angle-double-right" /> Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/registers">
                        <i className="fas fa-angle-double-right" /> Register
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sign-up-doctor">
                        <i className="fas fa-angle-double-right" /> Doctor
                        Dashboard
                      </NavLink>
                    </li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-contact">
                  <h2 className="footer-title">Contact Us</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <span>
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <p>
                        {" "}
                        3556 Beech Street, San Francisco,
                        <br /> California, CA 94108{" "}
                      </p>
                    </div>
                    <p>
                      <i className="fas fa-phone-alt" />
                      +1 315 369 5943
                    </p>
                    <p className="mb-0">
                      <i className="fas fa-envelope" />
                      doccure@example.com
                    </p>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container-fluid">
            {/* Copyright */}
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
                  {/* Copyright Menu */}
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <NavLink to="/term-and-condition">Terms and Conditions</NavLink>
                      </li>
                      <li>
                        <NavLink to="/privacy-policy">Policy</NavLink>
                      </li>
                    </ul>
                  </div>
                  {/* /Copyright Menu */}
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
      {/* /Footer */}
    </div>
  );
};
export default Login;
