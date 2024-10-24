import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-slate-100 h-100hv">
      <div className="container mx-auto flex justify-between p-2 flex-col md:flex-row items-center">
        <div className="flex items-center text-indigo-950 ml-1 mb-2 md:mb-0">
          <Image
            src="/infologo.png"
            alt="logo"
            width={37}
            height={37}
            className="p-0 m-0"
          />
          <span className="ml-1 text-4xl text-indigo-950 font-extrabold font-serif">
            Bk.Shop
          </span>
        </div>
        <div style={{ position: "relative" }}>
          <input
            className="rounded-2xl py-3 px-3 outline-none  ml-3 text-xs w-[200px] pr-10 hidden md:block"
            placeholder="Search for item"
          />
          <FaSearch className="text-green-600 w-5 h-5 absolute right-5 top-2 hidden md:block" />
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-indigo-950 font-bold font-serif text-lg justify-center">
          <Link className="mr-3 hover:bg-orange-200" href="/">
            Home
          </Link>
          <Link className="mr-3 hover:bg-orange-200" href="/about">
            About
          </Link>
          <Link className="mr-3 hover:bg-orange-200" href="/category">
            Category
          </Link>
          <Link className="mr-3 hover:bg-orange-200" href="/contact">
            Contact
          </Link>
          <button className="inline-flex items-center bg-indigo-950 border-0 py-1 px-1 font-serif focus:outline-none hover:bg-orange-200 rounded text-white text-sm mt-1 md:mt-0">
            Add Cart
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
