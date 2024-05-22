import React from 'react'

const Navbar2 = () => {
  return (
    <div>

<div className="navbar bg-base-100">
  <div className="navbar-start lg:navbar-end">
    <a className="btn btn-ghost text-xl text-white hidden lg:block">daisyUI</a>
    <a className="btn text-white lg:hidden">Admin</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className='text-white'>Home</a></li>
      <li>
        <details>
          <summary className='text-white'>Services</summary>
          <ul className="p-2">
            <li><a className='text-white'>House Washing</a></li>
            <li><a className='text-white'>Concrete Cleaning</a></li>
            <li><a className='text-white'>Patio & Deck Cleaning</a></li>
            <li><a className='text-white'>Commercial Services</a></li>
            <li><a className='text-white'>Property Managers</a></li>
          </ul>
        </details>
      </li>
      <li><a className='text-white'>Get a Fast Quote</a></li>
    </ul>
  </div>
  <div className="navbar-end lg:navbar-start">
    <div className="dropdown lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a className='text-white'>Home</a></li>
        <li>
          <a className='text-white'>Services</a>
          <ul className="p-2">
            <li><a className='text-white'>House Washing</a></li>
            <li><a className='text-white'>Concrete Cleaning</a></li>
            <li><a className='text-white'>Patio & Deck Cleaning</a></li>
            <li><a className='text-white'>Commercial Services</a></li>
            <li><a className='text-white'>Property Managers</a></li>
          </ul>
        </li>
        <li><a className='text-white'>Get a Fast Quote</a></li>
      </ul>
    </div>
    <a className="btn text-white hidden lg:block">Admin</a>
  </div>
</div>



    </div>
  )
}

export default Navbar2
