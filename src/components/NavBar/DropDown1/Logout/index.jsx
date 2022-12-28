import React from "react";
import MainLayout from "../../../../layouts/MainLayout";
import { TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Logout = () => {
  const history = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("erros-> ", errors);
  const onSubmit = (values) => {
    console.log("values-> ", values);
    reset();
    history("/sign-in-doctor");
  };

  return (
    <MainLayout>
      <div className="main-wrapper">
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Login Tab Content */}
                {/* <div className="account-content">
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
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group form-focus">
                          <TextField
                            type="email"
                            label="Email "
                            fullWidth
                            required
                          />
                        </div>

                        <div className="form-group form-focus">
                          <TextField
                            type="password"
                            label="Password"
                            fullWidth
                            required
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

                        <div className="text-center dont-have">
                          Don’t have an account?{" "}
                          <a href="register.html">Register</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div> */}
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
export default Logout;
