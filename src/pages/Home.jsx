import Navbar from "../sections/Navbar";
import SliderContent from "../components/slider-content";
import BrandsSlider from "../components/brands-slider";
import Categories from "../components/categories";
function Home() {
    return (
        <>
            <Navbar />
            <SliderContent />
            <BrandsSlider />
            <Categories/>
        </>
    )
}
export default Home;