import React from "react";
import { FaHotel } from "react-icons/fa";

const HomeServicesSection = () => {
  const array = [
    {
      icon: <FaHotel />,
      serviceName: "Rooms & Appartment",
      desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      icon: <FaHotel />,
      serviceName: "Food & Restaurant",
      desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      icon: <FaHotel />,
      serviceName: "Event & Party",
      desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
  ];

  return (
    <section className="container mx-auto py-10">
      {/* Upper Section */}
      <section className="text-center mb-10">
        <div className="flex flex-col justify-center items-center">
          <h5 className="uppercase font-bold font-montserrat text-[#FEA116] inline-flex items-center gap-5">
            <span className="w-20 border-t-2 border-[#FEA116]"></span>
            Our Services
            <span className="w-20 border-t-2 border-[#FEA116]"></span>
          </h5>
          <h1 className="font-bold font-montserrat text-4xl">
            Explore Our{" "}
            <span className="text-[#FEA116] uppercase">Services</span>
          </h1>
        </div>
      </section>

      {/* Lower Section */}
      <section>
        <div className="m-4 md:m-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {array.map((items, index) => (
            <div
              key={index}
              className="bg-white p-5 shadow-lg rounded-lg h-72 flex flex-col justify-center gap-5 border-b-8 border-yellow-400 transition-all duration-300 ease-in hover:bg-[#fea116] hover:text-white group"
            >
              {/* Icon */}
              <div className="text-4xl text-[#FEA116] group-hover:text-white transition-colors duration-300 ease-in">
                {items.icon}
              </div>

              {/* Heading */}
              <h1 className="text-xl font-bold font-montserrat group-hover:text-white transition-colors duration-300 ease-in">
                {items.serviceName}
              </h1>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-white transition-colors duration-300 ease-in">
                {items.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HomeServicesSection;
