import React from "react";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="flex flex-col w-full p-4 my-4 duration-500 rounded-lg shadow-xl hover:scale-105">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={require("../assets/single.png")}
            alt="/"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Single User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
            <p className="py-2 mx-8 border-b ">1 Granted User</p>
            <p className="py-2 mx-8 border-b ">Send up to 2 GB</p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 ml-4 text-black">
              Start Trial
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full p-4 my-8 duration-500 bg-gray-100 rounded-lg shadow-xl md:my-0 hover:scale-105">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={require("../assets/double.png")}
            alt="/"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Double User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
            <p className="py-2 mx-8 border-b ">1 Granted User</p>
            <p className="py-2 mx-8 border-b ">Send up to 2 GB</p>
            <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 ml-4 bg-black">
              Start Trial
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full p-4 my-4 duration-500 rounded-lg shadow-xl hover:scale-105">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={require("../assets/triple.png")}
            alt="/"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Triple User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
            <p className="py-2 mx-8 border-b ">1 Granted User</p>
            <p className="py-2 mx-8 border-b ">Send up to 2 GB</p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 ml-4 text-black">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
