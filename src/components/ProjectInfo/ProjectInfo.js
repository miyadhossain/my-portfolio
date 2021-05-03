import React from "react";
import styles from "./ProjectInfo.module.css";
const ProjectInfo = ({ info }) => {
  const {
    name,
    img1,
    description1,
    description2,
    description3,
    description4,
    liveSite,
    frontEnd,
  } = info;

  return (
    <div className="mt-5 container">
      <div className="row justity-content-center align-items-center">
        <div className="col-md-6">
          <div>
            <img
              className="img-fluid"
              style={{
                width: "500px",
                height: "250px",
                borderRadius: "15px",
                border: "1px solid lightblue",
              }}
              src={img1}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <h3>{name}</h3>
            <li className={styles.summary}>⚡ {description1}</li>
            <li className={styles.summary}>⚡ {description2}</li>
            <li className={styles.summary}>⚡ {description3}</li>
            <li className={styles.summary}>⚡ {description4}</li>
            <h6 className="fw-bold">USED STACK:</h6>
            <button className="btn-sm btn btn-secondary mr-2">REACT</button>
            <button className="btn-sm btn btn-secondary mr-2">NODEJS</button>
            <button className="btn-sm btn btn-secondary mr-2">MONGODB</button>
            <a className="" target="_blank" rel="noreferrer" href={liveSite}>
              <button className="btn btn-info m-2">
                <i class="bi bi-box-arrow-in-up-right"></i>
              </button>
            </a>
            <a className="" target="_blank" rel="noreferrer" href={frontEnd}>
              <button className="btn btn-info m-2">
                <i class="bi bi-github"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
