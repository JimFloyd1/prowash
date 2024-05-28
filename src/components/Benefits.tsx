import React from 'react'
import Image from 'next/image'


const Benefits = () => {
    return (
<div className= "" >
<p className = "pt-9 text-center font-medium text-4xl">Benefits of Having Your Property Pressure Washed by Prowash of the GrandStrand</p>

<div className="w-full h-full my-4 p-8 flex flex-wrap justify-center bg-base-300 rounded-3xl object-cover bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="card w-96 bg-base-100 p-4 m-2 ">
<figure>
<Image
        src = "/icon6.png"
        width={100}
        height={100}
        alt='icon3'
/>
</figure>
    <div className="card-body ">
        <h2 className="card-title ">We Are Experts</h2>
        <p>
    When you hire ProWash Pressure Washing{"'"} we come equipped with the latest gadgets and tools to do the job
    When you rent a power washer{"'"} you have one project in mind. When you hire us we have the skills and tools to handle any unexpected developments</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Contact Us For Help</button>
        </div>
    </div>
    </div>
    <div className="card w-96 bg-base-100 p-4 m-2 ">
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
    According to the National Association of Realtors{"'"} washing a house can add $10{"'"}000 to $15{"'"}000 to the sales price of some properties
    A good thorough professional pressure washing is an important aspect of attracting potential buyers and will help you sell faster​​ for more money</p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>


    <div className="card w-96 bg-base-100 p-4 m-2">
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
    When you have a professional clean your home{"'"} driveway and walkways you will instantly improve your curb appeal resulting in higher property value</p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>
    </div>




    <div className="w-full h-full rounded-md my-4 p-2 flex flex-wrap justify-center">
    <div className="card w-96 m-2 bg-base-300 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full object-cover">
    <figure>
    <Image
        src = "/icon3.png"
        width={100}
        height={100}
        alt='icon3'
/>
    </figure>
    <div className="card-body ">
        <h2 className="card-title text-base-200">Live in a clean home that is hygienic for family and guests</h2>
        <p className='text-center text-base-200'>
        Pressure washing protects against harmful bacteria, vital for families with allergies or young children. Yearly pressure washing maintains property and outdoor spaces​​</p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>


    <div className="card w-96 p-4 m-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full object-cover">
    <figure>
    <Image
        src = "/icon4.png"
        width={100}
        height={100}
        alt='icon3'
/>
    </figure>
    <div className="card-body">
        <h2 className="card-title text-base-200">​No Work for You</h2>
        <p className = "text-center text-base-200">
    While you{"'"}re relaxing with beach trips or barbecues leave the hard work to us. We are pros. This is what we do
    Homeowners Insurance does not cover you if your property is intentionally destroyed
        </p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>


    <div className="card w-96 p-4 m-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full object-cover">
    <figure>
    <Image
        src = "/icon5.png"
        width={100}
        height={100}
        alt='icon3'
/>
    </figure>
    <div className="card-body">
        <h2 className="card-title text-base-200">Safe for the environment​</h2>
        <p className='text-center text-base-200'>
    Our cleaning solutions are safe for plants{"'"} animals{"'"} and children
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
