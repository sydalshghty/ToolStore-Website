import { FiPhone } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import "../css/nav-links.css";

function NavLinks() {
    return(
        <div className="nav-links w-full h-16 bg-yellowColor">
            <div className="container w-full h-full flex justify-between items-center">
                <ul className="flex gap-10 all-links">
                    <li>
                        <a href="#Home">Home</a>
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
                <div className="col-customer flex items-center gap-3">
                    <FiPhone className="text-3xl"/>
                    <div className="col-support">
                        <p>Customer Support:</p>
                        <p>1-234-5678901</p>
                    </div>
                </div>
                <div className="content-search w-full flex justify-center items-center">
                    <div className="flex justify-center items-center w-3/4 h-11 bg-white col-content-search">
                        <input type="text" placeholder="Search..." className="w-4/5"/>
                        <div className="col-icon-search w-14 h-full bg-black text-white flex justify-center items-center text-2xl cursor-pointer">
                            <IoSearch className="icon-search"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavLinks;