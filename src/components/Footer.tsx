import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="container px-5 py-2 mx-auto flex items-center justify-between sm:flex-row flex-col">
        <Link
          href="/"
          className="flex font-bold items-center md:justify-start justify-center"
        >
          <Image
            src="/infologo.png"
            alt="logo"
            width={37}
            height={37}
            className="p-0 m-0"
          />
          <span className="ml-3 text-3xl text-slate-100 font-serif">
            Bk.Shop{" "}
          </span>
        </Link>
        <p className="text-md text-slate-100 font-serif sm:ml-4 sm:pl-4 sm:py-2 sm:mt-1 mt-2">
          © 2022 Bk.Shop
        </p>

        <ul className="flex gap-x-4 text-slate-100 font-serif font-bold items-center sm:mt-0 mt-4">
          <li>
            <Link
              className="hover:text-orange-300"
              href="https://www.facebook.com/"
            >
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-300" href="https://www.x.com/">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-300"
              href="https://www.linkedin.com/"
            >
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-300"
              href="https://www.instagram.com/"
            >
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
