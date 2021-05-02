import React from "react";
import MyImg from "../../images/me.jpg";
import Navbar from "../Shared/Navbar/Navbar";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-center text-info mt-5">Resume</h1>

      {/* resume */}

      <div className={styles.resume}>
        <div className={styles.resume_left}>
          <div className={styles.resume_profile}>
            <img src={MyImg} alt="profile_pic" />
          </div>
          <div className={styles.resume_content}>
            <div className={`${styles.resume_item} ${styles.resume_info}`}>
              <div className={styles.title}>
                <p className={styles.bold}>Md Miyad Hossain</p>
                <p className={`${styles.regular} fw-bold`}>Web Developer</p>
              </div>
              <ul>
                <li>
                  <div className={styles.icon}>
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className={styles.data}>
                    Matlab (north) <br /> Chandpur
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i className="bi bi-telephone-forward"></i>
                  </div>
                  <div className={styles.data}>+8801973-793550</div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className={styles.data}>
                    miyad.mh@gmail <br />
                    .com
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i className="bi bi-globe"></i>
                  </div>
                  <div className={styles.data}>www.miyad.com</div>
                </li>
              </ul>
            </div>
            <div className={`${styles.resume_item} ${styles.resume_skills}`}>
              <div className={styles.title}>
                <p className={styles.bold}>skill's</p>
              </div>
              <ul>
                <li>
                  <div className={styles.skill_name}>HTML</div>
                  <div className={styles.skill_progress}>
                    <span style={{ width: "90%" }}></span>
                  </div>
                  <div className={styles.skill_per}>90%</div>
                </li>
                <li>
                  <div className={styles.skill_name}>CSS</div>
                  <div className={styles.skill_progress}>
                    <span style={{ width: "80%" }}></span>
                  </div>
                  <div className={styles.skill_per}>80%</div>
                </li>
                <li>
                  <div className={styles.skill_name}>Bootstrap</div>
                  <div className={styles.skill_progress}>
                    <span style={{ width: "90%" }}></span>
                  </div>
                  <div className={styles.skill_per}>90%</div>
                </li>
                <li>
                  <div className={styles.skill_name}>React</div>
                  <div className={styles.skill_progress}>
                    <span style={{ width: "70%" }}></span>
                  </div>
                  <div className={styles.skill_per}>70%</div>
                </li>
                <li>
                  <div className={styles.skill_name}>NodeJS</div>
                  <div className={styles.skill_progress}>
                    <span style={{ width: "60%" }}></span>
                  </div>
                  <div className={styles.skill_per}>60%</div>
                </li>
              </ul>
            </div>
            <div className={`${styles.resume_item} ${styles.resume_social}`}>
              <div className={styles.title}>
                <p className={styles.bold}>Social</p>
              </div>
              <ul>
                <li>
                  <div className={styles.icon}>
                    <i className="fab fa-facebook-square"></i>
                  </div>
                  <div className={styles.data}>
                    <p className={styles.semi_bold}>Facebook</p>
                    <p>Stephen@facebook</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i className="fab fa-twitter-square"></i>
                  </div>
                  <div className={styles.data}>
                    <p className={styles.semi_bold}>Twitter</p>
                    <p>Stephen@twitter</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i className="fab fa-youtube"></i>
                  </div>
                  <div className={styles.data}>
                    <p className={styles.semi_bold}>Youtube</p>
                    <p>Stephen@youtube</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className={styles.data}>
                    <p className={styles.semi_bold}>Linkedin</p>
                    <p>Stephen@linkedin</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.resume_right}>
          <div className={`${styles.resume_item} ${styles.resume_about}`}>
            <div className={styles.title}>
              <p className={styles.bold}>About me</p>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis illo fugit officiis distinctio culpa officia totam
              atque exercitationem inventore repudiandae?
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/uc?export=download&id=1812LXguM6tHE1HR1CB8AFhgVuzhDJRIh"
            >
              <button className="btn btn-info mr-5">
                <i class="bi bi-cloud-arrow-down"></i> Download Resume
              </button>
            </a>
          </div>
          <div className={`${styles.resume_item} ${styles.resume_work}`}>
            <div className={styles.title}>
              <p className={styles.bold}>projects</p>
            </div>
            <ul>
              <li>
                <div className={styles.date}>Blue Galaxy Express</div>
                <div className={styles.info}>
                  <p className={styles.semi_bold}>A Logistic Service Website</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, voluptatibus!
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.date}>Book's Heaven</div>
                <div className={styles.info}>
                  <p className={styles.semi_bold}>A Books E-commerce</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, voluptatibus!
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.date}>U-Turn Riders</div>
                <div className={styles.info}>
                  <p className={styles.semi_bold}>Ride Sharing Website</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, voluptatibus!
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className={`${styles.resume_item} ${styles.resume_education}`}>
            <div className={styles.title}>
              <p className={styles.bold}>Education</p>
            </div>
            <ul>
              <li>
                <div className={styles.date}>2011 - 2015</div>
                <div className={styles.info}>
                  <p className={styles.semi_bold}>Diploma-in-Engineering</p>
                  <p>Electrical Technology</p>
                </div>
              </li>
            </ul>
          </div>
          <div className={`${styles.resume_item} ${styles.resume_hobby}`}>
            <div className={styles.title}>
              <p className={styles.bold}>Hobby</p>
            </div>
            <ul>
              <li>
                <i className="fas fa-book"></i>
              </li>
              <li>
                <i className="fas fa-gamepad"></i>
              </li>
              <li>
                <i className="fas fa-music"></i>
              </li>
              <li>
                <i className="fab fa-pagelines"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
