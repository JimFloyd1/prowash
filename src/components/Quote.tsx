import React from 'react'
import Image from 'next/image';

const Quote = () => {
  return (

    <div>
  <form>
<div>
<div className=" p-20 bg-base-200">
  <div className="hero-content flex-col ">
    <div>
      <h1 className="text-5xl font-bold">Property Managers & Community Pressure Washing</h1>
      <p className="py-8">ProWash Pressure Washing works with many Property Managers throughout Myrtle Beach and Surrounding Areas​
We are Proud and Committed to Offering Pressure Washing Services throughout our Community
We Service: Apartment Complexes, Townhome Communities, HOA Common Areas, Retirement Communities, Pool Deck Pressure Washing, Parks & Recreational Facility Cleaning, Municipal & Government Buildings, HOA Common Areas and More!</p>
      <p>​If You Have Any Questions or Would Like a FREE Quote Click Here or Call 843-457-8440
​We Pride Ourselves on Being the Very Best.</p>
      <button className="btn btn-primary">Learn More</button>
    </div>
    <Image
    src = '/prowash7.jpg'
    height = {800}
    width = {800}
    alt = 'prowash7'
    className="max-w-sm rounded-lg shadow-2xl"
    />
  </div>
</div>






<div>

<figure className = "bg-red-500">
    <Image
        src = "/quote9.png"
        width={400}
        height={400}
        alt='icon3'
        className="display: block m-auto"
/>
    </figure>

<div className="w-full h-full rounded-md my-4 p-2 flex flex-wrap justify-center">
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
        We understand that youre busy; thats why we created a custom quote form to make the process seamless. Once you submit the form, it will be sent to us right away, and our team will respond within a few hours.</p>
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
        Setting a routine cleaning schedule will ensure that your property is always clean throughout the whole year. The process is easy; just request a quick quote and let us know when you want our team to come to clean your property. We strive to make the booking process as convenient for you as possible!
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
        All that’s left to do is sit back and relax as you watch our cleaning experts transform your property. When you see the new shine, you’ll wonder how you went so long without our pressure washing service!        </p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>
    </div>
  </div>
</div>



    <div className=" justify-center bg-base-200">
    <div className="p-20 ">
    <div className="space-y-12 ">
    <div className="border-b pb-2 ">
    <h2 className="text-2xl font-semibold leading-7 ">Have Prowash Send Me a Quote</h2>
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



            <div className="mt-10 space-y-10">
                <fieldset>
                <legend className="text-lg font-semibold leading-4 ">What Services are you interested in?</legend>
                <div className="mt-6 space-y-1">

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
                        <label htmlFor="house" className="font-medium ">
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
                        <label htmlFor="patio" className="font-medium ">
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
                        <label htmlFor="driveway" className="font-medium ">
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
                        <label htmlFor="stain" className="font-medium ">
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
                        <label htmlFor="commercial" className="font-medium ">
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





    </form>
    </div>



  );
};

export default Quote
