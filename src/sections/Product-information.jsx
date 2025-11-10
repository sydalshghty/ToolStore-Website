import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import mainimg from "../assets/main-ptoduct-img.jpg";
import img1 from "../assets/11-660x880.jpg";
import img2 from "../assets/1-660x880.jpg";
import img3 from "../assets/7-660x880.jpg";
import img4 from "../assets/4-660x880.jpg";
import "../css/product-information.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductInformation() {
    const { id } = useParams();
    console.log(id);

    const [product, setProduct] = useState({});
    const getProduct = async () => {
        try {
            await fetch(`https://rucrudgdtmsunfhheckx.supabase.co/rest/v1/Featured-Products/?id=eq.${id}`, {
                method: "GET",
                headers: {
                    apikey: `sb_publishable_8KKdokhVEobg4M7V12J77g__anAlcjZ`,
                    Authorization: `Bearer sb_publishable_8KKdokhVEobg4M7V12J77g__anAlcjZ`
                }
            })
                .then((response) => response.json())
                .then(data => setProduct(data))
        }
        catch (error) {
            console.error("Error not found data", error)
        }
    }

    useEffect(() => {
        getProduct();
    }, []);
    console.log(product);

    return (
        <div className="w-full h-full product-information">
            <div className="container flex w-full h-full">
                <div className="flex flex-col gap-5 images-content">
                    <img src={mainimg} alt="main-img-product" className="main-img-product" />
                    <div className="flex items-center justify-center gap-5 all-images-small">
                        <FaChevronLeft className="cursor-pointer" />
                        <img src={img1} alt="small-img-product" />
                        <img src={img2} alt="small-img-product" />
                        <img src={img3} alt="small-img-product" />
                        <img src={img4} alt="small-img-product" />
                        <FaChevronRight className="cursor-pointer" />
                    </div>
                </div>
                <div className="information-product">
                    <h1>information, product</h1>
                </div>
            </div>
        </div>
    )
}
export default ProductInformation;