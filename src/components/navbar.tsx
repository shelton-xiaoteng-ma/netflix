"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import { AccountMenu } from "./account-menu";
import { MobileMenu } from "./mobile-menu";
import { NavbarItem } from "./navbar-item";

const TOP_OFFSET = 66;

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((currentVisible) => !currentVisible);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((currentVisible) => !currentVisible);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`
          relative
          px-4
          md:px-10
          py-6
          flex
          flex-row
          items-center
          transition
          duration-500
          bg-zinc-900
          bg-opacity-90
          ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}
        `}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={0}
          className="w-16 lg:w-32"
        />
        <div className="flex-row ml-8 gap-7 md:flex hidden">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div
          className="md:hidden flex items-center gap-2 ml-8 cursor-pointer relative"
          onClick={toggleMobileMenu}
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : null
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div
            className="flex flex-row items-center gap-2 cursor-pointer relative"
            onClick={toggleAccountMenu}
          >
            <Image
              src="/default-blue.png"
              alt="profiles"
              width={40}
              height={40}
              className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden"
            />
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : null
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};
