import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import "../css/free-delivery.css";

function FreeDelivery() {
    const [showAccount,setShowAccount] = useState(false);
    const [showLanguage,setShowLanguage] = useState(false);

    return(
        <>
        <div className="free-delivery-content w-full h-14 bg-blackColor text-whiteColor">
            <div className="container w-full h-full flex justify-between items-center">
                <div className="free-col">
                    <p className="text-sm font-extralight">free delivery: take advantage of our time to save event</p>
                </div>
                <div className="Account-Language-Content flex items-center gap-8">
                    <div className="col-Account flex gap-1 items-center cursor-pointer">
                        <div className="flex items-center gap-1" onClick={() => {
                            setShowAccount(! showAccount);
                        }}>
                            <p className="text-sm font-extralight">my account</p>
                            <IoChevronDown />
                        </div>
                        <div className={`signin-register-col ${showAccount ? "show": ""}`}>
                            <div className="flex flex-col gap-3">
                                <a href="#sign in">sign in</a>
                                <a href="#register">register</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-language flex gap-2 cursor-pointer" onClick={() => {
                        setShowLanguage(! showLanguage);
                    }}>
                        <p className="text-sm font-extralight">language: </p>
                        <div className="flex items-center gap-1">
                            <p className="text-sm font-extralight">English</p>
                            <IoChevronDown />
                        </div>
                        <div className={`English-Arabic-col ${showLanguage ? "show" : ""}`}>
                            <div className="flex flex-col gap-3">
                                <a href="#العربية">العربية</a>
                                <a href="#English">English</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default FreeDelivery;