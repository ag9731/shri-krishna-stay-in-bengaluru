import React from "react";
import {
  FaPlane,
  FaSubway,
  FaTrain,
  FaBus,
  FaHospital,
  FaUserGraduate,
} from "react-icons/fa";

const Home_Places = () => {
  const places = [
    {
      category: "Airport",
      icon: <FaPlane className="text-[#FEA116] text-2xl" />,
      data: [
        {
          name: "Bangalore International Airport",
          distance: "33KM",
          time: "1HR",
        },
      ],
    },
    {
      category: "Metro",
      icon: <FaSubway className="text-[#FEA116] text-2xl" />,
      data: [
        { name: "Jayanagar", distance: "3.5KM", time: "18min" },
        { name: "BTM Layout", distance: "1.6KM", time: "5min" },
        { name: "Rashtriya Vidyalaya Road", distance: "3.3KM", time: "18min" },
      ],
    },
    {
      category: "Railway",
      icon: <FaTrain className="text-[#FEA116] text-2xl" />,
      data: [
        { name: "KSR", distance: "11KM", time: "50min" },
        { name: "Yeshwanthpur", distance: "17KM", time: "1HR" },
        { name: "Cantonment Railway", distance: "8.5KM", time: "45min" },
      ],
    },
    {
      category: "Buses",
      icon: <FaBus className="text-[#FEA116] text-2xl" />,
      data: [
        { name: "Koramangala", distance: "2.1KM", time: "9min" },
        { name: "Silk Board", distance: "2.9KM", time: "11min" },
        { name: "Madiwala", distance: "100M", time: "8min" },
      ],
    },
    {
      category: "Hospital",
      icon: <FaHospital className="text-[#FEA116] text-2xl" />,
      data: [{ name: "St John's Hospital", distance: "500M", time: "5min" }],
    },
    {
      category: "Others",
      icon: <FaUserGraduate className="text-[#FEA116] text-2xl" />,
      data: [
        { name: "Christ College", distance: "1KM", time: "9min" },
        { name: "Jyoti Nivas College", distance: "1KM", time: "9min" },
        { name: "BTM", distance: "500M", time: "4min" },
      ],
    },
  ];

  return (
    <section className="container mx-auto">
      {/* Header */}
      <section className="text-center">
        <div className="flex flex-col justify-center items-center">
          <h5 className="uppercase font-bold font-montserrat text-[#FEA116] inline-flex items-center gap-5">
            <span className="w-20 border-t-2 border-[#FEA116]"></span>
            Nearby Places
            <span className="w-20 border-t-2 border-[#FEA116]"></span>
          </h5>
          <h1 className="font-bold font-montserrat text-4xl">
            Explore Nearby{" "}
            <span className="text-[#FEA116] uppercase">Places</span>
          </h1>
        </div>
      </section>

      {/* Table Section */}
      <section className="overflow-x-auto mt-14">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-[#FEA116] text-white">
              <th className="py-3 px-4 text-left text-lg">Category</th>
              <th className="py-3 px-4 text-left text-lg">Place</th>
              <th className="py-3 px-4 text-left text-lg">Distance</th>
              <th className="py-3 px-4 text-left text-lg">Time</th>
            </tr>
          </thead>
          <tbody>
            {places.map((place) => (
              <React.Fragment key={place.category}>
                <tr className="bg-gray-100">
                  <td className="py-4 px-4 font-bold text-black flex items-center gap-2 text-lg">
                    {place.icon}
                    {place.category}
                  </td>
                  <td colSpan={3}></td>
                </tr>
                {place.data.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td></td>
                    <td className="py-3 px-4">{item.name}</td>
                    <td className="py-3 px-4">{item.distance}</td>
                    <td className="py-3 px-4">{item.time}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Home_Places;
