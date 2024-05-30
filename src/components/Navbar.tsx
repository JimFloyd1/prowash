import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (

<div className="navbar ">
  <div className="navbar-start truncate">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-100">
        <li><a>Home</a></li>
        <li>
          <a>Services</a>
          <ul className="p-2 z-10">
          <li><a href="/house-washing">House Washing</a></li>
          <li><a>Concrete Cleaning </a></li>
          <li><a>Patio & Deck Cleaning</a></li>
          <li><a>Commercial Services</a></li>
          <li><a>Property Managers</a></li>
          </ul>
        </li>
        <li><a>Get a Fast Quote</a></li>
      </ul>
    </div>
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
<a className="btn btn-ghost text-xl hidden sm:flex" href='/'>ProWash of the GrandStrand</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>

<Link href ="/">Home</Link>

      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2 z-10">
          <li><a href="/house-washing">House Washing</a></li>
          <li><a href="/concrete-cleaning">Concrete Cleaning </a></li>
          <li><a href="/patio-cleaning">Patio & Deck Cleaning</a></li>
          <li><a href="/commercial-services">Commercial Services</a></li>
          <li><a href="/property-managers">Property Managers</a></li>
          </ul>
        </details>
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
