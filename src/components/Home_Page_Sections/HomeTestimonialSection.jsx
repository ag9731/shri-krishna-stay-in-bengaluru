import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      image: "https://demo.htmlcodex.com/pro/hotelier/img/testimonial-3.jpg",
      name: "Rakesh",
      profession: "Web Developer",
      review:
        "Amazing service and support. I highly recommend this company! The staff was friendly and very accommodating. The overall experience was seamless and exceeded my expectations.",
    },
    {
      image:
        "https://media.portmoni.com/resized/87664/linkedin-profile-picture-maker-featuring-a-circle-with-a-bold-stroke-5759b-el1_3-thumbnail-600x600.png",
      name: "Sarika",
      profession: "Full Stack Developer",
      review:
        "The team was extremely helpful and professional. Great work! The attention to detail in their service was remarkable. I would definitely return for future projects.",
    },
    {
      image:
        "https://www.kindpng.com/picc/m/650-6507366_molly-testimonial-girl-hd-png-download.png",
      name: "Rashmi",
      profession: "Digital Marketing",
      review:
        "They exceeded my expectations in every way. Thank you! The communication throughout the process was excellent. I am truly impressed by their dedication and effort.",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/557aec54e4b03c2094a2b4be/1548181738786-ZICMD107QZ5HH52QBUZ1/farough+testimonial+pics-04.png",
      name: "Jahnavi",
      profession: "Sales Manager",
      review:
        "Great experience. Would definitely recommend to others. The service quality was top-notch, and the team was very approachable. I felt valued as a customer throughout the process.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 ">
      <div className="text-center mb-12">
        <h2 className="text-xl font-semibold text-[#FEA116] mb-2 flex items-center justify-center">
          <span className="hidden sm:inline-block w-12 h-0.5 bg-[#FEA116] mr-4"></span>
          Testimonials
          <span className="hidden sm:inline-block w-12 h-0.5 bg-[#FEA116] ml-4"></span>
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold">
          What Our <span className="text-[#FEA116]">Clients Say</span>
        </h3>
      </div>

      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-center mb-2">
                {testimonial.name}
              </h4>
              <p className="text-[#FEA116] text-center mb-4">
                {testimonial.profession}
              </p>
              <p className="text-gray-600 text-center flex-grow">
                {testimonial.review}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialCarousel;
