"use client";
import "animate.css";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const linkStyle = ` text-xl lg:text-4xl font-medium px-2 py-1 rounded ${
    pathname === "/contact"
      ? "bg-gray-300 text-black"
      : "text-gray-800 bg-gray-300/0 hover:bg-gray-300 hover:text-black"
  }`;

  return (
    <>
      <nav className="p-6 border-b-2 bg-gray-300/25 border-gray-300 animate__animated animate__bounceInDown">
        <div className="flex justify-between max-w-7xl mx-auto ">
          <Link
            href="/"
            className="text-2xl lg:text-4xl font-bold text-gray-800 animate__animated animate__heartBeat"
          >
            camelia
          </Link>

          {/* Menu toggle button - visible on small screens */}
          <button
            className="text-xl md:hidden bg-transparent cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Navigation links */}
          <div
            className={`${
              isOpen ? "flex animate__animated animate__fadeInDown" : "hidden"
            } flex-col gap-2 mt-4 md:flex md:flex-row md:gap-4 md:mt-0`}
          >
            <Link
              href="/"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              home
            </Link>
            <Link
              href="/portfolio"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              portfolio
            </Link>
            {/* <Link
              href="/contact"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              contact
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
}
