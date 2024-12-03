import React from 'react'
import { FaBirthdayCake, FaUtensils, FaWifi, FaShower } from "react-icons/fa";


const Facilities = () => {

    const array = [
      {
        serviceName: "Party Center",
        serviceDesc:
          "A spacious venue for hosting events, from birthdays to corporate gatherings, with all the amenities for a memorable celebration.",
        icon: <FaBirthdayCake className="text-[#FEA116]" size={30} />,
      },
      {
        serviceName: "Restaurant",
        serviceDesc:
          "Enjoy a diverse menu of freshly prepared dishes in a comfortable dining space, perfect for casual meals or special occasions.",
        icon: <FaUtensils className="text-[#FEA116]" size={30} />,
      },
      {
        serviceName: "24/7 Wifi",
        serviceDesc:
          "Stay connected with high-speed WiFi available 24/7, ideal for both work and leisure.",
        icon: <FaWifi className="text-[#FEA116]" size={30} />,
      },
      {
        serviceName: "Hot Water",
        serviceDesc:
          "Access hot water at any time for your comfort, whether for showers or other needs.",
        icon: <FaShower className="text-[#FEA116]" size={30} />,
      },
      {
        serviceName: "Parking Facility",
        serviceDesc:
          "Access hot water at any time for your comfort, whether for showers or other needs.",
        icon: <FaShower className="text-[#FEA116]" size={30} />,
      },
      {
        serviceName: "Quality Food",
        serviceDesc:
          "Access hot water at any time for your comfort, whether for showers or other needs.",
        icon: <FaShower className="text-[#FEA116]" size={30} />,
      },
    ];
  return (
    <main className="flex flex-col gap-20">
      {/* Banner Section */}
      <section className="relative flex justify-center items-center bg-[url('https://t3.ftcdn.net/jpg/06/42/46/30/360_F_642463002_wcOgUmpJRHjLuwKnUhWr8VKjXC6gfm4d.jpg')] bg-cover bg-center h-[50vh]">
        {/* Other content goes here */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <h1 className="text-6xl font-bold font-montserrat text-white z-50">
          FACILITIES
        </h1>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5">
          {array.map((item, index) => (
            <div
              key={index}
              className="relative shadow-2xl flex items-center justify-center  border-black h-[30vh] overflow-hidden group"
            >
              <div className="flex flex-col items-center gap-3">
                {item.icon}
                <h1 className="text-lg font-bold uppercase font-montserrat">
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

      <section className='flex items-center justify-center'>
        <button className="text-white uppercase font-medium  bg-[#fea116] px-14 py-4">
          Explore More
        </button>
      </section>
    </main>
  );
}

export default Facilities
