import { FiPhone } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import "../css/nav-links.css";

function NavLinks() {
    return (
        <div className="w-full h-16 nav-links bg-yellowColor">
            <div className="container flex items-center justify-between w-full h-full">
                <ul className="flex gap-10 all-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#Pliers">Pliers</a>
                    </li>
                    <li>
                        <a href="#Accesories">Accesories</a>
                    </li>
                    <li>
                        <a href="#Satchel">Satchel</a>
                    </li>
                    <li>
                        <a href="#Axes">Axes</a>
                    </li>
                    <li>
                        <a href="#Clamps">Clamps</a>
                    </li>
                    <li>
                        <a href="#Blog">Blog</a>
                    </li>
                </ul>
                <div className="flex items-center gap-3 col-customer">
                    <FiPhone className="text-3xl" />
                    <div className="col-support">
                        <p>Customer Support:</p>
                        <p>1-234-5678901</p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full content-search">
                    <div className="flex items-center justify-center w-3/4 bg-white h-11 col-content-search">
                        <input type="text" placeholder="Search..." className="w-4/5" />
                        <div className="flex items-center justify-center h-full text-2xl text-white bg-black cursor-pointer col-icon-search w-14">
                            <IoSearch className="icon-search" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavLinks;