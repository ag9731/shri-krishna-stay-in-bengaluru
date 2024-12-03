import React from 'react'
import slide1 from "../../assets/Home_Page_Banners/slide1.webp";

const Rooms = () => {

    const array = [
      {
        image: slide1,
        roomPrice: "100RS",
        roomBed: "3 Bed",
        roomBath: "2 Bath",
        roomWifi: "Wifi",
        roomName: "Junior Suite",
        roomDesc:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
      },
      {
        image: slide1,
        roomPrice: "100RS",
        roomBed: "3 Bed",
        roomBath: "2 Bath",
        roomWifi: "Wifi",
        roomName: "Junior Suite",
        roomDesc:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
      },
      {
        image: slide1,
        roomPrice: "100RS",
        roomBed: "3 Bed",
        roomBath: "2 Bath",
        roomWifi: "Wifi",
        roomName: "Junior Suite",
        roomDesc:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
      },
      {
        image: slide1,
        roomPrice: "100RS",
        roomBed: "3 Bed",
        roomBath: "2 Bath",
        roomWifi: "Wifi",
        roomName: "Junior Suite",
        roomDesc:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
      },
    ];

  return (
    <main>
      <section className="relative flex justify-center items-center bg-[url('https://t3.ftcdn.net/jpg/06/42/46/30/360_F_642463002_wcOgUmpJRHjLuwKnUhWr8VKjXC6gfm4d.jpg')] bg-cover bg-center h-[50vh]">
        {/* Other content goes here */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <h1 className="text-6xl font-bold font-montserrat text-white z-50">
          ROOMS
        </h1>
      </section>

      <section className="mt-16">
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
    </main>
  );
}

export default Rooms
