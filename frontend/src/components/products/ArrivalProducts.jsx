import FeaturedProducts from "./productCatagoriesComponents/FeaturedProducts";
import LatestItem from "./productCatagoriesComponents/LatestItems";
import TopRatting from "./productCatagoriesComponents/TopRatting";

function ArrivalProducts() {
    return (
        <>
            <section className="product-area pt-130 pb-130 mt-130">
                <div className="container">
                    <div
                        className="product__wrp pb-30 mb-65 bor-bottom d-flex flex-wrap align-items-center justify-content-xl-between justify-content-center">
                        <div className="section-header d-flex align-items-center wow fadeInUp" data-wow-delay=".1s">
                            <span className="title-icon mr-10"></span>
                            <h2>latest arrival products</h2>
                        </div>
                        <ul className="nav nav-pills mt-4 mt-xl-0">
                            <li className="nav-item wow fadeInUp" data-wow-delay=".1s">
                                <a href="#latest-item" data-bs-toggle="tab" className="nav-link px-4 active">
                                    latest item
                                </a>
                            </li>
                            <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                                <a href="#top-ratting" data-bs-toggle="tab" className="nav-link px-4 bor-left bor-right">
                                    top ratting
                                </a>
                            </li>
                            <li className="nav-item wow fadeInUp" data-wow-delay=".3s">
                                <a href="#featured-products" data-bs-toggle="tab" className="nav-link ps-4">
                                    featured products
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <LatestItem/>
                        <TopRatting/>
                        <FeaturedProducts/>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ArrivalProducts;