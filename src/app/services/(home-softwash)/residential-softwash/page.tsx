"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'


type FormState = {
  name: string;
  email: string;
  address: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    address: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        alert('Form submitted successfully');
        setFormState({
          name: '',
          email: '',
          address: '',
          phone: '',
          message: '',
        });
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
<div>

<div className="overflow-hidden py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center space-x-4">
  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>

</div>
<h1 className="mt-2 text-xl font-bold tracking-tight ">Residential Pressure Washing</h1>
</div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Pressure Washing your Home</h2>
                <p className="mt-6 text-lg leading-8">As a homeowner, it{"'"}s important to keep the exterior of your home looking good and clean. This is not only important for curb appeal but it can protect your home from damage. A buildup of dirt, debris, mold & mildew can lead to a number of issues, including structural problems, if not dealt with right away.</p>
                <p className="mt-6 text-lg leading-8 mb-4">​The hot and humid weather of Myrtle Beach, SC can make a big impact on the appearance of your home. In addition to the usual accumulation of dirt, dust and grime that builds up on home siding, you also have to deal with the unsightly growth of algae, mold and mildew.</p>
                <p className="mt-6 text-lg leading-8">​It also makes your home look nicer, which is important whether you are selling the house or plan to continue living there for some time.</p>
              </div>
            </div>
            <Image
              src="/prowash5.jpg"
              height={500}
              width={500}
              className="rounded-3xl ring-4"
              alt="loading.."
            />
          </div>
        </div>
      </div>

{/* Section Two */}
      <div className="bg-white rounded-t-3xl py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Residential SoftWash</h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Gentle Wash House Washing is ideal for all types of home exteriors</h3>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  </div>

                  <h3>​The Gentle Wash Method </h3>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Our Gentle Wash cleaning method is the only correct and safe way to pressure wash a house. We use gentle water pressure and cleaning agents that are safe for plants and flowers to eliminate the buildup of dirt, grime, mold & mildew growth resulting in a sparkling clean and like new home.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                  </div>

                  <h3>We Do Not Use High Power Pressure Washing on your House Sidings</h3>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">High water pressure on your sidings or gutters can damage your property, potentially costing thousands of dollars to repair. This is why it is important to hire a Pressure Washing expert with the right skills, experience and cleaning methods to clean you home.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                  </svg>
                  </div>

                  <h3>Improve the Appearance of your Home</h3>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Having a clean fence can impact the curb appeal of your house a lot. A fenced in yard can improve the appearance of your home, however over time it can lose its beauty due to a build up of dirt, bugs, spider webs, mold & mildew. Pressure washing will eliminate all these stains and unwanted debris by bringing back its color and giving your fence a like new shine. </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>
                  </div>

                  <h3>Walkways & Driveways give the First Impression</h3>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Dirt, grime and stains can leave an ugly coating on your walkway and driveway, which will make your house look unkempt and dingy. </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600">All hardscape surfaces such as concrete, brick, pavers, tile and more will be cleaned and restored to give it a bright, shiny, and like-new appearance.  </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>


{/* FORM */}
<form onSubmit={handleSubmit}>
<div className="overflow-hidden ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="lg:text-center">
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl ">Hire a Professional Pressure Washer</h2>
              <h3 className="text-xl font-semibold leading-7 ">Contact us Today!</h3>
            </div>
            <div className="mt-10 flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-2/3 text-lg">
                <div className = "flex items-center space-x-4">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" text-white size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                </div>
                <p className="leading-8 ">Ready to take the next step? Contact us today for a fast quote. Our team of experts is ready to help you keep your home looking its best.</p>
                </div>
                </div>
              <div className="lg:w-1/3 w-full p-6 bg-gradient-to-r from-blue-300 to-blue-400 rounded-xl shadow-lg mb-9 ring-2 ring-black">
                <div className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      name="name"
                      id="name"
                      autoComplete="name"
                      placeholder='Your Name Here'
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="text"
                      value={formState.phone}
                      onChange={handleChange}
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      placeholder='(555) 555-5555'
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
                      value={formState.email}
                      onChange={handleChange}
                      name="email"
                      id="email"
                      autoComplete="email"
                      placeholder='Email@site.com'
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
                      value={formState.address}
                      onChange={handleChange}
                      name="address"
                      id="address"
                      autoComplete="address"
                      placeholder='Street Address, City, Zip'
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message (optional)
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={handleChange}
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
  )

};

export default ContactForm;
