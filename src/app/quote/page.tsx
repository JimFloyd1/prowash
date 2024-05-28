import React from 'react'


const Form_page = () => {
    return (

    <form>
    <div className=" p-20 bg-base-200">
    <div className="hero-content flex-col ">
    <div className="space-y-12">
    <div className="border-b pb-2">
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
    <input required type="text" className="grow" placeholder="Street Address, City, Zip" />
    </label>

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
                <div className="gap-x-6">
            <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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

    )
}

export default Form_page
