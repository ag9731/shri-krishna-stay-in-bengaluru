import React, { useState } from "react";
import galleryImg1 from "../../../assets/gallery images/1.webp";
import galleryImg2 from "../../../assets/gallery images/2.webp";
import galleryImg3 from "../../../assets/gallery images/3.webp";
import galleryImg4 from "../../../assets/gallery images/4.webp";
import galleryImg5 from "../../../assets/gallery images/5.webp";
import galleryImg6 from "../../../assets/gallery images/6.webp";
import galleryImg7 from "../../../assets/gallery images/7.webp";
import galleryImg8 from "../../../assets/gallery images/8.webp";
import galleryImg9 from "../../../assets/gallery images/9.webp";
import galleryImg10 from "../../../assets/gallery images/10.webp";
import galleryImg11 from "../../../assets/gallery images/11.webp";
import galleryImg12 from "../../../assets/gallery images/12.webp";
import galleryImg13 from "../../../assets/gallery images/13.webp";
import galleryImg14 from "../../../assets/gallery images/14.webp";

const GalleryTabs = () => {
  const array = [
    { id: 0, img: galleryImg1 },
    { id: 1, img: galleryImg2 },
    { id: 2, img: galleryImg3 },
    { id: 3, img: galleryImg4 },
    { id: 4, img: galleryImg5 },
    { id: 5, img: galleryImg6 },
    { id: 6, img: galleryImg7 },
    { id: 7, img: galleryImg8 },
    { id: 8, img: galleryImg9 },
    { id: 10, img: galleryImg10 },
    { id: 11, img: galleryImg11 },
    { id: 12, img: galleryImg12 },
    { id:13, img: galleryImg13 },
    { id: 14, img: galleryImg14 },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenLightbox = (image) => {
    setSelectedImage(image);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (selectedImage) {
      const currentIndex = array.findIndex(
        (item) => item.id === selectedImage.id
      );
      const nextIndex = (currentIndex + 1) % array.length;
      setSelectedImage(array[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (selectedImage) {
      const currentIndex = array.findIndex(
        (item) => item.id === selectedImage.id
      );
      const prevIndex = (currentIndex - 1 + array.length) % array.length;
      setSelectedImage(array[prevIndex]);
    }
  };

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        {array.map((items) => (
          <div key={items.id}>
            <img
              onClick={() => handleOpenLightbox(items)}
              className="cursor-pointer hover:opacity-80"
              src={items.img}
              alt={`Gallery Item ${items.id}`}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full p-4">
            <button
              className="absolute top-4 right-4 text-white bg-red-700 px-5 py-2 text-2xl"
              onClick={handleCloseLightbox}
            >
              &times;
            </button>
            <img
              className="w-full max-h-[80vh] object-contain"
              src={selectedImage.img}
              alt={`Lightbox Item ${selectedImage.id}`}
            />
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-white px-5 text-2xl"
              onClick={handlePrev}
            >
              &#8249;
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black bg-white px-5 text-2xl"
              onClick={handleNext}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryTabs;
