import { useEffect } from "react";
import Swiper from 'swiper/bundle';
import 'animate.css';
function TopBrandsBanner() {
    useEffect(() => {
        var swiper = new Swiper(".brand__slider", {
            spaceBetween: 30,
            speed: 300,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1440: {
                    slidesPerView: 6,
                },
                1300: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 3,
                },
                500: {
                    slidesPerView: 2,
                },
            },
        });
    }, [])
    return (
        <>
            <section className="brand-area pt-130 pb-130">
                <div className="container">
                    <div className="sub-title text-center mb-65">
                        <h3><span className="title-icon"></span> our top brands <span className="title-icon"></span>
                        </h3>
                    </div>
                    <div className="swiper brand__slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="brand__item bor radius-10 text-center p-4">
                                    <img src="src/assets/images/brand/brand1.png" alt="icon"/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand__item bor radius-10 text-center p-4">
                                    <img src="src/assets/images/brand/brand2.png" alt="icon"/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand__item bor radius-10 text-center p-4">
                                    <img src="src/assets/images/brand/brand3.png" alt="icon"/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand__item bor radius-10 text-center p-4">
                                    <img src="src/assets/images/brand/brand4.png" alt="icon"/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand__item bor radius-10 text-center p-4">
                                    <img src="src/assets/images/brand/brand5.png" alt="icon"/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand__item bor radius-10 text-center p-4">
                                    <img src="src/assets/images/brand/brand6.png" alt="icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default TopBrandsBanner