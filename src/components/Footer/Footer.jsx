import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  const quickLinks = [
    {
      name: "Home",
      link: " / ",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    { 
      name: "Contact Us",
      link:"/contact" 
    },
  ];

  return (
    <footer className="bg-[#0f172b] text-white py-10 mt-10">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto px-5">
        {/* Logo or Company Info Section */}
        <div className="bg-yellow-400 p-5 rounded-lg text-black">
          <h1 className="text-xl font-bold">Company Logo</h1>
          <p>
            No. 9/17, 1st Main Road, Maruthi Nagar, Madivala, Bangalore-560068.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h1 className="uppercase text-lg font-bold mb-4">Quick Links</h1>
          <ul className="space-y-2">
            {quickLinks.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaGreaterThan className="text-yellow-400" />

                <Link to={item.link} onClick={handleExploreClick}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Another Section (Optional) */}
        <div>
          <h1 className="uppercase text-lg font-bold mb-4">Services</h1>
          <ul className="space-y-2">
            <li className="hover:text-yellow-400 transition">Service 1</li>
            <li className="hover:text-yellow-400 transition">Service 2</li>
            <li className="hover:text-yellow-400 transition">Service 3</li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h1 className="uppercase text-lg font-bold mb-4">Contact Us</h1>
          <p>Phone: 9972014954</p>
          <p>Email: srikrishnastay@gmail.com</p>
          <p>Location: Madivala, Bangalore-560068</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
