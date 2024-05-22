import React from 'react'
import Image from 'next/image'
import avatar from './avatar.jpg'

const Hero = () => {
  return (
<div className="hero min-h-screen"
    style={{backgroundImage: 'url(./avatar.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Myrtle Beach's Premier Pressure Washing: Residential & Commercial Excellence!</h1>
      <p className="mb-5">Transform the look of your property with our top-notch pressure washing services. At ProWash of the GrandStrand, we specialize in both residential and commercial cleaning, ensuring every surface shines with a like-new luster. Our expert team uses advanced equipment to tackle dirt, grime, and stains, providing Myrtle Beach with unparalleled results. Whether it's your home, storefront, or office building, trust us to deliver a spotless finish that enhances curb appeal and leaves a lasting impression. Experience the difference with Myrtle Beachs most reliable pressure washing professionals.</p>
      <button className="btn btn-primary">Get a Fast Quote</button>
    </div>
  </div>
</div>
  )
}

export default Hero
