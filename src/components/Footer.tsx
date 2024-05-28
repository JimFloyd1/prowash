import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
    <div data-theme="cupcake">
    <footer className="footer p-10 text-base-content">
    <nav>
        <h6 className="footer-title">Quick Links</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">FAQ</a>
        <a className="link link-hover">Gallery</a>
        <a className="link link-hover">Reviews</a>
    </nav>
    <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">House Washing</a>
        <a className="link link-hover">RV Washing</a>
        <a className="link link-hover">Deck & Patio Washing</a>
        <a className="link link-hover">Commercial Pressure Washing</a>
    </nav>
    <nav>
        <h6 className="footer-title">Get in Touch</h6>
        <a className="link link-hover">(843) 457-8440</a>
        <a className="link link-hover">ProWashMyrtleBeach@gmail.com</a>
        <a className="link link-hover">Monday to Sunday: 9:00 am - 6:00 pm</a>

    </nav>
    <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>

    </nav>
    </footer>
    <footer className="footer px-10 py-4 border-t text-base-content border-base-200 ">
    <aside className="items-center grid-flow-col">
    <figure>
      <a className= "btn btn-ghost" href='/'>
<Image
        src = "/logo1.png"
        width={100}
        height={100}
        alt='icon3'
/>
</a>
</figure>
 <p>ProWash of the GrandStrand <br/>Providing reliable Pressure Washing since 1988</p>
    </aside>
    <nav className="md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-4">
        <p>​ProWash of the GrandStrand,
P.O. Box 2372,
Myrtle Beach, SC, 29578</p>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>
    </nav>
    </footer>
    </div>
    )
}

export default Footer
