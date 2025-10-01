import logo from "../assets/toolstore-logo-1604396671.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";
import "../css/nav-search.css";

function NavSearch() {
    return(
        <div className="nav-search-content w-full h-32 bg-black">
            <div className="container w-full flex h-full text-white justify-between items-center">
                <div className="col-logo">
                    <img src={logo} alt="logo" className="cursor-pointer"/>
                </div>
                <div className="col-search w-2/4 h-12 bg-white rounded flex justify-between">
                    <input type="text" placeholder="Search..." className="h-full border-none outline-none p-3 text-sm text-slate-400"/>
                    <button className="w-36 h-full bg-yellowColor btn-search">search</button>
                </div>
                <div className="col-cart flex gap-2 items-center">
                    <HiOutlineShoppingBag  className="text-5xl cursor-pointer icon-cart"/>
                    <div className="col-price">
                        <p>my cart:</p>
                        <p className="text-yellowColor">$13.57</p>
                    </div>
                    <FaBars className="text-3xl cursor-pointer bars-icon"/>
                </div>
            </div>
        </div>
    )
}
export default NavSearch;