"use client"

import React, { useState } from 'react';
import prowash3 from "@/public/prowash3.jpg"
import prowash4 from "@/public/prowash4.jpg"
import prowash7 from "@/public/prowash7.jpg"
import Image from 'next/image';
import icon from "@/public/Icon.jpg"

const Services = () => {
const [activeTab, setActiveTab] = useState('stats');

const handleTabClick = (tab: string) => {
setActiveTab(tab);
};

return (
<div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="sm:hidden">
    <label htmlFor="tabs" className="sr-only">Select tab</label>
    <select
        id="tabs"
        className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => handleTabClick(e.target.value)}
        value={activeTab}
    >
    <option value="residential">Residential</option>
        <option value="commercial">Commercial</option>
        <option value="property">Property Managers</option>
        <option value="faq">FAQ</option>
    </select>
    </div>


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
    <div id="fullWidthTabContent" className="border-t">
    <div className= {`p-4 rounded-lg md:p-8 ${activeTab === 'residential' ? '' : 'hidden'}`} id="residential" role="tabpanel" aria-labelledby="residential-tab">
        {/* Residential Content */}
        <ul role="list" className="space-y-4">
        <div className="hero min-h-screen bg-base-200 shadow-xl rounded-xl">
    <div className="hero-content flex-col lg:flex-row ">

    <Image
    src="/prowash4.jpg"
    width={500}
    height={500}
    alt="Hero"
    className="rounded-lg shadow-2xl"
/>
    <div className = "pl-5">
    <h1 className="text-5xl font-bold mb-5 tracking-tight text-center">Dirty Home? Don&#39t Have Time?
We Would Love To Help You!</h1>
    <p className="py-6">As a homeowner&#39 it&#39s important to keep the exterior of your home looking good and clean. This is not only important for curb appeal but it can protect your home from damage. A buildup of dirt&#39 debris&#39 mold & mildew can lead to a number of issues&#39 including structural problems&#39 if not dealt with right away.
​The hot and humid weather of Myrtle Beach&#39 SC can make a big impact on the appearance of your home. In addition to the usual accumulation of dirt&#39 dust and grime that builds up on home siding&#39 you also have to deal with the unsightly growth of algae&#39 mold and mildew.
​It also makes your home look nicer&#39 which is important whether you are selling the house or plan to continue living there for some time
Our Gentle Wash House Washing is ideal for all types of home exteriors in the Myrtle Beach & Surrounding Areas.</p>

<li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight">House Exterior Walls Pressure Washed with Gentle Pressure&#39 Safe & Eco-Friendly Soap & Cleaning Agents&#39 Not Harmful to Plants&#39 Flowers or Children</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight">All House Trim&#39 Windows&#39 Soffits&#39 Doors&#39 Gutters&#39&#39 Garage Doors will be Pressure Washed</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight">All Porches&#39 Driveways Walkways&#39 and Entranceway areas will be pressure washed​</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight pb-6">Patio & Deck Pressure Washing&#39 Brick & Concrete Cleaning&#39 Pavers & Tile Cleaning</span>
        </li>
        <button className="btn btn-primary">Learn More</button>
    </div>
    </div>
</div>
</ul>
</div>


    <div className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${activeTab === 'commercial' ? '' : 'hidden'}`} id="commercial" role="tabpanel" aria-labelledby="commercial-tab">
        {/* Commercial Pressure Washing Content */}
        <ul role="list" className="space-y-4">
        <div className="hero min-h-screen bg-base-200 shadow-xl rounded-xl">
    <div className="hero-content flex-col lg:flex-row ">

    <Image
    src="/prowash3.jpg"
    width={500}
    height={500}
    alt="Hero"
    className="rounded-lg shadow-2xl"
/>
    <div className = "pl-5">
    <h1 className="text-5xl font-bold mb-5 tracking-tight text-center">Commercial Pressure Washing</h1>
    <ol className="py-6">Your storefront and entrance-ways can tell customers a lot about your business. This space should be inviting to new customers and make existing customers feel proud to be a loyal returning customer. ProWash Pressure Washing offers professional storefront and entrance-way pressure washing that will help your business deliver the best first impression.

We offer pressure washing solutions for a wide range of customers including:
<li className = "list-disc pt-5">Restaurants</li>
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
<p className ="list-disc"></p>
<li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight">Enhance Curb Appeal: A clean and well-maintained exterior attracts more customers and boosts the overall appeal of your business.</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight">Prevent Damage: Regular pressure washing removes harmful substances like mold&#39 mildew&#39 and grime&#39 extending the lifespan of your building&#39s surfaces.</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight">Promote Health and Safety: Eliminate slippery surfaces&#39 pollutants&#39 and allergens&#39 creating a safer and healthier environment for employees and customers.​</span>
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
        <div className="hero min-h-screen bg-base-200 shadow-xl rounded-xl">
    <div className="hero-content flex-col lg:flex-row ">

    <Image
    src="/prowash7.jpg"
    width={500}
    height={500}
    alt="Hero"
    className="rounded-lg shadow-2xl"
/>
    <div className = "pl-5">
    <h1 className="text-5xl font-bold mb-5 tracking-tight text-center">Pressure Washing for Property-Managers</h1>
    <p className="py-6">As a property manager or business owner you know the difficulties of keeping the exterior of your commercial building clean and in good condition. Throughout seasons properties can become dirty and worn. ProWash Pressure Washing can help maintain your building and offers several benefits to your business.</p>
<p> Keeping a clean and tidy building is often correlated to the success of a business as it can attract new customers and increase property values. However&#39 property managers and owners make the mistake of considering pressure washing services a luxury&#39 whereas in reality&#39 every business owner and manager needs the help of a pressure washing company. This is regardless of the type of property you manage. Here are a few reasons why:</p>
<li className="flex space-x-2 rtl:space-x-reverse items-center pb-6 pt-8">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight">Increased Property Value - A clean and appealing building is a valuable building. A professional and experienced pressure washing company can easily leave any building looking fresh and like new. This becomes very important for attracting new tenants to rent or buy property. Research by the National Association of Realtors says that pressure washing property will result in it selling faster and for $10&#39000 to $15&#39000 more than the original selling price.</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight">Cost Reduction - By keeping your building clean can prolong the lifespan of the material and avoid having to replace parts. Pressure washing is a form of preventive maintenance and it helps keep the exterior of your building clean and in good condition. By using gentle pressure with cleaning agents that are safe for plants and flowers will help you lower the maintenance cost of your buildings. ProWash Pressure Washing cleans exterior sidings&#39 entryways&#39 walkways&#39 parking lots&#39 and dumpster pads to maintain a fresh “like new” appearance and improving curb appeal.</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight">Make A Good Impression - ​For managers or owners trying to rent out condos or apartment units&#39 good impressions are critical to the success of your business. Qualified renters observe every part of a property when deciding where to live&#39 this includes landscaping&#39 and exterior building maintenance. An experienced pressure washing service can help property managers and owners ensure that every detail appears inviting and attractive.​</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center pb-6">
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="leading-tight pb-6">Attract and Retain Tenants - Pressure washing is a cost-effective way to attract and retain tenants. Tenants want to feel proud and comfortable where they live and by maintaining the buildings cleanliness standards is one way to do this. ProWash Pressure Washing is a professional pressure washing company that has the experience and expertise needed to enhance any property.</span>
        </li>
        <button className="btn btn-primary">Contact Us For Help</button>
    </div>
    </div>
</div>
</ul>
</div>


    <div className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${activeTab === 'faq' ? '' : 'hidden'}`} id="property" role="tabpanel" aria-labelledby="faq-tab">
        {/* FAQ Content */}
        <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Frequently asked questions</h2>
        <div className="collapse collapse-plus bg-base-200 ring-1 ring-current">
    <input type="radio" name="my-accordion-3" defaultChecked />
    <div className="collapse-title text-xl font-medium ">
    How Does Prowash of the GrandStrand Compare To Other Companies?
    </div>
    <div className="collapse-content">
        <p>We have state of the art equipment and over 36 years of experience. We guarantee your satisfaction&#39 100%. Unlike some of the competition&#39 every member of our team is fully insured and extensively trained.</p>
    </div>
    </div>
    <div className="collapse collapse-plus bg-base-200 ring-1 ring-current">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-xl font-medium">
        What is your Area of Service?
    </div>
    <div className="collapse-content">
        <p>We service Myrtle Beach&#39 North Myrtle Beach&#39 Carolina Forest&#39 Murrells Inlet&#39 Socastee&#39 Garden City&#39 Litchfield&#39 Conway&#39 and Surfside.</p>
    </div>
    </div>
    <div className="collapse collapse-plus bg-base-200 ring-1 ring-current">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-xl font-medium">
    Are Your Cleaning Methods And Products Environmentally Safe?
    </div>
    <div className="collapse-content">
    Yes&#39 all of our pressure washing and cleaning methods are environmentally safe. We strictly avoid using harsh chemicals that could damage your property&#39 harm your pets or family&#39 or negatively impact the local environment. We ensure that the chemicals and techniques we employ are 100% safe and effective for maintaining your property. Our cleaning methods are only aggressive towards stains&#39 grime&#39 dirt&#39 mold&#39 algae&#39 and similar contaminants. We are committed to thoroughly and responsibly cleaning your exterior surfaces.    </div>
    </div>
    <div className="collapse collapse-plus bg-base-200 ring-1 ring-current">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-xl font-medium">
    How Frequently Is Pressure Washing Needed?
    </div>
    <div className="collapse-content">
        <p>The frequency of pressure washing and soft washing your projects depends on the surface material. Most surfaces require cleaning at least once a year&#39 but the condition of the surface and organic growth buildup also play into how often your home will need to be power washed. If you’re consistent with routine cleaning&#39 organic growth won’t stand a chance and can be maintained all year long!</p>
    </div>
    </div>
    <div className="collapse collapse-plus bg-base-200 ring-1 ring-current">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-xl font-medium">
    Why Shouldn&#39t I Pressure Wash My Home On My Own?
    </div>
    <div className="collapse-content">
        <p>You can try&#39 but we wouldn’t recommend it. Though it seems simple&#39 many clients previously underestimated the knowledge and skill it takes to achieve a quality results. It also can take a lot of time. Our crew at ProWash Of The GrandStrand will come to your home with specialized equipment and extensive knowledge of safe procedures to ensure the best results possible.</p>
    </div>
    </div>


    </div>
    </div>
</div>
);
};


export default Services;
