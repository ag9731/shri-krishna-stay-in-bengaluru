import React from "react";
import slide1 from "../../assets/Home_Page_Banners/slide1.webp";

const HomeRommsSection = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4">
          {array.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row  shadow-md rounded-lg overflow-hidden"
            >
              {/* Left Image */}
              <div className="md:w-1/2">
                <img
                  src={item.image}
                  alt={item.roomName}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Right Content */}
              <div className="p-5 flex flex-col gap-3 md:w-1/2">
                <h1 className="bg-[#FEA116] px-4 py-1 text-white font-bold font-montserrat inline-block">
                  {item.roomPrice}
                </h1>
                <h1 className="text-xl font-bold font-montserrat">
                  {item.roomName}
                </h1>
                <div className="flex items-center justify-between text-gray-700">
                  <h1 className="border-r-2 pr-4 border-gray-300">
                    {item.roomBath}
                  </h1>
                  <h1 className="border-r-2 px-4 border-gray-300">
                    {item.roomBed}
                  </h1>
                  <h1 className="pl-4">{item.roomWifi}</h1>
                </div>
                <p className="text-gray-600">{item.roomDesc}</p>
                <button className="text-white uppercase font-medium bg-[#0f172b] px-6 py-2 rounded-lg mt-auto">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HomeRommsSection;
