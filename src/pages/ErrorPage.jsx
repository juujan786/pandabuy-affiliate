import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <div className=" bg-stone-900  text-stone-300">
      <Navbar />
      <main>
        <div class="grid h-screen place-content-center px-4">
          <h1 class="uppercase tracking-widest">404 | Not Found</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
