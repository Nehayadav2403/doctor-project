import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  getApiHandler,
  postApiHandler,
  putApiHandler,
} from "../../../../apiHandler";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { userContext } from "../../../../../App";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

let schema = yup.object().shape({
  patientName: yup.string().required("patient name is required"),
  apptDate: yup.string().required("appt date is required"),
  purpose: yup.string().required("purpose is required"),
  type: yup.string().required("type is required"),
  paidAmount: yup.string().required("paid amount is required"),
});

export default function DoctorModal() {
  const user = React.useContext(userContext);
  const {
    open,
    handleClose,
    handleOpen,
    rows,
    setRows,
    getDoctorDashboard,
    currentId,
    setCurrentId,
  } = user;
  const history = useNavigate();
  // console.log("ROWS_++++++++++++++++_+_+_+_+=>", rows);

  const getById = async () => {
    if (currentId) {
      console.log("getCurrentId=>", currentId);

      const getId = await getApiHandler(
        `/getById-doctor-dashboard/${currentId}`
      );
      // console.log("getId===>", getId.data.data);
      const { patientName, apptDate, purpose, type, paidAmount } =
        getId.data.data;
      setValue("patientName", patientName);
      setValue("apptDate", apptDate);
      setValue("purpose", purpose);
      setValue("type", type);
      setValue("paidAmount", paidAmount);
    } else {
      setValue("patientName", "");
      setValue("apptDate", "");
      setValue("purpose", "");
      setValue("type", "");
      setValue("paidAmount", "");
    }
  };

  React.useEffect(() => {
    getById();
  }, [currentId]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  console.log("error->", errors);

  const onSubmit = async (values) => {
    console.log("values====>", values);
    if (currentId) {
      // const doctorDashboard = await putApiHandler(
      //   `/update-doctor-dashboard/${currentId}`,
      //   values
      // );
      // getDoctorDashboard();
      // handleClose();
      // console.log("put doctorDashboard", doctorDashboard);

      swal({
        title: "Are you sure?",
        text: "Once updated!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willUpdate) => {
        if (willUpdate) {
          const doctorDashboard = putApiHandler(
            `/update-doctor-dashboard/${currentId}`,
            values
          );
          swal("yesssss!!! Your imaginary file has been updated!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is not changed!");
        }
        getDoctorDashboard();
        handleClose();
      });
    } else {
      const doctorDashboard = await postApiHandler("/doctor-dashboard", values);
      console.log("post doctor-dashboard=>", doctorDashboard);
      if (doctorDashboard.status === 200) {
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          button: "ok!",
        });
        reset();
        handleClose();
        getDoctorDashboard();
      } else {
        swal({
          title: "Oopsssssss!",
          text: "Something went wrong!",
          icon: "error",
          button: "error!",
        });
      }
    }
  };

  return (
    <div>
      <Button className="addPatient" onClick={handleOpen}>
        Add
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <div className="form-group form-focus" style={{ marginTop: "6px" }}>
              <TextField
                type="patientName"
                label="Patient Name"
                {...register("patientName")}
                error={!!errors.patientName}
                helperText={errors.patientName && errors.patientName.message}
                fullWidth
              />
            </div>

            <div className="form-group form-focus" style={{ marginTop: "6px" }}>
              <TextField
                type="apptDate"
                label="Appt Date"
                {...register("apptDate")}
                error={!!errors.apptDate}
                helperText={errors.apptDate && errors.apptDate.message}
                fullWidth
              />
            </div>

            <div className="form-group form-focus" style={{ marginTop: "6px" }}>
              <TextField
                type="purpose"
                label="Purpose"
                {...register("purpose")}
                error={!!errors.purpose}
                helperText={errors.purpose && errors.purpose.message}
                fullWidth
              />
            </div>
            <div className="form-group form-focus" style={{ marginTop: "6px" }}>
              <TextField
                type="type"
                label="Type"
                {...register("type")}
                error={!!errors.type}
                helperText={errors.type && errors.type.message}
                fullWidth
              />
            </div>
            <div className="form-group form-focus" style={{ marginTop: "6px" }}>
              <FormControl sx={{ m: 2 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  {" "}
                  Paid Amount
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  type="Paid Amount"
                  label="Amount"
                  fullWidth
                  {...register("paidAmount")}
                  error={!!errors.paidAmount}
                  helperText={errors.paidAmount && errors.paidAmount.message}
                />
              </FormControl>
            </div>

            <div
              style={{
                position: "relative",
                left: "-1rem",
                top: "1rem",
              }}
            >
              <Button
                className="btn btn-primary btn-block btn-lg login-btn"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
