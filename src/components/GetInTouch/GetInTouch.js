import Aos from "aos";
import emailjs from "emailjs-com";
import React, { useEffect } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import "./GetInTouch.css";
const GetInTouch = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uz6po1o",
        "template_f0tk7fn",
        e.target,
        "user_PK6iDd9vCWEOXQneGoLZG"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="fade-down">
      <Navbar></Navbar>
      <section className="contact py-5 mt-5">
        <div className="container">
          <div className="section-header text-center text-white mb-5">
            <h3 className="text-info">Get in Touch</h3>
          </div>
          <div className="col-md-9 col-sm-12 mx-auto">
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Email Address *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject *"
                  name="subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message *"
                ></textarea>
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-info fw-bold">
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
