import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import React, { createContext, useState } from "react";
import { getApiHandler } from "./components/apiHandler";

export const userContext = createContext();

function App() {
  const [currentId, setCurrentId] = useState("");
  console.log("setCurrentId", currentId);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rows, setRows] = React.useState([]);
  console.log("setRows", rows);

  const getDoctorDashboard = async () => {
    const getData = await getApiHandler("/get-doctor-dashboard");
    setRows(getData.data.data);
  };

  React.useEffect(() => {
    getDoctorDashboard();
  }, []);

  return (
    <BrowserRouter>
      <userContext.Provider
        value={{
          currentId,
          setCurrentId,
          open,
          setOpen,
          handleOpen,
          handleClose,
          rows,
          setRows,
          getDoctorDashboard,
        }}
      >
        <div className="App">
          <AllRoutes />
        </div>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;
