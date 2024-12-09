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
    <section className="container mx-auto px-4">
      {/* Section Heading */}
      <div className="text-center">
        <h5 className="uppercase font-bold font-montserrat text-[#FEA116] inline-flex items-center gap-2 sm:gap-5 text-sm sm:text-base">
          <span className="hidden sm:inline-block w-10 sm:w-20 border-t-2 border-[#FEA116]"></span>
          Contact Us
          <span className="hidden sm:inline-block w-10 sm:w-20 border-t-2 border-[#FEA116]"></span>
        </h5>
        <h1 className="font-bold font-montserrat text-2xl sm:text-3xl md:text-4xl mt-2">
          Get in <span className="text-[#FEA116] uppercase">Touch</span>
        </h1>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5 p-4 sm:p-5 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl">
          <FaMapMarkerAlt className="text-3xl text-[#FEA116]" />
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold font-montserrat mb-2">
              Location
            </h2>
            <a
              href="https://www.google.com/maps?q=No.+9/17,+1st+Main+Road,+Maruthi+Nagar,+Madivala,+Bangalore-560068"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-sm sm:text-base hover:text-yellow-500 transition-colors"
            >
              No. 9/17, 1st Main Road, Maruthi Nagar, Madivala, Bangalore-560068
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5 p-4 sm:p-5 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl">
          <FaEnvelope className="text-3xl text-[#FEA116]" />
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold font-montserrat mb-2">
              Mail
            </h2>
            <a
              href="mailto:srikrishnastay@gmail.com"
              className="text-gray-600 text-sm sm:text-base hover:text-yellow-500 transition-colors"
            >
              srikrishnastay@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5 p-4 sm:p-5 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl">
          <FaPhoneAlt className="text-3xl text-[#FEA116]" />
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold font-montserrat mb-2">
              Mobile
            </h2>
            <a
              href="tel:9972014954"
              className="text-gray-600 text-sm sm:text-base hover:text-yellow-500 transition-colors"
            >
              +91 99720 14954
            </a>
            <br />
            <a
              href="tel:9019336365"
              className="text-gray-600 text-sm sm:text-base hover:text-yellow-500 transition-colors"
            >
              +91 90193 36365
            </a>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-5 bg-[#0f172b] rounded-lg text-center text-white">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-3">
            <FaClock className="text-xl sm:text-2xl" />
            <span className="text-base sm:text-lg font-bold font-montserrat">
              Rooms Check Out Time 24/hour
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaCreditCard className="text-xl sm:text-2xl" />
            <span className="text-base sm:text-lg font-bold font-montserrat">
              All Major Cards Accepted
            </span>
          </div>
        </div>
      </div>

      {/* Map and Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 sm:mt-10">
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
            className="h-full"
          ></iframe>
        </div>

        {/* EmailJS Form */}
        <div className="p-4 sm:p-5 bg-white shadow-lg rounded-lg">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-4 sm:space-y-5"
          >
            <div>
              <label className="block font-bold text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEA116]"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEA116]"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-gray-600 mb-1">
                Mobile
              </label>
              <input
                type="tel"
                name="mobile"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEA116]"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-gray-600 mb-1">
                Check-In
              </label>
              <input
                type="date"
                name="checkin"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEA116]"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-gray-600 mb-1">
                Check-Out
              </label>
              <input
                type="date"
                name="checkout"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEA116]"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-gray-600 mb-1">
                Number of Rooms
              </label>
              <input
                type="number"
                name="rooms"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEA116]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FEA116] text-white p-2 sm:p-3 rounded-lg hover:bg-[#d98410] transition-all duration-300 text-sm sm:text-base"
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
