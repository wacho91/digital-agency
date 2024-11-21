
import { useState } from "react";
import Logo from "../../assets/website/Vector.svg"
import DarkMode from "./DarkMode";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export const MenuLinks = [
    {
      id: 1,
      name: "About",
      link: "/#about",
    },
    {
      id: 2,
      name: "Services",
      link: "/#services",
    },
    {
      id: 3,
      name: "Projects",
      link: "/#projects",
    },
];

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <div>
        <div>
            <div>
                {/* Logo section */}
                <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1"
                >
                    <img src={Logo} alt="" className="w-5" />
                </a>
                {/* Desktop view Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-3">
                        {MenuLinks.map(({ id, name, link }) => (
                            <li key={id}>
                                <a 
                                    href={link}
                                     className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                        <button className="primary-btn">Get in Touch</button>
                        <DarkMode />
                    </ul>
                </nav>
                {/* Mobile view Drawer  */}
                <div>
                    <DarkMode />
                    {/* Mobile Hamburger icon */}
                    {showMenu ? (
                        <HiMenuAlt1 
                            onClick={toggleMenu}
                            className=" cursor-pointer transition-all"
                            size={30}
                        />
                    ) : (
                        <HiMenuAlt3 
                            onClick={toggleMenu}
                            className=" cursor-pointer transition-all"
                            size={30}
                        />
                    )}
                </div>
            </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} />
    </div>
  )
}

export default Navbar
