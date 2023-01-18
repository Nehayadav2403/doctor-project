
import { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { Button } from "@mui/material";
import Address from "./Address";
import Payment from "./Payment";
import MainLayout from "../../../../layouts/MainLayout";
import OrderSummary from "./Order Summary";
import { NavLink } from "react-router-dom";
export default function PaymentGatewayIntegration() {
  return (
    <div className="App">
      <PlaceOrder />
    </div>
  );
}

export const PlaceOrder = () => {
  const [goSteps, setGoSteps] = useState(0);

  return (
    <MainLayout>    
        <div style={{marginTop:"5rem"}}>
      <Stepper activeStep={goSteps}>
        <Step onClick={() => setGoSteps(0)} label="ADDRESS" />
        <Step onClick={() => setGoSteps(1)} label="PAYMENT" />
        <Step onClick={() => setGoSteps(2)} label="ORDER SUMMERY" />
      </Stepper>
      {goSteps === 0 && (
        <div>
          <Address onClick={() => setGoSteps(1)}/>
          <Button className="btn" onClick={() => setGoSteps(1)}>
            Next
          </Button>
        </div>
      )}
      {goSteps === 1 && (
        <div>
        <Payment/>
          <Button className="btn" onClick={() => setGoSteps(2)}>Next</Button>
        </div>
      )}

      {goSteps === 2 && (
        <div>
          <OrderSummary/>
          <Button className="btn" onClick={() => setGoSteps(3)}><NavLink to={"/thankyou"}>Submit</NavLink></Button>
        </div>
      )}
    </div>
    </MainLayout>

  );
};
