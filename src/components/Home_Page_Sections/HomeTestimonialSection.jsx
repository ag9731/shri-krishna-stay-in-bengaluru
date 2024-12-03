import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      image: "https://demo.htmlcodex.com/pro/hotelier/img/testimonial-3.jpg",
      Cname: "Akash",
      Cprofession: "Web Developer",
      Creview: "Amazing service and support. I highly recommend this company!",
    },
    {
      image: "https://demo.htmlcodex.com/pro/hotelier/img/testimonial-3.jpg",
      Cname: "Bharath",
      Cprofession: "Full Stack Developer",
      Creview: "The team was extremely helpful and professional. Great work!",
    },
    {
      image: "https://demo.htmlcodex.com/pro/hotelier/img/testimonial-3.jpg",
      Cname: "Rakesh",
      Cprofession: "Digital Marketing",
      Creview: "They exceeded my expectations in every way. Thank you!",
    },
    {
      image: "https://demo.htmlcodex.com/pro/hotelier/img/testimonial-3.jpg",
      Cname: "Paramesh",
      Cprofession: "Sales Manager",
      Creview: "Great experience. Would definitely recommend to others.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  // Automatically slide to the next testimonial
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section>
      {/* Section Header */}
      <section className="text-center mb-10">
        <div className="flex flex-col justify-center items-center">
          <h5 className="uppercase font-bold font-montserrat text-[#FEA116] inline-flex items-center gap-5">
            <span className="w-20 border-t-2 border-[#FEA116]"></span>
            Testimonials
            <span className="w-20 border-t-2 border-[#FEA116]"></span>
          </h5>
          <h1 className="font-bold font-montserrat text-4xl">
            What Our{" "}
            <span className="text-[#FEA116] uppercase">Clients Say</span>
          </h1>
        </div>
      </section>

      {/* Carousel */}
      <div className="relative max-w-3xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-full bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <img
                src={item.image}
                alt={item.Cname}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">{item.Cname}</h3>
              <p className="text-sm text-gray-500">{item.Cprofession}</p>
              <p className="mt-4 text-gray-700">{item.Creview}</p>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full text-gray-700 hover:bg-gray-400 focus:outline-none"
          onClick={prevSlide}
        >
          <FaArrowLeft />
        </button>

        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full text-gray-700 hover:bg-gray-400 focus:outline-none"
          onClick={nextSlide}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
