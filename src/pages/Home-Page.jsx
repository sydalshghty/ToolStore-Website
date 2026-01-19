import Header from "../components/header/Header";
import Banner from "../components/banners.jsx/banner";
import Freedelivery from "../components/freedelivery/freedelivery";
import ShopWithCategories from "../components/shop-Categories/shop-categories";
import FeaturedProducts from "../components/featured-products/featured-products";
import NewAppleBanner from "../components/new-apple-banner/new-apple";
import ComputerAccessories from "../components/computer-accessories/computer-accessories";
import MackbookBanner from "../components/mackbookPro-banner/mackbook-banner";
import FlashProducts from "../components/flash-products/flash-Products";
function HomePage() {
    return (
        <>
            <Header />
            <Banner />
            <Freedelivery />
            <ShopWithCategories />
            <FeaturedProducts />
            <NewAppleBanner />
            <ComputerAccessories />
            <MackbookBanner />
            <FlashProducts />
        </>
    )
}
export default HomePage;