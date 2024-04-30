"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
      
        spaceBetween={0}
        centeredSlides={true}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
       

        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[450px] w-screen"
      >
        <SwiperSlide className='h-96 w-screen bg-red-500'>Slide 1</SwiperSlide>
        <SwiperSlide className='h-96 w-screen bg-green-500'> Slide 2</SwiperSlide>
        <SwiperSlide className='h-96 w-screen bg-yellow-500'>Slide 3</SwiperSlide>
        <SwiperSlide className='h-96 w-screen bg-gray-500'>Slide 4</SwiperSlide>
        <SwiperSlide className='h-96 w-screen bg-blue-500'>Slide 5</SwiperSlide>
        <SwiperSlide className='h-96 w-screen bg-orange-500'>Slide 6</SwiperSlide>
        <SwiperSlide className='h-96 w-screen bg-pink-500'>Slide 7</SwiperSlide>
        <SwiperSlide className='h-96 w-screen bg-red-500'>Slide 8</SwiperSlide>
        <SwiperSlide className='h-96 w-screen bg-black'>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
