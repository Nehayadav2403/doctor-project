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
const names = [
  "India",
  "United States",
  "Australia",
  "Austria",
  "Algeria",
  "France",
  "Germany",
  "Afghanistan",
  "Belgium",
  "Argentina",
  "Angola",
  "Bangladesh",
  "Brazil",
  "Canada",
  "Albania",
  "China",
  "Denmark",
  "Bahrain",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const RequestProduct = () => {
  let schema = yup
    .object()
    .shape({
      productName: yup.string().required(),
      productDetails: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().required(),
      postalCode: yup.string().required(),
      country: yup.string().required(),
      PhoneNo: yup.string().required(),
      email: yup.string().required(),
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
                        <Typography variant="h5"> Request a Product</Typography>
                      </div>
                      <form>
                        <div className="form-group form-focus">
                          <TextField
                            type="productName"
                            label="Product Name"
                            {...register("productName")}
                            error={!!errors.productName}
                            fullWidth
                          />
                        </div>

                        <div className="form-group form-focus">
                          <TextField
                            type="productDetails"
                            label="Product Details"
                            {...register("productDetails")}
                            error={!!errors.productDetails}
                            fullWidth
                          />
                        </div>
                        <div className="form-group form-focus">
                          <TextField
                            type="city"
                            label="City"
                            {...register("city")}
                            error={!!errors.city}
                            fullWidth
                          />
                        </div>

                        <div className="form-group form-focus">
                          <TextField
                            type="state"
                            label="State"
                            {...register("state")}
                            error={!!errors.state}
                            fullWidth
                          />
                        </div>
                        <div className="form-group form-focus">
                          <FormControl sx={{ m: 1, width: 380 }}>
                            <InputLabel id="demo-multiple-name-label">
                              Country
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
                            type="postalCode"
                            label="Postal / zip code"
                            {...register("postalCode")}
                            error={!!errors.postalCode}
                            fullWidth
                          />
                        </div>
                        <div className="form-group form-focus">
                          <TextField
                            type="phoneNo"
                            label="Phone No (Day)"
                            {...register("PhoneNo")}
                            error={!!errors.PhoneNo}
                            fullWidth
                          />
                        </div>
                        <div className="form-group form-focus">
                          <TextField
                            type="phoneNo"
                            label="Phone No (Evening)"
                            {...register("PhoneNo")}
                            error={!!errors.PhoneNo}
                            fullWidth
                          />
                        </div>
                        <div className="form-group form-focus">
                          <TextField
                            type="email"
                            label="Email"
                            {...register("email")}
                            error={!!errors.email}
                            fullWidth
                          />
                        </div>

                        {/* <div className="text-right">
                          <a className="forgot-link" href="/forgot-password">
                            Forgot Password ?
                          </a>
                        </div> */}
                        <button
                          className="btn btn-primary btn-block btn-lg login-btn"
                          type="submit"
                        >
                          Submit
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
export default RequestProduct;
