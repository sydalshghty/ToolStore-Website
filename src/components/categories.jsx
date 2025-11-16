import bannerImg1 from "../assets/banner1-removebg-preview.png";
import bannerImg2 from "../assets/banner2-removebg-preview.png";
import bannerImg3 from "../assets/banner3-removebg-preview.png";
import "../css/categories.css";
import { Link } from "react-scroll";
function Categories(){

    const BannersInformation = [
        {id: 1, img: bannerImg1, title: "Drill Machine", suptitle: "Flat 35% Discount"},
        {id: 2, img: bannerImg2, title: "Circular Saw", suptitle: "Flat 35% Discount"},
        {id: 3, img: bannerImg3, title: "Screwdriver", suptitle: "Flat 35% Discount"},
    ]

    return(
        <div className="banners-departament w-full h-full mt-16 mb-16">
            <div className="container w-full h-full flex gap-5 justify-between">
                {BannersInformation.map((banner,index) => {
                    return(
                    <div className="banners-col bg-backgroundColor w-2/3 p-5 flex items-center cursor-pointer" key={banner.id}>
                        <div className="content-information flex flex-col h-full justify-between">
                            <div className="col-text">
                                <h3 className="text-2xl font-medium mb-3 text-black">{banner.title}</h3>
                                <p className="text-lg font-medium text-black">{banner.suptitle}</p>
                            </div>
                            <Link 
                                to="our-products"
                                smooth={true}
                                duration={700}
                            >
                            <button className="bg-yellowColor h-10 shop-banner-btn">shop now</button>
                            </Link>
                        </div>
                        <div>
                            <img src={banner.img} alt="banner-img" className="w-fit h-fit"/>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Categories;