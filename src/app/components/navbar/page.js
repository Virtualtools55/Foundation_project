"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="md:hidden bg-green-500 absolute right-8 top-7">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-white cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
    
    
    
    <nav className="flex items-center justify-between h-20 w-auto px-8 bg-gray-500 max-md:flex-col ">
      <Link href="/" className="text-white text-xl font-bold max-md:absolute max-md:left-8 max-md:top-5">logo</Link>


      <div className={`max-md:bg-black max-md:w-9/12 max-md:h-screen max-md:absolute max-md:left-0 max-md:top-20  transition-transform duration-5000 ease-in-out transform ${isOpen ? 'translate-x-300' : '-translate-x-full'}  px-4 py-2  ${isOpen ? '' : 'opacity-none md:block'}`}>
      <ul className={` flex flex-row w-auto text-center rounded-md  justify-evenly  w-96 max-md:flex-col max-md:absolute max-md:left-0 max-md:top-20 max-md:w-64 max-md:h-auto max-md:text-left transition-transform duration-5000 ease-in-out transform ${isOpen ? 'translate-x-300' : '-translate-x-full'}  px-4 py-2 rounded-md ${isOpen ? '' : 'opacity-none md:block'}`}>
        <li className='m-3 inline-block text-white max-md:ml-20'>
          <Link href="/">Home</Link>
        </li>
        <li className='m-3 inline-block text-white max-md:ml-20'>
          <Link href="/">Services</Link>
        </li>
        <li className='m-3 inline-block text-white max-md:ml-20' >
          <Link href="/">About</Link>
        </li>
        <li  className='m-3 inline-block text-white max-md:ml-20'>
          <Link href="/">Contact</Link>
        </li>
      </ul>
      </div>
      

      

      <div className={` md:flex w-auto max-md:mt-56 max-md:absolute max-md:top-40 max-md:left-4 transition-transform duration-5000 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}  px-4 py-2 rounded-md ${isOpen ? '' : 'opacity-none md:block'}`}>
      <button className="text-white bg-red-500 px-4 py-2 rounded-md mr-4">Sign Up</button>
        <button className="text-white bg-red-500 px-4 py-2 rounded-md">Login</button>


</div>


      
    </nav>
    </>
  );
}
