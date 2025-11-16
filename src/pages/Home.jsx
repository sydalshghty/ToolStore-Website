import SliderContent from "../components/slider-content";
import BrandsSlider from "../components/brands-slider";
import Categories from "../components/categories";
import OurProducts from "../components/our-Products";
import FeaturedProducts from "../components/featured-products";

function Home() {
    return (
        <>
            <SliderContent />
            <BrandsSlider />
            <Categories />
            <OurProducts />
            <FeaturedProducts/>
        </>
    )
}
export default Home;