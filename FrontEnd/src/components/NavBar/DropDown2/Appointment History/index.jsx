import { NavLink } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout";

const AppointmentHistory = () => {
  return (
    <MainLayout>
      <div>
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
                      Appointments
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Appointments</h2>
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
                          <NavLink to="/dashboard">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                          </NavLink>
                        </li>
                        <li className="active">
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
                        <li>
                          <a href="invoices.html">
                            <i className="fas fa-file-invoice" />
                            <span>Invoices</span>
                          </a>
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
                <div className="appointments">
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <a
                        href="patient-profile.html"
                        className="booking-doc-img"
                      >
                        <img
                          src="assets/img/patients/patient.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>
                          <a href="patient-profile.html">Richard Wilson</a>
                        </h3>
                        <div className="patient-details">
                          <h5>
                            <i className="far fa-clock" /> 14 Nov 2019, 10.00 AM
                          </h5>
                          <h5>
                            <i className="fas fa-map-marker-alt" /> Newyork,
                            United States
                          </h5>
                          <h5>
                            <i className="fas fa-envelope" />{" "}
                            richard@example.com
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-phone" /> +1 923 782 4575
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a
                        href="#"
                        className="btn btn-sm bg-info-light"
                        data-toggle="modal"
                        data-target="#appt_details"
                      >
                        <i className="far fa-eye" /> View
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-success-light"
                      >
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-danger-light"
                      >
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <a
                        href="patient-profile.html"
                        className="booking-doc-img"
                      >
                        <img
                          src="assets/img/patients/patient1.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>
                          <a href="patient-profile.html">Charlene Reed </a>
                        </h3>
                        <div className="patient-details">
                          <h5>
                            <i className="far fa-clock" /> 12 Nov 2019, 5.00 PM
                          </h5>
                          <h5>
                            <i className="fas fa-map-marker-alt" /> North
                            Carolina, United States
                          </h5>
                          <h5>
                            <i className="fas fa-envelope" />{" "}
                            charlenereed@example.com
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-phone" /> +1 828 632 9170
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a
                        href="#"
                        className="btn btn-sm bg-info-light"
                        data-toggle="modal"
                        data-target="#appt_details"
                      >
                        <i className="far fa-eye" /> View
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-success-light"
                      >
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-danger-light"
                      >
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <a
                        href="patient-profile.html"
                        className="booking-doc-img"
                      >
                        <img
                          src="assets/img/patients/patient2.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>
                          <a href="patient-profile.html">Travis Trimble</a>
                        </h3>
                        <div className="patient-details">
                          <h5>
                            <i className="far fa-clock" /> 11 Nov 2019, 8.00 PM
                          </h5>
                          <h5>
                            <i className="fas fa-map-marker-alt" /> Maine,
                            United States
                          </h5>
                          <h5>
                            <i className="fas fa-envelope" />{" "}
                            travistrimble@example.com
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-phone" /> +1 207 729 9974
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a
                        href="#"
                        className="btn btn-sm bg-info-light"
                        data-toggle="modal"
                        data-target="#appt_details"
                      >
                        <i className="far fa-eye" /> View
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-success-light"
                      >
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-danger-light"
                      >
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <a
                        href="patient-profile.html"
                        className="booking-doc-img"
                      >
                        <img
                          src="assets/img/patients/patient3.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>
                          <a href="patient-profile.html">Carl Kelly</a>
                        </h3>
                        <div className="patient-details">
                          <h5>
                            <i className="far fa-clock" /> 9 Nov 2019, 9.00 AM
                          </h5>
                          <h5>
                            <i className="fas fa-map-marker-alt" /> Newyork,
                            United States
                          </h5>
                          <h5>
                            <i className="fas fa-envelope" />{" "}
                            carlkelly@example.com
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-phone" /> +1 260 724 7769
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a
                        href="#"
                        className="btn btn-sm bg-info-light"
                        data-toggle="modal"
                        data-target="#appt_details"
                      >
                        <i className="far fa-eye" /> View
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-success-light"
                      >
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-danger-light"
                      >
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <a
                        href="patient-profile.html"
                        className="booking-doc-img"
                      >
                        <img
                          src="assets/img/patients/patient4.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>
                          <a href="patient-profile.html">Michelle Fairfax</a>
                        </h3>
                        <div className="patient-details">
                          <h5>
                            <i className="far fa-clock" /> 9 Nov 2019, 1.00 PM
                          </h5>
                          <h5>
                            <i className="fas fa-map-marker-alt" /> Indiana,
                            United States
                          </h5>
                          <h5>
                            <i className="fas fa-envelope" />{" "}
                            michellefairfax@example.com
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-phone" /> +1 504 368 6874
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a
                        href="#"
                        className="btn btn-sm bg-info-light"
                        data-toggle="modal"
                        data-target="#appt_details"
                      >
                        <i className="far fa-eye" /> View
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-success-light"
                      >
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-danger-light"
                      >
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <a
                        href="patient-profile.html"
                        className="booking-doc-img"
                      >
                        <img
                          src="assets/img/patients/patient5.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>
                          <a href="patient-profile.html">Gina Moore</a>
                        </h3>
                        <div className="patient-details">
                          <h5>
                            <i className="far fa-clock" /> 8 Nov 2019, 3.00 PM
                          </h5>
                          <h5>
                            <i className="fas fa-map-marker-alt" /> Florida,
                            United States
                          </h5>
                          <h5>
                            <i className="fas fa-envelope" />{" "}
                            ginamoore@example.com
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-phone" /> +1 954 820 7887
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a
                        href="#"
                        className="btn btn-sm bg-info-light"
                        data-toggle="modal"
                        data-target="#appt_details"
                      >
                        <i className="far fa-eye" /> View
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-success-light"
                      >
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-danger-light"
                      >
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <a
                        href="patient-profile.html"
                        className="booking-doc-img"
                      >
                        <img
                          src="assets/img/patients/patient6.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>
                          <a href="patient-profile.html">Elsie Gilley</a>
                        </h3>
                        <div className="patient-details">
                          <h5>
                            <i className="far fa-clock" /> 6 Nov 2019, 9.00 AM
                          </h5>
                          <h5>
                            <i className="fas fa-map-marker-alt" /> Kentucky,
                            United States
                          </h5>
                          <h5>
                            <i className="fas fa-envelope" />{" "}
                            elsiegilley@example.com
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-phone" /> +1 315 384 4562
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a
                        href="#"
                        className="btn btn-sm bg-info-light"
                        data-toggle="modal"
                        data-target="#appt_details"
                      >
                        <i className="far fa-eye" /> View
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-success-light"
                      >
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-danger-light"
                      >
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <a
                        href="patient-profile.html"
                        className="booking-doc-img"
                      >
                        <img
                          src="assets/img/patients/patient7.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>
                          <a href="patient-profile.html">Joan Gardner</a>
                        </h3>
                        <div className="patient-details">
                          <h5>
                            <i className="far fa-clock" /> 5 Nov 2019, 12.00 PM
                          </h5>
                          <h5>
                            <i className="fas fa-map-marker-alt" /> California,
                            United States
                          </h5>
                          <h5>
                            <i className="fas fa-envelope" />{" "}
                            joangardner@example.com
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-phone" /> +1 707 2202 603
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a
                        href="#"
                        className="btn btn-sm bg-info-light"
                        data-toggle="modal"
                        data-target="#appt_details"
                      >
                        <i className="far fa-eye" /> View
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-success-light"
                      >
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-danger-light"
                      >
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <a
                        href="patient-profile.html"
                        className="booking-doc-img"
                      >
                        <img
                          src="assets/img/patients/patient8.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>
                          <a href="patient-profile.html">Daniel Griffing</a>
                        </h3>
                        <div className="patient-details">
                          <h5>
                            <i className="far fa-clock" /> 5 Nov 2019, 7.00 PM
                          </h5>
                          <h5>
                            <i className="fas fa-map-marker-alt" /> New Jersey,
                            United States
                          </h5>
                          <h5>
                            <i className="fas fa-envelope" />{" "}
                            danielgriffing@example.com
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-phone" /> +1 973 773 9497
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a
                        href="#"
                        className="btn btn-sm bg-info-light"
                        data-toggle="modal"
                        data-target="#appt_details"
                      >
                        <i className="far fa-eye" /> View
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-success-light"
                      >
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-danger-light"
                      >
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <a
                        href="patient-profile.html"
                        className="booking-doc-img"
                      >
                        <img
                          src="assets/img/patients/patient9.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>
                          <a href="patient-profile.html">Walter Roberson</a>
                        </h3>
                        <div className="patient-details">
                          <h5>
                            <i className="far fa-clock" /> 4 Nov 2019, 10.00 AM
                          </h5>
                          <h5>
                            <i className="fas fa-map-marker-alt" /> Florida,
                            United States
                          </h5>
                          <h5>
                            <i className="fas fa-envelope" />{" "}
                            walterroberson@example.com
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-phone" /> +1 850 358 4445
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a
                        href="#"
                        className="btn btn-sm bg-info-light"
                        data-toggle="modal"
                        data-target="#appt_details"
                      >
                        <i className="far fa-eye" /> View
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-success-light"
                      >
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-danger-light"
                      >
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <a
                        href="patient-profile.html"
                        className="booking-doc-img"
                      >
                        <img
                          src="assets/img/patients/patient10.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>
                          <a href="patient-profile.html">Robert Rhodes</a>
                        </h3>
                        <div className="patient-details">
                          <h5>
                            <i className="far fa-clock" /> 4 Nov 2019, 11.00 AM
                          </h5>
                          <h5>
                            <i className="fas fa-map-marker-alt" /> California,
                            United States
                          </h5>
                          <h5>
                            <i className="fas fa-envelope" />{" "}
                            robertrhodes@example.com
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-phone" /> +1 858 259 5285
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a
                        href="#"
                        className="btn btn-sm bg-info-light"
                        data-toggle="modal"
                        data-target="#appt_details"
                      >
                        <i className="far fa-eye" /> View
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-success-light"
                      >
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-danger-light"
                      >
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <a
                        href="patient-profile.html"
                        className="booking-doc-img"
                      >
                        <img
                          src="assets/img/patients/patient11.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>
                          <a href="patient-profile.html">Harry Williams</a>
                        </h3>
                        <div className="patient-details">
                          <h5>
                            <i className="far fa-clock" /> 3 Nov 2019, 6.00 PM
                          </h5>
                          <h5>
                            <i className="fas fa-map-marker-alt" /> Colorado,
                            United States
                          </h5>
                          <h5>
                            <i className="fas fa-envelope" />{" "}
                            harrywilliams@example.com
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-phone" /> +1 303 607 7075
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a
                        href="#"
                        className="btn btn-sm bg-info-light"
                        data-toggle="modal"
                        data-target="#appt_details"
                      >
                        <i className="far fa-eye" /> View
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-success-light"
                      >
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm bg-danger-light"
                      >
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
          {/* Appointment Details Modal */}
  <div className="modal fade custom-modal" id="appt_details">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Appointment Details</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <ul className="info-details">
            <li>
              <div className="details-header">
                <div className="row">
                  <div className="col-md-6">
                    <span className="title">#APT0001</span>
                    <span className="text">21 Oct 2019 10:00 AM</span>
                  </div>
                  <div className="col-md-6">
                    <div className="text-right">
                      <button
                        type="button"
                        className="btn bg-success-light btn-sm"
                        id="topup_status"
                      >
                        Completed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <span className="title">Status:</span>
              <span className="text">Completed</span>
            </li>
            <li>
              <span className="title">Confirm Date:</span>
              <span className="text">29 Jun 2019</span>
            </li>
            <li>
              <span className="title">Paid Amount</span>
              <span className="text">$450</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* /Appointment Details Modal */}
      </div>
    </MainLayout>
  );
};
export default AppointmentHistory;
