import React, { useState } from "react";
import MainLayout from "../../../../layouts/MainLayout";
import { FormControl, Select, TextField, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = ["Male", "Female", "Other"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const PatientRegistration = () => {
  let schema = yup
    .object()
    .shape({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      age: yup.number().positive().integer().required(),
      gender: yup.string().required(),
      mobileNo: yup.string().required(),
      address: yup.string().required(),
    })
    .required();
  const {
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
                      <div
                        className="login-header"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="h5">
                          {" "}
                          Patient Registration
                        </Typography>
                      </div>
                      <form>
                        <div className="form-group form-focus">
                          <TextField
                            type="firstName"
                            label="First Name"
                            {...register("firstName")}
                            error={!!errors.firstName}
                            fullWidth
                            required
                          />
                        </div>

                        <div className="form-group form-focus">
                          <TextField
                            type="lastName"
                            label="Last Name"
                            {...register("lastName")}
                            error={!!errors.lastName}
                            fullWidth
                            required
                          />
                        </div>
                        <div className="form-group form-focus">
                          <TextField
                            type="age"
                            label="Age"
                            {...register("age")}
                            error={!!errors.age}
                            fullWidth
                            required
                          />
                        </div>
                        <div className="form-group form-focus">
                          <FormControl sx={{ m: 1, width: 380 }}>
                            <InputLabel id="demo-multiple-name-label">
                              Gender
                            </InputLabel>
                            <Select
                              labelId="demo-multiple-name-label"
                              id="demo-multiple-name"
                              style={{ marginLeft: "-7px" }}
                              multiple
                              value={personName}
                              onChange={handleChange}
                              input={<OutlinedInput label="Name" />}
                              MenuProps={MenuProps}
                            >
                              {names.map((name) => (
                                <MenuItem
                                  key={name}
                                  value={name}
                                  style={getStyles(name, personName, theme)}
                                >
                                  {name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                        <div className="form-group form-focus">
                          <TextField
                            type="mobileNo"
                            label="Mobile no"
                            {...register("mobileNo")}
                            error={!!errors.mobileNo}
                            fullWidth
                            required
                          />
                        </div>
                        <div className="form-group form-focus">
                          <TextField
                            type="address"
                            label="Address"
                            {...register("address")}
                            error={!!errors.address}
                            fullWidth
                            required
                          />
                        </div>

                        <button
                          className="btn btn-primary btn-block btn-lg login-btn"
                          type="submit"
                        >
                          Sign In
                        </button>

                        <div className="text-center dont-have">
                          Don’t have an account?{" "}
                          <NavLink to="/doctor-registration">Register</NavLink>
                        </div>
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
export default PatientRegistration;
