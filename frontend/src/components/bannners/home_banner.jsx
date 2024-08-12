import React, { useEffect } from 'react';

import Swiper from 'swiper/bundle';
import 'animate.css';



// Import images
import vape1 from '/src/assets/images/shape/vape1.png';
import vape2 from '/src/assets/images/shape/vape2.png';
import bannerImage1 from '/src/assets/images/banner/banner-two-image1.jpg';
import bannerImage2 from '/src/assets/images/banner/banner-two-image2.jpg';
import bannerImage3 from '/src/assets/images/banner/banner-two-image3.jpg';
import fireIcon from '/src/assets/images/icon/fire.svg';

function HomeBanner() {
    useEffect(() => {
        // Initialize WOW.js for animations
        var sliderActive3 = ".banner-two__slider";
        var sliderInit3 = new Swiper(sliderActive3, {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed: 3000,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".banner-two__arry-next",
                prevEl: ".banner-two__arry-prev",
            },
            
        });
        // Here this is use for animate ***
        function animated_swiper(selector, init) {
            var animated = function animated() {
                $(selector + " [data-animation]").each(function () {
                    var anim = $(this).data("animation");
                    var delay = $(this).data("delay");
                    var duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function () {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function () {
                $(sliderActive3 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
            // const wow = new WOW.WOW();
            // wow.init();
        }
        animated_swiper(sliderActive3, sliderInit3);;
    }, []);

    return (
        <>
            <section className="banner-two">
                <div className="banner-two__shape-left d-none d-lg-block wow bounceInLeft" data-wow-duration="1s"
                    data-wow-delay=".5s">
                    <img src={vape1} alt="shape" />
                </div>
                <div className="banner-two__shape-right d-none d-lg-block wow bounceInRight" data-wow-duration="1s"
                    data-wow-delay=".1s">
                    <img className="sway_Y__animation" src={vape2} alt="shape" />
                </div>
                <div className="swiper banner-two__slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="slide-bg" style={{ backgroundImage: `url(${bannerImage1})` }}></div>
                            <div className="container">
                                <div className="banner-two__content">
                                    <h4 data-animation="fadeInUp" data-delay="1s"><img src={fireIcon}
                                        alt="icon" /> GET <span className="primary-color">25% OFF</span> NOW</h4>
                                    <h1 data-animation="fadeInUp" data-delay="1.3s">Find everything <br />
                                        for <span className="primary-color">vaping</span></h1>
                                    <p className="mt-40" data-animation="fadeInUp" data-delay="1.5s">Sell globally in minutes
                                        with localized currencies languages, and <br /> experience in
                                        every
                                        market. only a variety of vaping
                                        products</p>
                                    <div className="banner-two__info mt-30" data-animation="fadeInUp" data-delay="1.7s">
                                        <span className="mb-10">Starting Price</span>
                                        <h3>$99.00</h3>
                                    </div>
                                    <div className="btn-wrp mt-65">
                                        <a href="shop.html" className="btn-one" data-animation="fadeInUp"
                                            data-delay="1.8s"><span>Shop
                                                Now</span></a>
                                        <a className="btn-one-light ml-20" href="shop-single.html" data-animation="fadeInUp"
                                            data-delay="1.9s"><span>View Details</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="slide-bg" style={{ backgroundImage: `url(${bannerImage2})` }}></div>
                            <div className="container">
                                <div className="banner-two__content">
                                    <h4 data-animation="fadeInUp" data-delay="1s"><img src={fireIcon}
                                        alt="icon" /> GET <span className="primary-color">25% OFF</span> NOW</h4>
                                    <h1 data-animation="fadeInUp" data-delay="1.3s">Find everything <br />
                                        for <span className="primary-color">vaping</span></h1>
                                    <p className="mt-40" data-animation="fadeInUp" data-delay="1.5s">Sell globally in minutes
                                        with localized currencies languages, and <br /> experience in
                                        every
                                        market. only a variety of vaping
                                        products</p>
                                    <div className="banner-two__info mt-30" data-animation="fadeInUp" data-delay="1.7s">
                                        <span className="mb-10">Starting Price</span>
                                        <h3>$99.00</h3>
                                    </div>
                                    <div className="btn-wrp mt-65">
                                        <a href="shop.html" className="btn-one" data-animation="fadeInUp"
                                            data-delay="1.8s"><span>Shop
                                                Now</span></a>
                                        <a className="btn-one-light ml-20" href="shop-single.html" data-animation="fadeInUp"
                                            data-delay="1.9s"><span>View Details</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="slide-bg" style={{ backgroundImage: `url(${bannerImage3})` }}></div>
                            <div className="container">
                                <div className="banner-two__content">
                                    <h4 data-animation="fadeInUp" data-delay="1s"><img src={fireIcon}
                                        alt="icon" /> GET <span className="primary-color">25% OFF</span> NOW</h4>
                                    <h1 data-animation="fadeInUp" data-delay="1.3s">Find everything <br />
                                        for <span className="primary-color">vaping</span></h1>
                                    <p className="mt-40" data-animation="fadeInUp" data-delay="1.5s">Sell globally in minutes
                                        with localized currencies languages, and <br /> experience in
                                        every
                                        market. only a variety of vaping
                                        products</p>
                                    <div className="banner-two__info mt-30" data-animation="fadeInUp" data-delay="1.7s">
                                        <span className="mb-10">Starting Price</span>
                                        <h3>$99.00</h3>
                                    </div>
                                    <div className="btn-wrp mt-65">
                                        <a href="shop.html" className="btn-one" data-animation="fadeInUp"
                                            data-delay="1.8s"><span>Shop
                                                Now</span></a>
                                        <a className="btn-one-light ml-20" href="shop-single.html" data-animation="fadeInUp"
                                            data-delay="1.9s"><span>View Details</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-two__arry-btn">
                    <button className="arry-prev mb-15 banner-two__arry-prev"><i className="fa-light fa-chevron-left"></i></button>
                    <button className="arry-next active banner-two__arry-next"><i
                        className="fa-light fa-chevron-right"></i></button>
                </div>
            </section>
        </>
    );
}

export default HomeBanner;
