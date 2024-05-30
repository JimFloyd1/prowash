import React from 'react'
import Image from 'next/image';

const Quote = () => {
  return (
<div>
    <div>
  <form>
<div>

<div>


<div className="flex flex-col w-full ">


  <div className="divider divider-primary"></div>
  <div className="divider divider-secondary"></div>


<p className="text-center text-4xl font-bold p-5 font-serif">Our Simple, Free Quote Process</p>
<p className="text-center text-2xl font-bold p-5 font-serif">Follow These Steps to Get Started</p>
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
        <h2 className="card-title font-serif">1. REQUEST A QUOTE</h2>
        <p className='font-serif'>
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
        <h2 className="card-title font-serif">2. SET A SCHEDULE</h2>
        <p className='font-serif'>
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
        <h2 className="card-title font-serif"> 3. SIT BACK & RELAX</h2>
        <p className='font-serif'>
        Now, all you need to do is sit back and relax while our cleaning experts work their magic. Once you see the amazing results, you{"'"}ll wonder how you ever managed without our pressure washing service!</p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>
    </div>
    </div>
</div>


{/* FORM */}
<div className="overflow-hidden rounded-3xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="lg:text-center">
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl ">Hire a Professional Pressure Washer</h1>
              <h2 className="text-2xl font-semibold leading-7 ">Contact us Today!</h2>
            </div>
            <div className="mt-10 flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-2/3 text-lg">

<div className = "flex items-center space-x-4">
<div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-white size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
</div>
<p className="leading-8 ">Ready to take the next step? Contact us today for a fast quote. Our team of experts is ready to help you keep your home looking its best.</p>
</div>
</div>

              <div className="lg:w-1/3 w-full p-6 bg-gradient-to-r from-blue-300 to-blue-400 rounded-xl shadow-lg mb-3">
                <div className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semi text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="mt-1  border-black block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 ">
                      Phone
                    </label>
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      autoComplete="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="address"
                      name="address"
                      id="address"
                      autoComplete="address"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message (optional)
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Submit For A Fast Quote
                    </button>
                  </div>
                </div>
              </div>


        </div>
        </div>
        </div>
        </div>
    </form>
    </div>
    </div>
    );
};

export default Quote
