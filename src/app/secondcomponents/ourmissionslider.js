"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination,Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}

        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg">
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt=""/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
            <p class="text-sm text-gray-600 text-center px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.</p>
            <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
        </div>
        <div class="w-full">
            <p class="text-md text-indigo-500 font-bold text-center">Scott Windon</p>
            <p class="text-xs text-gray-500 text-center">@scott.windon</p>
        </div>
    </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg">
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt=""/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
            <p class="text-sm text-gray-600 text-center px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.</p>
            <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
        </div>
        <div class="w-full">
            <p class="text-md text-indigo-500 font-bold text-center">Scott Windon</p>
            <p class="text-xs text-gray-500 text-center">@scott.windon</p>
        </div>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg">
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt=""/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
            <p class="text-sm text-gray-600 text-center px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.</p>
            <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
        </div>
        <div class="w-full">
            <p class="text-md text-indigo-500 font-bold text-center">Scott Windon</p>
            <p class="text-xs text-gray-500 text-center">@scott.windon</p>
        </div>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg">
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt=""/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
            <p class="text-sm text-gray-600 text-center px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.</p>
            <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
        </div>
        <div class="w-full">
            <p class="text-md text-indigo-500 font-bold text-center">Scott Windon</p>
            <p class="text-xs text-gray-500 text-center">@scott.windon</p>
        </div>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg">
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt=""/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
            <p class="text-sm text-gray-600 text-center px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.</p>
            <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
        </div>
        <div class="w-full">
            <p class="text-md text-indigo-500 font-bold text-center">Scott Windon</p>
            <p class="text-xs text-gray-500 text-center">@scott.windon</p>
        </div>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg">
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt=""/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
            <p class="text-sm text-gray-600 text-center px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.</p>
            <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
        </div>
        <div class="w-full">
            <p class="text-md text-indigo-500 font-bold text-center">Scott Windon</p>
            <p class="text-xs text-gray-500 text-center">@scott.windon</p>
        </div>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg">
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt=""/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
            <p class="text-sm text-gray-600 text-center px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.</p>
            <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
        </div>
        <div class="w-full">
            <p class="text-md text-indigo-500 font-bold text-center">Scott Windon</p>
            <p class="text-xs text-gray-500 text-center">@scott.windon</p>
        </div>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg">
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt=""/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
            <p class="text-sm text-gray-600 text-center px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.</p>
            <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
        </div>
        <div class="w-full">
            <p class="text-md text-indigo-500 font-bold text-center">Scott Windon</p>
            <p class="text-xs text-gray-500 text-center">@scott.windon</p>
        </div>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg">
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt=""/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
            <p class="text-sm text-gray-600 text-center px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.</p>
            <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
        </div>
        <div class="w-full">
            <p class="text-md text-indigo-500 font-bold text-center">Scott Windon</p>
            <p class="text-xs text-gray-500 text-center">@scott.windon</p>
        </div>
    </div>
</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
