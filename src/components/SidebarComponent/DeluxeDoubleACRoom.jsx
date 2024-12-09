import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";


const DeluxeDoubleACRoom = () => {
  const array = [
    {
      img: "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_2878/x_0,y_33,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_1366,f_auto,c_fit/the-signature-inn-hotel-bangalore/Rooms_The_Signature_Inn_Hotel_near_Majestic_Railway_Station_in_Bangalore_2?1733720046342",
    },
    {
      img: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_248,w_4992,h_2807,r_0,c_crop,q_80,fl_progressive/w_1366,f_auto,c_fit/the-signature-inn-hotel-bangalore/Rooms_The_Signature_Inn_Hotel_near_Majestic_Railway_Station_in_Bangalore_3?1733720065197",
    },
    {
      img: "https://res.cloudinary.com/simplotel/image/upload/x_7,y_0,w_1166,h_656,r_0,c_crop,q_80,fl_progressive/w_1366,f_auto,c_fit/the-signature-inn-hotel-bangalore/Deluxe_Ac_Room_The_Signature_Inn_Hotel_Bangalore_3_rg6tfy?1733720055745",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="flex flex-col gap-8 px-4">
      {/* Image Slider */}
      <div>
        <Slider {...settings}>
          {array.map((images, index) => (
            <div key={index}>
              <img
                src={images.img}
                className="w-full h-auto object-cover rounded"
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>

      <div>
        <Link to="/contact">
          <button className="bg-yellow-400  px-6 py-3 font-bold cursor-pointer">
            Book Now
          </button>
        </Link>
      </div>
      {/* Room Description */}
      <div>
        <p className="text-justify leading-6">
          The Deluxe AC Room is the comfortable choice for two occupants. This
          room, at our hotel Bangalore, comes with a double bed and is
          air-conditioned and furnished with the latest amenities to ensure a
          comfortable stay.
        </p>
      </div>

      {/* Pricing Information */}
      <div>
        <ul className="flex flex-col gap-2">
          <li className="bg-blue-300 p-2 rounded">
            <span className="font-bold">Single:</span> INR 1100/-
          </li>
          <li className="bg-blue-300 p-2 rounded">
            <span className="font-bold">Double:</span> INR 1500/-
          </li>
        </ul>
      </div>

      {/* Amenities */}
      <div>
        <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 list-disc">
          <li>Room Service</li>
          <li>Desk in Room</li>
          <li>Air Conditioning</li>
          <li>Basic Bathroom Amenities</li>
          <li>Toiletries</li>
          <li>Internet Connection</li>
          <li>Make-up / Shaving Mirror</li>
          <li>Telephone</li>
          <li>Safe in Room</li>
          <li>Shower Facility</li>
          <li>Bidet</li>
          <li>Coffee Table</li>
          <li>Mineral Water</li>
          <li>Hot/Cold Running Water</li>
          <li>HD / LED/LCD Satellite TV</li>
          <li>Satellite TV</li>
          <li>Housekeeping</li>
          <li>Attached Bathroom</li>
        </ul>
      </div>
    </section>
  );
};

export default DeluxeDoubleACRoom;
