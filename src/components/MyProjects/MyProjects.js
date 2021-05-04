import Aos from "aos";
import React, { useEffect, useState } from "react";
import ProjectData from "../../ProjectsData/ProjectsData.json";
import ProjectInfo from "../ProjectInfo/ProjectInfo";

const MyProjects = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    setInfos(ProjectData);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="fade-down" className="mt-5">
      <h1 style={{ color: "#138496" }} className="text-center">
        My Latest Projects
      </h1>
      {/* projects */}

      {infos.map((info) => (
        <ProjectInfo key={info.id} info={info}></ProjectInfo>
      ))}
    </div>
  );
};

export default MyProjects;
