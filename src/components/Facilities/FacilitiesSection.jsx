import React from "react";
import {
  FaTv,
  FaFan,
  FaWifi,
  FaCookie,
  FaShower,
  FaWater,
  FaBed,
  FaClock,
  FaCarAlt,
  FaHandHoldingMedical,
  FaUserTie,
  FaHotTub,
} from "react-icons/fa";

const FacilitiesSection = () => {
  const array = [
    {
      serviceName: "HD Television",
      serviceDesc:
        "A spacious venue for hosting events, from birthdays to corporate gatherings, with all the amenities for a memorable celebration.",
      icon: <FaTv className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "AC / Non AC Rooms",
      serviceDesc:
        "Enjoy a diverse menu of freshly prepared dishes in a comfortable dining space, perfect for casual meals or special occasions.",
      icon: <FaFan className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "24/7 Hot water",
      serviceDesc:
        "Stay connected with high-speed WiFi available 24/7, ideal for both work and leisure.",
      icon: <FaShower className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Food Service",
      serviceDesc:
        "Access hot water at any time for your comfort, whether for showers or other needs.",
      icon: <FaCookie className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Extra beds are provided",
      serviceDesc:
        "Access hot water at any time for your comfort, whether for showers or other needs.",
      icon: <FaBed className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Hot Beverages & Filter Water",
      serviceDesc:
        "Access hot water at any time for your comfort, whether for showers or other needs.",
      icon: <FaWater className="text-[#FEA116]" size={30} />,
    },

    {
      serviceName: "24Hr Checkin & Checkout",
      serviceDesc:
        "Access hot water at any time for your comfort, whether for showers or other needs.",
      icon: <FaClock className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Car & Two Wheeler Paking",
      serviceDesc:
        "Access hot water at any time for your comfort, whether for showers or other needs.",
      icon: <FaCarAlt className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Doctor On Call",
      serviceDesc:
        "Access hot water at any time for your comfort, whether for showers or other needs.",
      icon: <FaHandHoldingMedical className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Travel Desk",
      serviceDesc:
        "Access hot water at any time for your comfort, whether for showers or other needs.",
      icon: <FaUserTie className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Dry Clean",
      serviceDesc:
        "Access hot water at any time for your comfort, whether for showers or other needs.",
      icon: <FaHotTub className="text-[#FEA116]" size={30} />,
    },
  ];
  return (
    <main className="flex flex-col gap-20">
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5">
          {array.map((item, index) => (
            <div
              key={index}
              className="relative shadow-2xl flex items-center justify-center  border-black h-[30vh] overflow-hidden group"
            >
              <div className="flex flex-col items-center gap-3">
                {item.icon}
                <h1 className="text-lg text-center font-bold uppercase font-montserrat">
                  {item.serviceName}
                </h1>
              </div>
              {/* Background Layer */}
              {/* <div className="absolute inset-0 bg-slate-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div> */}

              {/* Text Content */}
              <div className="absolute flex items-center inset-0 bg-[#fea116] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <h1 className="relative z-10 text-base font-medium text-center p-5 text-white">
                  {item.serviceDesc}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex items-center justify-center">
        <button className="text-white uppercase font-medium  bg-[#fea116] px-14 py-4">
          Explore More
        </button>
      </section>
    </main>
  );
};

export default FacilitiesSection;
