import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../../../../layouts/MainLayout";

const AdminSupport = () => {
  //   const history = useNavigate();
  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("erros-> ", errors);
  const onSubmit = (values) => {
    console.log("values-> ", values);
    reset();
    // history("/dashboard");
  };
  return (
    <MainLayout>
      <div>
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
                        {/* <div className="login-header">
                        <Typography variant="h5">OTP Verification</Typography>
                      </div> */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="form-group form-focus">
                            <TextField
                              type="text"
                              label="name"
                              fullWidth
                              required
                            />
                          </div>
                          <div className="form-group form-focus">
                            <TextField
                              type="text"
                              label="email"
                              fullWidth
                              required
                            />
                          </div>

                          <button
                            className="btn btn-primary btn-block btn-lg login-btn"
                            type="submit"
                          >
                            Send
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
      </div>
    </MainLayout>
  );
};
export default AdminSupport;
