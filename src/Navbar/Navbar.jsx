"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="hidden md:flex  items-center  p-3 gap-2 sm:p-2 sm:gap-2 lg:p-5 lg:gap-4 lg:text-xl">
        <h2 className="font-mono text-white  font-bold ml-2 mr-2 sm:ml-2 sm:mr-2 lg:ml-10 lg:mr-10">
          Anastasia
        </h2>
        <Link
          href="/"
          className="p-2  rounded-2xl text-gray-300 hover:text-violet-300 transition-all duration-150 "
        >
          Home
        </Link>

        <Link
          href="/projects"
          className="p-2  rounded-2xl text-gray-300 hover:text-violet-300 transition-all duration-150"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="ml-auto mr-10 p-2 lg:p-3  text-gray-300 border border-violet-300 rounded-2xl transition-colors hover:border-violet-500 duration-150 "
        >
          Contacts
        </Link>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-end text-3xl p-3 ml-auto"
        aria-label="Toggle menu"
      >
        {isOpen ? <MdClose /> : <RxHamburgerMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-end gap-4  px-6 pb-4">
          <Link href="/" className="text-lg hover:text-blue-600">
            Home
          </Link>
          <Link href="/projects" className="text-lg hover:text-blue-600">
            Projects
          </Link>
          <Link href="/contact" className="text-lg hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
