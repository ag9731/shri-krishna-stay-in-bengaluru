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
        "Enjoy your favorite shows with crystal-clear HD television in every room.",
      icon: <FaTv className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "AC / Non AC Rooms",
      serviceDesc:
        "Choose from our comfortable AC and Non-AC rooms to suit your preferences.",
      icon: <FaFan className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "24/7 Hot water",
      serviceDesc:
        "Experience the convenience of 24/7 hot water for a relaxing stay.",
      icon: <FaShower className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Food Service",
      serviceDesc:
        "Savor delicious meals with our prompt and quality food service.",
      icon: <FaCookie className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Extra beds are provided",
      serviceDesc: "Extra beds available for added comfort and convenience.",
      icon: <FaBed className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Hot Beverages & Filter Water",
      serviceDesc:
        "Enjoy refreshing hot beverages and clean filter water anytime.",
      icon: <FaWater className="text-[#FEA116]" size={30} />,
    },

    {
      serviceName: "24Hr Checkin & Checkout",
      serviceDesc:
        "Flexible 24-hour check-in and check-out for your convenience.",
      icon: <FaClock className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Car & Two Wheeler Paking",
      serviceDesc:
        "Secure car and two-wheeler parking available for all guests.",
      icon: <FaCarAlt className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Doctor On Call",
      serviceDesc: "Access to a doctor on call for your health and safety.",
      icon: <FaHandHoldingMedical className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Travel Desk",
      serviceDesc:
        "Efficient travel desk services to assist with your journey plans.",
      icon: <FaUserTie className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Dry Clean",
      serviceDesc:
        "Prompt dry cleaning services to keep your clothes fresh and clean.",
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
    </main>
  );
};

export default FacilitiesSection;
