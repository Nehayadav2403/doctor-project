import MainLayout from "../../../../layouts/MainLayout";

import { Container, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const CreateProfile = () => {
  return (
    <MainLayout>
      <>
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
                      Create profile
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Create profile</h2>
              </div>
            </div>
          </div>
        </div>

        <Container>
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="card">
                  <div className="card-body">
                    <Typography variant="h6" className="card-title">
                      Basic Information
                    </Typography>
                    <div className="row form-row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="change-avatar">
                            <div className="profile-img">
                              <img
                                src="assets/img/doctors/doctor-thumb-02.jpg"
                                alt="User Image"
                              />
                            </div>
                            <div className="upload-img">
                              <div className="change-photo-btn">
                                <span>
                                  <i className="fa fa-upload" /> Upload Photo
                                </span>
                                <input type="file" className="upload" />
                              </div>
                              <small className="form-text text-muted">
                                Allowed JPG, GIF or PNG. Max size of 2MB
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Username <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            readOnly=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            readOnly=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            First Name <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Last Name <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Gender</label>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-0">
                          <label>Date of Birth</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <Typography variant="h6" className="card-title">
                      About Me
                    </Typography>
                    <div className="form-group mb-0">
                      <TextField
                        fullWidth
                        type="text"
                        label="Biography"
                      ></TextField>
                    </div>
                  </div>

                  <div className="card-body">
                    <Typography variant="h6"> Consultation</Typography>
                    <TextField
                      fullWidth
                      className="card-title"
                      label="Charges For Consultation"
                    ></TextField>
                    {/* <div className="form-group mb-0">
                      <div id="pricing_select">
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="text"
                            id="price_free"
                            name="rating_option"
                            className="custom-control-input"
                            defaultValue="price_free"
                            defaultChecked=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="price_free"
                          >
                            Free
                          </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="price_custom"
                            name="rating_option"
                            defaultValue="custom_price"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="price_custom"
                          >
                            Custom Price (per hour)
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row custom_price_cont"
                      id="custom_price_cont"
                      style={{ display: "none" }}
                    >
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          id="custom_rating_input"
                          name="custom_rating_count"
                          defaultValue=""
                          placeholder={20}
                        />
                        <small className="form-text text-muted">
                          Custom price you can add
                        </small>
                      </div>
                    </div> */}
                  </div>

                  <div className="card-body">
                    <Typography variant="h6" className="card-title">
                      Schedule appointment calender
                    </Typography>
                    <div className="membership-info">
                      <div className="row form-row membership-cont">
                        <div className="col-12 col-md-10 col-lg-5">
                          <div className="form-group">
                            <label>Timing</label>
                            <TextField fullWidth type="time" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <Typography variant="h6" className="card-title">
                      {" "}
                      Number Of Patients
                    </Typography>
                    <div className="registrations-info">
                      <div className="row form-row reg-cont">
                        <div className="col-12 col-md-5">
                          <div className="form-group">
                            <label>Todays Patients</label>
                            <TextField fullWidth type="number" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="submit-section submit-btn-bottom">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    </MainLayout>
  );
};
export default CreateProfile;
