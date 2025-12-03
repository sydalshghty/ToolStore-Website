import bannerImg1 from "../assets/banner1-removebg-preview.png";
import bannerImg2 from "../assets/banner2-removebg-preview.png";
import bannerImg3 from "../assets/banner3-removebg-preview.png";
import "../css/categories.css";
import { Link } from "react-scroll";
function Categories() {

    const BannersInformation = [
        { id: 1, img: bannerImg1, title: "Drill Machine", suptitle: "Flat 35% Discount" },
        { id: 2, img: bannerImg2, title: "Circular Saw", suptitle: "Flat 35% Discount" },
        { id: 3, img: bannerImg3, title: "Screwdriver", suptitle: "Flat 35% Discount" },
    ]

    return (
        <div className="flex items-center justify-center w-full h-full mt-16 mb-16 banners-departament">
            <div className="container flex w-full h-full gap-5">
                {BannersInformation.map((banner, index) => {
                    return (
                        <div className="flex items-center w-2/3 p-5 cursor-pointer banners-col bg-backgroundColor" key={banner.id}>
                            <div className="flex flex-col justify-between h-full content-information">
                                <div className="col-text">
                                    <h3 className="mb-3 text-2xl font-medium text-black">{banner.title}</h3>
                                    <p className="text-lg font-medium text-black">{banner.suptitle}</p>
                                </div>
                                <Link
                                    to="our-products"
                                    smooth={true}
                                    duration={700}
                                >
                                    <button className="h-10 bg-yellowColor shop-banner-btn">shop now</button>
                                </Link>
                            </div>
                            <div>
                                <img src={banner.img} alt="banner-img" className="w-fit h-fit" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Categories;