import { FaXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";
import "../css/navbar-mobile.css";

function NavbarMobile({ onClose }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => onClose(), 300);
    };

    return (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 content-navbar z-50"
            onClick={handleClose}
        >
            <div
                className={`fixed top-0 left-0 w-2/4 h-full bg-white navbar-mobile transform transition-transform duration-300 ${isVisible ? "translate-x-0" : "-translate-x-full"
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between w-full h-10 p-5 col-menu bg-yellowColor">
                    <p className="text-lg text-white uppercase">menu</p>
                    <FaXmark
                        className="text-xl text-white cursor-pointer"
                        onClick={handleClose}
                    />
                </div>
                <ul className="flex flex-col gap-5 p-5 text-sm">
                    <li><a href="#Home" className="link">Home</a></li>
                    <li><a href="#Pliers" className="link">Pliers</a></li>
                    <li><a href="#" className="link">Accesories</a></li>
                    <li><a href="#Satchel" className="link">Satchel</a></li>
                    <li><a href="#Axes" className="link">Axes</a></li>
                    <li><a href="#Clamps" className="link">Clamps</a></li>
                    <li><a href="#Blog" className="link">Blog</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavbarMobile;
