"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
export default function Navbar() {


const router=useRouter();


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const goLogin=()=>{

    router.push("/login")
  }
  const goSignup=()=>{

    router.push("/signup")
  }

  return (
    <>
      <div className="lg:hidden   absolute right-8 top-5 ">
        <FontAwesomeIcon
          icon={faBars}
          className="bold text-black cursor-pointer font-bold text-2xl"
          onClick={toggleMenu}
        />
      </div>

      <nav className="flex items-center justify-between h-16 w-screen px-8 bg-white max-lg:flex-col max-lg:z-10">
        <Link
          href="/"
          className="text-black text-xl font-bold max-lg:absolute max-lg:left-8 max-lg:top-4"
        >
          logo
        </Link>

        <div
          className={` max-lg:w-9/12 max-lg:h-screen max-lg:absolute max-lg:z-10  max-lg:left-0 max-lg:top-20  transition-transform duration-6000 ease-in-out transform ${
            isOpen ? "max-lg:translate-x-300" : "max-lg:-translate-x-full"
          }  px-4 py-2  ${isOpen ? "" : "opacity-none lg:block"}`}
        >
          <FontAwesomeIcon
            icon={faClose}
            className="bold text-black cursor-pointer font-bold text-2xl lg:hidden absolute right-8 top-4"
            onClick={toggleMenu}
          />

          <ul
            className={` flex flex-row w-auto text-center  justify-evenly  w-96 max-lg:flex-col max-lg:bg-gradient-to-r from-blue-300 to-blue-600 max-lg:absolute max-lg:left-0 max-lg:top-12 max-lg:w-64 max-lg:h-auto max-lg:text-left transition-transform duration-6000 ease-in-out transform max-lg:z-10 ${
              isOpen ? "max-lg:translate-x-300" : "max-lg:-translate-x-full"
            }  px-4 py-2 rounded-r-lg ${isOpen ? "" : "max-lg:none lg:block"}`}
          >
            <li className="m-3 inline-block text-black max-lg:ml-20 hover:text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="m-3 inline-block text-black max-lg:ml-20 hover:text-black">
              <Link href="/ourmission">Our Mission</Link>
            </li>
            <li className="m-3 inline-block text-black max-lg:ml-20 hover:text-black">
              <Link href="/whatwedo">What We Do</Link>
            </li>
            <li className="m-3 inline-block text-black max-lg:ml-20 hover:text-black">
              <Link href="/providehelp">Provide help</Link>
            </li>
            <li className="m-3 inline-block text-black max-lg:ml-20 hover:text-black">
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div
          className={` lg:flex w-auto max-lg:mt-56  max-lg:absolute max-lg:top-[180px] max-lg:z-10 max-lg:left-4 transition-transform duration-6000 ease-in-out transform ${
            isOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"
          }  px-4 py-2 rounded-lg ${isOpen ? "" : "opacity-none lg:block"}`}
        >
          <button className="text-white bg-gradient-to-r from-blue-300 to-blue-600 px-4 py-2 rounded-lg mr-4 transition-transform  hover:scale-105 " onClick={goSignup}>
            Sign Up
          </button>
          <button className="text-white bg-gradient-to-r from-blue-300 to-blue-600 px-4 py-2 rounded-lg transition-transform  hover:scale-105" onClick={goLogin}>
           Login
          </button>
        </div>
      </nav>
    </>
  );
}
