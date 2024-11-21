
import Logo from "../../assets/website/Vector.svg"
import DarkMode from "./DarkMode";

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
            </div>
        </div>
    </div>
  )
}

export default Navbar
