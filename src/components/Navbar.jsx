import React from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black/40 backdrop-blur-lg border-b border-neutral-700/80">
      
      <div className="container mx-auto px-4 relative text-sm">
        
        <div className="flex justify-between items-center py-3">
          
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-white font-medium tracking-tight">
              VirtualR
            </span>
          </div>

          {/* Nav items */}
          <ul className="hidden lg:flex ml-14 space-x-12 text-neutral-300">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-white transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            
            <a
              href="#"
              className="py-2 px-3 border border-neutral-600 rounded-md text-white hover:bg-neutral-800 transition"
            >
              Sign in
            </a>

            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white hover:opacity-90 transition"
            >
              Create an account
            </a>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;