import { NavLink } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout";

const CustomerSupport = ()=>{
    return(
        <MainLayout>
        <div>
  {/* Breadcrumb */}
  <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Customer Support
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Customer Support</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h5>Customer Support</h5>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
        </div>
        </MainLayout>
    )
}
export default CustomerSupport;