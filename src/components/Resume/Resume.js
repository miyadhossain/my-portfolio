import Aos from "aos";
import React, { useEffect } from "react";
import ProgressLine from "./ProgressLine";
import "./Resume.css";
const Resume = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="mt-5">
      <h1 className="text-center text-info">KEY SKILLS</h1>
      <div className="container">
        <div className="row">
          <div data-aos="fade-right" className="col-md-6">
            <ProgressLine
              label="HTML5"
              visualParts={[
                {
                  percentage: "90%",
                  color: "#138496",
                },
              ]}
            />
            <ProgressLine
              label="CSS3"
              visualParts={[
                {
                  percentage: "80%",
                  color: "#138496",
                },
              ]}
            />
            <ProgressLine
              label="BOOTSTRAP"
              visualParts={[
                {
                  percentage: "80%",
                  color: "#138496",
                },
              ]}
            />
          </div>
          <div data-aos="fade-left" className="col-md-6">
            <ProgressLine
              label="REACT JS"
              visualParts={[
                {
                  percentage: "70%",
                  color: "#138496",
                },
              ]}
            />
            <ProgressLine
              label="NODE JS"
              visualParts={[
                {
                  percentage: "50%",
                  color: "#138496",
                },
              ]}
            />
            <ProgressLine
              label="MONGODB"
              visualParts={[
                {
                  percentage: "50%",
                  color: "#138496",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
