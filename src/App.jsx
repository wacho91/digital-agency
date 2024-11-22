import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import BrandsLogo from "./Component/BrandsLogo/BrandsLogo";
import Services from "./Component/Services/Services";

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
    </div>
  )
}

export default App
