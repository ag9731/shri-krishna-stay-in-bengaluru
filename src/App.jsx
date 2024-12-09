import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Gallery from "./components/Gallery/Gallery";
import Rooms from "./components/Rooms/Rooms";
import Restaurant from "./components/Restaurant/Restaurant";
import Facilities from "./components/Facilities/Facilities";
import ScrollToTop from "./components/ScrollToTop";
import FloatingSocialMedia from "./components/FloatingSocialMedia";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/rooms" element={<Rooms/>}/>
            {/* <Route path="/restaurant" element={<Restaurant/>}/> */}
            <Route path="/facilities" element={<Facilities/>}/>
          </Routes>
          <Footer />
        </div>
      </Router>
      <FloatingSocialMedia/>
    </>
  );
}

export default App;
