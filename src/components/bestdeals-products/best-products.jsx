import "../bestdeals-products/best-products.css";
import arrowRight from "../../assets/ArrowRight-bestdeals.svg";
import { PiHeart } from "react-icons/pi";
import { HiOutlineEye } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import productImg from "../../assets/product-image-test.png";
import productImgSmall from "../../assets/Image-product.png";
import starIcon from "../../assets/Star.svg";
function BestProducts() {
    return (
        <div className="best-Products-departament mt-[40px] mb-[40px]">
            <div className="container min-w-[100%] h-full">
                <div className="flex items-center justify-between w-full h-full col-heading">
                    <h2 className="font-sans text-2xl font-semibold text-gray900">Best Deals</h2>
                    <div className="flex items-center gap-2 col-btn">
                        <a href="#" className="font-sans text-sm font-semibold text-secondary500">Browse All Product</a>
                        <img src={arrowRight} alt="arrow-right" className="cursor-pointer" />
                    </div>
                </div>
                <div className="flex w-full h-full all-best-products">
                    <div className="col-only-product">
                        <div className="flex flex-col gap-2 rate-hot-col">
                            <div className="w-[73px] h-[26px] bg-warning400 pt-[5px] pb-[5px] pl-[10px] pr-[10px]  rounded-sm">
                                <p className="font-sans text-xs font-semibold text-gray900">32% OFF</p>
                            </div>
                            <div className="w-[46px] h-[26px] pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-danger500 rounded-sm">
                                <p className="font-sans text-xs font-semibold text-whiteColor">HOT</p>
                            </div>
                        </div>
                        <div className="img-product w-[280px] h-[242px] mb-5" >
                            <img src={productImg} alt="img-product" className="object-contain w-full h-full" />
                        </div>
                        <div className="col-rates flex gap-[2px] w-full mb-1">
                            <div className="flex col-stars">
                                <img src={starIcon} alt="stars-icon" />
                                <img src={starIcon} alt="stars-icon" />
                                <img src={starIcon} alt="stars-icon" />
                                <img src={starIcon} alt="stars-icon" />
                                <img src={starIcon} alt="stars-icon" />
                            </div>
                            <p className="font-sans text-sm text-gray500 number-rates"> (52,677)</p>
                        </div>
                        <p className="font-sans text-base font-medium title-product text-gray900">Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...</p>
                        <div className="flex items-center gap-1 mt-3 mb-3 col-prices">
                            <p className="font-sans text-base font-medium line-through old-price text-gray300">₹865.99</p>
                            <p className="font-sans text-lg font-medium new-price text-secondary500">₹442.12</p>
                        </div>
                        <p className="mb-3 font-sans text-sm p-description text-gray600">Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.</p>
                        <div className="flex items-center gap-2 ht-addCart-vw-cols">
                            <div className="flex items-center justify-center w-12 h-12 p-3 rounded-sm col-heart bg-primary100">
                                <PiHeart className="w-6 h-6 cursor-pointer text-gray900" />
                            </div>
                            <div className="flex col-card gap-2 w-[174px] h-12 bg-primary500 pl-6 pr-6 rounded-sm justify-center items-center cursor-pointer">
                                <FiShoppingCart className="w-5 h-5 text-whiteColor" />
                                <p className="font-sans text-sm font-medium uppercase text-whiteColor">Add to card</p>
                            </div>
                            <div className="flex items-center justify-center w-12 h-12 p-3 rounded-sm col-view bg-primary100">
                                <HiOutlineEye className="w-6 h-6 cursor-pointer text-gray900" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-full all-products">
                        <div className="flex w-full col-one-products">
                            <div className="col-product p-[10px]">
                                <div className="image-product w-[216px] h-[188px] relative">
                                    <img src={productImgSmall} alt="img-product" className="object-contain w-full h-full" />
                                    <div className="absolute h-c-v-icons">
                                        <div className="col-heart">
                                            <PiHeart />
                                        </div>
                                        <div className="col-card">
                                            <FiShoppingCart />
                                        </div>
                                        <div className="col-view">
                                            <HiOutlineEye />
                                        </div>
                                    </div>
                                </div>
                                <p className="font-sans text-sm font-medium title-product text-gray900">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                                <div className="flex gap-2 mt-3 mb-3 content-prices">
                                    <p className="font-sans text-sm font-medium line-through old-price text-gray400">₹2,300</p>
                                    <p className="font-sans text-sm font-semibold new-price text-secondary500">₹2,300</p>
                                </div>
                            </div>
                            <div className="col-product p-[10px]">
                                <div className="image-product w-[216px] h-[188px] relative">
                                    <img src={productImgSmall} alt="img-product" className="object-contain w-full h-full" />
                                    <div className="absolute h-c-v-icons">
                                        <div className="col-heart">
                                            <PiHeart />
                                        </div>
                                        <div className="col-card">
                                            <FiShoppingCart />
                                        </div>
                                        <div className="col-view">
                                            <HiOutlineEye />
                                        </div>
                                    </div>
                                </div>
                                <p className="font-sans text-sm font-medium title-product text-gray900">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                                <div className="flex gap-2 mt-3 mb-3 content-prices">
                                    <p className="font-sans text-sm font-medium line-through old-price text-gray400">₹2,300</p>
                                    <p className="font-sans text-sm font-semibold new-price text-secondary500">₹2,300</p>
                                </div>
                            </div>
                            <div className="col-product p-[10px]">
                                <div className="image-product w-[216px] h-[188px] relative">
                                    <img src={productImgSmall} alt="img-product" className="object-contain w-full h-full" />
                                    <div className="absolute h-c-v-icons">
                                        <div className="col-heart">
                                            <PiHeart />
                                        </div>
                                        <div className="col-card">
                                            <FiShoppingCart />
                                        </div>
                                        <div className="col-view">
                                            <HiOutlineEye />
                                        </div>
                                    </div>
                                </div>
                                <p className="font-sans text-sm font-medium title-product text-gray900">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                                <div className="flex gap-2 mt-3 mb-3 content-prices">
                                    <p className="font-sans text-sm font-medium line-through old-price text-gray400">₹2,300</p>
                                    <p className="font-sans text-sm font-semibold new-price text-secondary500">₹2,300</p>
                                </div>
                            </div>
                            <div className="col-product p-[10px]">
                                <div className="image-product w-[216px] h-[188px] relative">
                                    <img src={productImgSmall} alt="img-product" className="object-contain w-full h-full" />
                                    <div className="absolute h-c-v-icons">
                                        <div className="col-heart">
                                            <PiHeart />
                                        </div>
                                        <div className="col-card">
                                            <FiShoppingCart />
                                        </div>
                                        <div className="col-view">
                                            <HiOutlineEye />
                                        </div>
                                    </div>
                                </div>
                                <p className="font-sans text-sm font-medium title-product text-gray900">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                                <div className="flex gap-2 mt-3 mb-3 content-prices">
                                    <p className="font-sans text-sm font-medium line-through old-price text-gray400">₹2,300</p>
                                    <p className="font-sans text-sm font-semibold new-price text-secondary500">₹2,300</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full col-one-products">
                            <div className="col-product p-[10px]">
                                <div className="image-product w-[216px] h-[188px] relative">
                                    <img src={productImgSmall} alt="img-product" className="object-contain w-full h-full" />
                                    <div className="absolute h-c-v-icons">
                                        <div className="col-heart">
                                            <PiHeart />
                                        </div>
                                        <div className="col-card">
                                            <FiShoppingCart />
                                        </div>
                                        <div className="col-view">
                                            <HiOutlineEye />
                                        </div>
                                    </div>
                                </div>
                                <p className="font-sans text-sm font-medium title-product text-gray900">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                                <div className="flex gap-2 mt-3 mb-3 content-prices">
                                    <p className="font-sans text-sm font-medium line-through old-price text-gray400">₹2,300</p>
                                    <p className="font-sans text-sm font-semibold new-price text-secondary500">₹2,300</p>
                                </div>
                            </div>
                            <div className="col-product p-[10px]">
                                <div className="image-product w-[216px] h-[188px] relative">
                                    <img src={productImgSmall} alt="img-product" className="object-contain w-full h-full" />
                                    <div className="absolute h-c-v-icons">
                                        <div className="col-heart">
                                            <PiHeart />
                                        </div>
                                        <div className="col-card">
                                            <FiShoppingCart />
                                        </div>
                                        <div className="col-view">
                                            <HiOutlineEye />
                                        </div>
                                    </div>
                                </div>
                                <p className="font-sans text-sm font-medium title-product text-gray900">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                                <div className="flex gap-2 mt-3 mb-3 content-prices">
                                    <p className="font-sans text-sm font-medium line-through old-price text-gray400">₹2,300</p>
                                    <p className="font-sans text-sm font-semibold new-price text-secondary500">₹2,300</p>
                                </div>
                            </div>
                            <div className="col-product p-[10px]">
                                <div className="image-product w-[216px] h-[188px] relative">
                                    <img src={productImgSmall} alt="img-product" className="object-contain w-full h-full" />
                                    <div className="absolute h-c-v-icons">
                                        <div className="col-heart">
                                            <PiHeart />
                                        </div>
                                        <div className="col-card">
                                            <FiShoppingCart />
                                        </div>
                                        <div className="col-view">
                                            <HiOutlineEye />
                                        </div>
                                    </div>
                                </div>
                                <p className="font-sans text-sm font-medium title-product text-gray900">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                                <div className="flex gap-2 mt-3 mb-3 content-prices">
                                    <p className="font-sans text-sm font-medium line-through old-price text-gray400">₹2,300</p>
                                    <p className="font-sans text-sm font-semibold new-price text-secondary500">₹2,300</p>
                                </div>
                            </div>
                            <div className="col-product p-[10px]">
                                <div className="image-product w-[216px] h-[188px] relative">
                                    <img src={productImgSmall} alt="img-product" className="object-contain w-full h-full" />
                                    <div className="absolute h-c-v-icons">
                                        <div className="col-heart">
                                            <PiHeart />
                                        </div>
                                        <div className="col-card">
                                            <FiShoppingCart />
                                        </div>
                                        <div className="col-view">
                                            <HiOutlineEye />
                                        </div>
                                    </div>
                                </div>
                                <p className="font-sans text-sm font-medium title-product text-gray900">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                                <div className="flex gap-2 mt-3 mb-3 content-prices">
                                    <p className="font-sans text-sm font-medium line-through old-price text-gray400">₹2,300</p>
                                    <p className="font-sans text-sm font-semibold new-price text-secondary500">₹2,300</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BestProducts;