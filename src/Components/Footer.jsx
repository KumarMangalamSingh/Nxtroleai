import React from 'react'
import { CiTwitter, CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="w-full bg-white py-6 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-5 text-gray-900 text-2xl">
          <a href="#" className="hover:text-blue-600 transition-colors duration-200"><CiTwitter /></a>
          <a href="#" className="hover:text-blue-800 transition-colors duration-200"><CiFacebook /></a>
          <a href="#" className="hover:text-pink-600 transition-colors duration-200"><BsInstagram /></a>
        </div>

        <div className="text-gray-700 text-base font-medium text-center md:text-left">
          © 2025 <span className="font-semibold">NxtRole AI</span>. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
