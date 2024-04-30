"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function DownToUp() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1100}
        
       
        pagination={{
          clickable: true,
        }}
        navigation={true}
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen w-screen bg-red-5000 pointer"
      >
        <SwiperSlide className='h-screen w-screen bg-yellow-500'>Slide 1</SwiperSlide>
        <SwiperSlide className='h-screen w-screen bg-blue-500'> Slide 2</SwiperSlide>
        <SwiperSlide className='h-screen w-screen bg-green-500'>Slide 3</SwiperSlide>
        <SwiperSlide className='h-screen w-screen bg-pink-500'>Slide 4</SwiperSlide>
        <SwiperSlide className='h-screen w-screen bg-orange-500'>Slide 5</SwiperSlide>
        <SwiperSlide className='h-screen w-screen bg-green-500'>Slide 6</SwiperSlide>
        <SwiperSlide className='h-screen w-screen bg-yellow-500'>Slide 7</SwiperSlide>
        <SwiperSlide className='h-screen w-screen bg-purple-500'>Slide 8</SwiperSlide>
        <SwiperSlide className='h-screen w-screen bg-blue-500'>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
