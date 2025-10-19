import brandimg1 from "../assets/brand1.jpeg";
import brandimg2 from "../assets/brand2.jpeg";
import brandimg3 from "../assets/brand3.jpeg";
import brandimg4 from "../assets/brand4.jpeg";
import brandimg5 from "../assets/brand7.jpeg";
import brandimg6 from "../assets/brand8.jpeg";
import brandimg7 from "../assets/brand9.jpeg";
import brandimg8 from "../assets/brand10.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../css/brands-slider.css";

function BrandsSlider(){
    const slidesBrands = [
        {id: 1, img: brandimg1},
        {id: 2, img: brandimg2},
        {id: 3, img: brandimg3},
        {id: 4, img: brandimg4},
        {id: 5, img: brandimg5},
        {id: 6, img: brandimg6},
        {id: 7, img: brandimg7},
        {id: 8, img: brandimg8}
    ]
    return(
        <div className="sliderbrands-departament w-full h-full">
            <Swiper
                modules={[ EffectFade,Autoplay]} 
                loop={true}                      
                speed={700}                         
                slidesPerView={7}
                autoplay={{
                    delay: 1000 
                }}
                breakpoints={{
                    0: {
                    slidesPerView: 4,
                    },
                    640: {
                    slidesPerView: 5,
                    },
                    1024: {
                    slidesPerView: 5,
                    },
                    1440: {
                    slidesPerView: 7,
                    },
                }}
            >
                <div className="all-brands w-full h-full flex justify-between items-center">
                {slidesBrands.map((brand,index) => {
                return(
                    <SwiperSlide key={brand.id} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div className="col-brand w-96 h-full bg-bgbrands p-8 flex justify-center items-center">
                            <img src={brand.img} alt="brand-img" />
                        </div>
                    </SwiperSlide>
                )
            })}
            </div>
            </Swiper>
        </div>
    )
}
export default BrandsSlider;
