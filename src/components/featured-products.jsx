import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useState,useEffect } from "react";
import "../css/featured-products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function FeaturedProducts() {
    const [products,setProducts] = useState([]);
    const getAllProducts = async () => {
      try{
        await  fetch(`https://rucrudgdtmsunfhheckx.supabase.co/rest/v1/Featured-Products`,{
            method: "GET",
            headers: {
                apikey: `sb_publishable_8KKdokhVEobg4M7V12J77g__anAlcjZ`,
                Authorization: `Bearer sb_publishable_8KKdokhVEobg4M7V12J77g__anAlcjZ`
            }
        })
        .then((response) => response.json())
        .then(data => setProducts(data))
      }
      catch (error) {
        console.error("Error not found data", error)
      }
    }
    useEffect(() => {
        getAllProducts();
    },[])
    
    //console.log(products);

    return(
        <div className="featured-products w-full h-full">
            <div className="all-products flex gap-5">
                <Swiper
                modules={[ EffectFade,Autoplay]} 
                loop={true}                      
                speed={1500}                         
                slidesPerView={4}
                spaceBetween={20}
                autoplay={{
                    delay: 1000,
                    pauseOnMouseEnter: true
                }}
                breakpoints={{
                    0: {
                    slidesPerView: 1,
                    },
                    640: {
                    slidesPerView: 2,
                    },
                    1024: {
                    slidesPerView: 3,
                    },
                    1440: {
                    slidesPerView: 4,
                    },
                }}
                >
                {! products ? 
                    <h2>Loading, products...</h2>
                    :
                    <>
                    {products.map((product,index) => {
                        return(
                            <SwiperSlide key={product.id}>
                                <div className="col-product flex flex-col justify-center items-center gap-5 transition-all ">
                                    <div className="col-image">
                                        <img src={product.mainimage} alt="product-img" id="img-product"/>
                                    </div>
                                    <div className="w-full text-center flex flex-col justify-center items-center">
                                        <div className="col-price-product w-40 h-10 bg-yellowColor flex justify-center items-center text-center">
                                            <p className="">{`EGP ${product.newprice}`}</p>
                                        </div>
                                    </div>
                                    <p>{product.title}</p>
                                    <div className="all-stars flex gap-1">
                                        <FaStar className="text-yellowColor"/>
                                        <FaStar className="text-yellowColor"/>
                                        <FaStar className="text-yellowColor"/>
                                        <FaStar className="text-yellowColor"/>
                                        <FaStar className="text-yellowColor"/>
                                    </div>
                                    <div className="view-whishlist-col flex gap-2">
                                        <IoEyeOutline className="cursor-pointer text-lg"/>
                                        <CiHeart className="cursor-pointer text-lg"/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    </>
                }
                </Swiper>
            </div>
        </div>
    )
}
export default FeaturedProducts;