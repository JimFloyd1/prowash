import React from 'react'
import Image from 'next/image'


const Hero = () => {

  return (
<div className="hero min-h-screen rounded-3xl object-cover ring-8 ring-blue-400"
    style={{backgroundImage: 'url(./prowash1.jpg)'}}>
  <div className="hero-overlay bg-opacity-40 rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="pb-20">
      <h1 className="mb-5 text-5xl font-bold">#1 RATED </h1>
      <h2 className="mb-5 text-5xl font-bold">PRESSURE WASHING SERVICES IN MYRTLE BEACH</h2>
      <p className="mb-5 text-xl">High-Quality Services, Fair Prices, Always on Time! </p>
      <div className= "p-5">
      <button className="btn btn-primary">Get a Fast Quote</button>
      <button className="btn btn-primary ml-3">Call Us For Help</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero
