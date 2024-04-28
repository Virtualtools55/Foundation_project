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


      <div className=' max-md:bg-green-500  max-md:w-1/2  max-md:h-screen max-md:absolute max-md:left-0 max-md:top-17'>
      <ul className={` flex flex-row w-auto text-center rounded-md  justify-evenly bg-red-500 w-96 max-md:flex-col max-md:absolute max-md:left-0 max-md:top-20 max-md:w-72 max-md:h-auto max-md:text-left   ${isOpen ? '' : 'hidden md:block'}`}>
        <li className='m-3 inline-block text-white max-md:ml-24'>
          <Link href="/">Home</Link>
        </li>
        <li className='m-3 inline-block text-white max-md:ml-24'>
          <Link href="/">Services</Link>
        </li>
        <li className='m-3 inline-block text-white max-md:ml-24' >
          <Link href="/">About</Link>
        </li>
        <li  className='m-3 inline-block text-white max-md:ml-24'>
          <Link href="/">Contact</Link>
        </li>
      </ul>
      </div>
      

      

      <div className={` md:flex w-auto max-md:mt-56 max-md:absolute max-md:top-40 max-md:left-12 ${isOpen ? '' : 'hidden md:block'}`}>
      <button className="text-white bg-red-500 px-4 py-2 rounded-md mr-4">Sign Up</button>
        <button className="text-white bg-red-500 px-4 py-2 rounded-md">Login</button>


</div>


      
    </nav>
    </>
  );
}
