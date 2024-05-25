import React from 'react'
import Image from 'next/image';


const Quote = () => {
  return (
<div>
<div>
</div>
<div className="hero p-20 bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image
    src = '/prowash7.jpg'
    height = {800}
    width = {800}
    alt = 'prowash7'
    className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Property Managers & Community Pressure Washing</h1>
      <p className="py-8">ProWash Pressure Washing works with many Property Managers throughout Myrtle Beach and Surrounding Areas​
We are Proud and Committed to Offering Pressure Washing Services throughout our Community
We Service: Apartment Complexes, Townhome Communities, HOA Common Areas, Retirement Communities, Pool Deck Pressure Washing, Parks & Recreational Facility Cleaning, Municipal & Government Buildings, HOA Common Areas and More!</p>
      <p>​If You Have Any Questions or Would Like a FREE Quote Click Here or Call 843-457-8440
​We Pride Ourselves on Being the Very Best.</p>
      <button className="btn btn-primary">Learn More</button>
    </div>
  </div>
</div>






<div>

<p className = "text-center font-medium text-lg">Our Simple, Free Quote Process</p>

<div className="w-full h-full rounded-md my-4 p-2 flex justify-center">
    <div className="card w-96 bg-base-100 p-4">
<figure>
<Image
        src = "/quote3.png"
        width={100}
        height={100}
        alt='icon3'
/>
</figure>
    <div className="card-body">
        <h2 className="card-title">REQUEST A QUOTE</h2>
        <p>
        We understand that youre busy; thats why we created a custom quote form to make the process seamless. Once you submit the form, it will be sent to us right away, and our team will respond within a few hours.</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Contact Us For Help</button>
        </div>
    </div>
    </div>
    <div className="card w-96 bg-base-100 p-4">
    <figure>
    <Image
        src = "/quote7.png"
        width={100}
        height={100}
        alt='icon3'
/>
    </figure>
    <div className="card-body">
        <h2 className="card-title">REQUEST A QUOTE</h2>
        <p>
        We understand that youre busy; thats why we created a custom quote form to make the process seamless. Once you submit the form, it will be sent to us right away, and our team will respond within a few hours.</p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>


    <div className="card w-96 bg-base-100 p-4 ">
    <figure>
    <Image
        src = "/quote8.png"
        width={100}
        height={100}
        alt='icon3'
/>
    </figure>
    <div className="card-body">
        <h2 className="card-title">REQUEST A QUOTE</h2>
        <p>
        We understand that youre busy; thats why we created a custom quote form to make the process seamless. Once you submit the form, it will be sent to us right away, and our team will respond within a few hours.</p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>
    </div>



{/* Closing */}
<div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-2">ProWash of the GrandStrand has been in business since 1988 and is proud to offer the highest quality service.</h2>
        <p className="text-lg ">
        We would love to hear from you. Contact us any time for a free estimate.
        </p>
        <p>
        All of our services are guaranteed to be carried out with the maximum amount of professionalism and quality.
        </p>
      </div>
      </div>

    <div className="flex flex-col p-6 space-y-12">
    <div className="card-actions">
      <button className="btn btn-primary">Contact us</button>
    </div>
  </div>
</div>
  );
};

export default Quote
