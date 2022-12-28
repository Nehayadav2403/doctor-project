import MainLayout from "../../../../layouts/MainLayout";

import { Container, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Profile = () => {
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
                      profile
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title"> profile</h2>
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
                      Personal Details
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
                          <TextField type="text" label="Name" fullWidth />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <TextField type="text" label="Address" fullWidth />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <TextField type="text" label="Mobile no" fullWidth />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <TextField type="text" label="Age" fullWidth />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <select className="form-control select">
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-0">
                          <Typography variant="h6">Medical Records</Typography>
                        </div>
                        <div className="form-group">
                          <TextField
                            type="text"
                            label="Symptoms"
                            fullWidth
                            margin="normal"
                          />
                        </div>
                        <div className="form-group ">
                          <TextField type="text" label="Allergies" fullWidth />
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
                        Submit
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
export default Profile;
