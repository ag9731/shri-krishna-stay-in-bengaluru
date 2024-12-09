import React, { useState } from "react";
import slide1 from "../../assets/Home_Page_Banners/slide1.webp";
import DeluxeDoubleNonACRoom from "../SidebarComponent/DeluxeDoubleNonACRoom";
import DeluxeDoubleACRoom from "../SidebarComponent/DeluxeDoubleACRoom";
import DeluxeNonACTripleRoom from "../SidebarComponent/DeluxeNonACTripleRoom";
import DeluxeACTripleRoom from "../SidebarComponent/DeluxeACTripleRoom";
import DeluxeNonACFourBedRoom from "../SidebarComponent/DeluxeNonACFourBedRoom";
import DeluxeACFourBedRoom from "../SidebarComponent/DeluxeACFourBedRoom";
import galleryImg1 from "../../assets/gallery images/1.webp";
import galleryImg2 from "../../assets/gallery images/2.webp";
import galleryImg3 from "../../assets/gallery images/3.webp";
import galleryImg4 from "../../assets/gallery images/4.webp";
import galleryImg5 from "../../assets/gallery images/5.webp";
import galleryImg6 from "../../assets/gallery images/6.webp";

const Rooms = () => {
 const images = [
   { img: galleryImg1 },
   { img: galleryImg2 },
   { img: galleryImg3 },
   { img: galleryImg4 },
   { img: galleryImg5 },
   { img: galleryImg6 },
 ];
  const array = [
    {
      navMain: "Deluxe Double Non-AC Room",
      content: <DeluxeDoubleNonACRoom />,
    },
    { navMain: "Deluxe Double AC Room", content: <DeluxeDoubleACRoom /> },
    {
      navMain: "Deluxe Non-AC Triple Room",
      content: <DeluxeNonACTripleRoom />,
    },
    { navMain: "Deluxe AC Triple Room", content: <DeluxeACTripleRoom /> },
    {
      navMain: "Deluxe Non-AC Four Bed Room",
      content: <DeluxeNonACFourBedRoom />,
    },
    { navMain: "Deluxe AC Four Bed Room", content: <DeluxeACFourBedRoom /> },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  // const array = [
  //   {
  //     image: slide1,
  //     roomPrice: "100RS",
  //     roomBed: "3 Bed",
  //     roomBath: "2 Bath",
  //     roomWifi: "Wifi",
  //     roomName: "Junior Suite",
  //     roomDesc:
  //       "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
  //   },
  //   {
  //     image: slide1,
  //     roomPrice: "100RS",
  //     roomBed: "3 Bed",
  //     roomBath: "2 Bath",
  //     roomWifi: "Wifi",
  //     roomName: "Junior Suite",
  //     roomDesc:
  //       "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
  //   },
  //   {
  //     image: slide1,
  //     roomPrice: "100RS",
  //     roomBed: "3 Bed",
  //     roomBath: "2 Bath",
  //     roomWifi: "Wifi",
  //     roomName: "Junior Suite",
  //     roomDesc:
  //       "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
  //   },
  //   {
  //     image: slide1,
  //     roomPrice: "100RS",
  //     roomBed: "3 Bed",
  //     roomBath: "2 Bath",
  //     roomWifi: "Wifi",
  //     roomName: "Junior Suite",
  //     roomDesc:
  //       "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
  //   },
  // ];

  return (
    <main className="container mx-auto flex flex-col-reverse md:flex-col  lg:flex-row gap-6 px-4 mt-10">
      {/* Main Content Section */}
      <section className="lg:w-2/3 w-full p-4">
        <h1 className="text-2xl font-bold font-montserrat mb-4">
          {array[selectedIndex].navMain}
        </h1>
        <div>{array[selectedIndex].content}</div>
      </section>

      {/* Sidebar Section */}
      <section className="lg:w-1/3 w-full bg-gray-100 p-4 rounded">
        <ul className="space-y-2">
          {array.map((navItem, index) => (
            <li
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`cursor-pointer p-2 rounded ${
                selectedIndex === index
                  ? "bg-blue-500 text-white font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              {navItem.navMain}
            </li>
          ))}
        </ul>
        <section className="mt-6 hidden lg:block ">
          <div className="grid grid-cols-2 gap-4">
            {images.map((item, index) => (
              <div key={index} className="rounded overflow-hidden">
                <img
                  src={item.img}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Rooms;
