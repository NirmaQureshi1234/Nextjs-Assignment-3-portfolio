"use client";

import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-mono">PORTFOLIO</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none bg-white"
          aria-label="Toggle menu"
        >
          {isOpen ? "🤍" : "🤍"}
        </button>
        <nav className={`md:flex ${isOpen ? "block" : "hidden"} md:block`}>
          <ul
            className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 bg-gray-700 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-100" : "md:opacity-100 opacity-0"
            }`}
          >
            <li>
              <Link href="#home" className="text-white font-mono hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-white font-mono hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="text-white font-mono hover:text-gray-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white font-mono hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;





