import React from "react";
import FacilitiesSection from "./FacilitiesSection";

const Facilities = () => {
  
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
        <FacilitiesSection />
      </section>
    </main>
  );
};

export default Facilities;
