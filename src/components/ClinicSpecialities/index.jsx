import Slider from "react-slick";

const ClinicSpecialities = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section className="section section-specialities">
      <div className="container-fluid">
        <div className="section-header text-center">
          <h2>Clinic and Specialities</h2>
          <p className="sub-title">
            Most of the people visit a hospital website to get information. So
            these sites must be very user-friendly, easy to navigate and
            extremely well-organised with a pleasing aesthetics.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="specialities-slider slider">
              <Slider {...settings}>
                <div className="speicality-item text-center">
                  <div className="speicality-img">
                    <img
                      src="assets/img/specialities/specialities-01.png"
                      className="img-fluid"
                      alt="Speciality"
                    />
                    <span>
                      <i className="fa fa-circle" aria-hidden="true" />
                    </span>
                  </div>
                  <p>Urology</p>
                </div>

                <div className="speicality-item text-center">
                  <div className="speicality-img">
                    <img
                      src="assets/img/specialities/specialities-02.png"
                      className="img-fluid"
                      alt="Speciality"
                    />
                    <span>
                      <i className="fa fa-circle" aria-hidden="true" />
                    </span>
                  </div>
                  <p>Neurology</p>
                </div>

                <div className="speicality-item text-center">
                  <div className="speicality-img">
                    <img
                      src="assets/img/specialities/specialities-03.png"
                      className="img-fluid"
                      alt="Speciality"
                    />
                    <span>
                      <i className="fa fa-circle" aria-hidden="true" />
                    </span>
                  </div>
                  <p>Orthopedic</p>
                </div>

                <div className="speicality-item text-center">
                  <div className="speicality-img">
                    <img
                      src="assets/img/specialities/specialities-04.png"
                      className="img-fluid"
                      alt="Speciality"
                    />
                    <span>
                      <i className="fa fa-circle" aria-hidden="true" />
                    </span>
                  </div>
                  <p>Cardiologist</p>
                </div>

                <div className="speicality-item text-center">
                  <div className="speicality-img">
                    <img
                      src="assets/img/specialities/specialities-05.png"
                      className="img-fluid"
                      alt="Speciality"
                    />
                    <span>
                      <i className="fa fa-circle" aria-hidden="true" />
                    </span>
                  </div>
                  <p>Dentist</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClinicSpecialities;
