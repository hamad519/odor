import { useEffect } from "react";
function GalleryBanner() {
    useEffect(() => {
        var swiper = new Swiper(".gallery__slider", {
            spaceBetween: 30,
            speed: 300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1300: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
            },
        });
    }, [])
    return (
        <>
            <section className="gallery-area">
                <div className="swiper gallery__slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="gallery__item">
                                <div className="off-tag">50% <br />
                                    off</div>
                                <div className="gallery__image image">
                                    <img src="src/assets/images/gallery/gallery-image1.jpg" alt="image" />
                                </div>
                                <div className="gallery__content">
                                    <h3 className="mb-10"><a href="shop-2.html">best e-lequid</a></h3>
                                    <p>Best E liquids from our huge collection</p>
                                    <a href="shop-2.html" className="btn-two mt-25"><span>Shop Now</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery__item">
                                <div className="off-tag">50% <br />
                                    off</div>
                                <div className="gallery__image image">
                                    <img src="src/assets/images/gallery/gallery-image2.jpg" alt="image" />
                                </div>
                                <div className="gallery__content">
                                    <h3 className="mb-10"><a href="shop-2.html">best vape flavours</a></h3>
                                    <p>Best E liquids from our huge collection</p>
                                    <a href="shop-2.html" className="btn-two mt-25"><span>Shop Now</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery__item">
                                <div className="off-tag">50% <br />
                                    off</div>
                                <div className="gallery__image image">
                                    <img src="src/assets/images/gallery/gallery-image3.jpg" alt="image" />
                                </div>
                                <div className="gallery__content">
                                    <h3 className="mb-10"><a href="shop-2.html">Battery And Charger Kit</a></h3>
                                    <p>Best E liquids from our huge collection</p>
                                    <a href="shop-2.html" className="btn-two mt-25"><span>Shop Now</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery__item">
                                <div className="off-tag">50% <br />
                                    off</div>
                                <div className="gallery__image image">
                                    <img src="src/assets/images/gallery/gallery-image4.jpg" alt="image" />
                                </div>
                                <div className="gallery__content">
                                    <h3 className="mb-10"><a href="shop-2.html">best vape tanks</a></h3>
                                    <p>Best E liquids from our huge collection</p>
                                    <a href="shop-2.html" className="btn-two mt-25"><span>Shop Now</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery__item">
                                <div className="off-tag">50% <br />
                                    off</div>
                                <div className="gallery__image image">
                                    <img src="src/assets/images/gallery/gallery-image5.jpg" alt="image" />
                                </div>
                                <div className="gallery__content">
                                    <h3 className="mb-10"><a href="shop-2.html">POP Extra Strawberry</a></h3>
                                    <p>Best E liquids from our huge collection</p>
                                    <a href="shop-2.html" className="btn-two mt-25"><span>Shop Now</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default GalleryBanner