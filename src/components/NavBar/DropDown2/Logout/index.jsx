import React from "react";
import MainLayout from "../../../../layouts/MainLayout";
import { TextField, Typography } from "@mui/material";
const LogoutPatient = () => {
  return (
    <MainLayout>
      <div className="main-wrapper">
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Login Tab Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src="assets/img/login-banner.png"
                        className="img-fluid"
                        alt="Doccure Login"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <Typography variant="h5">Logout Doccure</Typography>
                      </div>
                      <form>
                        <div className="form-group form-focus">
                          <TextField type="email" label="Email " fullWidth />
                        </div>

                        <div className="form-group form-focus">
                          <TextField
                            type="password"
                            label="Password"
                            fullWidth
                          />
                        </div>

                        <div className="text-right">
                          <a className="forgot-link" href="/forgot-password">
                            Forgot Password ?
                          </a>
                        </div>
                        <button
                          className="btn btn-primary btn-block btn-lg login-btn"
                          type="submit"
                        >
                          Log out
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /Login Tab Content */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </MainLayout>
  );
};
export default LogoutPatient;
