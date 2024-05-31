import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
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
          <li><a href="/house-washing">House Washing</a></li>
          <li><a>Commercial Services</a></li>
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

      <li>
        <details>
          <summary>
            <a href="/residential">House SoftWash
            </a>
            </summary>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/services/house-softwash">House Washing</a></li>
          <li><a href="/services/concrete-cleaning">Concrete Cleaning </a></li>
          <li><a href="/services/patio-cleaning">Patio & Deck Cleaning</a></li>
          <li><a href="/commercial-services">Commercial Services</a></li>
          <li><a href="/property-managers">Property Managers</a></li>
          </ul>
        </details>
      </li>


      <li>
        <details>
          <summary>Commercial Pressure Wash</summary>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/house-washing">House Washing</a></li>
          <li><a href="/concrete-cleaning">Concrete Cleaning </a></li>
          <li><a href="/patio-cleaning">Patio & Deck Cleaning</a></li>
          <li><a href="/commercial-services">Commercial Services</a></li>
          <li><a href="/property-managers">Property Managers</a></li>
          </ul>
        </details>
      </li>


      <li>
        <details>
          <summary>Property Managers</summary>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/house-washing">House Washing</a></li>
          <li><a href="/concrete-cleaning">Concrete Cleaning </a></li>
          <li><a href="/patio-cleaning">Patio & Deck Cleaning</a></li>
          <li><a href="/commercial-services">Commercial Services</a></li>
          <li><a href="/property-managers">Property Managers</a></li>
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
