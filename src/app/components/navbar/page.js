// components/Navbar.js
"use client"
import React, { useState } from 'react'; // Corrected import statement for React
import Link from 'next/link';

export default function Navbar(){

  return (
    <>
    <div></div>
      <div className='h-200 bg-black w-screen flex flex-row justify-around max-md:flex-col max-md:bg-red-500 max-md:h-screen max-md:w-2/4'  >
       <div className='text-white inline-block ml-8 bg-green-500 inline-block  item-start text-center flex item-center'>logo</div>
       <div className=''><ul className='flex flex-row max-md:flex-col max-md:m-8'>

       <Link href={"/"} className='text-white m-5  inline-block max-md:m-3'>Home</Link>
       <Link href={"/"} className='text-white m-5 inline-block max-md:m-3'>Services</Link>
       <Link href={"/"}className='text-white m-5 inline-block max-md:m-3'>About</Link>
       <Link href={"/"} className='text-white m-5 inline-block max-md:m-3'> Contact</Link>

        </ul></div>
       <div className='ml-5'>
        <button className='text-white bg-red-500 m-5' >Signup</button>
        <button className='text-white bg-red-500 m-5'>Login</button>
       </div>
      </div>
    </>
  );
};


