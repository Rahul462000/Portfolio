import React from "react";
import Aboutus from '../img/About-Us.svg'
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
      name= "Welcome to About page of "
      imgsrc = {Aboutus}
      visit="/contact"
      btnName = "Contact Now"
      />
    </>
  );
};

export default About;
