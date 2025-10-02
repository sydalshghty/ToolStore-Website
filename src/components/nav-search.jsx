import { useState } from "react";
import logo from "../assets/toolstore-logo-1604396671.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";
import NavbarMobile from "./navbar-mobile";
import "../css/nav-search.css";

function NavSearch() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="w-full h-32 bg-black nav-search-content">
                <div className="container flex items-center justify-between w-full h-full text-white">
                    <div className="col-logo">
                        <img src={logo} alt="logo" className="cursor-pointer" />
                    </div>

                    <div className="flex justify-between w-2/4 h-12 bg-white rounded col-search">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="h-full p-3 text-sm border-none outline-none text-slate-400"
                        />
                        <button className="h-full w-36 bg-yellowColor btn-search">search</button>
                    </div>

                    <div className="flex items-center gap-2 col-cart">
                        <HiOutlineShoppingBag className="text-5xl cursor-pointer icon-cart" />
                        <div className="col-price">
                            <p>my cart:</p>
                            <p className="text-yellowColor">$13.57</p>
                        </div>
                        <FaBars
                            className="text-3xl cursor-pointer bars-icon"
                            onClick={() => setIsOpen(true)}
                        />
                    </div>
                </div>
            </div>
            {isOpen && <NavbarMobile onClose={() => setIsOpen(false)} />}
        </>
    );
}

export default NavSearch;
