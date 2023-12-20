import React from "react";
import HeroSwiper from "./HeroSwiper";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";

const Hero = () => {
  const navigate = useNavigate();
 

 
  return (
    <div class="overflow-x-hidden bg-gray-800">
    

      <section class="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div class="shrink-0 from-white/40 absolute left-1/2 h-96 w-96 -translate-x-1/2 rounded-full border border-gray-500 bg-gradient-to-br"></div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="mt-5 text-3xl font-light leading-snug text-white sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
            Discover, Click and Buy with <br class="sm:hidden" />
          
              <span class="relative inline-flex justify-center whitespace-nowrap font-bold">Muh4s</span>
            </h1>

            <form action="#" method="POST" class="mt-10">
              <div class="group bg-white/20 border-white/50 focus-within:ring-1 focus-within:ring-white/50 relative border p-1 backdrop-blur-md sm:flex-row">
                <input type="email" name="" placeholder="Search product" class="placeholder-white/50 block w-full bg-transparent px-4 py-4 text-white outline-none" required="" />
                <div class="border-white/50 flex sm:absolute sm:inset-y-0 sm:right-0 sm:h-full sm:border-l">
                  <button type="submit" class="inline-flex w-full items-center justify-center bg-blue-600 px-16 py-3 text-lg font-bold text-white outline-none transition-all focus:bg-blue-500 hover:border sm:hover:translate-x-2 sm:hover:-translate-y-2">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="mt-16 mb-10 flex flex-col items-center justify-center divide-y divide-gray-500 border border-gray-600 bg-gray-700 shadow-lg sm:flex-row sm:divide-x sm:divide-y-0 md:mt-32">
          <div class="flex max-w-xs items-center space-x-2 px-4 py-4 text-sm font-medium text-gray-200">
          <CiBookmarkCheck style={{color:"white", fontSize:"40px"}}/>
            <p>Quality Check</p>
          </div>
          <div class="flex max-w-xs items-center space-x-2 px-4 py-4 text-sm font-medium text-gray-200">
          <IoBagCheckOutline style={{color:"white", fontSize:"40px"}}/>
            <p>One Click Buy</p>
          </div>
          <div class="flex max-w-xs items-center space-x-2 px-4 py-4 text-sm font-medium text-gray-200">
          <MdOutlineCategory  style={{color:"white", fontSize:"40px"}}/>
            <p>Category Quest</p>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Hero;
