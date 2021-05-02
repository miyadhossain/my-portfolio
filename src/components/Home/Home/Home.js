import React from "react";
import Contact from "../../Contact/Contact";
import MyProjects from "../../MyProjects/MyProjects";
import MyServices from "../../MyServices/MyServices";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <MyServices></MyServices>
      <MyProjects></MyProjects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
