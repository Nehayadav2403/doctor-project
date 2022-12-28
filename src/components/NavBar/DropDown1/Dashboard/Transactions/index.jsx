import { NavLink } from "react-router-dom";
import MainLayout from "../../../../../layouts/MainLayout";

const TotalEarnings = () => {
  return (
    <MainLayout>
      <div>
        <>
          {/* Profile Sidebar */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                  {/* Profile Sidebar */}
                  <div className="profile-sidebar">
                    <div className="widget-profile pro-widget-content">
                      <div className="profile-info-widget">
                        <a href="#" className="booking-doc-img">
                          <img
                            src="assets/img/doctors/doctor-thumb-02.jpg"
                            alt="User Image"
                          />
                        </a>
                        <div className="profile-det-info">
                          <h3>Dr. Darren Elder</h3>
                          <div className="patient-details">
                            <h5 className="mb-0">
                              BDS, MDS - Oral &amp; Maxillofacial Surgery
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-widget">
                      <nav className="dashboard-menu">
                        <ul>
                          <li>
                            <NavLink to="/dashboard">
                              <i className="fas fa-columns" />
                              <span>Dashboard</span>
                            </NavLink>
                          </li>
                          <li className="active">
                            <NavLink to="/history-of-appointment">
                              <i className="fas fa-calendar-check" />
                              <span>History of Appointments</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/patient-list">
                              <i className="fas fa-user-injured" />
                              <span>Patient Details</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/total-earnings">
                              <i className="fas fa-hourglass-start" />
                              <span>Total Earnings</span>
                            </NavLink>
                          </li>

                          <li>
                            <NavLink to="/logout-doctor">
                              <i className="fas fa-sign-out-alt" />
                              <span>Logout</span>
                            </NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* /Profile Sidebar */}
                </div>
                {/* Page Wrapper */}
                <div className="page-wrapper">
                  <div className="content container-fluid transaction">
                    {/* Page Header */}
                    <div className="page-header">
                      <div className="col-sm-12">
                        <h3 className="page-title">Transactions</h3>
                        <ul className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="index.html">Dashboard</a>
                          </li>
                          <li className="breadcrumb-item active">
                            Transactions
                          </li>
                        </ul>
                      </div>
                      <div className="row"></div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="card">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="datatable table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Invoice Number</th>
                                    <th>Patient ID</th>
                                    <th>Patient Name</th>
                                    <th>Total Amount</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-right">Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href="invoice.html">#IN0001</a>
                                    </td>
                                    <td>#PT001</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <NavLink
                                          to="/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient1.jpg"
                                            alt="User Image"
                                          />
                                        </NavLink>
                                        <NavLink to="/doctor-profile">
                                          Charlene Reed{" "}
                                        </NavLink>
                                      </h2>
                                    </td>
                                    <td>$100.00</td>
                                    <td className="text-center">
                                      <span className="badge badge-pill bg-success inv-badge">
                                        Paid
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="actions">
                                        <a
                                          className="btn btn-sm bg-danger-light"
                                          data-toggle="modal"
                                          href="#delete_modal"
                                        >
                                          <i className="fe fe-trash" /> Delete
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice.html">#IN0002</a>
                                    </td>
                                    <td>#PT002</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <NavLink
                                          to="/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient2.jpg"
                                            alt="User Image"
                                          />
                                        </NavLink>
                                        <NavLink to="/doctor-profile">
                                          Travis Trimble{" "}
                                        </NavLink>
                                      </h2>
                                    </td>
                                    <td>$200.00</td>
                                    <td className="text-center">
                                      <span className="badge badge-pill bg-success inv-badge">
                                        Paid
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="actions">
                                        <a
                                          className="btn btn-sm bg-danger-light"
                                          data-toggle="modal"
                                          href="#delete_modal"
                                        >
                                          <i className="fe fe-trash" /> Delete
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice.html">#IN0003</a>
                                    </td>
                                    <td>#PT003</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <NavLink
                                          to="/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient3.jpg"
                                            alt="User Image"
                                          />
                                        </NavLink>
                                        <NavLink to="/doctor-profile">Carl Kelly</NavLink>
                                      </h2>
                                    </td>
                                    <td>$250.00</td>
                                    <td className="text-center">
                                      <span className="badge badge-pill bg-success inv-badge">
                                        Paid
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="actions">
                                        <a
                                          className="btn btn-sm bg-danger-light"
                                          data-toggle="modal"
                                          href="#delete_modal"
                                        >
                                          <i className="fe fe-trash" /> Delete
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice.html">#IN0004</a>
                                    </td>
                                    <td>#PT004</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <NavLink
                                          to="/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient4.jpg"
                                            alt="User Image"
                                          />
                                        </NavLink>
                                        <NavLink to="/doctor-profile">
                                          {" "}
                                          Michelle Fairfax
                                        </NavLink>
                                      </h2>
                                    </td>
                                    <td>$150.00</td>
                                    <td className="text-center">
                                      <span className="badge badge-pill bg-success inv-badge">
                                        Paid
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="actions">
                                        <a
                                          className="btn btn-sm bg-danger-light"
                                          data-toggle="modal"
                                          href="#delete_modal"
                                        >
                                          <i className="fe fe-trash" /> Delete
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice.html">#IN0005</a>
                                    </td>
                                    <td>#PT005</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <NavLink
                                          to="/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient5.jpg"
                                            alt="User Image"
                                          />
                                        </NavLink>
                                        <NavLink to="/doctor-profile">Gina Moore</NavLink>
                                      </h2>
                                    </td>
                                    <td>$350.00</td>
                                    <td className="text-center">
                                      <span className="badge badge-pill bg-success inv-badge">
                                        Paid
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="actions">
                                        <a
                                          className="btn btn-sm bg-danger-light"
                                          data-toggle="modal"
                                          href="#delete_modal"
                                        >
                                          <i className="fe fe-trash" /> Delete
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice.html">#IN0006</a>
                                    </td>
                                    <td>#PT006</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <NavLink
                                          to="/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient6.jpg"
                                            alt="User Image"
                                          />
                                        </NavLink>
                                        <NavLink to="/doctor-profile">Elsie Gilley</NavLink>
                                      </h2>
                                    </td>
                                    <td>$300.00</td>
                                    <td className="text-center">
                                      <span className="badge badge-pill bg-success inv-badge">
                                        Paid
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="actions">
                                        <a
                                          className="btn btn-sm bg-danger-light"
                                          data-toggle="modal"
                                          href="#delete_modal"
                                        >
                                          <i className="fe fe-trash" /> Delete
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice.html">#IN0007</a>
                                    </td>
                                    <td>#PT007</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <NavLink
                                          to="/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient7.jpg"
                                            alt="User Image"
                                          />
                                        </NavLink>
                                        <NavLink to="/doctor-profile"> Joan Gardner</NavLink>
                                      </h2>
                                    </td>
                                    <td>$250.00</td>
                                    <td className="text-center">
                                      <span className="badge badge-pill bg-success inv-badge">
                                        Paid
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="actions">
                                        <a
                                          className="btn btn-sm bg-danger-light"
                                          data-toggle="modal"
                                          href="#delete_modal"
                                        >
                                          <i className="fe fe-trash" /> Delete
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice.html">#IN0008</a>
                                    </td>
                                    <td>#PT008</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <NavLink
                                          to="/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient8.jpg"
                                            alt="User Image"
                                          />
                                        </NavLink>
                                        <NavLink to="/doctor-profile">
                                          {" "}
                                          Daniel Griffing
                                        </NavLink>
                                      </h2>
                                    </td>
                                    <td>$150.00</td>
                                    <td className="text-center">
                                      <span className="badge badge-pill bg-success inv-badge">
                                        Paid
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="actions">
                                        <a
                                          className="btn btn-sm bg-danger-light"
                                          data-toggle="modal"
                                          href="#delete_modal"
                                        >
                                          <i className="fe fe-trash" /> Delete
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice.html">#IN0009</a>
                                    </td>
                                    <td>#PT009</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <NavLink
                                          to="/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient9.jpg"
                                            alt="User Image"
                                          />
                                        </NavLink>
                                        <NavLink to="/doctor-profile">
                                          Walter Roberson
                                        </NavLink>
                                      </h2>
                                    </td>
                                    <td>$100.00</td>
                                    <td className="text-center">
                                      <span className="badge badge-pill bg-success inv-badge">
                                        Paid
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="actions">
                                        <a
                                          className="btn btn-sm bg-danger-light"
                                          data-toggle="modal"
                                          href="#delete_modal"
                                        >
                                          <i className="fe fe-trash" /> Delete
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice.html">#IN0010</a>
                                    </td>
                                    <td>#PT010</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <NavLink
                                          to="/doctor-profile"
                                          className="avatar avatar-sm mr-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient10.jpg"
                                            alt="User Image"
                                          />
                                        </NavLink>
                                        <NavLink to="/doctor-profile">
                                          Robert Rhodes{" "}
                                        </NavLink>
                                      </h2>
                                    </td>
                                    <td>$120.00</td>
                                    <td className="text-center">
                                      <span className="badge badge-pill bg-success inv-badge">
                                        Paid
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <div className="actions">
                                        <a
                                          className="btn btn-sm bg-danger-light"
                                          data-toggle="modal"
                                          href="#delete_modal"
                                        >
                                          <i className="fe fe-trash" /> Delete
                                        </a>
                                      </div>
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
                {/* Delete Modal */}
                <div
                  className="modal fade"
                  id="delete_modal"
                  aria-hidden="true"
                  role="dialog"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      {/*	<div class="modal-header">
							<h5 class="modal-title">Delete</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>*/}
                      <div className="modal-body">
                        <div className="form-content p-2">
                          <h4 className="modal-title">Delete</h4>
                          <p className="mb-4">Are you sure want to delete?</p>
                          <button type="button" className="btn btn-primary">
                            Save{" "}
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Delete Modal */}
              </div>
            </div>
          </div>
          {/* /Profile Sidebar */}
        </>
      </div>
    </MainLayout>
  );
};
export default TotalEarnings;
