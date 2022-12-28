import { NavLink } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout";

const FAQ = () => {
  return (
    <MainLayout>
      {" "}
      <div>
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
                    <li className="breadcrumb-item active" aria-current="page">
                      FAQ's
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">FAQ's</h2>
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
                    <h4>1. How do I use the online booking service?</h4>
                    <p>
                      You search for the doctor whose appointment is required.
                      Go to his online calendar,look for his availability and
                      then select the slot and get a confirmed booking after
                      providing the necessary credentials and making payment.
                    </p>
                  </div>
                  <div className="terms-text">
                    <h4>
                      2. Can I use this service for checking availability of
                      Doctor and his fees without actually booking or scheduling
                      an appointment ?
                    </h4>
                    <p>
                      Although, our aim is to assist you in getting an online
                      appointment done for visit to a doctor, we do not prevent
                      you from looking at the doctors availability and his
                      profile.
                    </p>
                  </div>
                  <div className="terms-text">
                    <h4>
                      3.How can I view the time slots for the availability of
                      Doctor ?
                    </h4>

                    <p>
                      Go to Book Appointment on the doctor’s page, select a date
                      and then you will see the time slots on which the said
                      doctor is available for consultancy.
                    </p>
                  </div>
                  <div className="terms-text">
                    <h4>
                      4.Can I make the schedule an online appointment and pay
                      later on ?
                    </h4>
                    <p>
                      We do not provide this facility at the moment. Our aim is
                      to assist you in obtaining a confirmed appointment with a
                      doctor on a selected time slot and date.
                    </p>
                    <div className="terms-text">
                      <h4>
                        5.Can I make an online booking with my credit card for
                        somebody else ?
                      </h4>
                      <p>This is allowed.</p>
                    </div>
                    <div className="terms-text">
                      <h4>6.Can I reschedule an online appointment.</h4>
                      <p>
                        You can reschedule an appointment for one time depending
                        upon the availability of the doctor with whom the
                        original appointment was booked. This can be done upto a
                        day prior to the date for which the booking has already
                        been done.
                      </p>
                    </div>
                    <div className="terms-text">
                      <h4>
                        7.What are the time restrictions for Rescheduling an
                        appointment?
                      </h4>
                      <p>
                        You can Reschedule an appointment immediately following
                        the booking of an appointment till a day prior to the
                        appointment date. The reschedule is however based on the
                        Doctor’s availability as shown in his availability
                        calendar.
                      </p>
                    </div>
                    <div className="terms-text">
                      <h4>
                        8.I am a Doctor and I have done my registration. What
                        should I do next?
                      </h4>
                      <p>
                        Upon registration, our team will contact you and assist
                        in completing the Profile page and creating the online
                        calendar. We will seek your credential documents and
                        bank related information at that time. This is required
                        for the payment to be done by us in your account for
                        online bookings done through this website/ portal.
                      </p>
                    </div>
                    <div className="terms-text">
                      <h4>9.What is reschedulement fees ?</h4>
                      <p>
                        Reschedulement fees is the charges to be paid by the
                        patient in case he goes for the reschedulement of an
                        appointment second time.
                      </p>
                    </div>
                    <div className="terms-text">
                      <h4>
                        10.Am I required to create a user id for making an
                        online appointment?
                      </h4>
                      <p>
                        No user id is required to be created to book an
                        appointment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </MainLayout>
  );
};
export default FAQ;
