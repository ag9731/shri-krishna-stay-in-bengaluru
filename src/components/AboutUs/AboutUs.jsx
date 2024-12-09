import React from "react";
import HomeAboutUs from "../Home_Page_Sections/HomeAboutUs";
import AboutWhyChooseUs from "./About_Us_Sections/AboutWhyChooseUs";
import AboutUsSecondSection from "./About_Us_Sections/AboutUsSecondSection";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };
  return (
    <main className="flex flex-col gap-20">
      {/* Banner Section */}
      <section className="relative flex justify-center items-center bg-[url('https://t3.ftcdn.net/jpg/06/42/46/30/360_F_642463002_wcOgUmpJRHjLuwKnUhWr8VKjXC6gfm4d.jpg')] bg-cover bg-center h-[50vh]">
        {/* Other content goes here */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <h1 className="text-6xl font-bold font-montserrat text-white z-50">
          ABOUT US
        </h1>
      </section>

      <section>
        <HomeAboutUs />
      </section>

      <section>
        <AboutWhyChooseUs />
      </section>

      <section>
        <AboutUsSecondSection />
      </section>

      <section className="flex justify-center">
        <Link to="/facilities" onClick={handleExploreClick}>
          <button className="w-full md:w-auto text-white uppercase font-medium bg-[#fea116] px-8 md:px-14 py-3 md:py-4 hover:bg-[#e99015] transition-colors">
            Explore More
          </button>
        </Link>
      </section>
    </main>
  );
};

export default AboutUs;
