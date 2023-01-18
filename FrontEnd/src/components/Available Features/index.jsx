import React from "react";
// import Carousel from 'react-material-ui-carousel'
// import AliceCarousel from 'react-alice-carousel';
import Slider from "react-slick";
const AvailableFeatures = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section className="section section-features">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 features-img">
            <img
              src="assets/img/features/feature.png"
              className="img-fluid"
              alt="Feature"
            />
          </div>
          <div className="col-md-7">
            <div className="section-header">
              <h2 className="mt-2">Availabe Features in Our Clinic</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
            </div>
            <div className="features-slider slider">
              <Slider {...settings}>
                <div className="feature-item text-center">
                  <img
                    src="assets/img/features/feature-01.jpg"
                    className="img-fluid"
                    alt="Feature"
                  />
                  <p>Patient Ward</p>
                </div>

                <div className="feature-item text-center">
                  <img
                    src="assets/img/features/feature-02.jpg"
                    className="img-fluid"
                    alt="Feature"
                  />
                  <p>Test Room</p>
                </div>

                <div className="feature-item text-center">
                  <img
                    src="assets/img/features/feature-03.jpg"
                    className="img-fluid"
                    alt="Feature"
                  />
                  <p>ICU</p>
                </div>

                <div className="feature-item text-center">
                  <img
                    src="assets/img/features/feature-04.jpg"
                    className="img-fluid"
                    alt="Feature"
                  />
                  <p>Laboratory</p>
                </div>

                <div className="feature-item text-center">
                  <img
                    src="assets/img/features/feature-05.jpg"
                    className="img-fluid"
                    alt="Feature"
                  />
                  <p>Operation</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AvailableFeatures;
