import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active ">
            <Link
              style={{ fontWeight: "600" }}
              className="nav-link mr-5 text-info"
              to="/"
            >
              HOME
            </Link>
          </li>

          <li className="nav-item">
            <Link
              style={{ fontWeight: "600" }}
              className="nav-link mr-5 text-info"
              to="/projects"
            >
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ fontWeight: "600" }}
              className="nav-link mr-5 text-info"
              to="getInTouch"
            >
              CONTACT ME
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
