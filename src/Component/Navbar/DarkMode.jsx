import { useEffect, useState } from "react"
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const DarkMode = () => {

    const [theme, setTheme] =useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )

    const element = document.documentElement;

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if(theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("light");
            element.classList.remove("dark");
        }
    })

  return (
    <>
        {theme === "dark" ? (
            <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
        ) : (
            <BiSolidMoon onClick={() => setTheme("dark")}  className="text-2xl"/>
        )} 
    </>
  )
}

export default DarkMode
