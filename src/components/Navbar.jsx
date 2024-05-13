import React, { useEffect, useState } from 'react'
import { Link, ScrollLink } from 'react-scroll';
import {FaXmark, FaBars} from "react-icons/fa6"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
   
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
}

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            }
            else {
                setIsSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.addEventListener("scroll", handleScroll)
        }
    })
  
   const handleLinkClick = (path) => {
     setIsMenuOpen(false) 
     
   }


  
  return (
    <header
      className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0"
      id="/"
    >
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-6xl font-semibold flex items-center space-x-3"
          >
            <span className="text-natural-blue">YNOT</span>
          </a>

          {/* <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block cursor-pointer text-base text-natural-grey hover:text-natural-blue first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul> */}

          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="https://dexscreener.com/ton/eqdbhuczur3gul9gcfqecd2v5k4zvzvkcnau_qnhclmuls-d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-natural-grey text-white py-2 px-4  transition-all duration-300 rounded ">
                CHART
              </button>
            </a>
          </div>

          {/* mobile btn */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-natural-grey focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 " />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* mobile nav items */}
        <div
          className={`space-y-4 px-4 mt-20 py-7 bg-natural-blue ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {/* {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-white hover:text-natural-blue first:font-medium"
              onClick={() => handleLinkClick(path)}
            >
              {link}
            </Link>
          ))} */}
          <a
            href="https://dexscreener.com/ton/eqdbhuczur3gul9gcfqecd2v5k4zvzvkcnau_qnhclmuls-d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-natural-grey text-white py-2 px-4  transition-all duration-300 rounded ">
              CHART
            </button>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

