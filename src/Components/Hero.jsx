import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto flex flex-col gap-3 items-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Growing with DATA Analysis
        </p>
        <h1 className="text-4xl font-bold md:text-7xl sm:text-5xl md:py-6">
          Grow with data.
        </h1>
        <div className="flex items-center justify-center">
          <p className="text-xl font-bold md:text-5xl sm:text-4xl">
            Fast,flexible financing for
          </p>
          <Typed
            className="pl-2 text-xl font-bold md:text-5xl sm:text-4xl"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-xl font-bold text-center text-gray-500 md:text-2xl">
          Monitor your data analytics to increase revenue for BTB,BTC & SAAS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black hover:text-white hover:bg-gray-500 delay-150">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
