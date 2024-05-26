import React from 'react'
import prowash1 from "@/public/prowash1.jpg"
import prowash2 from "@/public/prowash2.jpg"
import prowash3 from "@/public/prowash3.jpg"
import prowash4 from "@/public/prowash4.jpg"
import prowash5 from "@/public/prowash5.jpg"
import prowash6 from "@/public/prowash6.jpg"
import Image from 'next/image'

const About = () => {
  return (
    <div>
        <div className="hero min-h-8 ">
  <div className="hero-content flex-col lg:flex-row-reverse py-16 text-center">
    <Image
    src = "/prowash3.jpg"
    width={450}
    height={450}
    alt="Prowash doing its thang!"
    className="rounded-full object-cover"
    />
    <div>
      <h1 className="text-2xl font-bold text p-8">Top Rated In the Myrtle Beach Area</h1>
      <h1 className="text-5xl font-bold text">About ProWash of the GrandStrand</h1>
      <p className="py-9">ProWash Pressure Washing is a company that cleans Residential and Commercial property. We pressure wash with gentle pressure using soap and eco-friendly chemicals to rid mold, mildew, dirt, insects & unattractive stains that harm buildings. ​
​We service Myrtle Beach, North Myrtle Beach, Carolina Forest, Murrells Inlet, Socastee, Garden City, Litchfield, Conway, and Surfside.​
ProWash Pressure Washing is the local expert and has been pressure washing Myrtle Beach and surrounding areas since 1988. We have the experience, knowledge, and best methods to safely clean your property. Request a FREE Online Quote or Call (843) 457-8440 to schedule an appointment. </p>
      <button className="btn">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
