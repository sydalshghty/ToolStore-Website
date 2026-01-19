import productImg from "../../assets/product-image-test.png";
import "./flash-products.css";
import { useState, useEffect } from "react";
function FlashProducts() {
    const [allProducts, setAllProducts] = useState([]);
    const getAllProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=200`)

        const data = await res.json();

        console.log(data);
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <section className="all-products-section w-full h-full mb-[72px]">
            <div className="container min-w-[100%] h-full flex gap-6">
                <div className="flash-sale-products">
                    <h1 className="mb-4 font-sans text-base font-semibold text-gray900">FLASH SALE TODAY</h1>
                    <div className="flex flex-col gap-4 all-products">
                        <div className="flex items-center justify-center w-full gap-3 cursor-pointer col-product">
                            <div className="col-image w-[120px] h-[120px]">
                                <img src={productImg} alt="img-product" className="object-contain w-full h-full" />
                            </div>
                            <div className="flex flex-col gap-2 col-information">
                                <p className="text-sm text-gray900">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                                <span className="text-sm font-semibold price-product text-secondary500">₹1,500</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="BEST-SELLERS-products">
                    <h1 className="mb-4 font-sans text-base font-semibold text-gray900">BEST SELLERS</h1>
                    <div className="flex flex-col gap-4 all-products">
                        <div className="flex items-center justify-center w-full gap-3 cursor-pointer col-product">
                            <div className="col-image w-[120px] h-[120px]">
                                <img src={productImg} alt="img-product" className="object-contain w-full h-full" />
                            </div>
                            <div className="flex flex-col gap-2 col-information">
                                <p className="text-sm text-gray900">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                                <span className="text-sm font-semibold price-product text-secondary500">₹1,500</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="TOP-RATED-products">
                    <h1 className="mb-4 font-sans text-base font-semibold text-gray900">TOP RATED</h1>
                    <div className="flex flex-col gap-4 all-products">
                        <div className="flex items-center justify-center w-full gap-3 cursor-pointer col-product">
                            <div className="col-image w-[120px] h-[120px]">
                                <img src={productImg} alt="img-product" className="object-contain w-full h-full" />
                            </div>
                            <div className="flex flex-col gap-2 col-information">
                                <p className="text-sm text-gray900">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                                <span className="text-sm font-semibold price-product text-secondary500">₹1,500</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="NEW-ARRIVAL-products">
                    <h1 className="mb-4 font-sans text-base font-semibold text-gray900">NEW ARRIVAL</h1>
                    <div className="flex flex-col gap-4 all-products">
                        <div className="flex items-center justify-center w-full gap-3 cursor-pointer col-product">
                            <div className="col-image w-[120px] h-[120px]">
                                <img src={productImg} alt="img-product" className="object-contain w-full h-full" />
                            </div>
                            <div className="flex flex-col gap-2 col-information">
                                <p className="text-sm text-gray900">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                                <span className="text-sm font-semibold price-product text-secondary500">₹1,500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FlashProducts;