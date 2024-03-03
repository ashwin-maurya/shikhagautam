import React from "react";
import { Link } from "react-router-dom";
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiTwitterLogoLight } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiLinkedinLogoLight } from "react-icons/pi";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function SocialLinks() {
  return (
    <>
      <Link
        href="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110 transition-all duration-200 ease-in-out"
      >
        <PiFacebookLogoLight />
      </Link>
      <Link
        href="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110 transition-all duration-200 ease-in-out"
      >
        <PiTwitterLogoLight />
      </Link>
      <Link
        href="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110 transition-all duration-200 ease-in-out"
      >
        <PiInstagramLogoLight />
      </Link>
      <Link
        href="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110 transition-all duration-200 ease-in-out"
      >
        <PiLinkedinLogoLight />
      </Link>
    </>
  );
}
