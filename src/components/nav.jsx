import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import iconunited from "../assets/Icon.svg";
import unitedDealsLogo from "../assets/united-deals-logo.svg";
function Nav() {
    return (
        <nav className="nav-content w-full h-[88px] bg-secondaryColor">
            <div className="container min-w-[100%] h-full flex justify-between items-center">
                <div className="flex gap-2 col-logo">
                    <img src={iconunited} alt="icon-img" />
                    <img src={unitedDealsLogo} alt="logo-img" />
                </div>
                <div className="flex items-center col-search w-[40%] h-12 bg-whiteColor pl-5 pr-5 pt-[14px] pb-[14px]">
                    <input type="text" placeholder="Search for anything..." className="w-[95%] min-h-[100%] border-none outline-none text-sm text-gray500" />
                    <IoSearchSharp className="w-5 h-5 cursor-pointer text-gray900" />
                </div>
                <div className="flex items-center gap-6 all-icons">
                    <div className="flex cursor-pointer col-cart">
                        <FiShoppingCart className="w-8 h-8 text-whiteColor" />
                        <div className="number-products w-5 h-5 pt-[2px] pb-[2px] bg-whiteColor rounded-full flex justify-center items-center mt-[-4px] ml-[-8px]">
                            <p className="text-xs font-semibold text-secondary700">2</p>
                        </div>
                    </div>
                    <div className="flex cursor-pointer col-heart ">
                        <FaRegHeart className="w-8 h-8 text-whiteColor" />
                        <div className="number-hearts w-5 h-5 pt-[2px] pb-[2px] bg-whiteColor rounded-full flex justify-center items-center mt-[-4px] ml-[-8px]">
                            <p className="text-xs font-semibold text-secondary700">2</p>
                        </div>
                    </div>
                    <AiOutlineUser className="w-8 h-8 cursor-pointer text-whiteColor" />
                </div>
            </div>
        </nav>
    )
}
export default Nav;