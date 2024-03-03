import React, { useState, useEffect, useRef } from "react";
import { navLinks } from "./constants";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <section
        id="navbar"
        className={`top-0 z-[100] w-full max-w-[1600px] select-none border-white transition-all duration-300  ease-in-out backdrop-blur-md `}
      >
        <nav
          className={`top-0 flex w-full flex-col items-center justify-center px-6 py-6 max-md:flex-col max-md:gap-2 max-md:justify-between max-md:px-4 max-md:py-2`}
        >
          <Link
            to="/"
            className="relative cursor-pointer font-Authorfont 2xl:text-4xl max-sm:mb-3 text-2xl text-white"
          >
            <img
              src="/images/shikhagautam.png"
              className="max-h-20 max-sm:max-h-16"
              alt=""
            />
          </Link>
          <div
            className={`flex justify-between w-full items-center max-md:flex-col`}
          >
            <div className="flex items-center justify-center max-sm:mt-0">
              <span className="flex w-auto flex-1 items-center justify-center gap-2">
                {navLinks.map((item) => {
                  const isActive = location.pathname === item.href;

                  return (
                    <span
                      key={item.label}
                      className={`relative cursor-pointer list-none font-sans 2xl:text-xl font-normal  `}
                    >
                      <Link
                        to={item.href}
                        className={`rounded-sm px-5 max-sm:px-4 text-black transition-all duration-150 ease-in-out ${
                          isActive
                            ? "bg-gray-600 text-white"
                            : "hover:bg-[#e1e1e1a5]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </span>
                  );
                })}
              </span>
            </div>

            <div className="flex gap-5 max-md:hidden text-3xl py-2 sm:mt-0">
              <SocialLinks />
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
