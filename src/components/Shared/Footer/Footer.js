import React from "react";

const Footer = () => {
  return (
    <div
      className="row justify-content-center"
      style={{ background: "#15253c" }}
    >
      <div className="col-md-4 text-center text-white">
        &#169; Md Miyad Hossain
      </div>
      <div className="col-md-4 text-center">
        <p className="text-white">
          Copyright {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
      <div className="col-md-4 text-center">
        <ul className="social-media list-inline">
          <li className="list-inline-item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/md-miyad-hossain-813426211/"
            >
              <i className="bi bi-linkedin text-white"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/miyadhossain"
            >
              <i className="bi bi-github text-white"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
