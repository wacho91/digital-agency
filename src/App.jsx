import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import BrandsLogo from "./Component/BrandsLogo/BrandsLogo";
import Services from "./Component/Services/Services";
import Testimonial from "./Component/Testimonial/Testimonial";
import BlogsComp from "./Component/BlogsComp/BlogsComp";
import Footer from "./Component/Footer/Footer";

function App() {

  useEffect(() => {
    AOS.init ({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    })
    AOS.refresh();
  },[])

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar />
        <Hero />
        <BrandsLogo />
        <Services />
        <Testimonial />
        <BlogsComp />
        <Footer />
    </div>
  )
}

export default App
