import React from "react";
import Typewriter from "typewriter-effect";
import myImg from "../../../images/profile1.png";
import Navbar from "../../Shared/Navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.background}>
      <Navbar></Navbar>
      <div className="container mt-5">
        <div className=" row justify-content-center align-items-center">
          <div className="col-md-1"></div>
          <div className={`${styles.type} col-md-6 col-sm-6`}>
            <h1 className={styles.title}>
              Hi <br /> I'm Miyad
            </h1>
            <Typewriter
              options={{
                strings: ["Web Developer", "Web Designer", "Content Writer"],
                autoStart: true,
                loop: true,
              }}
            />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/uc?export=download&id=1812LXguM6tHE1HR1CB8AFhgVuzhDJRIh"
            >
              <button className="btn btn-info mt-3 mr-2">
                <i class="bi bi-cloud-arrow-down"></i> Download Resume
              </button>
            </a>
          </div>
          <div style={{ paddingTop: "20px" }} className="col-md-5 col-sm-6">
            <img style={{ width: "300px" }} src={myImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
