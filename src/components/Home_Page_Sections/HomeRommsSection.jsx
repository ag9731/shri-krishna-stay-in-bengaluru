import React from "react";
import slide1 from "../../assets/Home_Page_Banners/slide1.webp";
import { Link } from "react-router-dom";

const HomeRommsSection = () => {
  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  const array = [
    {
      image: slide1,
      roomBed: "2 Bed",
      roomBath: "1 Bath",
      roomWifi: "Wifi",
      roomName: "Deluxe Double Non-AC Room",
      roomDesc:
        "Relax in our Deluxe Double Non-AC Room, offering comfort and convenience.",
      link: "/Deluxe_Double_Non-AC_Room",
    },
    {
      image: slide1,
      roomBed: "2 Bed",
      roomBath: "1 Bath",
      roomWifi: "Wifi / AC",
      roomName: "Deluxe Double AC Room",
      roomDesc:
        "Experience comfort and style in our Deluxe Double AC Room with modern amenities.",
      link: "/Deluxe_Double_AC_Room",
    },
    {
      image: slide1,
      roomBed: "3 Bed",
      roomBath: "1 Bath",
      roomWifi: "Wifi",
      roomName: "Deluxe Non-AC Triple Room",
      roomDesc:
        "Enjoy comfort and space in our Deluxe Non-AC Triple Room with modern amenities.",
      link: "/Deluxe_Non-AC_Triple_Room",
    },
    {
      image: slide1,
      roomBed: "3 Bed",
      roomBath: "1 Bath",
      roomWifi: "Wifi / AC",
      roomName: "Deluxe AC Triple Room",
      roomDesc:
        "Relax in our Deluxe AC Triple Room, offering spacious comfort and modern amenities.",
      link: "/Deluxe_AC_Triple_Room",
    },
    {
      image: slide1,
      roomBed: "4 Bed",
      roomBath: "1 Bath",
      roomWifi: "Wifi",
      roomName: "Deluxe Non-AC Four Bed Room",
      roomDesc:
        "Enjoy spacious comfort in our Deluxe Non-AC Four-Bedroom with modern amenities.",
      link: "/Deluxe_Non-AC_Four_Bed_Room",
    },
    {
      image: slide1,
      roomBed: "4 Bed",
      roomBath: "1 Bath",
      roomWifi: "Wifi / AC",
      roomName: "Deluxe AC Four Bed Room",
      roomDesc:
        "Relax in style with our Deluxe AC Four-Bedroom, offering spacious comfort and premium amenities.",
      link: "/Deluxe_AC_Four_Bed_Room",
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
              className="flex flex-col md:flex-row shadow-md rounded-lg overflow-hidden"
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
                <div className="flex gap-5">
                  <Link to="/contact" onClick={handleExploreClick}>
                    <button className="text-white uppercase font-medium px-3 py-2 bg-[#0f172b] rounded-lg mt-auto">
                      Book Now
                    </button>
                  </Link>

                  {/* Link the "Know More" button to the specific room page */}
                  <Link to={item.link} onClick={handleExploreClick}>
                    <button className="text-white uppercase font-medium px-3 py-2 bg-[#0f172b] rounded-lg mt-auto">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HomeRommsSection;
