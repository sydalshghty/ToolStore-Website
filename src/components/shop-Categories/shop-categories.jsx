import leftBtn from "../../assets/ArrowLeft.svg";
import rightBtn from "../../assets/ArrowRight-categories.svg";
import categoryImg from "../../assets/Imagecategory.png";
import "../../components/shop-Categories/shop-categories.css";
function ShopWithCategories() {
    return (
        <section className="shop-with-categories mt-[72px] mb-[72px] w-full h-full">
            <div className="container min-w-[100%]">
                <div className="flex items-center justify-center mb-10 heading-categories">
                    <h1 className="text-[32px] font-semibold  text-gray900 tracking-[0.2px]">Shop with Categorys</h1>
                </div>
                <div className="all-categories">
                    <div className="w-12 h-12 p-3 rounded-full cursor-pointer left-btn bg-primary500">
                        <img src={leftBtn} alt="left-btn" />
                    </div>
                    <div className="col-category w-[205px] h-[236px] pt-6 pb-6 pl-3 pr-3 rounded-[4px] flex justify-center items-center flex-col gap-4 cursor-pointer">
                        <img src={categoryImg} alt="united-deals" className="object-contain" />
                        <h3 className="text-base font-medium text-gray900">Computer & Laptop</h3>
                    </div>
                    <div className="w-12 h-12 p-3 rounded-full cursor-pointer right-btn bg-primary500">
                        <img src={rightBtn} alt="right-btn" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShopWithCategories;