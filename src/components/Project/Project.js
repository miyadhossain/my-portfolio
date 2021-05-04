import React from "react";
import "./Project.css";
const Project = ({ info }) => {
  const {
    name,
    description,
    technology,
    liveSite,
    frontEnd,
    backEnd,
    img1,
    img2,
    img3,
    id,
  } = info;

  return (
    <div className="container mt-5">
      <div className="row container justify-content-center align-items-center">
        <div className="col-md-6 col-sm-12">
          <img
            style={{ borderRadius: "15px", border: "1px solid gray" }}
            className="img-fluid"
            src={img1}
            alt=""
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <h1 style={{ color: "#2C6185" }}>{name}</h1>
          <p style={{ color: "#2C6185", fontWeight: 500 }}>{description}</p>
          <p className="text-info fw-bold">{technology}</p>

          <a className="" target="_blank" rel="noreferrer" href={liveSite}>
            <button className="btn btn-info m-2">
              <i class="bi bi-box-arrow-in-up-right"></i> Live site
            </button>
          </a>

          <a target="_blank" rel="noreferrer" href={frontEnd}>
            <button className="btn btn-info m-2">
              <i class="bi bi-github"></i> Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
