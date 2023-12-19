import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Testinomials from "../components/Testinomials";
import FAQs from "../components/FAQs";

const Home = () => {
  return (
    <div className="w-screen overflow-hidden">
      <Hero />
      <FeaturedProducts />
      <Testinomials />
      <FAQs />
    </div>
  );
};

export default Home;
