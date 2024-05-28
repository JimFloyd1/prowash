import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div>
        <div className="hero min-h-8 ">


  <div className="hero-content flex-col lg:flex-row-reverse py-16 text-center ">
    <Image
    src = "/prowash4.jpg"
    width={600}
    height={600}
    alt="Prowash!"
    className="rounded-full object-cover"
    />
    <div>



      <h1 className="text-2xl font-bold text p-4">100% SATISFACTION</h1>
      <h1 className="text-5xl font-bold text">About ProWash of the GrandStrand</h1>
      <p className="py-9"> Transform the look of your property with our pressure washing services. At ProWash of the GrandStrand, we specialize in both residential and commercial cleaning, ensuring every surface shines! Our expert team uses advanced equipment and eco-friendly solutions to tackle dirt, grime, mold, mildew, and stains, providing Myrtle Beach customers with exceptional results. Whether its your home, storefront, or office building, trust us to deliver a spotless finish that enhances curb appeal and leaves a lasting impression. Experience the difference with Myrtle Beach{"'"}s most reliable pressure washing professionals. </p>
      <p> ​
​We service Myrtle Beach, North Myrtle Beach, Carolina Forest, Murrell{"'"}s Inlet, Socastee, Garden City, Litchfield, Conway, and Surfside.​
</p>

      <button className="btn m-9">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
