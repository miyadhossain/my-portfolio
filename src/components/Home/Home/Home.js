import Aos from "aos";
import React, { useEffect } from "react";
import Contact from "../../Contact/Contact";
import MyProjects from "../../MyProjects/MyProjects";
import Resume from "../../Resume/Resume";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div data-aos="fade-right">
        <MyProjects></MyProjects>
      </div>
      <Resume></Resume>
      <div data-aos="fade-down">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
