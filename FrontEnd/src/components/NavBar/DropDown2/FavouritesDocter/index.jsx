import { NavLink } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout";

const FavouritesDoctor = () => {
  return (
    <MainLayout>
      <>
        {/* /User Menu */}
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
                      Favourite Doctor's
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Favourite Doctor's</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid" style={{ width: "110rem" }}>
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                {/* <div className="profile-sidebar">
                  <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                      <a href="#" className="booking-doc-img">
                        <img
                          src="assets/img/patients/patient.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>Richard Wilson</h3>
                        <div className="patient-details">
                          <h5>
                            <i className="fas fa-birthday-cake" /> 24 Jul 1983,
                            38 years
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-map-marker-alt" /> Newyork, USA
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                      <ul>
                        <li>
                          <NavLink to="/patient-dashboard">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                          </NavLink>
                        </li>
                        <li className="active">
                          <NavLink to={"/favourites-doctor"}>
                            <i className="fas fa-bookmark" />
                            <span>Favourites</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/chat-doctor">
                            <i className="fas fa-comments" />
                            <span>Message</span>
                            <small className="unread-msg">23</small>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/profile-setting">
                            <i className="fas fa-user-cog" />
                            <span>Profile Settings</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/change-password">
                            <i className="fas fa-lock" />
                            <span>Change Password</span>
                          </NavLink>
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
                </div> */}
              </div>
              <div
                className="col-md-7 col-lg-8 col-xl-9"
                style={{ marginRight: "1rem" }}
              >
                <div className="row row-grid">
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <NavLink to="/doctor-profile">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-01.jpg"
                          />
                        </NavLink>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <NavLink to="/doctor-profile">Ruby Perrin</NavLink>
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">
                          MDS - Periodontology and Oral Implantology, BDS
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span className="d-inline-block average-rating">
                            (17)
                          </span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Florida, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22
                            Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $300 - $1000{" "}
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <NavLink
                              to="/doctor-profile"
                              className="btn view-btn"
                            >
                              View Profile
                            </NavLink>
                          </div>
                          <div className="col-6">
                            <NavLink to="/book-appointment" className="btn book-btn">
                              Book Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <NavLink to="/doctor-profile">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-02.jpg"
                          />
                        </NavLink>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <NavLink to="/doctor-profile">Darren Elder</NavLink>
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">
                          BDS, MDS - Oral &amp; Maxillofacial Surgery
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (35)
                          </span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Newyork, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22
                            Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $50 - $300{" "}
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <NavLink
                              to="/doctor-profile"
                              className="btn view-btn"
                            >
                              View Profile
                            </NavLink>
                          </div>
                          <div className="col-6">
                            <NavLink to="/book-appointment" className="btn book-btn">
                              Book Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <NavLink to="/doctor-profile">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-03.jpg"
                          />
                        </NavLink>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <NavLink to="/doctor-profile">Deborah Angel</NavLink>
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">
                          MBBS, MD - General Medicine, DNB - Cardiology
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (27)
                          </span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Georgia, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22
                            Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $400{" "}
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <NavLink
                              to="/doctor-profile"
                              className="btn view-btn"
                            >
                              View Profile
                            </NavLink>
                          </div>
                          <div className="col-6">
                            <NavLink to="/book-appointment" className="btn book-btn">
                              Book Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <NavLink to="/doctor-profile">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-04.jpg"
                          />
                        </NavLink>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <NavLink to="/doctor-profile">Sofia Brient</NavLink>
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">
                          MBBS, MS - General Surgery, MCh - Urology
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (4)
                          </span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Louisiana,
                            USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22
                            Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $150 - $250{" "}
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <NavLink
                              to="/doctor-profile"
                              className="btn view-btn"
                            >
                              View Profile
                            </NavLink>
                          </div>
                          <div className="col-6">
                            <NavLink to="/book-appointment" className="btn book-btn">
                              Book Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <NavLink to="/doctor-profile">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-05.jpg"
                          />
                        </NavLink>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <NavLink to="/doctor-profile">
                            Marvin Campbell
                          </NavLink>
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">
                          MBBS, MD - Ophthalmology, DNB - Ophthalmology
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (66)
                          </span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Michigan,
                            USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22
                            Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $50 - $700
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <NavLink
                              to="/doctor-profile"
                              className="btn view-btn"
                            >
                              View Profile
                            </NavLink>
                          </div>
                          <div className="col-6">
                            <NavLink to="/book-appointment" className="btn book-btn">
                              Book Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <NavLink to="/doctor-profile">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-06.jpg"
                          />
                        </NavLink>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <NavLink to="/doctor-profile">
                            Katharine Berthold
                          </NavLink>
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">
                          MS - Orthopaedics, MBBS, M.Ch - Orthopaedics
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (52)
                          </span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Texas, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22
                            Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $500
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <NavLink
                              to="/doctor-profile"
                              className="btn view-btn"
                            >
                              View Profile
                            </NavLink>
                          </div>
                          <div className="col-6">
                            <NavLink to="/book-appointment" className="btn book-btn">
                              Book Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <NavLink to="/doctor-profile">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-07.jpg"
                          />
                        </NavLink>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <NavLink to="/doctor-profile">Linda Tobin</NavLink>
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">
                          MBBS, MD - General Medicine, DM - Neurology
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (43)
                          </span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Kansas, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22
                            Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $1000
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <NavLink
                              to="/doctor-profile"
                              className="btn view-btn"
                            >
                              View Profile
                            </NavLink>
                          </div>
                          <div className="col-6">
                            <NavLink to="/book-appointment" className="btn book-btn">
                              Book Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <NavLink to="/doctor-profile">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-08.jpg"
                          />
                        </NavLink>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <NavLink to="/doctor-profile">Paul Richard</NavLink>
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">
                          MBBS, MD - Dermatology , Venereology &amp; Lepros
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (49)
                          </span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> California,
                            USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22
                            Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $400
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <NavLink
                              to="/doctor-profile"
                              className="btn view-btn"
                            >
                              View Profile
                            </NavLink>
                          </div>
                          <div className="col-6">
                            <NavLink to="/book-appointment" className="btn book-btn">
                              Book Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <NavLink to="/doctor-profile">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-09.jpg"
                          />
                        </NavLink>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <NavLink to="/doctor-profile">Dr. John Gibbs</NavLink>
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">
                          MDS - Periodontology and Oral Implantology, BDS
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (112)
                          </span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Oklahoma,
                            USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22
                            Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $500 - $2500
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <NavLink
                              to="/doctor-profile"
                              className="btn view-btn"
                            >
                              View Profile
                            </NavLink>
                          </div>
                          <div className="col-6">
                            <NavLink to="/book-appointment" className="btn book-btn">
                              Book Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <NavLink to="/doctor-profile">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-10.jpg"
                          />
                        </NavLink>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <NavLink to="/doctor-profile">
                            Dr. Olga Barlow
                          </NavLink>
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">
                          MDS - Periodontology and Oral Implantology, BDS
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (65)
                          </span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Montana, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22
                            Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $75 - $250
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <NavLink
                              to="/doctor-profile"
                              className="btn view-btn"
                            >
                              View Profile
                            </NavLink>
                          </div>
                          <div className="col-6">
                            <NavLink to="/book-appointment" className="btn book-btn">
                              Book Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <NavLink to="/doctor-profile">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-11.jpg"
                          />
                        </NavLink>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <NavLink to="/doctor-profile">
                            Dr. Julia Washington
                          </NavLink>
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">
                          MBBS, MD - General Medicine, DM - Endocrinology
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (5)
                          </span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Oklahoma,
                            USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22
                            Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $275 - $450
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <NavLink
                              to="/doctor-profile"
                              className="btn view-btn"
                            >
                              View Profile
                            </NavLink>
                          </div>
                          <div className="col-6">
                            <NavLink to="/book-appointment" className="btn book-btn">
                              Book Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <NavLink to="/doctor-profile">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-12.jpg"
                          />
                        </NavLink>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <NavLink to="/doctor-profile">
                            Dr. Shaun Aponte
                          </NavLink>
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">
                          MBBS, MS - ENT, Diploma in Otorhinolaryngology (DLO)
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (5)
                          </span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Indiana, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22
                            Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $150 - $350
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <NavLink
                              to="/doctor-profile"
                              className="btn view-btn"
                            >
                              View Profile
                            </NavLink>
                          </div>
                          <div className="col-6">
                            <NavLink to="/book-appointment" className="btn book-btn">
                              Book Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MainLayout>
  );
};
export default FavouritesDoctor;
