import bannerImg1 from "../../assets/banner-img-1.png";
import bannerImg2 from "../../assets/banner-img-2.png";
import bannerImg3 from "../../assets/banner-img-3.png";
function Banner() {
    return (
        <div className="w-full h-full mt-6 mb-6  banners-departament">
            <div className="container flex min-w-full gap-6">
                <div className="slider-banners w-[872px] h-[520px]">
                    <img src={bannerImg1} alt="banner-img" className="object-contain w-full h-full cursor-pointer" />
                </div>
                <div className="flex flex-col gap-6 col-banners">
                    <img src={bannerImg2} alt="banner-img" className="object-contain w-full h-full cursor-pointer" />
                    <img src={bannerImg3} alt="banner-img" className="object-contain w-full h-full cursor-pointer" />
                </div>
            </div>
        </div>
    )
}
export default Banner;