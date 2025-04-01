import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-zinc-700 fixed w-full top-0 z-90 shadow-lg rounded-b-full max-sm:rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://imgs.search.brave.com/P5cpappTvwe0rvNtZqq0e0b3USehOxOkat7sCktAorM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cmFuZG9tLWxvZ29z/LW5vdC10aWVkLXRv/LWFueXRoaW5nLWp1/c3QtaGF2aW5nLWZ1/bi1tYWtpbmctdjAt/cHEwdHQ5ODRnZHJj/MS5wbmc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9NzI2YjA5NjAx/MjU2Y2RmYWVmMzEz/YzYyNzM3YTM5ZWRi/ZTkzZGU0ZA"
            alt="Logo"
            className="h-10 w-10 overflow-hidden rounded-full object-cover object-center"
          />
          <span className="text-white font-bold text-lg">LOGO</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link to="/events" className="text-white hover:text-gray-200">
            Events
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-0 left-0 w-full h-screen bg-zinc-800 bg-opacity-90 p-6 flex flex-col items-center justify-center space-y-6`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white text-3xl transition-all duration-500"
        >
          &times;
        </button>

        <Link to="/" className="text-white text-xl" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" className="text-white text-xl" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/events" className="text-white text-xl" onClick={toggleMenu}>
          Events
        </Link>
      </div>
    </nav>
  );
}

export default Header;
