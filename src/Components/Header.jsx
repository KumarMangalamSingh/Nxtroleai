import React, { useState } from 'react'
import nxtrolepng from '../assets/nxtrolepng.png'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi' 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm  select-none ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo Section */}
        <Link to="home" smooth={true} duration={500} className="flex items-center cursor-pointer">
          <img
            src={nxtrolepng}
            alt="NxtRoleAI Logo"
            className="w-[110px] md:w-[120px] object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-semibold text-lg">
          <Link to="home" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">About</Link>
          <Link to="feature" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Features</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Contact</Link>
          <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-none ">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center overflow-hidden cursor-pointer">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-gray-800 focus:outline-none">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <nav className="flex flex-col items-center py-4 space-y-4 text-gray-800 font-semibold text-lg">
            <Link to="home" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="about" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="feature" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer" onClick={() => setMenuOpen(false)}>Features</Link>
            <Link to="contact" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer" onClick={() => setMenuOpen(false)}>Contact</Link>
           
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
