//import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useState, useEffect } from "react";
import "../css/featured-products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

function FeaturedProducts() {
    const [products, setProducts] = useState([]);
    const getAllProducts = async () => {
        try {
            await fetch(`https://rucrudgdtmsunfhheckx.supabase.co/rest/v1/Featured-Products`, {
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
    }, [])


    return (
        <div className="w-full h-full featured-products">
            <div className="flex gap-5 all-products">
                <Swiper
                    modules={[EffectFade, Autoplay]}
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
                    {products.length > 0 ?
                        <>
                            {products.map((product, index) => {
                                return (
                                    <SwiperSlide key={product.id}>
                                        <Link to={`/product/${product.id}`}>
                                            <div className="flex flex-col items-center justify-center gap-5 transition-all col-product ">
                                                <div className="col-image">
                                                    <img src={product.mainimage} alt="product-img" id="img-product" />
                                                </div>
                                                <div className="flex flex-col items-center justify-center w-full text-center">
                                                    <div className="flex items-center justify-center w-40 h-10 text-center col-price-product bg-yellowColor">
                                                        <p className="">{`EGP ${product.newprice}`}</p>
                                                    </div>
                                                </div>
                                                <p>{product.title}</p>
                                                <div className="flex gap-1 all-stars">
                                                    <FaStar className="text-yellowColor" />
                                                    <FaStar className="text-yellowColor" />
                                                    <FaStar className="text-yellowColor" />
                                                    <FaStar className="text-yellowColor" />
                                                    <FaStar className="text-yellowColor" />
                                                </div>
                                                <div className="flex gap-2 view-whishlist-col">
                                                    <IoEyeOutline className="text-lg cursor-pointer" />
                                                    <CiHeart className="text-lg cursor-pointer" />
                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })}
                        </>
                        :
                        <h1 className="flex items-center justify-center w-full text-black h-96 text-7xl">Loading Products...</h1>
                    }
                </Swiper>
            </div>
        </div>
    )
}
export default FeaturedProducts;