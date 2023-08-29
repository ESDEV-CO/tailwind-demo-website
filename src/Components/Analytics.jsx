import React from "react";

const Analytics = () => {
  return (
    <div className=" w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={require("../assets/laptop.jpg")}
          alt="laptop"
        />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold p-2">
            Data Analysis Dashboard
          </p>
          <h1>Manage Data Analytics Centrally</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            obcaecati, ratione mollitia facere ut sunt repellat, dolorum rem a
            fuga maxime atque modi impedit qui quidem suscipit voluptates veniam
            sit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
