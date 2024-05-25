import React from 'react'
import icon1 from "@/public/icon1.jpg"
import icon2 from "@/public/icon2.png"
import icon3 from "@/public/icon3.png"
import icon4 from "@/public/icon4.png"
import icon5 from "@/public/icon5.png"
import icon6 from "@/public/icon6.png"
import Image from 'next/image'


const Benefits = () => {
    return (
<div>
<p className = "text-center font-medium text-2xl">Benefits of Having Your Property Pressure Washed by Prowash of the GrandStrand</p>

<div className="w-full h-full rounded-md my-4 p-2 flex flex-wrap justify-center">
    <div className="card w-96 bg-base-100 p-4">
<figure>
<Image
        src = "/icon6.png"
        width={100}
        height={100}
        alt='icon3'
/>
</figure>
    <div className="card-body">
        <h2 className="card-title">We Are Experts</h2>
        <p>
    When you hire ProWash Pressure Washing, we come equipped with the latest gadgets and tools to do the job
    When you rent a power washer, you have one project in mind. When you hire us we have the skills and tools to handle any unexpected developments</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Contact Us For Help</button>
        </div>
    </div>
    </div>
    <div className="card w-96 bg-base-100 p-4">
    <figure>
    <Image
        src = "/icon2.png"
        width={100}
        height={100}
        alt='icon3'
/>
    </figure>
    <div className="card-body">
        <h2 className="card-title">Increase the value of your property</h2>
        <p>
    According to the National Association of Realtors, washing a house can add $10,000 to $15,000 to the sales price of some properties
    A good thorough professional pressure washing is an important aspect of attracting potential buyers and will help you sell faster​​ for more money</p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>


    <div className="card w-96 bg-base-100 p-4 ">
    <figure>
    <Image
        src = "/icon1.png"
        width={100}
        height={100}
        alt='icon3'
/>
    </figure>
    <div className="card-body">
        <h2 className="card-title">Improve your curb appeal</h2>
        <p>
    Curb appeal matters a lot and it impacts the potential resale of your home and property
    When you have a professional clean your home, driveway and walkways you will instantly improve your curb appeal resulting in higher property value</p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>
    </div>




    <div className="w-full h-full rounded-md my-4 p-2 flex flex-wrap justify-center">
    <div className="card w-96 bg-base-100">
    <figure>
    <Image
        src = "/icon3.png"
        width={100}
        height={100}
        alt='icon3'
/>
    </figure>
    <div className="card-body">
        <h2 className="card-title">Live in a clean home that is hygienic for family and guests</h2>
        <p>
    Pressure washing offers protection against harmful bacteria that fester and grow around the property. For people with allergies or small children this can be very important
    The best way to keep your property and outdoor space well-maintained is with yearly pressure washing​​</p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>


    <div className="card w-96 bg-base-100 p-4">
    <figure>
    <Image
        src = "/icon4.png"
        width={100}
        height={100}
        alt='icon3'
/>
    </figure>
    <div className="card-body">
        <h2 className="card-title">​No Work for You</h2>
        <p>
    While you're relaxing with beach trips or barbecues leave the hard work to us. We are pros. This is what we do
    Homeowners Insurance does not cover you if your property is intentionally destroyed
        </p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>


    <div className="card w-96 bg-base-100 p-4">
    <figure>
    <Image
        src = "/icon5.png"
        width={100}
        height={100}
        alt='icon3'
/>
    </figure>
    <div className="card-body">
        <h2 className="card-title">Safe for the environment​</h2>
        <p>
    Our cleaning solutions are safe for plants, animals, and children
    We are mindful of the planet and minimize any environmental impact when doing the job
    We believe in keeping the planet green
        </p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>
    </div>


    </div>
    )
}

export default Benefits
