import React from "react";
import HeroSwiper from "./HeroSwiper";

const Hero = () => {
  function handleClick() {
    console.log("lay");
  }
  return (
    <div className="relative">
      <HeroSwiper />
    </div>
  );
};

export default Hero;
