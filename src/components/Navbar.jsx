import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "About", path: "about" },
    { link: "Tokenomics", path: "tokenomics" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-4xl font-semibold flex items-center space-x-3 text-primary"
            >
              
              <span className="text-6xl">YNOT</span>
            </a>

            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                  className="block hover:text-gray-300 cursor-pointer text-2xl"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/* chart */}
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="https://dexscreener.com/ton/eqdbhuczur3gul9gcfqecd2v5k4zvzvkcnau_qnhclmuls-d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black py-2 px-4 text-white transition-all duration-300 rounded hover:text-white  text-2xl">
              Chart
            </button>
            </a>
            
          </div>

          {/* mobile burger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* navitems mobile */}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-navdrop text-xl ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        } `}
      >
        {navItems.map(({ link, path }) => (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            key={link}
            to={path}
            className="block hover:text-gray-300 text-white cursor-pointer"
            onClick={toggleMenu}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
