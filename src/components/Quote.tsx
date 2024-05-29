import React from 'react'
import Image from 'next/image';

const Quote = () => {
  return (

    <div>
  <form>
<div>

<div>


<div className="flex flex-col w-full">


  <div className="divider divider-primary"></div>
  <div className="divider divider-secondary"></div>
  <div className="divider divider-accent"></div>

<p className="text-center text-4xl font-bold p-5">Our Simple, Free Quote Process</p>
<p className="text-center text-2xl font-bold p-5">Follow These Steps to Get Started</p>
</div>




<div className="w-full h-full rounded-md flex flex-wrap justify-center">
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
        <h2 className="card-title">1. REQUEST A QUOTE</h2>
        <p>
        We know you{"'"}re busy, so we{"'"}ve made things simple with our custom quote form. Just fill it out and send it our way, and we{"'"}ll get back to you within a few hours!</p>
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
        <h2 className="card-title">2. SET A SCHEDULE</h2>
        <p>
        Keep your property sparkling clean all year round with our easy routine cleaning schedule. Just ask for a quick quote, let us know when you{"'"}d like us to come by, and we{"'"}ll handle the rest. We want to make booking with us as easy as possible for you!
        </p>
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
        <h2 className="card-title"> 3. SIT BACK & RELAX</h2>
        <p>
        Now, all you need to do is sit back and relax while our cleaning experts work their magic. Once you see the amazing results, you{"'"}ll wonder how you ever managed without our pressure washing service!</p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>
    </div>
    </div>
</div>


{/* Form */}


<div className="hero min-h-screen p-2 bg-base-200 rounded-full bg-gradient-to-r from-blue-500">
    <div className="hero-content flex-col ">
    <div className="space-y-12">
    <div className="border-b pb-2">
    <h2 className="text-3xl font-semibold leading-7 pt-20">Have Prowash Send Me a Quote</h2>
    </div>

    <label className="input input-bordered flex items-center gap-2">
    Name
    <input required type="text" className="grow" placeholder="First & Last" />
    </label>

    <label className="input input-bordered flex items-center gap-2">
    Phone
    <input required type="text" className="grow" placeholder="(555) 555-5555" />
    </label>

    <label className="input input-bordered flex items-center gap-2">
    Email
    <input required type="text" className="grow" placeholder="example@site.com" />
    </label>

    <label className="input input-bordered flex items-center gap-2">
    Address
    <input required type="text" className="grow" placeholder="Address, City, Zip" />
    </label>

<div className="flex">
    <textarea placeholder="Message (Optional)" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
</div>


<div className = "bg-white  rounded-full p-2">
            <div className="text-center m-4 p-5 rounded-full">
                <fieldset>
                <legend className="text-lg font-semibold leading-4 text-base-200">What Services are you interested in?</legend>
                <div className="mt-4 space-y-1">

                    <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                        id="house"
                        name="house"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="house" className="font-medium text-base-200">
                        House/Building Pressure Washing
                        </label>
                    </div>
                    </div>

                    <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                        id="patio"
                        name="patio"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="patio" className="font-medium text-base-200">
                        Patio & Deck Cleaning
                        </label>
                    </div>
                    </div>

                    <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                        id="driveway"
                        name="driveway"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="driveway" className="font-medium text-base-200">
                        Driveway/Walkway Cleaning
                        </label>
                    </div>
                    </div>

                    <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                        id="stain"
                        name="stain"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="stain" className="font-medium text-base-200">
                        Stain Treatment
                        </label>
                    </div>
                    </div>
                    <div className="relative flex gap-x-3">

                    <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                        id="commercial"
                        name="commercial"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="commercial" className="font-medium text-base-200">
                        Commercial Cleaning Services
                        </label>
                    </div>
                    </div>

                </div>

                <div className="gap-x-6 p-4">
            <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Submit Info to Prowash
            </button>
                </div>
                </div>
                </fieldset>
            </div>
            </div>
        </div>
        </div>
        </div>
    </form>
    </div>
    );
};

export default Quote
