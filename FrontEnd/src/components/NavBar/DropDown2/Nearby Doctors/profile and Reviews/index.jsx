import { NavLink } from "react-router-dom";
import MainLayout from "../../../../../layouts/MainLayout";

const ProfileAndReviews = () => {
  return (
    <MainLayout>
      <div>
        <>
          {/* Breadcrumb */}
          <div className="breadcrumb-bar">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-8 col-12">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index-2.html">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Profile and Reviews
                      </li>
                    </ol>
                  </nav>
                  <h2 className="breadcrumb-title">Profile and Reviews</h2>
                </div>
                <div className="col-md-4 col-12 d-md-block d-none">
                  <div className="sort-by">
                    <span className="sort-title">Sort by</span>
                    <span className="sortby-fliter">
                      <select className="select">
                        <option>Select</option>
                        <option className="sorting">Rating</option>
                        <option className="sorting">Popular</option>
                        <option className="sorting">Latest</option>
                        <option className="sorting">Free</option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Page Content */}
          <div className="content">
            <div className="container-fluid" style={{ width: "110rem" }}>
              <div className="row">
                <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar"></div>
                <div
                  className="col-md-12 col-lg-8 col-xl-9"
                  style={{ marginRight: "1rem" }}
                >
                  {/* Doctor Widget */}
                  <div className="card">
                    <div className="card-body">
                      <div className="doctor-widget">
                        <div className="doc-info-left">
                          <div className="doctor-img">
                            <NavLink to="/doctor-profile">
                              <img
                                src="assets/img/doctors/doctor-thumb-01.jpg"
                                className="img-fluid"
                                alt="User Image"
                              />
                            </NavLink>
                          </div>
                          <div className="doc-info-cont">
                            <h4 className="doc-name">
                              <NavLink to="/doctor-profile">Dr. Ruby Perrin</NavLink>
                            </h4>
                            <p className="doc-speciality">
                              MDS - Periodontology and Oral Implantology, BDS
                            </p>
                            <h5 className="doc-department">
                              <img
                                src="assets/img/specialities/specialities-05.png"
                                className="img-fluid"
                                alt="Speciality"
                              />
                              Dentist
                            </h5>
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span className="d-inline-block average-rating">
                                (17)
                              </span>
                            </div>
                            <div className="clinic-details">
                              <p className="doc-location">
                                <i className="fas fa-map-marker-alt" /> Florida,
                                USA
                              </p>
                              <ul className="clinic-gallery">
                                <li>
                                  <a
                                    href="assets/img/features/feature-01.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-01.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-02.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-02.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-03.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-03.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-04.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-04.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="clinic-services">
                              <span>Dental Fillings</span>
                              <span> Whitneing</span>
                            </div>
                          </div>
                        </div>

                        <div className="doc-info-right">
                          <div className="clini-infos">
                            <ul>
                              <li>
                                <i className="far fa-thumbs-up" /> 98%
                              </li>
                              <li>
                                <i className="far fa-comment" /> 17 Feedback
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt" /> Florida,
                                USA
                              </li>
                              <li>
                                <i className="far fa-money-bill-alt" /> $300 -
                                $1000{" "}
                                <i
                                  className="fas fa-info-circle"
                                  data-toggle="tooltip"
                                  title="Lorem Ipsum"
                                />{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="clinic-booking">
                            <NavLink
                              className="view-pro-btn"
                              to="/doctor-profile"
                            >
                              View Profile
                            </NavLink>
                            <NavLink className="apt-btn" to="/book-appointment">
                              Book Appointment
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="comment">
                        <img
                          className="avatar rounded-circle"
                          alt="User Image"
                          src="assets/img/patients/patient.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">
                              Richard Wilson
                            </span>
                            <span className="comment-date">
                              Reviewed 2 Days ago
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p className="recommended">
                            <i className="far fa-thumbs-up" /> I recommend the
                            doctor
                          </p>
                          <p className="comment-content">
                            Excellent doctor!!!Very thorough and caring. I'm
                            terribly afraid of the dentist and she's very
                            sensitive to that and goes the extra mile to make
                            you feel comfortable. Love her!
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up" /> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down" /> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="card">
                    <div className="card-body">
                      <div className="doctor-widget">
                        <div className="doc-info-left">
                          <div className="doctor-img">
                            <NavLink to="/doctor-profile">
                              <img
                                src="assets/img/doctors/doctor-thumb-02.jpg"
                                className="img-fluid"
                                alt="User Image"
                              />
                            </NavLink>
                          </div>
                          <div className="doc-info-cont">
                            <h4 className="doc-name">
                              <NavLink to="/doctor-profile">Dr. Darren Elder</NavLink>
                            </h4>
                            <p className="doc-speciality">
                              BDS, MDS - Oral &amp; Maxillofacial Surgery
                            </p>
                            <h5 className="doc-department">
                              <img
                                src="assets/img/specialities/specialities-05.png"
                                className="img-fluid"
                                alt="Speciality"
                              />
                              Dentist
                            </h5>
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
                            <div className="clinic-details">
                              <p className="doc-location">
                                <i className="fas fa-map-marker-alt" /> Newyork,
                                USA
                              </p>
                              <ul className="clinic-gallery">
                                <li>
                                  <a
                                    href="assets/img/features/feature-01.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-01.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-02.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-02.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-03.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-03.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-04.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-04.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="clinic-services">
                              <span>Dental Fillings</span>
                              <span> Whitneing</span>
                            </div>
                          </div>
                        </div>
                        <div className="doc-info-right">
                          <div className="clini-infos">
                            <ul>
                              <li>
                                <i className="far fa-thumbs-up" /> 100%
                              </li>
                              <li>
                                <i className="far fa-comment" /> 35 Feedback
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt" /> Newyork,
                                USA
                              </li>
                              <li>
                                <i className="far fa-money-bill-alt" /> $50 -
                                $300{" "}
                                <i
                                  className="fas fa-info-circle"
                                  data-toggle="tooltip"
                                  title="Lorem Ipsum"
                                />
                              </li>
                            </ul>
                          </div>
                          <div className="clinic-booking">
                            <NavLink
                              className="view-pro-btn"
                              to="/doctor-profile"
                            >
                              View Profile
                            </NavLink>
                            <NavLink className="apt-btn" to="/book-appointment">
                              Book Appointment
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="comment">
                        <img
                          className="avatar rounded-circle"
                          alt="User Image"
                          src="assets/img/patients/patient2.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">
                              Travis Trimble
                            </span>
                            <span className="comment-date">
                              Reviewed 4 Days ago
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                            </div>
                          </div>
                          <p className="comment-content">
                            The office seems a more relaxed and calm than it
                            used to be. With the previous owner, I always felt
                            rushed. The new dentist is great!
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up" /> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down" /> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="card">
                    <div className="card-body">
                      <div className="doctor-widget">
                        <div className="doc-info-left">
                          <div className="doctor-img">
                            <NavLink to="/doctor-profile">
                              <img
                                src="assets/img/doctors/doctor-thumb-03.jpg"
                                className="img-fluid"
                                alt="User Image"
                              />
                            </NavLink>
                          </div>
                          <div className="doc-info-cont">
                            <h4 className="doc-name">
                              <NavLink to="/doctor-profile">
                                Dr. Deborah Angel
                              </NavLink>
                            </h4>
                            <p className="doc-speciality">
                              MBBS, MD - General Medicine, DNB - Cardiology
                            </p>
                            <p className="doc-department">
                              <img
                                src="assets/img/specialities/specialities-04.png"
                                className="img-fluid"
                                alt="Speciality"
                              />
                              Cardiology
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
                            <div className="clinic-details">
                              <p className="doc-location">
                                <i className="fas fa-map-marker-alt" /> Georgia,
                                USA
                              </p>
                              <ul className="clinic-gallery">
                                <li>
                                  <a
                                    href="assets/img/features/feature-01.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-01.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-02.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-02.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-03.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-03.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-04.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-04.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="clinic-services">
                              <span>Dental Fillings</span>
                              <span> Whitneing</span>
                            </div>
                          </div>
                        </div>
                        <div className="doc-info-right">
                          <div className="clini-infos">
                            <ul>
                              <li>
                                <i className="far fa-thumbs-up" /> 99%
                              </li>
                              <li>
                                <i className="far fa-comment" /> 35 Feedback
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt" /> Newyork,
                                USA
                              </li>
                              <li>
                                <i className="far fa-money-bill-alt" /> $100 -
                                $400{" "}
                                <i
                                  className="fas fa-info-circle"
                                  data-toggle="tooltip"
                                  title="Lorem Ipsum"
                                />
                              </li>
                            </ul>
                          </div>
                          <div className="clinic-booking">
                            <NavLink
                              className="view-pro-btn"
                              to="/doctor-profile"
                            >
                              View Profile
                            </NavLink>
                            <NavLink className="apt-btn" to="/book-appointment">
                              Book Appointment
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="comment">
                        <img
                          className="avatar rounded-circle"
                          alt="User Image"
                          src="assets/img/patients/patient3.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">Carl Kelly</span>
                            <span className="comment-date">
                              Reviewed 5 Days ago
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                            </div>
                          </div>
                          <p className="comment-content">
                            She is the best cardiologist !!!!!!
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up" /> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down" /> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="card">
                    <div className="card-body">
                      <div className="doctor-widget">
                        <div className="doc-info-left">
                          <div className="doctor-img">
                            <NavLink to="/doctor-profile">
                              <img
                                src="assets/img/doctors/doctor-thumb-04.jpg"
                                className="img-fluid"
                                alt="User Image"
                              />
                            </NavLink>
                          </div>
                          <div className="doc-info-cont">
                            <h4 className="doc-name">
                              <NavLink to="/doctor-profile">Dr. Sofia Brient</NavLink>
                            </h4>
                            <p className="doc-speciality">
                              MBBS, MS - General Surgery, MCh - Urology
                            </p>
                            <p className="doc-department">
                              <img
                                src="assets/img/specialities/specialities-01.png"
                                className="img-fluid"
                                alt="Speciality"
                              />
                              Urology
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
                            <div className="clinic-details">
                              <p className="doc-location">
                                <i className="fas fa-map-marker-alt" />{" "}
                                Louisiana, USA
                              </p>
                              <ul className="clinic-gallery">
                                <li>
                                  <a
                                    href="assets/img/features/feature-01.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-01.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-02.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-02.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-03.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-03.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-04.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-04.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="clinic-services">
                              <span>Dental Fillings</span>
                              <span> Whitneing</span>
                            </div>
                          </div>
                        </div>
                        <div className="doc-info-right">
                          <div className="clini-infos">
                            <ul>
                              <li>
                                <i className="far fa-thumbs-up" /> 97%
                              </li>
                              <li>
                                <i className="far fa-comment" /> 4 Feedback
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt" /> Newyork,
                                USA
                              </li>
                              <li>
                                <i className="far fa-money-bill-alt" /> $150 -
                                $250{" "}
                                <i
                                  className="fas fa-info-circle"
                                  data-toggle="tooltip"
                                  title="Lorem Ipsum"
                                />
                              </li>
                            </ul>
                          </div>
                          <div className="clinic-booking">
                            <NavLink
                              className="view-pro-btn"
                              to="/doctor-profile"
                            >
                              View Profile
                            </NavLink>
                            <NavLink className="apt-btn" to="/book-appointment">
                              Book Appointment
                            </NavLink>
                          </div>
                        </div>
                      </div>

                      <div className="comment">
                        <img
                          className="avatar rounded-circle"
                          alt="User Image"
                          src="assets/img/patients/patient4.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">
                              Michelle Fairfax
                            </span>
                            <span className="comment-date">
                              Reviewed 6 Days ago
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                            </div>
                          </div>
                          <p className="comment-content">
                            Very pleasant indeed! Dr. Sofia is a great doctor
                            who listens to the patient and takes care with great
                            attention..
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up" /> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down" /> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="card">
                    <div className="card-body">
                      <div className="doctor-widget">
                        <div className="doc-info-left">
                          <div className="doctor-img">
                            <NavLink to="/doctor-profile">
                              <img
                                src="assets/img/doctors/doctor-thumb-06.jpg"
                                className="img-fluid"
                                alt="User Image"
                              />
                            </NavLink>
                          </div>
                          <div className="doc-info-cont">
                            <h4 className="doc-name">
                              <NavLink to="/doctor-profile">
                                Dr. Katharine Berthold
                              </NavLink>
                            </h4>
                            <p className="doc-speciality">
                              MS - Orthopaedics, MBBS, M.Ch - Orthopaedics
                            </p>
                            <p className="doc-department">
                              <img
                                src="assets/img/specialities/specialities-03.png"
                                className="img-fluid"
                                alt="Speciality"
                              />
                              Orthopaedics
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
                            <div className="clinic-details">
                              <p className="doc-location">
                                <i className="fas fa-map-marker-alt" /> Texas,
                                USA
                              </p>
                              <ul className="clinic-gallery">
                                <li>
                                  <a
                                    href="assets/img/features/feature-01.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-01.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-02.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-02.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-03.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-03.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-04.jpg"
                                    data-fancybox="gallery"
                                  >
                                    <img
                                      src="assets/img/features/feature-04.jpg"
                                      alt="Feature"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="clinic-services">
                              <span>Dental Fillings</span>
                              <span> Whitneing</span>
                            </div>
                          </div>
                        </div>
                        <div className="doc-info-right">
                          <div className="clini-infos">
                            <ul>
                              <li>
                                <i className="far fa-thumbs-up" /> 100%
                              </li>
                              <li>
                                <i className="far fa-comment" /> 52 Feedback
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt" /> Texas,
                                USA
                              </li>
                              <li>
                                <i className="far fa-money-bill-alt" /> $100 -
                                $500{" "}
                                <i
                                  className="fas fa-info-circle"
                                  data-toggle="tooltip"
                                  title="Lorem Ipsum"
                                />
                              </li>
                            </ul>
                          </div>
                          <div className="clinic-booking">
                            <NavLink
                              className="view-pro-btn"
                              to="/doctor-profile"
                            >
                              View Profile
                            </NavLink>
                            <NavLink className="apt-btn" to="/book-appointment">
                              Book Appointment
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="comment">
                        <img
                          className="avatar rounded-circle"
                          alt="User Image"
                          src="assets/img/patients/patient5.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">Gina Moore</span>
                            <span className="comment-date">
                              Reviewed 1 Week ago
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                            </div>
                          </div>
                          <p className="comment-content">
                            Dr. Katharine and her staff were extremely
                            professional. The office also has a completely new
                            look and it looks fabulous.
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up" /> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down" /> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  <div className="load-more text-center">
                    <a
                      className="btn btn-primary btn-sm"
                      href="javascript:void(0);"
                    >
                      Load More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </>
      </div>
    </MainLayout>
  );
};
export default ProfileAndReviews;
