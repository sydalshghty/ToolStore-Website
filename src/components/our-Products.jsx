import "../css/our-products.css";
import FeaturedProducts from "./featured-products";
import BestsellerProducts from "./bestseller-products";
import { useState } from "react";
function OurProducts() {

    const [activeTap, setActiveTap] = useState("Featured");

    const filterProducts = () => {
        switch (activeTap) {
            case "Featured":
                return <><FeaturedProducts /></>
            case "Bestseller":
                return <><BestsellerProducts /></>
            default:
                return <><FeaturedProducts /></>
        }
    }

    return (
        <div className="w-full h-full our-products-departament mb-52">
            <div className="container w-full h-full">
                <div className="text-center heading-products">
                    <h1 className="mb-3 text-4xl uppercase h1-our-products">Our Products</h1>
                    <div className="flex items-center justify-center gap-10 our-products-links">
                        <p className="text-base uppercase cursor-pointer link-products" onClick={() => {
                            setActiveTap("Featured");
                        }}>Featured</p>
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