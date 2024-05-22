"use client";

import React from 'react';
import Hero from "@/src/components/Hero";
import Navbar from '../components/Navbar';
import image from 'next/image';
import About from '../components/About';
import Services from '../components/Services';

const page = () => {
  return (

<div>
  <Hero/>
  <About/>
  <Services/>
  </div>


  )
}

export default page
