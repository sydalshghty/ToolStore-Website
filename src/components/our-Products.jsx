import "../css/our-products.css";
import FeaturedProducts from "./featured-products";
import LatestProducts from "./leatest-products";
import BestsellerProducts from "./bestseller-products";
import { useState } from "react";
function OurProducts(){

    const [activeTap,setActiveTap] = useState("Featured");

    const filterProducts = () => {
        switch(activeTap){
            case "Featured":
                return <><FeaturedProducts/></>
            case "Latest":
                return <><LatestProducts/></>
            case "Bestseller":
                return <><BestsellerProducts/></>
            default:
                return <><FeaturedProducts/></>
        }
    }

    return(
        <div className="our-products-departament w-full h-full mb-52">
            <div className="container w-full h-full">
                <div className="heading-products text-center">
                    <h1 className="text-3xl uppercase mb-3 h1-our-products">Our Products</h1>
                    <div className="flex justify-center items-center gap-10 our-products-links">
                        <p className="text-base uppercase cursor-pointer link-products" onClick={() => {
                            setActiveTap("Featured");
                        }}>Featured</p>
                        <p className="text-base uppercase cursor-pointer link-products" onClick={() => {
                            setActiveTap("Latest");
                        }}>Latest</p>
                        <p className="text-base uppercase cursor-pointer link-products" onClick={() => {
                            setActiveTap("Bestseller");
                        }}>Bestseller</p>
                    </div>
                </div>
                <>
                   {filterProducts()} 
                </>
            </div>
        </div>
    )
}
export default OurProducts;