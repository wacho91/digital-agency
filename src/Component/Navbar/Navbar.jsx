
import Logo from "../../assets/website/Vector.svg"

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
                <nav>
                    <ul>
                        {MenuLinks.map(({ id, name, link }) => (
                            <li key={id}>
                                <a href={link}>
                                    {name}
                                </a>
                            </li>
                        ))}
                        <button>Get in Touch</button>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar
