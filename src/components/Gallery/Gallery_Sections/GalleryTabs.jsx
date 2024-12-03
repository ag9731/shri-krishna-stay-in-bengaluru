import React, { useState } from "react";

const GalleryTabs = () => {
  const array = [
    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRTP17--jkQhcJTWguP5p8wEujMVph7jbRA&s",
    },
    {
      id: 1,
      img: "https://i.ytimg.com/vi/Cr97t3U517A/maxresdefault.jpg",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRTP17--jkQhcJTWguP5p8wEujMVph7jbRA&s",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRTP17--jkQhcJTWguP5p8wEujMVph7jbRA&s",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRTP17--jkQhcJTWguP5p8wEujMVph7jbRA&s",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRTP17--jkQhcJTWguP5p8wEujMVph7jbRA&s",
    },
    {
      id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRTP17--jkQhcJTWguP5p8wEujMVph7jbRA&s",
    },
    {
      id: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRTP17--jkQhcJTWguP5p8wEujMVph7jbRA&s",
    },
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
