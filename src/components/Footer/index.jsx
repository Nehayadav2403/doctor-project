import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
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
  );
};
export default Footer;
