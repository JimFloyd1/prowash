"use client";

import React from 'react';
import Hero from "@/src/components/Hero";
import Navbar from '../components/Navbar';
import image from 'next/image';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Benefits from '../components/Benefits';
import Get_in_touch from '../components/Quote';
import Form from '../components/Form'


const page = () => {
  return (

<div>
  <Hero/>
  <About/>
  <Services/>
  <Contact/>
  <Benefits/>
  <Get_in_touch/>
  <Form/>
  </div>


  )
}

export default page
