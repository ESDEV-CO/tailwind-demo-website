import React from "react";

const Analytics = () => {
  return (
    <div className="w-full px-4 py-16 bg-white ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={require("../assets/laptop.jpg")}
          alt="laptop"
        />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data Analysis Dashboard
          </p>
          <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl ">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            obcaecati, ratione mollitia facere ut sunt repellat, dolorum rem a
            fuga maxime atque modi impedit qui quidem suscipit voluptates veniam
            sit!
          </p>
          <button className=" bg-black mx-auto md:mx-0 text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
