import React from "react";
import { FaBed, FaShieldAlt, FaPhoneAlt } from "react-icons/fa";
import AboutImage from "../../../assets/Home_About_Us.png";

const AboutWhyChooseUs = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src={AboutImage}
            alt="Experience"
            className="w-full lg:w-[80%] h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 lg:pl-12 lg:border-l-2 lg:border-blue-50">
          <h5 className="uppercase text-[#FEA116] font-semibold mb-2 text-sm md:text-base">
            Features
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why <span className="text-[#FEA116]">Choose</span> Us
          </h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>

          {/* Features List */}
          <div className="space-y-6 ">
            {[
              {
                icon: <FaBed className="text-[#FEA116] text-2xl md:text-3xl" />,
                title: "Relux Living",
                description:
                  "Clita dolor sit lorem justo lorem. Diam dolore et sed erat, erat est diam dolore kasd sit.",
              },
              {
                icon: (
                  <FaShieldAlt className="text-[#FEA116] text-2xl md:text-3xl" />
                ),
                title: "High Security System",
                description:
                  "Clita dolor sit lorem justo lorem. Diam dolore et sed erat, erat est diam dolore kasd sit.",
              },
              {
                icon: (
                  <FaPhoneAlt className="text-[#FEA116] text-2xl md:text-3xl" />
                ),
                title: "24/7 Telephone Support",
                description:
                  "Clita dolor sit lorem justo lorem. Diam dolore et sed erat, erat est diam dolore kasd sit.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 mt-1">{feature.icon}</div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
