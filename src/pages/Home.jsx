import Navbar from "../sections/Navbar";
import SliderContent from "../components/slider-content";
import BrandsSlider from "../components/brands-slider";
import Categories from "../components/categories";
import OurProducts from "../components/our-Products";
function Home() {
    return (
        <>
            <Navbar />
            <SliderContent />
            <BrandsSlider />
            <Categories/>
            <OurProducts/>
        </>
    )
}
export default Home;