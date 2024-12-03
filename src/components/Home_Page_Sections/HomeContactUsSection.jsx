import React, { useRef } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaCreditCard,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const HomeContactUsSection = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          e.target.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
  };

  return (
    <section className="container mx-auto py-10">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h5 className="uppercase font-bold font-montserrat text-[#FEA116] inline-flex items-center gap-5">
          <span className="w-20 border-t-2 border-[#FEA116]"></span>
          Contact Us
          <span className="w-20 border-t-2 border-[#FEA116]"></span>
        </h5>
        <h1 className="font-bold font-montserrat text-4xl mt-2">
          Get in <span className="text-[#FEA116] uppercase">Touch</span>
        </h1>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex items-start gap-5 p-5 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl">
          <FaMapMarkerAlt className="text-3xl text-[#FEA116]" />
          <div>
            <h2 className="text-xl font-bold font-montserrat mb-2">Location</h2>
            <p className="text-gray-600">
              No. 9/17, 1st Main Road, Maruthi Nagar, Madivala, Bangalore-560068
            </p>
          </div>
        </div>
        <div className="flex items-start gap-5 p-5 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl">
          <FaEnvelope className="text-3xl text-[#FEA116]" />
          <div>
            <h2 className="text-xl font-bold font-montserrat mb-2">Mail</h2>
            <p className="text-gray-600">srikrishnastay@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start gap-5 p-5 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl">
          <FaPhoneAlt className="text-3xl text-[#FEA116]" />
          <div>
            <h2 className="text-xl font-bold font-montserrat mb-2">Mobile</h2>
            <p className="text-gray-600">9972014954</p>
            <p className="text-gray-600">9019336365</p>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="mt-10 p-5 bg-[#0f172b] rounded-lg text-center text-white">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex items-center gap-3">
            <FaClock className="text-2xl" />
            <span className="text-lg font-bold font-montserrat">
              Rooms Check Out Time 24/hour
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaCreditCard className="text-2xl" />
            <span className="text-lg font-bold font-montserrat">
              All Major Cards Accepted
            </span>
          </div>
        </div>
      </div>

      {/* Map and Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.544196481804!2d77.62104347583347!3d12.91651748945127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d5f7436071%3A0xd25c2d78848ef648!2sMaruthi%20Nagar%2C%20Madivala%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1698418845703!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>

        {/* EmailJS Form */}
        <div className="p-5 bg-white shadow-lg rounded-lg">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block font-bold text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEA116]"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEA116]"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-gray-600">Mobile</label>
              <input
                type="tel"
                name="mobile"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEA116]"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-gray-600">Check-In</label>
              <input
                type="date"
                name="checkin"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEA116]"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-gray-600">Check-Out</label>
              <input
                type="date"
                name="checkout"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEA116]"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-gray-600">
                Number of Rooms
              </label>
              <input
                type="number"
                name="rooms"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEA116]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FEA116] text-white p-3 rounded-lg hover:bg-[#d98410] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeContactUsSection;
