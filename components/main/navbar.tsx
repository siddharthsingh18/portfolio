"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 z-50 h-[65px] w-full bg-[#03001427] px-4 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md md:px-10">
      <div className="m-auto flex h-full w-full items-center justify-between px-[10px]">
        <Link href="#about-me" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Siddharth Singh logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="ml-[10px] hidden font-bold text-gray-300 md:flex">
            Siddharth Singh
          </div>
        </Link>

        <div className="hidden h-full w-[820px] flex-row items-center justify-between md:flex md:mr-8">
          <div className="mr-[15px] flex h-auto w-full items-center justify-between rounded-full border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-[20px] py-[10px] text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer transition hover:text-[rgb(112,66,248)]"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden flex-row gap-5 md:flex">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              aria-label={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        <button
          className="text-3xl text-white focus:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? "x" : "="}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 top-[65px] flex w-full flex-col items-center bg-[#030014] p-5 text-gray-300 md:hidden">
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer text-center transition hover:text-[rgb(112,66,248)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="#contact"
              className="cursor-pointer text-center transition hover:text-[rgb(112,66,248)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          <div className="mt-6 flex justify-center gap-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                aria-label={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
