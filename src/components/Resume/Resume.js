import React from "react";
import ProgressLine from "./ProgressLine";
import "./Resume.css";
const Resume = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center text-info">KEY SKILLS</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
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
          <div className="col-md-6">
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
