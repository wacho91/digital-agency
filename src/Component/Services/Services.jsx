
import { FaCameraRetro } from "react-icons/fa"
import { GiNotebook } from "react-icons/gi"
import { SlNote } from "react-icons/sl"

const skillsData = [
    {
      name: "App Development",
      icon: <FaCameraRetro className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "0",
    },
    {
      name: "Web Designing",
      icon: <GiNotebook className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "300",
    },
    {
      name: "Graphic Designing",
      icon: <SlNote className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "500",
    },
    {
      name: "Digital Marketing",
      icon: <SlNote className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "700",
    },
];


const Services = () => {
  return (
    <>
        <span id="about"></span>
        <div>
            <div>
                {/* Header */}
                <div>
                    <h1>
                        Explore Our Services
                    </h1>
                    <p>
                        We are self-service data analytics software that lets you create
                        visually.
                    </p>
                </div>
                {/* services cards */}
                <div>
                    {skillsData.map((skill) => (
                        <div key={skill.nsme}>
                            <div>{skill.icon}</div>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
                {/* button */}
                <div>
                    <button>
                        Learn More
                    </button>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Services
