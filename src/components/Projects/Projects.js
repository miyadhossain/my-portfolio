import React, { useEffect, useState } from "react";
import ProjectsData from "../../ProjectsData/ProjectsData.json";
import Project from "../Project/Project";
import Navbar from "../Shared/Navbar/Navbar";

const Projects = () => {
  const [projectsInfo, setProjectsInfo] = useState([]);

  useEffect(() => {
    setProjectsInfo(ProjectsData);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-center text-info mt-5">My Latest Projects</h1>
      <div className="row">
        <div className="col-md-12 justify-content-center">
          <div className="row justify-content-center">
            {projectsInfo.map((info) => (
              <Project key={info.id} info={info}></Project>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
