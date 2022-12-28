import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  NativeSelect,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import React from "react";

const Payment = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,
         initial-scale=1.0"
        />
        <link rel="stylesheet" href="style.css" className="css" />
        <div
          className="container"
          style={{
            height: "500px",
            width: "400px",
            backgroundImage: "linear-gradient(#1e6b30, #308d46)",
            top: "50%",
            left: "50%",
            // position: "absolute",
            // transform: "translate(-50%, -50%)",
            // position: "absolute",
            borderBottomLeftRadius: "120px",
            borderTopRightRadius: "90px",
          }}
        >
          {/* <div
            className="main-content"
            style={{
              height: "235px",
              backgroundColor: "#1b9236",
              borderBottomLeftRadius: "90px",
              borderBottomRightRadius: "80px",
              borderTop: "#1e6b30",
            }}
          >
            <p
              className="text"
              style={{
                textAlign: "center",
                fontSize: "300%",
                textDecoration: "aliceblue",
                color: "aliceblue",
              }}
            >
              GeeksforGeeks
            </p>
          </div>
          <div className="centre-content">
            <h1 className="price">
              2499<span>/-</span>
            </h1>
            <p
              className="course"
              style={{
                color: "black",
                fontSize: "25px",
                fontWeight: "bolder",
              }}
            >
              Buy DSA Self-Paced Course Now !
            </p>
          </div> */}
          <div className="last-content">
            <button
              type="button"
              className="pay-now-btn"
              style={{
                cursor: "pointer",
                color: "#fff",
                height: "50px",
                width: "290px",
                border: "none",
                margin: "5px 30px",
                backgroundColor: "rgb(71, 177, 61)",
                position: "relative",
              }}
            >
              Apply Coupons
            </button>
            <button
              type="button"
              className="pay-now-btn"
              style={{
                cursor: "pointer",
                color: "#fff",
                height: "50px",
                width: "290px",
                border: "none",
                margin: "5px 30px",
                backgroundColor: "rgb(71, 177, 61)",
                position: "relative",
              }}
            >
              Pay with Netbanking
            </button>
            {/* <button type="button" class="pay-now-btn">
  Netbanking options
  </button> */}
          </div>
          <div
            className="card-details"
            style={{
              background: "rgb(8, 49, 14)",
              color: "rgb(225, 223, 233)",
              margin: "10px 30px",
              padding: "10px",
              fontFamily: "Segoe UI Tahoma Geneva Verdana sansSerif",
              fontWeight: "bold",
            }}
          >
            <p style={{ fontSize: "18px" }}>Pay using Credit or Debit card</p>
            <div className="card-number">
              <label
                style={{
                  fontSize: "15px",
                  lineHeight: "35px",
                }}
              >
                Card Number
              </label>
              <input
                type="text"
                className="card-number-field"
                placeholder="###-###-###"
              />
            </div>
            <br />
            <div className="date-number">
              <label
                style={{
                  fontSize: "15px",
                  lineHeight: "35px",
                }}
              >
                Expiry Date
              </label>
              <input
                type="text"
                className="date-number-field"
                placeholder="DD-MM-YY"
              />
            </div>
            <div className="cvv-number">
              <label
                style={{
                  fontSize: "15px",
                  lineHeight: "35px",
                }}
              >
                CVV number
              </label>
              <input
                type="text"
                className="cvv-number-field"
                placeholder="xxx"
              />
            </div>
            <div className="nameholder-number">
              <label
                style={{
                  fontSize: "15px",
                  lineHeight: "35px",
                }}
              >
                Card Holder name
              </label>
              <input
                type="text"
                className="card-name-field"
                placeholder="Enter your Name"
              />
            </div>
            <button
              type="submit"
              className="submit-now-btn"
              style={{
                cursor: "pointer",
                color: "#fff",
                height: "30px",
                width: "240px",
                border: "none",
                margin: "5px 30px",
                backgroundColor: "rgb(71, 177, 61)",
              }}
            >
              submit
            </button>
          </div>
        </div>
      </>
    </div>
  );
};
export default Payment;
