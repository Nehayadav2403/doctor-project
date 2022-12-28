import { NavLink } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout";

const PrivacyPolicyPatient = () => {
  return (
    <MainLayout>
      {" "}
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
                        Privacy Policy
                      </li>
                    </ol>
                  </nav>
                  <h2 className="breadcrumb-title">Privacy Policy</h2>
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
                        Your privacy is very important to us. We have developed
                        this Policy in order for you to understand how we
                        collect, use, communicate and disclose and make use of
                        personal information. The following outlines our privacy
                        policy.
                      </p>
                    </div>
                    <div className="terms-text">
                      <h4>WE MAY COLLECT THE FOLLOWING INFORMATION</h4>
                      <p>
                        Personal data of the user such as, but not limited to,
                        your name, your age, date of birth, occupation and
                        gender ; The user's e-mail and contact information, GPS
                        based location; The User's tracking information such as,
                        but not limited to the device ID, Google advertising ID
                        and android ID.
                      </p>
                      <p>
                        As a user of Contact Doctor app, you may provide
                        information about yourself, your spouse or family, your
                        friends, their health issues, gender of the patient, age
                        of the patient, previous medication taken, previous
                        medical conditions, allergies, etc.
                      </p>
                      <p>
                        The user's data sent across through the application.
                      </p>
                    </div>
                    <div className="terms-text">
                      <h4>OUR USE OF YOUR INFORMATION</h4>
                      <p>
                        The information provided by you shall be used to contact
                        you when necessary. For more details about the nature of
                        such communications, please refer to our terms of
                        service. We use your tracking information to identify
                        you and to gather broad demographic information. The
                        information is also used to customize your experience of
                        using Contact Doctor app.
                      </p>
                    </div>
                    <div className="terms-text">
                      <h4>PROTECTION OF PERSONAL INFORMATION</h4>

                      <p>
                        Contact Doctor Healthcare Pvt Ltd has adopted a
                        protection of personal information policy which aims to
                        protect your private life, in accordance with the
                        applicable laws to this effect, Contact Doctor
                        Healthcare Pvt Ltd has taken and applies appropriate
                        security measures while using this site, including the
                        encoding of certain data. However, public communication
                        networks such as the internet are open systems with
                        links shared by many users. You recognize that Contact
                        Doctor Healthcare Pvt Ltd does not guarantee that some
                        personal information won't be intercepted and
                        manipulated by third parties. For the purpose of
                        operating this site, Contact Doctor may collect some
                        information, including personal information. This
                        information will never be the object of a communication,
                        transfer, sale, assignment or any other commercial
                        transaction with third parties without your
                        authorization. This information may however be
                        transferred between various internal departments or with
                        distributors adhering to a protection of personal
                        information policy, for the purpose of administration
                        and management.
                      </p>
                      <p>
                        No Contact Doctor representative is authorized to obtain
                        personal or credit information from you over the phone.
                        If this is the case, we ask you to contact us
                        immediately in order for us to proceed with an internal
                        investigation.
                      </p>
                    </div>
                    <div className="terms-text">
                      <h4>CONTROLLING YOUR PERSONAL INFORMATION</h4>
                      <p>
                        We will not sell, distribute or lease your personal
                        information to third parties unless we have your
                        permission or are required to do so, by law. We may use
                        your personal information to send you promotional
                        information about third parties which we think you may
                        find interesting if you tell us that you wish this to
                        happen. If you believe that any information we are
                        holding on you is incorrect or incomplete, please send
                        us an email, as soon as possible, to:
                        info@contactdoctor.in. We will be happy to correct any
                        information found to be incorrect.
                      </p>
                      <p>
                        <strong>
                          <h4>WEBSITE TERMS</h4>
                          By downloading and / or using this application, you
                          hereby agree to be bound by the terms of use /
                          service, privacy policy, and other policies as set
                          forth on the website www.contactdoctor.in. It is
                          hereby further specified that all the terms and
                          policies on the website shall be coterminous to these
                          terms.
                        </strong>
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
export default PrivacyPolicyPatient;
