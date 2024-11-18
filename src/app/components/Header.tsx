"use client";
import { useState } from "react";
import Image from "next/image";
//img
import Logo from "../../../public/logo.svg";
//ds
import { Typography } from "./design-system";
//icons
import BottomArrow from "../icons/bottomArrow";
import { Menu } from "../icons";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const links = [
    { key: 1, name: "Learn", href: "#" },
    { key: 2, name: "Products", href: "#" },
    { key: 3, name: "FAQs", href: "#" },
  ];

  const products = [
    { key: 1, name: "Product 1", href: "#" },
    { key: 2, name: "Product 2", href: "#" },
    { key: 3, name: "Product 3", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-[20px] md:px-[100px] py-[10px] bg-white shadow-md">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <a href="#hero" className="-m-1.5 p-1.5 mr-[24px]">
            <Image alt="logo" src={Logo} width={136} height={24} />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-x-12 text-netural-900">
            {links.map((link) =>
              link.name === "Products" ? (
                <div
                  key={link.key}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Typography size={"l1"}>
                    <a
                      href={link.href}
                      className={`text-sm/6 flex font-bold text-netural-900 relative lg:top-[5px]`}
                    >
                      {link.name}
                      <span
                        className={`ml-1 transition-transform ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      >
                        <BottomArrow className="relative top-[7px]" />
                      </span>
                    </a>
                  </Typography>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 w-48">
                      {products.map((product) => (
                        <a
                          key={product.key}
                          href={product.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          {product.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Typography key={link.key} size={"l1"}>
                  <a
                    href={link.href}
                    className={`text-sm/6 font-bold text-netural-900`}
                  >
                    {link.name}
                  </a>
                </Typography>
              )
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
            {mobileNavOpen ? <Menu /> : <Menu />}
          </button>
        </div>

        <div className="hidden md:flex lg:flex-1 lg:justify-end">
          <button className="py-[12px] px-[21px] rounded-[15px] bg-primary-800 text-white">
            Install Kobodrop
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileNavOpen && (
        <div className="md:hidden mt-4 text-center divide-y bg-white  rounded-md p-4">
          {links.map((link) =>
            link.name === "Products" ? (
              <div className="text-center" key={link.key}>
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex justify-center items-center px-4 py-2  w-full text-sm font-bold text-netural-900"
                >
                  {link.name}
                  <BottomArrow
                    className={`ml-1 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {dropdownOpen && (
                  <div className="mt-2 text-center">
                    {products.map((product) => (
                      <a
                        key={product.key}
                        href={product.href}
                        className="block px-4 py-2 text-sm text-netural-900 hover:bg-gray-100 rounded-md"
                      >
                        {product.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.key}
                href={link.href}
                className="block px-4 py-2 text-sm font-bold text-netural-900 hover:bg-gray-100 rounded-md"
              >
                {link.name}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}
