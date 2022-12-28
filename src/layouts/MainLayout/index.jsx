import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
