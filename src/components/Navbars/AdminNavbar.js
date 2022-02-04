import React from "react";

import { useLocation } from "react-router-dom";
import pageMap from "components/pages";

export default function Navbar() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      {/* Navbar */}
      <nav
        className="absolute top-0 left-0 w-full bg-transparent md:flex-row md:flex-nowrap flex items-center pt-10 px-10"
        style={{ zIndex: 1 }}
      >
        {/* Brand */}
        <div className="text-white text-md uppercase inline-block font-semibold">
          {pageMap[location.pathname].description}
        </div>
        {/* Form */}
        {/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form> */}
        {/* User */}
        {/* <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul> */}
      </nav>
      {/* End Navbar */}
    </>
  );
}
