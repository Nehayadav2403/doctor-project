import React from "react";
import { NavLink } from "react-router-dom";
// import Carousel from 'react-material-ui-carousel'
// import AliceCarousel from 'react-alice-carousel';
import Slider from "react-slick";

const BookOurDoctor = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="section section-doctor">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-header ">
              <h2>Book Our Doctor</h2>
              <p>Book online doctor appointment as per availability </p>
            </div>
            <div className="about-content">
              <p>
                An online doctor appointment platform for People & Patients to
                manage Medical Records and to search & book online appointment
                with a Healthcare Provider (Doctor, Clinic, Nursing Home,
                Hospital etc.) at ease with the best doctor search app or web.
              </p>
              <p>
                A powerful and easy to use end to end clinic management software
                for Doctors & Healthcare Providers to efficiently manage Patient
                Consultation and Clinic Management at affordable price through
                the best online doctor appointment software.Manage your
                Patient’s Communication in terms of providing Informative
                Instructions.
              </p>
              <a href="javascript:;">Read More..</a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="doctor-slider slider">
              <Slider {...settings}>
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
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $300 - $1000
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <NavLink to="/doctor-profile" className="btn view-btn">
                          View Profile
                        </NavLink>
                      </div>
                      <div className="col-6">
                        <NavLink
                          to="/book-appointment"
                          className="btn book-btn"
                        >
                          Book Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

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
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $50 - $300
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <NavLink to="/doctor-profile" className="btn view-btn">
                          View Profile
                        </NavLink>
                      </div>
                      <div className="col-6">
                        <NavLink
                          to="/book-appointment"
                          className="btn book-btn"
                        >
                          Book Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

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
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
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
                        <NavLink to="/doctor-profile" className="btn view-btn">
                          View Profile
                        </NavLink>
                      </div>
                      <div className="col-6">
                        <NavLink
                          to="/book-appointment"
                          className="btn book-btn"
                        >
                          Book Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

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
                      <span className="d-inline-block average-rating">(4)</span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Louisiana, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $150 - $250
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <NavLink to="/doctor-profile" className="btn view-btn">
                          View Profile
                        </NavLink>
                      </div>
                      <div className="col-6">
                        <NavLink
                          to="/book-appointment"
                          className="btn book-btn"
                        >
                          Book Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

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
                      <NavLink to="/doctor-profile">Marvin Campbell</NavLink>
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
                        <i className="fas fa-map-marker-alt" /> Michigan, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
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
                        <NavLink to="/doctor-profile" className="btn view-btn">
                          View Profile
                        </NavLink>
                      </div>
                      <div className="col-6">
                        <NavLink
                          to="/book-appointment"
                          className="btn book-btn"
                        >
                          Book Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

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
                      <NavLink to="/doctor-profile">Katharine Berthold</NavLink>
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
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
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
                        <NavLink to="/doctor-profile" className="btn view-btn">
                          View Profile
                        </NavLink>
                      </div>
                      <div className="col-6">
                        <NavLink
                          to="/book-appointment"
                          className="btn book-btn"
                        >
                          Book Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

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
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
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
                        <NavLink to="/doctor-profile" className="btn view-btn">
                          View Profile
                        </NavLink>
                      </div>
                      <div className="col-6">
                        <NavLink
                          to="/book-appointment"
                          className="btn book-btn"
                        >
                          Book Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

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
                        <i className="fas fa-map-marker-alt" /> California, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
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
                        <NavLink to="/doctor-profile" className="btn view-btn">
                          View Profile
                        </NavLink>
                      </div>
                      <div className="col-6">
                        <NavLink
                          to="/book-appointment"
                          className="btn book-btn"
                        >
                          Book Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookOurDoctor;
