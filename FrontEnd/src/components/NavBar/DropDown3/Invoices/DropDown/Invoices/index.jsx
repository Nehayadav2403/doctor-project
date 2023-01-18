import React from "react";
import { NavLink } from "react-router-dom";

const Invoices = () => {
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
                  <li className="has-submenu active">
                    <NavLink to="/invoice">Invoices</NavLink>

                    <ul className="submenu">
                      <li className="active">
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
                    src="assets/img/doctors/doctor-thumb-02.jpg"
                    width={31}
                    alt="Darren Elder"
                  />
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="user-header">
                  <div className="avatar avatar-sm">
                    <img
                      src="assets/img/doctors/doctor-thumb-02.jpg"
                      alt="User Image"
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="user-text">
                    <h6>Darren Elder</h6>
                    <p className="text-muted mb-0">Doctor</p>
                  </div>
                </div>
                <a className="dropdown-item" href="/dashboard">
                  Dashboard
                </a>
                <a
                  className="dropdown-item"
                  href="doctor-profile-settings.html"
                >
                  Profile Settings
                </a>
                <a className="dropdown-item" href="login.html">
                  Logout
                </a>
              </div>
            </li>
            {/* /User Menu */}
          </ul>
        </nav>
      </header>
      {/* /Header */}
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Invoices
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Invoices</h2>
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
                      <li>
                        <NavLink to="/sign-up-doctor">
                          <i className="fas fa-columns" />
                          <span>Dashboard</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/history-of-appointment">
                          <i className="fas fa-calendar-check" />
                          <span>Appointments</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/patient-list">
                          <i className="fas fa-user-injured" />
                          <span>My Patients</span>
                        </NavLink>
                      </li>
                      <li>
                        <a href="schedule-timings.html">
                          <i className="fas fa-hourglass-start" />
                          <span>Schedule Timings</span>
                        </a>
                      </li>
                      <li className="active">
                        <NavLink to="/invoice">
                          <i className="fas fa-file-invoice" />
                          <span>Invoices</span>
                        </NavLink>
                      </li>
                      <li>
                        <a href="reviews.html">
                          <i className="fas fa-star" />
                          <span>Reviews</span>
                        </a>
                      </li>
                      <li>
                        <a href="chat-doctor.html">
                          <i className="fas fa-comments" />
                          <span>Message</span>
                          <small className="unread-msg">23</small>
                        </a>
                      </li>
                      <li>
                        <a href="doctor-profile-settings.html">
                          <i className="fas fa-user-cog" />
                          <span>Profile Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="social-media.html">
                          <i className="fas fa-share-alt" />
                          <span>Social Media</span>
                        </a>
                      </li>
                      <li>
                        <a href="doctor-change-password.html">
                          <i className="fas fa-lock" />
                          <span>Change Password</span>
                        </a>
                      </li>
                      <li>
                        <NavLink to="/">
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
              <div className="card card-table">
                <div className="card-body">
                  {/* Invoice Table */}
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Invoice No</th>
                          <th>Patient</th>
                          <th>Amount</th>
                          <th>Paid On</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <NavLink to="/invoice-view">#INV-0010</NavLink>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Richard Wilson <span>#PT0016</span>
                              </a>
                            </h2>
                          </td>
                          <td>$450</td>
                          <td>14 Nov 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <NavLink
                                to="/invoice-view"
                                className="btn btn-sm bg-info-light"
                              >
                                <i className="far fa-eye" /> View
                              </NavLink>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm bg-primary-light"
                              >
                                <i className="fas fa-print" /> Print
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <NavLink to="/invoice-view">#INV-0009</NavLink>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient1.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Charlene Reed <span>#PT0001</span>
                              </a>
                            </h2>
                          </td>
                          <td>$200</td>
                          <td>13 Nov 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <NavLink
                                to="/invoice-view"
                                className="btn btn-sm bg-info-light"
                              >
                                <i className="far fa-eye" /> View
                              </NavLink>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm bg-primary-light"
                              >
                                <i className="fas fa-print" /> Print
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <NavLink to="/invoice-view">#INV-0008</NavLink>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient2.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Travis Trimble <span>#PT0002</span>
                              </a>
                            </h2>
                          </td>
                          <td>$100</td>
                          <td>12 Nov 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <NavLink
                                to="/invoice-view"
                                className="btn btn-sm bg-info-light"
                              >
                                <i className="far fa-eye" /> View
                              </NavLink>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm bg-primary-light"
                              >
                                <i className="fas fa-print" /> Print
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <NavLink to="/invoice-view">#INV-0007</NavLink>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient3.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Carl Kelly <span>#PT0003</span>
                              </a>
                            </h2>
                          </td>
                          <td>$350</td>
                          <td>11 Nov 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <NavLink
                                to="/invoice-view"
                                className="btn btn-sm bg-info-light"
                              >
                                <i className="far fa-eye" /> View
                              </NavLink>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm bg-primary-light"
                              >
                                <i className="fas fa-print" /> Print
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <NavLink to="/invoice-view">#INV-0006</NavLink>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient4.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Michelle Fairfax <span>#PT0004</span>
                              </a>
                            </h2>
                          </td>
                          <td>$275</td>
                          <td>10 Nov 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <NavLink
                                to="/invoice-view"
                                className="btn btn-sm bg-info-light"
                              >
                                <i className="far fa-eye" /> View
                              </NavLink>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm bg-primary-light"
                              >
                                <i className="fas fa-print" /> Print
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <NavLink to="/invoice-view">#INV-0005</NavLink>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient5.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Gina Moore <span>#PT0005</span>
                              </a>
                            </h2>
                          </td>
                          <td>$600</td>
                          <td>9 Nov 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <NavLink
                                to="/invoice-view"
                                className="btn btn-sm bg-info-light"
                              >
                                <i className="far fa-eye" /> View
                              </NavLink>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm bg-primary-light"
                              >
                                <i className="fas fa-print" /> Print
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <NavLink to="/invoice-view">#INV-0004</NavLink>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient6.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Elsie Gilley <span>#PT0006</span>
                              </a>
                            </h2>
                          </td>
                          <td>$50</td>
                          <td>8 Nov 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <NavLink
                                to="/invoice-view"
                                className="btn btn-sm bg-info-light"
                              >
                                <i className="far fa-eye" /> View
                              </NavLink>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm bg-primary-light"
                              >
                                <i className="fas fa-print" /> Print
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <NavLink to="/invoice-view">#INV-0003</NavLink>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient7.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Joan Gardner <span>#PT0007</span>
                              </a>
                            </h2>
                          </td>
                          <td>$400</td>
                          <td>7 Nov 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <NavLink
                                to="/invoice-view"
                                className="btn btn-sm bg-info-light"
                              >
                                <i className="far fa-eye" /> View
                              </NavLink>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm bg-primary-light"
                              >
                                <i className="fas fa-print" /> Print
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <NavLink to="/invoice-view">#INV-0002</NavLink>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient8.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Daniel Griffing <span>#PT0008</span>
                              </a>
                            </h2>
                          </td>
                          <td>$550</td>
                          <td>6 Nov 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <NavLink
                                to="/invoice-view"
                                className="btn btn-sm bg-info-light"
                              >
                                <i className="far fa-eye" /> View
                              </NavLink>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm bg-primary-light"
                              >
                                <i className="fas fa-print" /> Print
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <NavLink to="/invoice-view">#INV-0001</NavLink>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient9.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Walter Roberson <span>#PT0009</span>
                              </a>
                            </h2>
                          </td>
                          <td>$100</td>
                          <td>5 Nov 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <NavLink
                                to="/invoice-view"
                                className="btn btn-sm bg-info-light"
                              >
                                <i className="far fa-eye" /> View
                              </NavLink>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm bg-primary-light"
                              >
                                <i className="fas fa-print" /> Print
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* /Invoice Table */}
                </div>
              </div>
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
                      <NavLink to="/search-doctor">
                        <i className="fas fa-angle-double-right" /> Search for
                        Doctors
                      </NavLink>
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
                      <NavLink to="/register">
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
export default Invoices;
