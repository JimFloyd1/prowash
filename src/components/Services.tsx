"use client"

import React, { useState } from 'react';
import Image from 'next/image';


const Services = () => {
const [activeTab, setActiveTab] = useState('residential');

const handleTabClick = (tab: string) => {
setActiveTab(tab);
};

return (
<div className="w-full bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="sm:hidden">
    <label htmlFor="tabs" className="sr-only">Select tab</label>
    <select
        id="tabs"
        className="bg-gray-200 border-2 border-black text-gray-900 text-md rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => handleTabClick(e.target.value)}
        value={activeTab}
    >
    <option value="residential">Residential</option>
        <option value="commercial">Commercial</option>
        <option value="property">Property Managers</option>
        <option value="faq">FAQ</option>
    </select>
    </div>



{/* TABS */}


    <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" role="tablist">
    <li className="w-full">
        <button
        id="residential-tab"
        type="button"
        role="tab"
        aria-controls="residential"
        aria-selected={activeTab === 'residential'}
        className={`inline-block w-full p-4 ${activeTab === 'residential' ? 'bg-gray-100 dark:bg-gray-600' : 'bg-gray-50 dark:bg-gray-700'} focus:outline-none`}
        onClick={() => handleTabClick('residential')}
        >
        Residential SoftWash
        </button>
    </li>


    <li className="w-full">
        <button
        id="commercial-tab"
        type="button"
        role="tab"
        aria-controls="commercial"
        aria-selected={activeTab === 'commercial'}
        className={`inline-block w-full p-4 ${activeTab === 'commercial' ? 'bg-gray-100 dark:bg-gray-600' : 'bg-gray-50 dark:bg-gray-700'} focus:outline-none`}
        onClick={() => handleTabClick('commercial')}
        >
        Commercial Pressure Washing
        </button>
    </li>


    <li className="w-full">
        <button
        id="property-tab"
        type="button"
        role="tab"
        aria-controls="property"
        aria-selected={activeTab === 'property'}
        className={`inline-block w-full p-4 ${activeTab === 'property' ? 'bg-gray-100 dark:bg-gray-600' : 'bg-gray-50 dark:bg-gray-700'} focus:outline-none`}
        onClick={() => handleTabClick('property')}
        >
        Property Managers
        </button>
    </li>


    <li className="w-full">
        <button
        id="faq-tab"
        type="button"
        role="tab"
        aria-controls="faq"
        aria-selected={activeTab === 'faq'}
        className={`inline-block w-full p-4 ${activeTab === 'faq' ? 'bg-gray-100 dark:bg-gray-600' : 'bg-gray-50 dark:bg-gray-700'} focus:outline-none`}
        onClick={() => handleTabClick('faq')}
        >
        FAQ
        </button>
    </li>
    </ul>



    {/* CONTENT */}
    <div id="fullWidthTabContent" className="border-t">
    <div className= {`p-4 rounded-lg md:p-8 ${activeTab === 'residential' ? '' : 'hidden'}`} id="residential" role="tabpanel" aria-labelledby="residential-tab">


        {/* Residential Content */}
        <ul role="list" className="space-y-4">
        <div className="hero min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl rounded-3xl ">
    <div className="hero-content flex-col lg:flex-row ">

    <Image
    src="/prowash6.jpg"
    width={500}
    height={500}
    alt="Hero"
    className="rounded-full shadow-2xl"
/>
    <div className = "pl-5">
    <h1 className="text-5xl font-bold mb-5 tracking-tight text-center text-base-200">Dirty Home? Short On Time?
Let Us Help You!</h1>
    <p className="py-3 text-base-200">As a homeowner, keeping the exterior of your home clean is important. Not only does it boost curb appeal, but it also protects your home from damage. Dirt, debris, mold, and mildew can cause structural problems if not addressed. The hot and humid weather in Myrtle Beach can impact your home{"'"}s appearance.</p>
<p className="py-6 text-base-200"> In addition to dirt and grime, you also have to deal with algae, mold, and mildew. A clean home looks better, whether you{"’"}re selling or staying. Our Gentle Wash House Washing is perfect for all types of home exteriors in Myrtle Beach and the surrounding areas.</p>

        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-100 dark:text-green-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight text-base-200">House Exterior, All Sides Pressure Washed with Gentle Pressure, Safe & Eco-Friendly Soap & Cleaning Agents, Not Harmful to Plants, Flowers, or Children</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-100 dark:text-green-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight text-base-200">All House Trim, Window{"'"}s, Soffit{"'"}s, Door{"'"}s, Gutter{"'"}s, Garage Door{"'"}s, Will Be Pressure Washed</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-100 dark:text-green-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight text-base-200">All Porche{"'"}s, Driveway{"'"}s, Walkway{"'"}s, and Entranceway Areas Will be Pressure Washed​</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-100 dark:text-green-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight text-base-200">Patio & Deck Pressure Washing, Brick & Concrete Cleaning, Pavers & Tile Cleaning</span>
        </li>
        <button className="btn btn-primary">Learn More</button>
    </div>
    </div>
</div>
</ul>
</div>


    <div className={`p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg md:p-8 dark:bg-gray-800 ${activeTab === 'commercial' ? '' : 'hidden'}`} id="commercial" role="tabpanel" aria-labelledby="commercial-tab">
        {/* Commercial Pressure Washing Content */}
        <ul role="list" className="space-y-4">
        <div className="hero min-h-screen bg-base-200 shadow-xl rounded-xl">
    <div className="hero-content flex-col lg:flex-row ">

    <Image
    src="/prowash3.jpg"
    width={500}
    height={500}
    alt="Hero"
    className="rounded-full shadow-2xl"
/>
    <div className = "pl-5">
    <h1 className="text-5xl font-bold mb-5 tracking-tight text-center">Commercial Pressure Washing</h1>
    <p className="py-6">Your storefront and entrance-ways can tell customers a lot about your business. This space should be inviting to new customers and make existing customers feel proud to be a loyal returning customer. ProWash Pressure Washing offers professional storefront and entrance-way pressure washing that will help your business deliver the best first impression.
    </p>
<ol className = "mt-5"> We offer pressure washing solutions for a wide range of customers including:
<li className = "list-disc mt-6">Restaurants</li>
<li className = "list-disc">Retail Spaces</li>
<li className = "list-disc">Banks</li>
<li className = "list-disc">Gas Stations</li>
<li className = "list-disc">Showrooms</li>
<li className = "list-disc">Churches</li>
<li className = "list-disc">Offices</li>
<li className = "list-disc">Car dealerships</li>
<li className = "list-disc">Community Centers</li>
<li className = "list-disc">Financial institutions</li>
<li className = "list-disc">And more!</li>
</ol>


<li className="flex space-x-2 rtl:space-x-reverse items-center pb-6 pt-9">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight">Enhance Curb Appeal: A clean and well-maintained exterior attracts more customers and boosts the overall appeal of your business.</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight">Prevent Damage: Regular pressure washing removes harmful substances like mold, mildew, and grime, extending the lifespan of your building{"'"}s surfaces.</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight">Promote Health and Safety: Eliminate slippery surfaces, pollutants, and allergens, creating a safer and healthier environment for employees and customers.​</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight pb-6">Boost Property Value: A spotless exterior not only impresses visitors but also increases the value and marketability of your commercial property.</span>
        </li>
        <button className="btn btn-primary">Learn More</button>
    </div>
    </div>
</div>
</ul>
</div>



    <div className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${activeTab === 'property' ? '' : 'hidden'}`} id="property" role="tabpanel" aria-labelledby="property-tab">
        {/* Property Managers Content */}
        <ul role="list" className="space-y-4">
        <div className=" min-h-screen shadow-xl rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="hero-content flex-col lg:flex-row ">

    <Image
    src="/prowash24.png"
    width={500}
    height={500}
    alt="Hero"
    className="rounded-3xl shadow-2xl"
/>

    <div className = "pl-5">
    <h1 className="text-5xl font-bold mb-5 tracking-tight text-center text-base-200">Pressure Washing for Property-Managers</h1>
    <p className="py-6 text-base-200">As a property manager or business owner you know the difficulties of keeping the exterior of your commercial building clean and in good condition. Throughout seasons properties can become dirty and worn. ProWash of the GrandStrand can help maintain your building and offers several benefits to your business.</p>
<p className= "text-base-200"> Keeping a clean and tidy building is often correlated to the success of a business as it can attract new customers and increase property values. However, property managers and owners can make the mistake of considering pressure washing services a luxury whereas in reality, every business owner and manager needs the help of a pressure washing company. This is regardless of the type of property you manage. Here are a few reasons why:</p>
<li className="flex space-x-2 rtl:space-x-reverse items-center pb-6 pt-8">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-100 dark:text-green-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight text-base-200">Increased Property Value - A clean and appealing building is a valuable building. A professional and experienced pressure washing company can easily leave any building looking fresh and like new. This becomes very important for attracting new tenants to rent or buy property. Research by the National Association of Realtors says that pressure washing property will result in it selling faster and for $10,000 to $15,000 more than the original selling price.</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-100 dark:text-green-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight text-base-200">Cost Reduction - By keeping your building clean can prolong the lifespan of the material and avoid having to replace parts. Pressure washing is a form of preventive maintenance and it helps keep the exterior of your building clean and in good condition. By using gentle pressure with cleaning agents that are safe for plants and flowers will help you lower the maintenance cost of your buildings. ProWash of the GrandStrand cleans exterior sidings, entryways, walkways, parking lots, and dumpster pads to maintain a fresh “like new” appearance and improving curb appeal.</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-100 dark:text-green-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight text-base-200">Make A Good Impression - ​For managers or owners trying to rent out condos or apartment units, good impressions are critical to the success of your business. Qualified renters observe every part of a property when deciding where to live, this includes landscaping, and exterior building maintenance. An experienced pressure washing service can help property managers and owners ensure that every detail appears inviting and attractive.​</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-100 dark:text-green-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight pb-6 text-base-200">Attract and Retain Tenants - Pressure washing is a cost-effective way to attract and retain tenants. Tenants want to feel proud and comfortable where they live and by maintaining the buildings cleanliness standards is one way to do this. ProWash of the GrandStrand is a professional pressure washing company that has the experience and expertise needed to enhance any property.</span>
        </li>
        <button className="btn btn-primary">Contact Us For Help</button>
    </div>
    </div>
</div>
</ul>
</div>


    <div className={`p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg md:p-8 dark:bg-gray-800 ${activeTab === 'faq' ? '' : 'hidden'}`} id="property" role="tabpanel" aria-labelledby="faq-tab">
        {/* FAQ Content */}
        <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Frequently asked questions</h2>
        <div className="collapse collapse-plus bg-base-200 ring-1 ring-current">
    <input type="radio" name="my-accordion-3" defaultChecked />
    <div className="collapse-title text-xl font-medium ">
    How Does Prowash of the GrandStrand Compare To Other Companies?
    </div>
    <div className="collapse-content">
        <li>
        High Quality Services - With over 36 years in business we have the experience, knowledge, and best methods to safely clean your property.
        </li>
        <li>
        Fair Prices - Our goal is not to drain our clients pocket. We offer very fair prices that are priced competitively and deliver the best quality.
        </li>
        <li>
        Always On Time - We show up on time and are always professional.
        </li>
<p className = "mt-5">ProWash Pressure Washing has been providing pressure washing services since 1988. Our long-term experience helps us understand the unique needs of our customers. </p>
    </div>
    </div>

    <div className="collapse collapse-plus bg-base-200 ring-1 ring-current">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-xl font-medium">
    Are Your Cleaning Methods And Products Safe?
    </div>
    <div className="collapse-content">
    All our pressure washing and cleaning methods are safe for you and your home. We avoid harsh chemicals that could harm your property, pets, family, or the environment. Instead, we use gentle yet effective products to keep your property in top shape. Our cleaning techniques are tough on stains, grime, dirt, mold, algae, and similar issues, ensuring your exterior surfaces look their best. We are dedicated to providing a thorough and responsible clean every time.
    </div>
    </div>

    <div className="collapse collapse-plus bg-base-200 ring-1 ring-current">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-xl font-medium">
    Why Shouldn{"'"}t I Pressure Wash My Own House?
    </div>
    <div className="collapse-content">
        <p>
        You can give it a go, but we wouldn{"'"}t recommend it. While it might seem straightforward, many of our clients have found that it takes more knowledge and skill to get great results than they initially thought. Plus, it can be quite time-consuming. Our ProWash Of The GrandStrand team will come to your home with specialized equipment and extensive expertise in safe procedures to ensure the best possible outcome.
        </p>
    </div>
    </div>

    <div className="collapse collapse-plus bg-base-200 ring-1 ring-current">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-xl font-medium">
    How Often Should I Pressure Wash My Home?
    </div>
    <div className="collapse-content">
        <p>The frequency of pressure washing depends on the surface material. Generally speaking, most surfaces need cleaning at least once a year. However, the condition of the surface and any organic growth buildup can affect how often you{"'"}ll need to power wash. By keeping up with regular cleaning, you can easily manage and prevent organic growth all year round!</p>
    </div>
    </div>

    <div className="collapse collapse-plus bg-base-200 ring-1 ring-current">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-xl font-medium">
        What is your Area of Service?
    </div>
    <div className="collapse-content">
        <p className= "mb-3">We Service:</p>

        <li> Myrtle Beach</li>
        <li> North Myrtle Beach</li>
        <li> Carolina Forest</li>
        <li> Murrell{"'"}s Inlet</li>
        <li> Socastee</li>
        <li> Garden City</li>
        <li> Litchfield</li>
        <li> Conway</li>
        <li> Surfside</li>

    </div>
    </div>

    </div>
    </div>
</div>
);
};


export default Services;
