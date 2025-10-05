import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import sliderbg1 from "../assets/slider1-bg.png";
import sliderbg2 from "../assets/sliderbg-2.png";

function SliderContent() {
    return (
        <div className="slidercontent-departament">
            <div className="content-slider">
                <div className="slider1">
                    <img src={sliderbg1} alt="bg-slider1" className="bg-slider1" />
                    <div className="content-information">
                        <p>up to 40% discounts</p>
                        <h1>best hand tools collection</h1>
                        <button>shop now</button>
                    </div>
                </div>
                <div className="slider2">
                    <img src={sliderbg2} alt="bg-slider2" className="bg-slider2" />
                    <div className="content-information">
                        <p>sanitary ware & building material tools</p>
                        <h1>high quality tools</h1>
                        <button>shop now</button>
                    </div>
                </div>
            </div>
            <div className="btns-transfer">
                <div className="col-icon">
                    <FaChevronLeft />
                </div>
                <div className="col-icon">
                    <FaChevronRight />
                </div>
            </div>
        </div>
    )
}
export default SliderContent;