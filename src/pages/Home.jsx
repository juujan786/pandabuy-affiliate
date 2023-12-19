import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Testinomials from "../components/Testinomials";
import FAQs from "../components/FAQs";
import Owner from "../components/Owner";

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Hero />
      <FeaturedProducts />
      <Owner />
      <Testinomials />
      <FAQs />
    </div>
  );
};

export default Home;
