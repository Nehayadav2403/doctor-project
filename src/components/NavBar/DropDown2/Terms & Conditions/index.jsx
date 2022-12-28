import { NavLink } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout";

const TermsAndConditions = () => {
  return (
    <MainLayout>
      <div>
        <>
          {/* Breadcrumb */}
          <div className="breadcrumb-bar">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-12 col-12">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <NavLink to="/logout-doctor">Home</NavLink>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Terms and Conditions
                      </li>
                    </ol>
                  </nav>
                  <h2 className="breadcrumb-title">Terms and Conditions</h2>
                </div>
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Page Content */}
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="terms-content">
                    <div className="terms-text">
                      <p>
                        Please read this website terms agreement carefully
                        before accessing or using the Website. By accessing or
                        using any part of the web site, you agree to become
                        bound by the Terms and Conditions (T&C) of this
                        agreement. If you do not agree to all the Terms and
                        Conditions of this website maintenance agreement, then
                        you may not access the Website or use any services. The
                        materials contained in this web site are protected by
                        applicable copyright and trademark law.
                      </p>
                      <h3>Medical emergency </h3>
                      <p>
                        Do NOT use the Website for medical emergencies. If you
                        have a medical emergency, call a physician or qualified
                        healthcare provider, or CALL 911 immediately.
                      </p>
                      <p>
                        {" "}
                        Under no circumstances should you attempt self-treatment
                        based on anything you have seen or read on the Website.
                      </p>
                    </div>
                    <div className="terms-text">
                      <h4>Health Information</h4>
                      <p>
                        The health information on this Web site is provided by
                        the hospital solely for informational purposes as a
                        public service to enhance customer service for our
                        customers and to promote consumer health. The hospital
                        assumes no responsibility for any circumstances arising
                        out of the use, misuse, interpretation or application of
                        any information supplied on this site.
                      </p>
                      <ul>
                        <li>
                          {" "}
                          It does not constitute medical advice and is not
                          intended to be a substitute for proper medical care
                          provided by a qualified health care professional.
                        </li>
                        <li>
                          Always consult with your health care professional for
                          appropriate examinations, treatment, testing, and care
                          recommendations.
                        </li>
                        <li>
                          Do not rely on information on this site as a tool for
                          self-diagnosis.
                        </li>
                        <li>
                          If you have a specific medical condition, please
                          contact your health care provider.
                        </li>
                      </ul>
                    </div>
                    <div className="terms-text">
                      <h3>
                        NO DOCTOR PATIENT RELATIONSHIP NOT FOR EMERGENCY USE
                      </h3>
                      <p>
                        {" "}
                        Some of the content, text, data, graphics, images,
                        information, suggestions, guidance, and other material
                        (collectively, “Information”) that may be available on
                        the Website (including information provided in direct
                        response to your questions or postings) may be provided
                        by individuals in the medical profession. The provision
                        of such Information does not create a licensed medical
                        professional/patient relationship, between Fortis and
                        you and does not constitute an opinion, medical advice,
                        or diagnosis or treatment of any particular condition,
                        but is only provided to assist you with locating
                        appropriate medical care from a qualified practitioner.
                      </p>
                      <p>
                        {" "}
                        It is hereby expressly clarified that, the Information
                        that you obtain or receive from Fortis, and its
                        employees, contractors, partners, sponsors, advertisers,
                        licensors or otherwise on the Website is for
                        informational purposes only. In no event shall Fortis be
                        liable to you or anyone else for any decision made or
                        action taken by you in reliance on such information.
                      </p>
                    </div>
                    <div className="terms-text">
                      <h3>Security</h3>
                      <p>
                        We will only use the information you submit to provide
                        you with the services you have requested and as
                        otherwise described in this Website Privacy Policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </>
      </div>
    </MainLayout>
  );
};
export default TermsAndConditions;
