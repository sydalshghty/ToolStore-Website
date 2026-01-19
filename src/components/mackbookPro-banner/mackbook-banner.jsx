import mackbookpro from "../../assets/mackbook-pro-banner.png";
import "./mackbook-banner.css";
function MackbookBanner() {
    return (
        <section className="w-full h-full mackbook-banner mb-[72px]">
            <div className="container min-w-[100%] h-full">
                <div className="col-img-banner min-w-[100%] h-full">
                    <img src={mackbookpro} alt="mackbook-pro" className="object-contain w-full h-full cursor-pointer" />
                </div>
            </div>
        </section>
    )
}
export default MackbookBanner;