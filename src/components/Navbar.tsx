"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const[openMenu, setOpenMenu] = useState<string | null>(null);


const handleMenuClick = (menu: string) => {
    setOpenMenu(openMenu === menu ? null: menu);
};

  return (

<div className="navbar ">
  <div className="navbar-start ">
  <figure>
      <a className= "btn btn-ghost" href="/">
<Image
        src = "/logo1.png"
        width={100}
        height={100}
        alt='icon3'
/>
</a>
</figure>
    <div className="dropdown">

      <div tabIndex={0} role="button" className="btn btn-ghost m-1 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>

        <li>
          <a>Services</a>
          <ul className="p-2 z-10">
          <li><a href="/services/residential-softwash">House Washing</a></li>
          <li><a href="/services/commercial-pressure-washing">Commercial Pressure Wash</a></li>
          <li><a>Property Managers</a></li>
      </ul>
      </li>


        <li>
          <a>Get a Fast Quote</a>
        </li>
      </ul>
    </div>


{/* DESKTOP VIEW */}
<a className="btn btn-ghost text-xl hidden sm:flex" href='/'>ProWash of the GrandStrand</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

      <li className="relative">
        <details onClick={() => handleMenuClick('menu1')} className="dropdown">
          <summary>
            <a href="/services/residential-softwash">House Washing
            </a>
            </summary>
            {openMenu === 'menu1' && (
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/services/house-softwash">House Soft Wash</a></li>
          <li><a href="/services/concrete-pressure-washing">Concrete Cleaning </a></li>
          <li><a href="/services/patio-softwash">Patio & Deck Cleaning</a></li>
          <li><a href="/services/driveway-pressure-washing">Driveway Pressure Washing</a></li>
          <li><a href="/services/paver-tile-cleaning">Paver and Tile Cleaning</a></li>
          <li><a href="/services/residential-softwash">Residential Soft Wash</a></li>
          <li><a href="/services/rust-removal">Rust Removal</a></li>
          <li><a href="/services/rv-softwash">RV Soft Wash</a></li>
          <li><a href="/services/stucco-surface-cleaning">Stucco Surface Cleaning</a></li>
          <li><a href="/services/trash-bin-cleaning">Trash Bin Cleaning</a></li>
          <li><a href="/services/vinyl-softwash">Vinyl Soft Wash</a></li>
          </ul>
          )}
        </details>
      </li>

{/* <ul className = "flex space-x-4"> */}
  {/* <li className = "relative">
    <button
    onClick={() => handleMenuClick('menu1')}
    className="text-white"
    >
      Menu 1
    </button>
    {openMenu === 'menu1' && (
      <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg">
      <li className="p-2 hover:bg-gray-200">Submenu1-1</li>
      </ul>
    )}
  </li> */}

  {/* <li className="relative">
          <button
            onClick={() => handleMenuClick('menu2')}
            className="text-white"
          >
            Menu 2
          </button>
          {openMenu === 'menu2' && (
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg">
              <li className="p-2 hover:bg-gray-200">Submenu 2-1</li>
              <li className="p-2 hover:bg-gray-200">Submenu 2-2</li>
            </ul>
          )}
        </li> */}

      <li className = 'relative'>
        <details onClick={() => handleMenuClick('menu2')} className="dropdown">
          <summary>
          <a href="/services/commercial-pressure-washing">Commercial Pressure Wash
            </a>
          </summary>
          {openMenu === 'menu2' && (
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/services/awning-pressure-washing">Awning Pressure Washing</a></li>
          <li><a href="/services/commercial-pressure-washing">Commercial Pressure Washing</a></li>
          <li><a href="/services/concrete-surface-pressure-washing">Concrete Surface Pressure Washing</a></li>
          <li><a href="/services/drive-through-pressure-washing">Drive Through Pressure Washing</a></li>
          <li><a href="/services/loading-dock-pressure-washing">Loading Dock Pressure Washing</a></li>
          <li><a href="/services/post_construction_pressure-washing">Post Construction Pressure Washing</a></li>
          <li><a href="/services/restaurant_pressure-washing">Restaurant Pressure Washing</a></li>
          <li><a href="/services/shopping-centers-pressure-washing">Shopping Centers Pressure Washing</a></li>
          <li><a href="/services/storefront-pressure-washing">Store Front Pressure Washing</a></li>
          </ul>
          )}
        </details>
      </li>


      <li>
        <details>
          <summary>
            <a href="/services/property-managers">Property Managers </a>
            </summary>
          <ul tabIndex={0} className="hover:dropdown-content relative z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/services/apartment-pressure-washing">Apartment Pressure Washing</a></li>
          <li><a href="/services/government-building-pressure-washing">Government Building Pressure Washing</a></li>
          <li><a href="/services/hoa-pressure-washing">HOA Pressure Washing</a></li>
          <li><a href="/services/hoa-trash-bin-pressure-washing">HOA Trash Bin Pressure Washing</a></li>
          <li><a href="/services/park-facilities-pressure-washing">Park Facilities Pressure Washing</a></li>
          <li><a href="/services/pool-decks-pressure-washing">Pool Decks Pressure Washing</a></li>
          <li><a href="/services/retirement-facilities-pressure-washing ">Retirement Facilities Pressure Washing</a></li>
          <li><a href="/services/town-home-pressure-washing">Town Home Pressure Washing</a></li>
          </ul>
        </details>
      </li>


      <li>
<Link href ="/">Home</Link>
      </li>

      <li><a href='/quote'>Get a Fast Quote</a></li>
    </ul>
  </div>


  <div className="navbar-end">
    <Link href ="/login">Admin</Link>
  </div>
</div>

  )
}

export default Navbar
