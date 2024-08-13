import { useEffect, useState } from "react";
import Swiper from "swiper";
import ProductDescriptionReviews from "./product_descriotion_reviews";

function ProductDetailArea() {
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const swiperThumbs = new Swiper(".shop-slider-thumb", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".right-arry",
                prevEl: ".left-arry",
            },
        });

        const swiperMain = new Swiper(".shop-single-slide", {
            loop: true,
            spaceBetween: 20,
            speed: 300,
            grabCursor: true,
            navigation: {
                nextEl: ".right-arry",
                prevEl: ".left-arry",
            },
            thumbs: {
                swiper: swiperThumbs,
            },
        });
    }, []);

    const handleQuantityChange = (type) => {
        setQuantity((prevQuantity) => {
            if (type === "increment") {
                return prevQuantity + 1;
            } else if (type === "decrement" && prevQuantity > 0) {
                return prevQuantity - 1;
            }
            return prevQuantity;
        });
    };

    return (
        <>
            <section className="shop-single pt-130 pb-130">
                <div className="container">
                    <div className="product-details-single pb-40">
                        <div className="row g-4">
                            <div className="col-lg-5">
                                <div className="image img">
                                    <div className="swiper shop-single-slide">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <img src="src/assets/images/shop/01.jpg" alt="image" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="src/assets/images/shop/02.jpg" alt="image" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="src/assets/images/shop/03.jpg" alt="image" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="src/assets/images/shop/04.jpg" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 swiper shop-slider-thumb">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide slide-smoll">
                                                <img src="src/assets/images/shop/01.jpg" alt="image" />
                                            </div>
                                            <div className="swiper-slide slide-smoll">
                                                <img src="src/assets/images/shop/02.jpg" alt="image" />
                                            </div>
                                            <div className="swiper-slide slide-smoll">
                                                <img src="src/assets/images/shop/03.jpg" alt="image" />
                                            </div>
                                            <div className="swiper-slide slide-smoll">
                                                <img src="src/assets/images/shop/04.jpg" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="content h24">
                                    <h3 className="pb-2 primary-color">POP Extra Strawberry</h3>
                                    <div className="star primary-color pb-2">
                                        <span><i className="fa-solid fa-star sm-font"></i></span>
                                        <span><i className="fa-solid fa-star sm-font"></i></span>
                                        <span><i className="fa-solid fa-star sm-font"></i></span>
                                        <span><i className="fa-solid fa-star sm-font"></i></span>
                                        <span><i className="fa-solid fa-star-half-stroke sm-font"></i></span>
                                    </div>
                                    <h2 className="pb-3">$440.00</h2>
                                    <h4 className="pb-2 primary-color">Product Description</h4>
                                    <p className="text-justify mb-10">Rapidiusly transform corporate expertise whereas
                                        enterprise-wide web services. Progressively whiteboard multifunctional networks for pandemic total linkage a Synergistically recaptiualize client and based methods of empowerment with
                                        sustainable bandwidth.</p>
                                    <p className="text-justify">Progressively whiteboard multifunctional
                                        networks for pandemic total linkage a Synergistically recaptiualize client and based
                                        methods of empowerment with
                                        sustainable bandwidth.</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="details-area">
                                            <div className="category flex-wrap mt-4 d-flex py-3 bor-top bor-bottom">
                                                <h4 className="pe-3">Categories :</h4>
                                                <a href="#0" className="primary-hover">Woman</a>
                                                <span className="px-2">|</span>
                                                <a href="#0" className="primary-hover">Man</a>
                                                <span className="px-2">|</span>
                                                <a href="#0" className="primary-hover">Kids</a>
                                                <span className="px-2">|</span>
                                                <a href="#0" className="primary-hover">Accessories</a>
                                            </div>
                                            <div className="d-flex flex-wrap py-3 bor-bottom">
                                                <h4 className="pe-3">Tags :</h4>
                                                <a href="#0" className="primary-hover">Fashion</a>
                                                <span className="px-2">|</span>
                                                <a href="#0" className="primary-hover">Lifestyle</a>
                                                <span className="px-2">|</span>
                                                <a href="#0" className="primary-hover">Travel</a>
                                                <span className="px-2">|</span>
                                                <a href="#0" className="primary-hover">Video</a>
                                                <span className="px-2">|</span>
                                                <a href="#0" className="primary-hover">Audio</a>
                                            </div>
                                            <div className="d-flex flex-wrap align-items-center py-3 bor-bottom">
                                                <h4 className="pe-3">Share:</h4>
                                                <div className="social-media">
                                                    <a href="#" className="mx-2 primary-color secondary-hover"><i
                                                        className="fa-brands fa-facebook-f"></i></a>
                                                    <a href="#" className="mx-2 primary-color secondary-hover"><i
                                                        className="fa-brands fa-twitter"></i></a>
                                                    <a href="#" className="mx-2 primary-color secondary-hover"><i
                                                        className="fa-brands fa-linkedin-in"></i></a>
                                                    <a href="#" className="mx-2 primary-color secondary-hover"><i
                                                        className="fa-brands fa-instagram"></i></a>
                                                    <a href="#" className="mx-2 primary-color secondary-hover"><i
                                                        className="fa-brands fa-pinterest-p"></i></a>
                                                </div>
                                            </div>
                                            <div className="cart-wrp py-4">
                                                <div className="cart-quantity">
                                                    <form id='myform' method='POST' className='quantity' action='#'>
                                                        <input
                                                            type='button'
                                                            value='-'
                                                            className='qtyminus minus'
                                                            onClick={() => handleQuantityChange("decrement")}
                                                        />
                                                        <input
                                                            type='text'
                                                            name='quantity'
                                                            value={quantity}
                                                            className='qty'
                                                            readOnly
                                                        />
                                                        <input
                                                            type='button'
                                                            value='+'
                                                            className='qtyplus plus'
                                                            onClick={() => handleQuantityChange("increment")}
                                                        />
                                                    </form>
                                                </div>
                                                <div className="discount">
                                                    <input type="text" placeholder="Enter Discount Code" />
                                                </div>
                                            </div>
                                            <a href="#0" className="d-block text-center btn-two mt-40"><span><i
                                                className="fa-solid fa-basket-shopping pe-2"></i>
                                                add to cart</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductDescriptionReviews />
                </div>
            </section>
        </>
    );
}

export default ProductDetailArea;
