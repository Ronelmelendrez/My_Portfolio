import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Certificates from "../components/sections/Certificates";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Testimonial from "../components/sections/Testimonial";
import Contact from "../components/sections/Contact";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects featured={true} />
      <Services />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;