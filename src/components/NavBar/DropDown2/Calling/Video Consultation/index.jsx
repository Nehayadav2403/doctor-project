import React from "react";
import { NavLink } from "react-router-dom";

const VideoCall = () => {
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
                    <NavLink to="/invoice">Invoices</NavLink>
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
                    <NavLink to="/search-doctor">Search Doctor</NavLink>
                  </li>
                  <li>
                    <NavLink to="/doctor-profile">Doctor Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/book-appointment">Book Appointment</NavLink>
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
                  <li className="active">
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
                    <NavLink to="/invoice">Invoices</NavLink>
                    <ul className="submenu">
                      <li>
                        <NavLink to="/invoice">Invoices</NavLink>
                      </li>
                      <li>
                        <NavLink to="/invoice-view">Invoice View</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/starter-page">Starter Page</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/doctor-registration">Register</NavLink>
                  </li>
                  <li>
                    <a href="/forgot-password">Forgot Password</a>
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
            {/* User Menu */}
            <li className="nav-item dropdown has-arrow logged-item">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <span className="user-img">
                  <img
                    className="rounded-circle"
                    src="assets/img/patients/patient.jpg"
                    width={31}
                    alt="Ryan Taylor"
                  />
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="user-header">
                  <div className="avatar avatar-sm">
                    <img
                      src="assets/img/patients/patient.jpg"
                      alt="User Image"
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="user-text">
                    <h6>Richard Wilson</h6>
                    <p className="text-muted mb-0">Patient</p>
                  </div>
                </div>
                <a className="dropdown-item" href="patient-dashboard.html">
                  Dashboard
                </a>
                <a className="dropdown-item" href="profile-settings.html">
                  Profile Settings
                </a>
                <a className="dropdown-item" href="/login">
                  Logout
                </a>
              </div>
            </li>
            {/* /User Menu */}
          </ul>
        </nav>
      </header>
      {/* /Header */}
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          {/* Call Wrapper */}
          <div className="call-wrapper">
            <div className="call-main-row">
              <div className="call-main-wrapper">
                <div className="call-view">
                  <div className="call-window">
                    {/* Call Header */}
                    <div className="fixed-header">
                      <div className="navbar">
                        <div className="user-details">
                          <div className="float-left user-img">
                            <a
                              className="avatar avatar-sm mr-2"
                              href="patient-profile.html"
                              title="Charlene Reed"
                            >
                              <img
                                src="assets/img/patients/patient1.jpg"
                                alt="User Image"
                                className="rounded-circle"
                              />
                              <span className="status online" />
                            </a>
                          </div>
                          <div className="user-info float-left">
                            <a href="patient-profile.html">
                              <span>Charlene Reed</span>
                            </a>
                            <span className="last-seen">Online</span>
                          </div>
                        </div>
                        <ul className="nav float-right custom-menu">
                          <li className="nav-item dropdown dropdown-action">
                            <a
                              href="#"
                              className="nav-link dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-cog" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href="javascript:void(0)"
                                className="dropdown-item"
                              >
                                Settings
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Call Header */}
                    {/* Call Contents */}
                    <div className="call-contents">
                      <div className="call-content-wrap">
                        <div className="user-video">
                          <img
                            src="assets/img/video-call.jpg"
                            alt="User Image"
                          />
                        </div>
                        <div className="my-video">
                          <ul>
                            <li>
                              <img
                                src="assets/img/patients/patient1.jpg"
                                className="img-fluid"
                                alt="User Image"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Call Contents */}
                    {/* Call Footer */}
                    <div className="call-footer">
                      <div className="call-icons">
                        <span className="call-duration">00:59</span>
                        <ul className="call-items">
                          <li className="call-item">
                            <a
                              href="#"
                              title="Enable Video"
                              data-placement="top"
                              data-toggle="tooltip"
                            >
                              <i className="fas fa-video camera" />
                            </a>
                          </li>
                          <li className="call-item">
                            <a
                              href="#"
                              title="Mute Audio"
                              data-placement="top"
                              data-toggle="tooltip"
                            >
                              <i className="fa fa-microphone microphone" />
                            </a>
                          </li>
                          <li className="call-item">
                            <a
                              href="#"
                              title="Add User"
                              data-placement="top"
                              data-toggle="tooltip"
                            >
                              <i className="fa fa-user-plus" />
                            </a>
                          </li>
                          <li className="call-item">
                            <a
                              href="#"
                              title="Full Screen"
                              data-placement="top"
                              data-toggle="tooltip"
                            >
                              <i className="fas fa-arrows-alt-v full-screen" />
                            </a>
                          </li>
                        </ul>
                        <div className="end-call">
                          <a href="javascript:void(0);">
                            <i className="material-icons">call_end</i>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /Call Footer */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Call Wrapper */}
        </div>
      </div>
      {/* /Page Content */}
     
    </div>
  );
};
export default VideoCall;
