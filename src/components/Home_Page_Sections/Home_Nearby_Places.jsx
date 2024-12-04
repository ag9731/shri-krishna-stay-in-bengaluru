import React from "react";
import Iscon from "../../assets/Nearby Places/Iscon Temple.webp";
import KSR from "../../assets/Nearby Places/KSR Railway Station.webp";
import KBS from "../../assets/Nearby Places/Majestic.webp";
import VidhanaSoudha from "../../assets/Nearby Places/Vidhana Souda.webp";
import Slider from "react-slick";

const Home_Nearby_Places = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Tablet and above
        settings: {
          slidesToShow: 3, // Adjust as needed for tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 2, // Only one slide at a time on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  const array = [
    {
      img: Iscon,
      title: "Iscon Temple Bengaluru",
      desc: "Lorem Ipsum is a great to read",
      km: "1 KM",
    },
    {
      img: KSR,
      title: "Krantiveera Sangolli Rayanna Railway Station",
      desc: "Lorem Ipsum is a great to read",
      km: "2 KM",
    },
    {
      img: KBS,
      title: "Kempegowda Bus Station",
      desc: "Lorem Ipsum is a great to read",
      km: "3 KM",
    },
    {
      img: VidhanaSoudha,
      title: "VidhanaSoudha",
      desc: "Lorem Ipsum is a great to read",
      km: "1.5 KM",
    },
  ];

  return (
    <section className="container mx-auto">
      {/* Upper Section */}
      <section className="text-center mb-10">
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

      {/* Bottom Section */}
      <section>
        <div className="slider-container container mx-auto overflow-hidden">
          <Slider {...settings}>
            {array.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center h-[300px] md:h-[350px] lg:h-[400px] px-4"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-[60%] object-contain mb-4"
                  />
                  <h1 className="text-center text-[1.7vmax] md:text-[1.2vmax] lg:text-[1.2vmax] xl:text-[1.2vmax] uppercase font-bold text-primary">
                    {item.title}
                  </h1>
                  <p className="text-center uppercase font-bold text-black">
                    {item.km}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </section>
  );
};

export default Home_Nearby_Places;
