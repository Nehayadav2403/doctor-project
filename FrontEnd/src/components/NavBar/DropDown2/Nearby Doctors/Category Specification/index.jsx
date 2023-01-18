import { NavLink } from "react-router-dom";
import MainLayout from "../../../../../layouts/MainLayout";

const CategorySpecification = () => {
  return (
    <MainLayout>
      {" "}
      <div>
        <>
          {/* Page Wrapper */}
          <div className="page-wrapper">
            <div className="content container-fluid">
              {/* Page Header */}

              {/* Breadcrumb */}
              <div className="breadcrumb-bar" style={{ marginTop: "-2rem" }}>
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-md-12 col-12">
                      <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <NavLink to="/">Home</NavLink>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            Category Specification
                          </li>
                        </ol>
                      </nav>
                      <h2 className="breadcrumb-title">
                        Category Specification
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Breadcrumb */}
              {/* /Page Header */}
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="datatable table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Doctor Name</th>
                              <th>Speciality</th>
                              <th>Member Since</th>
                              <th>Earned</th>
                              {/* <th>Account Status</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-01.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Ruby Perrin</NavLink>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                14 Jan 2019 <br />
                                <small>02.59 AM</small>
                              </td>
                              <td>$3100.00</td>
                              <td>
                                {/* <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                    defaultChecked=""
                                  />
                                  <label
                                    htmlFor="status_1"
                                    className="checktoggle"
                                  >
                                    checkbox
                                  </label>
                                </div> */}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-02.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Darren Elder</NavLink>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                11 Jun 2019 <br />
                                <small>4.50 AM</small>
                              </td>
                              <td>$5000.00</td>
                              <td>
                                {/* <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                    defaultChecked=""
                                  />
                                  <label
                                    htmlFor="status_1"
                                    className="checktoggle"
                                  >
                                    checkbox
                                  </label>
                                </div> */}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-03.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Deborah Angel</NavLink>
                                </h2>
                              </td>
                              <td>Cardiology</td>
                              <td>
                                4 Jan 2018 <br />
                                <small>9.40 AM</small>
                              </td>
                              <td>$3300.00</td>
                              <td>
                                {/* <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                    defaultChecked=""
                                  />
                                  <label
                                    htmlFor="status_1"
                                    className="checktoggle"
                                  >
                                    checkbox
                                  </label>
                                </div> */}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-04.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Sofia Brient</NavLink>
                                </h2>
                              </td>
                              <td>Urology</td>
                              <td>
                                5 Jul 2019 <br />
                                <small>12.59 AM</small>
                              </td>
                              <td>$3500.00</td>
                              <td>
                                {/* <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                    defaultChecked=""
                                  />
                                  <label
                                    htmlFor="status_1"
                                    className="checktoggle"
                                  >
                                    checkbox
                                  </label>
                                </div> */}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-05.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Marvin Campbell</NavLink>
                                </h2>
                              </td>
                              <td>Orthopaedics</td>
                              <td>
                                24 Jan 2019 <br />
                                <small>02.59 AM</small>
                              </td>
                              <td>$3700.00</td>
                              <td>
                                {/* <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                    defaultChecked=""
                                  />
                                  <label
                                    htmlFor="status_1"
                                    className="checktoggle"
                                  >
                                    checkbox
                                  </label>
                                </div> */}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-06.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">
                                    Dr. Katharine Berthold
                                  </NavLink>
                                </h2>
                              </td>
                              <td>Orthopaedics</td>
                              <td>
                                23 Mar 2019 <br />
                                <small>02.50 PM</small>
                              </td>
                              <td>$4000.00</td>
                              <td>
                                {/* <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                    defaultChecked=""
                                  />
                                  <label
                                    htmlFor="status_1"
                                    className="checktoggle"
                                  >
                                    checkbox
                                  </label>
                                </div> */}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-07.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Linda Tobin</NavLink>
                                </h2>
                              </td>
                              <td>Neurology</td>
                              <td>
                                14 Dec 2018 <br />
                                <small>01.59 AM</small>
                              </td>
                              <td>$2000.00</td>
                              <td>
                                {/* <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                    defaultChecked=""
                                  />
                                  <label
                                    htmlFor="status_1"
                                    className="checktoggle"
                                  >
                                    checkbox
                                  </label>
                                </div> */}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-08.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Paul Richard</NavLink>
                                </h2>
                              </td>
                              <td>Dermatology</td>
                              <td>
                                11 Jan 2019 <br />
                                <small>02.59 AM</small>
                              </td>
                              <td>$3000.00</td>
                              <td>
                                {/* <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                    defaultChecked=""
                                  />
                                  <label
                                    htmlFor="status_1"
                                    className="checktoggle"
                                  >
                                    checkbox
                                  </label>
                                </div> */}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-09.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. John Gibbs</NavLink>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                21 Apr 2018 <br />
                                <small>02.59 PM</small>
                              </td>
                              <td>$4100.00</td>
                              <td>
                                {/* <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                    defaultChecked=""
                                  />
                                  <label
                                    htmlFor="status_1"
                                    className="checktoggle"
                                  >
                                    checkbox
                                  </label>
                                </div> */}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <NavLink
                                    to="/doctor-profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-10.jpg"
                                      alt="User Image"
                                    />
                                  </NavLink>
                                  <NavLink to="/doctor-profile">Dr. Olga Barlow</NavLink>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                15 Feb 2018 <br />
                                <small>03.59 AM</small>
                              </td>
                              <td>$3500.00</td>
                              <td>
                                {/* <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                    defaultChecked=""
                                  />
                                  <label
                                    htmlFor="status_1"
                                    className="checktoggle"
                                  >
                                    checkbox
                                  </label>
                                </div> */}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Wrapper */}
        </>
      </div>
    </MainLayout>
  );
};
export default CategorySpecification;
