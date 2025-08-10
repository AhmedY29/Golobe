import React from "react";

function Hero() {
  return (
    <div className="hero-container w-full flex justify-center ">
      <div className="hero-content relative h-[70vh] bg-scroll bg-center bg-cover bg-[url(/hero-img.png)] w-[95%] rounded-2xl flex justify-center items-center">
        <div className="hero-text text-center text-4xl text-white shadow-2xl z-10">
          <h1 className="font-bold text-4xl font-trade">Helping Other</h1>
          <h1 className="font-black text-7xl font-trade">Live & Travel</h1>
          <h1 className="font-bold text-lg">
            Special offers to suit your plan
          </h1>
        </div>
        <div className="hero-overlay bg-black/30 absolute w-full h-full rounded-2xl"></div>
      </div>
    </div>
  );
}

export default Hero;
