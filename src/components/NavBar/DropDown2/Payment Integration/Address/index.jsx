import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const Address = () => {
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
  };

  return (
    <form
      style={{
        width: "50%",
        marginTop: "100rem",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "32px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="main-wrapper">
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid" style={{ width: "57rem" }}>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="account-content">
                  <div
                    className="row align-items-center justify-content-center"
                    style={{ marginLeft: "-24rem" }}
                  >
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src="assets/img/login-banner.png"
                        className="img-fluid"
                        alt="Doccure Login"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div
                        className="login-header"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="h5"> Checkout Form</Typography>
                      </div>

                      <div className="form-group form-focus">
                        <TextField
                          required
                          type="name"
                          label="Name"
                          name="name"
                          {...register("name")}
                          error={!!errors.name}
                          fullWidth
                        />
                      </div>

                      <div className="form-group form-focus">
                        <TextField
                          required
                          type="pinCode"
                          label="Pin Code"
                          {...register("pinCode")}
                          error={!!errors.pinCode}
                          fullWidth
                        />
                      </div>

                      <div className="form-group form-focus">
                        <TextField
                          required
                          type="mobileNo"
                          label="Mobile no"
                          {...register("mobileNo")}
                          error={!!errors.mobileNo}
                          fullWidth
                        />
                      </div>
                      <div className="form-group form-focus">
                        <TextField
                          required
                          type="address"
                          label="Address"
                          {...register("address")}
                          error={!!errors.address}
                          fullWidth
                        />
                      </div>
                      <div className="form-group form-focus">
                        <TextField
                          required
                          type="locality"
                          label="Locality / Town"
                          {...register("locality")}
                          error={!!errors.locality}
                          fullWidth
                        />
                      </div>
                      <div className="form-group form-focus">
                        <TextField
                          required
                          type="city"
                          label="City / District"
                          {...register("city")}
                          error={!!errors.city}
                          fullWidth
                        />
                      </div>
                      <div className="form-group form-focus">
                        <TextField
                          required
                          type="state"
                          label="State"
                          {...register("state")}
                          error={!!errors.state}
                          fullWidth
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="contained"
                        style={{ background: "green" }}
                        fullWidth
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </form>
  );
};
export default Address;
