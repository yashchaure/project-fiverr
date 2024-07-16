import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSeller, setIsSeller] = useState(true);
  return (
    <div className="fixed bg-white top-0 w-full z-50">
      <div className=" flex justify-between items-center py-4 px-8 border-b-[1px] border-gray-light">
        <div className="logo">
          <Link to="/">
            <h1 className="text-4xl font-extrabold tracking-tighter cursor-pointer">
              fiverr<span className="text-green">.</span>
            </h1>
          </Link>
        </div>
        <div className="links flex gap-2 items-center font-semibold text-lg">
          <span className="hover:bg-gray  cursor-pointer rounded-md py-2 px-4">
            Fiverr Pro <i class="ri-arrow-down-wide-line ml-2"></i>
          </span>
          <span className="hover:bg-gray cursor-pointer rounded-md py-2 px-4">
            Explore <i class="ri-arrow-down-wide-line ml-2"></i>
          </span>
          <span className="hover:text-green cursor-pointer text-gray-dark mx-2">
            <i class="ri-earth-line mr-2"></i>English
          </span>
          {isSeller ? (
            <div className="flex gap-4 items-center ml-8 text-gray-dark text-xl">
              <i class="ri-notification-2-line"></i>
              <i class="ri-mail-line"></i>
              <i class="ri-heart-3-line"></i>
              <h4 className="cursor-pointer ">Order</h4>
              <h4 className="text-green cursor-pointer">Become a Seller</h4>
              <img src="dp.jpeg" className="h-10 w-10 rounded-full" alt="" />
            </div>
          ) : (
            <div>
              <span className="hover:text-green cursor-pointer text-gray-dark  mx-2">
                Become a seller
              </span>
              <span className="hover:text-green cursor-pointer text-gray-dark mx-2">
                Sign In
              </span>
              <button className="border cursor-pointer border-green py-2 px-4 rounded-md text-green font-bold hover:bg-green hover:text-white">
                Join
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
