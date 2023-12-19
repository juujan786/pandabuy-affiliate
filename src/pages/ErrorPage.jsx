import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div class="grid h-screen place-content-center bg-white px-4">
          <h1 class="uppercase tracking-widest text-gray-500">
            404 | Not Found
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
