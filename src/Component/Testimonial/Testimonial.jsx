
import Slider from "react-slick";

const testimonialData = [
    {
      id: 1,
      name: "David Calathan - Director of Design Operations, New York",
      text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 1,
      name: "David Calathan - Director of Design Operations, New York",
      text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 1,
      name: "Smith - Director of Operations, New York",
      text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
      img: "https://picsum.photos/103/103",
    },
];

const Testimonial = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

  return (
    <>
      <div>
            <div>
                {/* testimonial section */}
                <div>
                    <Slider {...settings}>
                        {testimonialData.map(({id, name, text, img}) => {
                            return (
                                <div key={id}>
                                    {/*Card*/}
                                    <div>
                                        <img 
                                            src={img} 
                                            alt="image" 
                                        />
                                        <div>
                                            <p>
                                                “{text}”
                                            </p>
                                            <h1>
                                                {name}
                                            </h1>
                                        </div>
                                        <p>
                                            ,,
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
      </div>
    </>
  )
}

export default Testimonial
