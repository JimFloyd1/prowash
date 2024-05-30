import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Pressure Washing your Home</p>
                <p className="mt-6 text-lg leading-8">Gentle Washing: Why It Matters - The exterior of your house is an aesthetic and costly investment and we do our job to protect it. We use gentle pressure when cleaning your home sidings that will remove stains and build up in a safe manner and eliminate any mold, mildew, dirt, and debris. High water pressure should never be used on your house sidings as it can damage the exterior.</p>
                <p className="mt-6 text-lg leading-8 mb-4">It{"'"}s All About the Technology - We use the best gentle washing technology, that helps bring a new level of curb appeal to all surfaces, including: Vinyl sidings, Brick, Wood, Stucco, Composite, And more!</p>
                <ul className="text-lg">
                  Our House Washing Service is simple, impactful, and convenient. Here{"’"}s how it works:
                  <li className="list-decimal text-lg p-2"> Get a free online estimate and schedule an appointment.</li>
                  <li className="list-decimal text-lg p-2"> Share any concerns or comments with us.</li>
                  <li className="list-decimal text-lg p-2"> We arrive on time, wash your exterior, and inspect the results.</li>
                  <li className="list-decimal text-lg p-2"> Enjoy your {'"'}like new{'"'} home exterior!</li>
                </ul>
                <a className="btn btn-primary mt-3" href="/quote">Get a Fast Quote</a>
              </div>
            </div>
            <Image
              src="/prowash5.jpg"
              height={500}
              width={500}
              className="rounded-3xl"
              alt="loading.."
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-t-3xl py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Residential SoftWash</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Importance of a Clean and Attractive Home</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">


                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  </div>
                  The Benefits of Pressure Washing your home
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">No matter what stage of home-ownership or property management you{"’"}re at, ProWash Of The GrandStrand Pressure Washing is your key to a better exterior. We work with customers who are: Putting their home on the market and want to accelerate their listing Investing in the long-term quality of their home.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">




                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                  </div>
                  Ready for a long-overdue clean for their property
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600"> Whether it{"'"}s a one-time deep clean or an annual house washing, we have a solution for you. We care about the success of your property. Using the best equipment, safe and effective cleaning techniques, and committed customer service, ProWash Of The GrandStrand Pressure Washing is your solution for house washing done right.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                  </svg>

                  </div>
                  ​​​An Improved Level of Curb Appeal
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Throughout the Grand Strand Area, our climate makes it difficult to maintain the aesthetics of your home as it is always exposed to the elements. Your home is always fighting the elements to maintain curb appeal. Our climate makes it tough for your siding to look beautiful - and it needs a helping hand to uphold its appearance.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">


                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>

                  </div>
                  The Professional House Washing Advantage
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">We have years of experience serving homeowners in the Grand Strand Area, and have created a formula for success that brings you top quality and lasting curb appeal. The professional power washing service is about long-term quality. We have solutions for one-time cleaning projects and annual service, so your house always has that ‘just-washed’ effect.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="lg:text-center">
              <h2 className="text-2xl font-semibold leading-7 text-indigo-400">Contact us Today!</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Hire a Professional Pressure Washer</p>
            </div>
            <div className="mt-10 flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-2/3 text-lg">
                <p className="leading-8">Ready to take the next step? Contact us today for a fast quote. Our team of experts is ready to help you keep your home looking its best.</p>
              </div>
              <form className="lg:w-1/3 w-full p-6 bg-gray-50 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
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
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
