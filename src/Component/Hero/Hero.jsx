
import YellowCar from "../../assets/website/team.png";

const Hero = () => {
  return (
    <div>
        <div>
            <div>
                {/* Image section */}
                <div>
                    <img 
                        src={YellowCar} 
                        alt="Image" 
                        className="w-full sm:max-w-[280px] md:max-w-[430px]"
                    />
                    <div>
                        <p>⭐Projects</p>
                        <h1>
                            600+ <span>Done</span>                        
                        </h1>
                    </div>
                </div>
                {/* Text section */}
                <div>
                    <h1>
                        Building Brands in the{" "}
                        <span>Digital Agency</span>                   
                    </h1>
                    <p>
                        Your partner in navigating the ever-evolving landscape of digital
                        marketing. From conceptualization to execution, we craft tailored
                        solutions that drive results and elevate your brand to new
                        heights.
                    </p>
                    <button>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
