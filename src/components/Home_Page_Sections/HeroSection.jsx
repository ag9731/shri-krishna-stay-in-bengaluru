import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import slide1 from "../../assets/Home_Page_Banners/slide1.webp";
import slide2 from "../../assets/Home_Page_Banners/slide2.webp";
import slide3 from "../../assets/Home_Page_Banners/slide3.webp";
import slide4 from "../../assets/Home_Page_Banners/slide4.webp";
import "./HeroSection.css";

// const SampleArrow = ({ className, style, onClick, icon: Icon }) => (
//   <div
//     className={`${className} hidden md:block`}
//     style={{
//       ...style,
//       display: "block",
//       position: "absolute",
//       top: "50%",
//       transform: "translateY(-50%)",
//       zIndex: 100,
//       cursor: "pointer",
//     }}
//     onClick={onClick}
//   >
//     <Icon size={30} color="white" />
//   </div>
// );

const SampleArrow = ({ className, style, onClick, icon: Icon }) => (
  <div
    className={`${className} custom-arrow hidden md:block`}
    style={{
      ...style,
      display: "flex", // Ensure it's displayed
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 100,
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    {/* <Icon size={30} color="white" /> */}
  </div>
);


const HeroSection = () => {
  const images = [
    { slide: slide3, title: "Discover A Brand Luxurious Hotel" },
    { slide: slide1, title: "Discover A Brand Luxurious Hotel" },
    { slide: slide2, title: "Discover A Brand Luxurious Hotel" },
    { slide: slide4, title: "Discover A Brand Luxurious Hotel" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    pauseOnHover: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleArrow icon={FaArrowRight} />,
    prevArrow: <SampleArrow icon={FaArrowLeft} />,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="relative">
            <div className="relative">
              <img
                className="w-full h-[50vh] md:h-[70vh] object-cover bg-blend-darken scale-up-image"
                src={item.slide}
                alt={item.title}
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-0">
              <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-montserrat text-white capitalize font-bold mb-4 md:mb-6">
                  {item.title}
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                  <button className="hidden md:block md:w-auto text-black font-medium bg-[#fea116] px-8 md:px-14 py-3 md:py-4 hover:bg-[#e99015] transition-colors">
                    Contact
                  </button>
                  <button className=" md:w-auto text-black font-medium bg-white px-8 md:px-14 py-3 md:py-4 hover:bg-gray-100 transition-colors">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
