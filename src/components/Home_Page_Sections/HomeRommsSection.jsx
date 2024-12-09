import React from "react";
import slide1 from "../../assets/Home_Page_Banners/slide1.webp";
import { Link } from "react-router-dom";
import Rooms from "../Rooms/Rooms";

const HomeRommsSection = () => {
  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };
  const array = [
    {
      image: slide1,
      // roomPrice: "100RS",
      roomBed: "3 Bed",
      roomBath: "2 Bath",
      roomWifi: "Wifi",
      roomName: "Junior Suite",
      roomDesc:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      image: slide1,
      // roomPrice: "100RS",
      roomBed: "3 Bed",
      roomBath: "2 Bath",
      roomWifi: "Wifi",
      roomName: "Junior Suite",
      roomDesc:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      image: slide1,
      // roomPrice: "100RS",
      roomBed: "3 Bed",
      roomBath: "2 Bath",
      roomWifi: "Wifi",
      roomName: "Junior Suite",
      roomDesc:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      image: slide1,
      // roomPrice: "100RS",
      roomBed: "3 Bed",
      roomBath: "2 Bath",
      roomWifi: "Wifi",
      roomName: "Junior Suite",
      roomDesc:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
  ];

  return (
    <section>
      {/* Upper Section */}
      <section className="text-center mb-10">
        <div className="flex flex-col justify-center items-center">
          <h5 className="uppercase font-bold font-montserrat text-[#FEA116] inline-flex items-center gap-5">
            <span className="w-20 border-t-2 border-[#FEA116]"></span>
            Our Rooms
            <span className="w-20 border-t-2 border-[#FEA116]"></span>
          </h5>
          <h1 className="font-bold font-montserrat text-4xl">
            Explore Our <span className="text-[#FEA116] uppercase">Rooms</span>
          </h1>
        </div>
      </section>

      {/* Lower Section */}
      <section>
        <Rooms/>
      </section>
    </section>
  );
};

export default HomeRommsSection;
