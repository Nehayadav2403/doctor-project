import { NavLink } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";

const RegisterForm = () => {
  return (
    <MainLayout>
    <div className="account-content">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-7 col-lg-6 login-left">
          <img
            src="assets/img/login-banner.png"
            className="img-fluid"
            alt="Doccure Register"
          />
        </div>
        <div className="col-md-12 col-lg-6 login-right">
          <div className="login-header">
            <h3>
              Patient Register{" "}
              <NavLink to="/registers">Are you a Doctor?</NavLink>
            </h3>
          </div>

          <form action="https://dreamguys.co.in/demo/doccure/sign-up">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Name</label>
            </div>
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Mobile Number</label>
            </div>
            <div className="form-group form-focus">
              <input type="password" className="form-control floating" />
              <label className="focus-label">Create Password</label>
            </div>
            <div className="text-right">
              <a className="forgot-link" href="login.html">
                Already have an account?
              </a>
            </div>
            <button
              className="btn btn-primary btn-block btn-lg login-btn"
              type="submit"
            >
              Signup
            </button>
            <div className="login-or">
              <span className="or-line"></span>
              <span className="span-or">or</span>
            </div>
            <div className="row form-row social-login">
              <div className="col-6">
                <a href="#" className="btn btn-facebook btn-block">
                  <i className="fab fa-facebook-f mr-1"></i> Login
                </a>
              </div>
              <div className="col-6">
                <a href="#" className="btn btn-google btn-block">
                  <i className="fab fa-google mr-1"></i> Login
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </MainLayout>
  );
};
export default RegisterForm;
