import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import sliderbg1 from "../assets/slider1-bg.png";
import sliderbg2 from "../assets/sliderbg-2.png";
//import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../css/slider-content.css";
import { Link } from "react-scroll";

function SliderContent() {
    const slides = [
        {id: 1, img: sliderbg1, title: "up to 40% discounts", suptitle: "best hand tools collection"},
        {id: 2, img: sliderbg2, title: "sanitary ware & building material tools", suptitle: "high quality tools"}
    ]

    return (
        <div className="slidercontent-departament">
            <Swiper
                modules={[Navigation, EffectFade,Autoplay]} 
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                loop={true}
                effect="fade"                       
                speed={700}                         
                slidesPerView={1}
                autoplay={{
                    delay: 3000 
                }}
            >
                <div className="content-slider relative w-full h-full">
                        {slides.map((slide,index) => {
                            return(
                            <SwiperSlide key={slide.id}>
                                <div className="slider-information relative w-full h-full" key={slide.id}>
                                    <img src={slide.img} alt="bg-slider1" className="bg-slider1 w-full h-full" />
                                    <div className="content-information absolute  w-full h-full">
                                        <p className="text-2xl mb-5 title" style={{width: "420px"}}>{slide.title}</p>
                                        <h1 className="text-5xl font-bold capitalize mb-5 suptitle" style={{width: "400px"}}>{slide.suptitle}</h1>
                                        <Link 
                                            to="our-products"
                                            smooth={true}
                                            duration={700}
                                        >
                                            <button className="w-36 h-10 bg-yellowColor text-sm cursor-pointer absolute z-50">shop now</button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            )
                        })}
                </div>
            </Swiper>
        </div>
    )
}
export default SliderContent;