"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type DropdownType = 'mobile' | 'services' | null;

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);

  const handleDropdownToggle = (dropdown: DropdownType) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown, .details')) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar bg-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown relative">
          <button onClick={() => handleDropdownToggle('mobile')} className="btn btn-ghost m-1 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          {openDropdown === 'mobile' && (
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute top-full mt-1">
              <li><Link href="/">Home</Link></li>
              <li>
                <a onClick={() => handleDropdownToggle('services')}>Services</a>
                {openDropdown === 'services' && (
                  <ul className="p-2 z-10">
                    <li><Link href="/house-washing">House Washing</Link></li>
                    <li><Link href="/concrete-cleaning">Concrete Cleaning</Link></li>
                    <li><Link href="/patio-cleaning">Patio & Deck Cleaning</Link></li>
                    <li><Link href="/commercial-services">Commercial Services</Link></li>
                    <li><Link href="/property-managers">Property Managers</Link></li>
                  </ul>
                )}
              </li>
              <li><Link href="/quote">Get a Fast Quote</Link></li>
            </ul>
          )}
        </div>
        <figure>
          <Link href="/" className="btn btn-ghost">
            <Image src="/logo1.png" width={100} height={100} alt="icon3" />
          </Link>
        </figure>
        <Link href="/" className="btn btn-ghost text-xl hidden sm:flex">ProWash of the GrandStrand</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li>
            <details open={openDropdown === 'services'} className="details" onClick={() => handleDropdownToggle('services')}>
              <summary>Services</summary>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/house-washing">House Washing</Link></li>
                <li><Link href="/concrete-cleaning">Concrete Cleaning</Link></li>
                <li><Link href="/patio-cleaning">Patio & Deck Cleaning</Link></li>
                <li><Link href="/commercial-services">Commercial Services</Link></li>
                <li><Link href="/property-managers">Property Managers</Link></li>
              </ul>
            </details>
          </li>

          <li>
            <details open={openDropdown === 'services'} className="details" onClick={() => handleDropdownToggle('services')}>
              <summary>Services</summary>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/house-washing">House Washing</Link></li>
                <li><Link href="/concrete-cleaning">Concrete Cleaning</Link></li>
                <li><Link href="/patio-cleaning">Patio & Deck Cleaning</Link></li>
                <li><Link href="/commercial-services">Commercial Services</Link></li>
                <li><Link href="/property-managers">Property Managers</Link></li>
              </ul>
            </details>
          </li>

          <li><Link href="/quote">Get a Fast Quote</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/login">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
