// src/components/Slider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import image1 from "../../public/banner1.jpg";
import image2 from "../../public/banner2.jpg";
import image3 from "../../public/banner3.jpg";
import image4 from "../../public/banner4.jpg";
import image5 from "../../public/banner5.jpg";

const slides = [
 {
  image: image1,
  title: "Welcome to Thailand",
  description: "Experience the land of smiles with stunning beaches, rich culture, and flavorful cuisine.",
  button: "Explore Now"
 },
 {
  image: image2,
  title: "Bangkok Nights",
  description: "Discover the vibrant nightlife, temples, and markets in Thailand’s capital.",
  button: "Discover More"
 },
 {
  image: image3,
  title: "Chiang Mai Temples",
  description: "A spiritual haven nestled in the mountains, filled with golden pagodas and serene culture.",
  button: "See Temples"
 },
 {
  image: image4,
  title: "Thai Beaches",
  description: "Relax on crystal-clear waters, white sand, and endless sunshine.",
  button: "Plan a Trip"
 },
 {
  image: image5,
  title: "Street Food Magic",
  description: "Taste the incredible flavors of Thai street food — spicy, sweet, and savory.",
  button: "Taste Now"
 },
];

const Slider = () => {
 return (
  <div className="max-w-[1400px] mx-auto h-[500px] border-4 border-[#151515] rounded-2xl overflow-hidden">
   <Swiper
    modules={[Navigation, Pagination, Autoplay, EffectFade]}
    effect="fade"
    loop={true}
    autoplay={{
     delay: 4000,
     disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    navigation
    className="h-full"
   >
    {slides.map((slide, index) => (
     <SwiperSlide key={index}>
      <div className="relative w-full h-full">
       <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
       />
       <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6 py-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">{slide.description}</p>
        <button className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition">
         {slide.button}
        </button>
       </div>
      </div>
     </SwiperSlide>
    ))}
   </Swiper>
  </div>
 );
};

export default Slider;
