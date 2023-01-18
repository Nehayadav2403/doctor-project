import React from "react";
import { NavLink } from "react-router-dom";

const InvoiceView = () => {
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
                    <NavLink to="/search-doctor">Search Doctor</NavLink>
                  </li>
                  <li>
                    <NavLink to="/doctor-profile">Doctor Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/book-appointment">Book Appointment</NavLink>
                  </li>
                  <li>
                    <NavLink to="/payment">Checkout</NavLink>
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
                    <a href="voice-call.html">Voice Call</a>
                  </li>
                  <li>
                    <a href="video-call.html">Video Call</a>
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
                    <a href="invoices.html">Invoices</a>
                    <ul className="submenu">
                      <li>
                        <a href="invoices.html">Invoices</a>
                      </li>
                      <li className="active">
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
            <li className="nav-item">
              <a className="nav-link header-login" href="/login">
                login / Signup{" "}
              </a>
            </li>
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
                    <NavLink tp="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Invoice View
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Invoice View</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="invoice-content">
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-logo">
                        <img src="assets/img/logo.png" alt="logo" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="invoice-details">
                        <strong>Order:</strong> #00124 <br />
                        <strong>Issued:</strong> 20/07/2019
                      </p>
                    </div>
                  </div>
                </div>
                {/* Invoice Item */}
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-info">
                        <strong className="customer-text">Invoice From</strong>
                        <p className="invoice-details invoice-details-two">
                          Dr. Darren Elder <br />
                          806 Twin Willow Lane, Old Forge,
                          <br />
                          Newyork, USA <br />
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="invoice-info invoice-info2">
                        <strong className="customer-text">Invoice To</strong>
                        <p className="invoice-details">
                          Walter Roberson <br />
                          299 Star Trek Drive, Panama City, <br />
                          Florida, 32405, USA <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                {/* Invoice Item */}
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="invoice-info">
                        <strong className="customer-text">
                          Payment Method
                        </strong>
                        <p className="invoice-details invoice-details-two">
                          Debit Card <br />
                          XXXXXXXXXXXX-2541 <br />
                          HDFC Bank
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                {/* Invoice Item */}
                <div className="invoice-item invoice-table-wrap">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="table-responsive">
                        <table className="invoice-table table table-bordered">
                          <thead>
                            <tr>
                              <th>Description</th>
                              <th className="text-center">Quantity</th>
                              <th className="text-center">VAT</th>
                              <th className="text-right">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>General Consultation</td>
                              <td className="text-center">1</td>
                              <td className="text-center">$0</td>
                              <td className="text-right">$100</td>
                            </tr>
                            <tr>
                              <td>Video Call Booking</td>
                              <td className="text-center">1</td>
                              <td className="text-center">$0</td>
                              <td className="text-right">$250</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4 ml-auto">
                      <div className="table-responsive">
                        <table className="invoice-table-two table">
                          <tbody>
                            <tr>
                              <th>Subtotal:</th>
                              <td>
                                <span>$350</span>
                              </td>
                            </tr>
                            <tr>
                              <th>Discount:</th>
                              <td>
                                <span>-10%</span>
                              </td>
                            </tr>
                            <tr>
                              <th>Total Amount:</th>
                              <td>
                                <span>$315</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                {/* Invoice Information */}
                <div className="other-info">
                  <h4>Other information</h4>
                  <p className="text-muted mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus sed dictum ligula, cursus blandit risus. Maecenas
                    eget metus non tellus dignissim aliquam ut a ex. Maecenas
                    sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae
                    lorem interdum, eu scelerisque tellus fermentum. Curabitur
                    sit amet lacinia lorem. Nullam finibus pellentesque libero.
                  </p>
                </div>
                {/* /Invoice Information */}
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
export default InvoiceView;
