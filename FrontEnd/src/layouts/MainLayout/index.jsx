import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getApiHandler } from "../../components/apiHandler";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const MainLayout = ({ children }) => {
  const history = useNavigate();
  const getData = async () => {
    const resData = await getApiHandler("/get-doctor-dashboard");
    if (resData.auth === false || undefined) {
      history("/sign-in-doctor");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
