import Header from "../components/header/Header";
import Banner from "../components/banners.jsx/banner";
import Freedelivery from "../components/freedelivery/freedelivery";
import BestProducts from "../components/bestdeals-products/best-products";
function HomePage() {
    return (
        <>
            <Header />
            <Banner />
            <Freedelivery />
            <BestProducts />
        </>
    )
}
export default HomePage;