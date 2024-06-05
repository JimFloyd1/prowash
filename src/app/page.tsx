"use client";

import React from 'react';
import Hero from "@/src/components/Hero";
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Benefits from '../components/Benefits';
import Get_in_touch from '../components/Quote';


const page = () => {
  return (

<div>
  <Hero/>
  <About/>
  <Services/>
  <Contact/>
  <Benefits/>
  <Get_in_touch/>
  </div>


  )
}

export default page
