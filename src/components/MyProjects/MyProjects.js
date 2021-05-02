import React from "react";
import { useHistory } from "react-router";
import styles from "./MyProjects.module.css";

const MyProjects = () => {
  const history = useHistory();
  const handleForward = () => {
    history.push("/projects");
  };
  return (
    <div className="mt-5">
      <h1 className="text-center">Projects</h1>

      <main className={styles.page_content}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h6 className={styles.title}>Logistice Service Website</h6>
            <button onClick={handleForward} className={styles.cardBtn}>
              Details
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h6 className={styles.title}>Books E-commerce</h6>
            <button onClick={handleForward} className={styles.cardBtn}>
              Details
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h6 className={styles.title}>Doctors Portal Website</h6>
            <button onClick={handleForward} className={styles.cardBtn}>
              Details
            </button>
          </div>
        </div>
      </main>
      <button className="btn btn-info d-block mx-auto" onClick={handleForward}>
        Explore more
      </button>
    </div>
  );
};

export default MyProjects;
