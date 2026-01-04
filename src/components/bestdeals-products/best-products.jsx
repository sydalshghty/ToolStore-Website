import "../bestdeals-products/best-products.css";
import arrowRight from "../../assets/ArrowRight-bestdeals.svg";
import { PiHeart } from "react-icons/pi";
import { HiOutlineEye } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import productImgSmall from "../../assets/Image-product.png";

function BestProducts() {
    return (
        <div className="best-Products-departament mt-[40px] mb-[40px]">
            <div className="container min-w-[100%] h-full">
                <div className="flex items-center justify-between h-full min-w-[100%] col-heading">
                    <h2 className="font-sans text-2xl font-semibold text-gray900">Best Deals</h2>
                    <div className="flex items-center gap-2 col-btn">
                        <a href="#" className="font-sans text-sm font-semibold text-secondary500">Browse All Product</a>
                        <img src={arrowRight} alt="arrow-right" className="cursor-pointer" />
                    </div>
                </div>
                <div className="flex h-full min-w-full all-best-products">
                    <div className="flex flex-wrap min-w-[100%] h-full all-products items-start">
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
    )
}
export default BestProducts;
