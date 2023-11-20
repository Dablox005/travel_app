"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center h-screen relative">
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      <div className={`absolute bg-white p-4 shadow-md ${isOpen ? '' : 'hidden'}`}>
                {NAV_LINKS.map((link) => (
                  <Link href={link.href} key={link.key}
                  className="regular-16 text-gray-50 flexCenter
                  cursor-pointer pb-1.5 transition-all hover:font-bold" >
                  {link.label}
                  </Link>
                ))}
      </div>
    </div>
  );
};

export default HamburgerMenu;
