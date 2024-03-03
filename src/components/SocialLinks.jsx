import React from "react";
import { Link } from "react-router-dom";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function SocialLinks() {
  return (
    <>
      <Link
        to="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110 transition-all duration-200 ease-in-out"
      >
        <FaFacebook />
      </Link>
      <Link
        to="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110 transition-all duration-200 ease-in-out"
      >
        <FaTwitter />
      </Link>
      <Link
        to="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110 transition-all duration-200 ease-in-out"
      >
        <FaInstagram />
      </Link>
      <Link
        to="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110 transition-all duration-200 ease-in-out"
      >
        <FaLinkedin />
      </Link>
    </>
  );
}
