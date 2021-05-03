import React from "react";
import Contact from "../../Contact/Contact";
import MyProjects from "../../MyProjects/MyProjects";
import Resume from "../../Resume/Resume";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <MyProjects></MyProjects>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
