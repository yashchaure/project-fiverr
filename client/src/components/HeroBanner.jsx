import React from "react";

const HeroBanner = () => {
  return (
    <div className="bg-green-dark  flex flex-col items-center justify-center rounded-2xl">
      <div className="w-[40%] mt-16">
        <h1 className="text-5xl text-white font-semibold text-center leading-snug">
          Find the right <span className="text-green">freelance</span> service, right away
        </h1>
        <div className="flex items-center justify-center bg-gray w-full h-12 rounded-md overflow-hidden my-8">
          <input type="text" className="w-full h-full border-none outline-none px-4 text-gray-dark text-md" placeholder="Search for any service ..." />
          <div className="flex bg-green-dark hover:bg-green rounded-md w-12 h-10 m-2">
            <i class="ri-search-line m-auto text-white"></i>
          </div>
        </div>
      </div>
      <div className="my-8 ">
        <h2 className="text-gray-dark">Trusted by:</h2>
      </div>
    </div>
  );
};

export default HeroBanner;
