"use client";

import { useState } from "react";
// import Link from "next/link"; // Removed unused import
import SmoothScrollLink from "./SmoothScrollLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <SmoothScrollLink href="#" className="text-xl font-bold">
            TL
          </SmoothScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <SmoothScrollLink
              href="#about"
              className="hover:text-gray-600 dark:hover:text-gray-300"
            >
              About
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#education"
              className="hover:text-gray-600 dark:hover:text-gray-300"
            >
              Education
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#skills"
              className="hover:text-gray-600 dark:hover:text-gray-300"
            >
              Skills
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#experience"
              className="hover:text-gray-600 dark:hover:text-gray-300"
            >
              Experience
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#projects"
              className="hover:text-gray-600 dark:hover:text-gray-300"
            >
              Projects
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#resume"
              className="hover:text-gray-600 dark:hover:text-gray-300"
            >
              Resume
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#contact"
              className="hover:text-gray-600 dark:hover:text-gray-300"
            >
              Contact
            </SmoothScrollLink>
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <SmoothScrollLink
                href="#about"
                className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#education"
                className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Education
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#skills"
                className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#experience"
                className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#projects"
                className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#resume"
                className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#contact"
                className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </SmoothScrollLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
