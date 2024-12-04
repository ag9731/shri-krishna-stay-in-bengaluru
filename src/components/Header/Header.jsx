import React, { useState } from "react";
import logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaEnvelope,
  FaAlignJustify,
  FaTimesCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(0);

  const handleToggle = () => {
    setToggle((prev) => (prev === 0 ? 1 : 0));
    console.log(toggle);
  };

  return (
    <>
      <section className="bg-[#C8D2DB] py-4 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:space-x-4">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <FaMobileAlt className="text-gray-600" />
              <span className="font-medium text-sm sm:text-base">
                9972014954
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <FaEnvelope className="text-gray-600" />
              <span className="font-medium text-sm sm:text-base">
                srikrishnastay@gmail.com
              </span>
            </div>
            <div className="hidden sm:flex items-center justify-center sm:justify-start space-x-2">
              <FaMapMarkerAlt className="text-gray-600 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base lg:text-sm xl:text-base">
                No. 9/17 1st Main Road, Maruthi Nagar Madivala Banglore-560068
              </span>
            </div>
          </div>
        </div>
      </section>
      <header className="bg-[#4d142f]">
        {/* Desktop Navigation */}
        <section className="md:flex hidden items-center justify-between container mx-auto">
          {/* logo */}
          <figure>
            <img src={logo} alt="sri krishna stay bengaluru logo" />
          </figure>

          {/* Navigation menu */}
          <nav>
            <ul className="flex flex-col md:flex-row gap-10">
              <li className="text-white uppercase cursor-pointer font-medium">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white uppercase cursor-pointer font-medium">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-white uppercase cursor-pointer font-medium">
                <Link to="/rooms">Rooms</Link>
              </li>
              <li className="text-white uppercase cursor-pointer font-medium">
                <Link to="/facilities">Facilities</Link>
              </li>
              <li className="text-white uppercase cursor-pointer font-medium">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className="text-white uppercase cursor-pointer font-medium">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>

          {/* Book Now Button */}
          <div>
            <button className="bg-yellow-400 px-6 py-3 font-bold cursor-pointer">
              Book Now
            </button>
          </div>
        </section>

        {/* Mobile Navigation */}
        <section className="relative flex md:hidden items-center justify-between container mx-auto">
          {/* logo */}
          <figure>
            <img src={logo} alt="sri krishna stay bengaluru logo" />
          </figure>

          {/* Navigation menu */}
          <nav>
            {/* Navigation Icons */}

            <div>
              {toggle ? (
                <>
                  <div>
                    <FaTimesCircle
                      className="text-white text-4xl mr-2"
                      onClick={handleToggle}
                    />
                  </div>
                  {/* nav menu */}
                  <div className="absolute z-[1000] top-24 py-5 w-[100%] right-0 bg-black">
                    <ul className="flex flex-col md:flex-row items-center gap-10">
                      <li
                        className="text-white uppercase cursor-pointer font-medium"
                        onClick={handleToggle}
                      >
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className="text-white uppercase cursor-pointer font-medium"
                        onClick={handleToggle}
                      >
                        <Link to="/about">About Us</Link>
                      </li>
                      <li
                        className="text-white uppercase cursor-pointer font-medium"
                        onClick={handleToggle}
                      >
                        <Link to="/rooms">Rooms</Link>
                      </li>
                      <li
                        className="text-white uppercase cursor-pointer font-medium"
                        onClick={handleToggle}
                      >
                        <Link to="/facilities">Facilities</Link>
                      </li>
                      <li
                        className="text-white uppercase cursor-pointer font-medium"
                        onClick={handleToggle}
                      >
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li
                        className="text-white uppercase cursor-pointer font-medium"
                        onClick={handleToggle}
                      >
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <div>
                  <FaAlignJustify
                    className="text-white text-4xl mr-2"
                    onClick={handleToggle}
                  />
                </div>
              )}
            </div>
          </nav>

          {/* Book Now Button */}
        </section>
      </header>
    </>
  );
};

export default Header;
