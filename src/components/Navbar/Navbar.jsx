// src/components/Navbar/Navbar.jsx
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "../DarkMode";
import logo from "../../assets/Logo.png";

// upper menu links
const Menu = [
  { id: 1, name: "Home",        link: "/" },
  { id: 2, name: "Top Rated",   link: "/#services" },
  { id: 3, name: "Kids Wear",   link: "/#kids" },
  { id: 4, name: "Mens Wear",   link: "/#mens" },
  { id: 5, name: "Electronics", link: "/#electronics" },
];

// dropdown items
const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "#" },
  { id: 2, name: "Best Selling",      link: "#" },
  { id: 3, name: "Top Rated",         link: "#" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-amber-100">
      {/* ===== Top bar ===== */}
      <nav className="mx-auto h-14 max-w-7xl px-3 md:px-6">
        <div className="flex h-full items-center justify-between gap-3">
          {/* left: brand */}
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Shopsy logo" className="h-7 w-7 rounded object-contain" />
            <span className="text-lg font-bold text-neutral-900">Shopsy</span>
          </a>

          {/* right: search + order + dark toggle */}
          <div className="flex items-center gap-4">
            {/* search */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px]
                           transition-all duration-300 rounded-full border
                           border-gray-300 px-4 py-1.5 text-sm
                           bg-white text-neutral-800 placeholder:text-gray-400
                           focus:outline-none focus:border-amber-400
                           dark:bg-neutral-800 dark:text-neutral-200 dark:border-gray-700"
              />
              <IoMdSearch
                size={20}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2
                           text-gray-500 group-hover:text-amber-500"
              />
            </div>

            {/* Order button */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="group flex items-center gap-3 rounded-full
                         bg-gradient-to-r from-amber-500 to-pink-500
                         px-4 py-1 text-white transition-all duration-200 drop-shadow-sm"
            >
              <span className="hidden transition-all duration-200 group-hover:block">Order</span>
              <FaCartShopping className="text-xl" />
            </button>

            {/* dark / light toggle */}
            <DarkMode />
          </div>
        </div>
      </nav>

      {/*  Lower navbar  */}
      <div className="border-t border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl px-3 md:px-6">
          <ul className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-100">
            {Menu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block px-4 transition duration-200 hover:text-amber-600 dark:hover:text-amber-400"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Trending dropdown */}
            <li className="relative group">
              <a
                href="#"
                className="flex items-center gap-[2px] px-4 py-2 transition
                           hover:text-amber-600 dark:hover:text-amber-400"
              >
                Trending Products
                <FaCaretDown className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </a>

              {/* flyout */}
              <div
                className="absolute right-0 mt-2 w-[200px] rounded-md p-2 shadow-md z-[9999]
                           bg-white text-black dark:bg-neutral-800 dark:text-neutral-100
                           opacity-0 translate-y-2 pointer-events-none
                           transition-all duration-150
                           group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
              >
                <ul>
                  {DropdownLinks.map((d) => (
                    <li key={d.id}>
                      <a
                        href={d.link}
                        className="block w-full rounded-md px-3 py-2 transition
                                   hover:bg-pink-500/20 dark:hover:bg-pink-500/30"
                      >
                        {d.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
