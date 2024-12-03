import React from "react";
import AboutImage from "../../assets/Home_About_Us.jpg";
import { FaCheck } from "react-icons/fa";

const HomeAboutUs = () => {
  return (
    <section className="container mx-auto px-4 md:py-24">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <section className="relative flex-1">
          <figure className="mb-8 lg:mb-0">
            <img
              className="w-full lg:w-[70%] h-auto object-cover"
              src={AboutImage}
              alt="Shri Krishna Stay Bengaluru"
            />
          </figure>
          <div className="absolute bottom-0 right-0 bg-white w-full lg:w-72 h-24 flex items-center justify-center border-double border-4 outline-4 border-[#f3f5f6]-800">
            <h1 className="font-bold text-xl lg:text-2xl text-center lg:w-40">
              <span className="text-[#FEA116]">Brand</span> New Luxury{" "}
              <span className="text-[#FEA116]">Hotel</span>
            </h1>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex flex-col flex-1 gap-6">
          <div className="flex flex-col gap-4">
            <h5 className="uppercase font-bold font-montserrat text-[#FEA116] inline-flex items-center gap-3">
              About Us
              <span className="ml-1 w-20 text-center border-t-2 border-[#FEA116]"></span>
            </h5>
            <h1 className="font-bold font-montserrat text-3xl lg:text-4xl">
              Welcome To{" "}
              <span className="text-[#FEA116] uppercase">Krishna Stay Inn</span>
            </h1>
            <p className="text-[#414140] mt-4 text-justify">
              Welcome to Krishna Stay Inn, nestled in Bengaluru, Karnataka.
              Enjoy comfort and excellent service in a serene environment.
              Whether for business or leisure, we ensure a relaxing stay.
            </p>
            <p className="text-[#414140] text-justify">
              Krishna Stay Inn offers a peaceful retreat in the vibrant city of
              Bengaluru, Karnataka. Our modern amenities and friendly staff
              ensure you feel right at home. Experience the perfect blend of
              comfort and convenience during your stay with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4">
              <FaCheck className="fill-[#fea116] text-[20px]" />
              <p>Relax Living</p>
            </div>
            <div className="flex items-center gap-4">
              <FaCheck className="fill-[#fea116] text-[20px]" />
              <p>High Security</p>
            </div>
            <div className="flex items-center gap-4">
              <FaCheck className="fill-[#fea116] text-[20px]" />
              <p>Hot Water</p>
            </div>
            <div className="flex items-center gap-4">
              <FaCheck className="fill-[#fea116] text-[20px]" />
              <p>24/7 Support</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-full md:w-auto text-white uppercase font-medium bg-[#fea116] px-8 md:px-14 py-3 md:py-4 hover:bg-[#e99015] transition-colors">
              Explore More
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HomeAboutUs;
