import React from "react";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Mark from "./components/Mark";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import Faqs from "./components/Faqs";
export default function Home() {
  return (
   <>
   <Banner/>
    <Feature/>
    <Mark/>
    <Contact/>
    <Testimonial/>
    <Faqs/>
   </>
  );
}
