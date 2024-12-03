import React from 'react'
import GalleryTabs from './Gallery_Sections/GalleryTabs';

const Gallery = () => {
  return (
    <main className='flex flex-col gap-20'>
      {/* Hero Section */}
      <section className="relative flex justify-center items-center bg-[url('https://t3.ftcdn.net/jpg/06/42/46/30/360_F_642463002_wcOgUmpJRHjLuwKnUhWr8VKjXC6gfm4d.jpg')] bg-cover bg-center h-[50vh]">
        {/* Other content goes here */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <h1 className="text-6xl font-bold font-montserrat text-white z-50">
          Gallery
        </h1>
      </section>

      <section>
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h5 className="uppercase font-bold font-montserrat text-[#FEA116] inline-flex items-center gap-5">
            <span className="w-20 border-t-2 border-[#FEA116]"></span>
            Gallery
            <span className="w-20 border-t-2 border-[#FEA116]"></span>
          </h5>
          <h1 className="font-bold font-montserrat text-4xl mt-2">
            Explore Our <span className="text-[#FEA116] uppercase">Gallery</span>
          </h1>
        </div>
      </section>

      <section>
        <GalleryTabs/>
      </section>
    </main>
  );
}

export default Gallery
