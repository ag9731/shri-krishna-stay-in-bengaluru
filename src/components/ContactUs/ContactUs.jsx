import React from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        e.target,
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Message Sent Successfully", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <section className="py-10 container mx-auto px-4">
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

      {/* Contact Info and Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
          {/* Google Map */}
          <div className="mt-6">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.9137387477493!2d77.61502887415892!3d12.924418788843956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1470a43b1537%3A0xa27072af4d92b08e!2sMaruthi%20Nagar%2C%20Madivala%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1698418104011!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
          <form onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#FEA116] text-white py-2 px-4 rounded-md w-full hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
