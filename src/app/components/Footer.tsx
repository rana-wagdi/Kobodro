"use client";
import Image from "next/image";
//img
import footerLogo from "../../../public/footer-logo.svg";
//hooks
import useBreakpoint from "../hooks/useBreakpoint";
//icons
import AppleLogo from "../icons/appleLogo";
import AppStore from "../icons/appStore";
import { Facebook, Twitter } from "../icons";
import LinkedIn from "../icons/linkedIn";

const Footer = () => {
  const { sm } = useBreakpoint();

  const productLinks = {
    title: "Product",
    links: ["Overview", "Features", "Solutions", "Contact", "Releases"],
  };

  const resourcesLinks = {
    title: "Resources",
    links: ["Blog", "Newsletter", "Events", "Help centre", "Support"],
  };

  const renderNavLinks = (navSection: { title: string; links: string[] }) => (
    <div>
      <h4 className="text-netural-800">{navSection.title}</h4>
      {navSection.links.map((link: string, index: number) => (
        <p className="text-netural-100 text-[16px] mt-[8px]" key={index}>
          {link}
        </p>
      ))}
    </div>
  );

  return (
    <footer className="text-netural-50 bg-primary-900 md:px-[100px] sm:px-[16px] pt-[30px] pb-[24px]">
      <div className="sm:block md:flex items-center justify-between">
        <div>
          <Image
            alt="logo"
            src={footerLogo}
            width={sm ? 166 : sm ? 128 : 136}
            height={sm ? 38 : sm ? 30 : 24}
          />
          <p className="text-neutral-100 text-[16px] font-thin mt-[32px]">
            Start spending the smart way
          </p>
        </div>
        {sm && (
          <div className="mt-[25px]">
            <p>Get the app</p>
            <div className="flex gap-x-5">
              <AppleLogo className="mt-[16px]" />
              <AppStore className="mt-[16px]" />
            </div>
          </div>
        )}
        {sm && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mt-[32px] md:mt-0">
            <div>{renderNavLinks(productLinks)}</div>

            <div>{renderNavLinks(resourcesLinks)}</div>
          </div>
        )}
        {!sm && <div>{renderNavLinks(productLinks)}</div>}
        {!sm && <div>{renderNavLinks(resourcesLinks)}</div>}

        {!sm && (
          <div>
            <p>Get the app</p>
            <AppleLogo className="mt-[16px]" />
            <AppStore className="mt-[16px]" />
          </div>
        )}
      </div>
      <hr className="my-[24px] border-0 h-[2px] bg-netural-700" />
      <div className="md:flex sm:block flex-wrap-reverse justify-between">
        <p className="text-neutral-300 text-[16px]">
          © 2023 Kobodrop. All rights reserved.
        </p>
        {!sm && (
          <div className="flex gap-x-8">
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              {" "}
              <LinkedIn />
            </a>
            <a href="#">
              <Facebook />
            </a>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
