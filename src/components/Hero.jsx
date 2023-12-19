import React from "react";
import HeroSwiper from "./HeroSwiper";
import Button from "./Button";

const Hero = () => {
  function handleClick() {
    console.log("lay");
  }
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex flex-col justify-center text-center">
        <h1 className="font-bold text-[144px] leading-[144px]">W2C</h1>
        <p className="text-[44px] leading-[44px] font-bold">
          THE #1 PLACE FOR YOUR REP <br className="hidden lg:flex" /> NEEDS
        </p>
        <span className="">
          <button className="bg-green-600 px-4 py-2 rounded-lg my-4">
            PRODUCTS
          </button>
          <br />
          <Button text={"JOIN THE DESCORD"} />
        </span>
      </div>
    </div>
  );
};

export default Hero;
