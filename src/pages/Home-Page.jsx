import Header from "../components/header/Header";
import Banner from "../components/banners.jsx/banner";
import Freedelivery from "../components/freedelivery/freedelivery";
import ShopWithCategories from "../components/shop-Categories/shop-categories";
import FeaturedProducts from "../components/featured-products/featured-products";
function HomePage() {
    return (
        <>
            <Header />
            <Banner />
            <Freedelivery />
            <ShopWithCategories />
            <FeaturedProducts />
        </>
    )
}
export default HomePage;