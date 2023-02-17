import React from "react";
import coding2 from "../img/coding2.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
     <Common
      name= "Grow your Business with"
      imgsrc = {coding2}
      visit="/service"
      btnName = "Get Started"
      />
    </>
  );
};

export default Home;
