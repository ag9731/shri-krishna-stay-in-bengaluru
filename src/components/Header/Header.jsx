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
              <a
                href="tel:9019336365"
                className="text-gray-600 text-sm sm:text-base hover:text-yellow-500 transition-colors"
              >
                +91 90193 36365
              </a>
                <FaMobileAlt className="text-gray-600" />
              <a
                href="tel:9972014954"
                className="font-medium text-sm sm:text-base text-gray-600 hover:text-blue-500"
              >
                +91 99720 14954
              </a>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <FaEnvelope className="text-gray-600" />
              <a
                href="mailto:srikrishnastay@gmail.com"
                className="font-medium text-sm sm:text-base text-gray-600 hover:text-blue-500"
              >
                srikrishnastay@gmail.com
              </a>
            </div>

            <div className="hidden sm:flex items-center justify-center sm:justify-start space-x-2">
              <FaMapMarkerAlt className="text-gray-600 flex-shrink-0" />
              <a
                href="https://www.google.com/maps?q=No.+9/17+1st+Main+Road,+Maruthi+Nagar,+Madivala,+Bangalore-560068"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sm sm:text-base lg:text-sm xl:text-base text-gray-600 hover:text-blue-500"
              >
                No. 9/17 1st Main Road, Maruthi Nagar Madivala Bangalore-560068
              </a>
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

              {/* Restaurent */}
              {/* <li className="text-white uppercase cursor-pointer font-medium">
                <Link to="/restaurant">Restaurent</Link>
              </li> */}

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
            <Link to="/contact">
              <button className="bg-yellow-400 px-6 py-3 font-bold cursor-pointer">
                Book Now
              </button>
            </Link>
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
