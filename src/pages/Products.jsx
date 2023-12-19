import React from "react";
import Card from "../components/Card";

const Products = () => {
  return (
    <section>
      <div class="relative items-center w-[90%] lg:w-[80%] xl:w-[1200px] py-12 mx-auto ">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Products;
