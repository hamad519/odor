import { useEffect } from "react"
import Swiper from "swiper";
function Testimonial(){
    useEffect(()=>{
        var swiper = new Swiper(".testimonial__slider", {
            loop: "true",
            spaceBetween: 20,
            speed: 500,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            // pagination: {
            // 	el: ".testimonial-two__dot",
            // 	clickable: true,
            // },
            navigation: {
                nextEl: ".testimonial__arry-next",
                prevEl: ".testimonial__arry-prev",
            },
        });
    },[])
    return(
        <>
        <section className="testimonial pt-130 pb-130">
            <div className="container">
                <div className="testimonial__wrp bor radius-10">
                    <div className="testimonial__head-wrp bor-bottom pb-65 pt-65 pl-65 pr-65">
                        <div className="section-header d-flex align-items-center">
                            <span className="title-icon mr-10"></span>
                            <h2>customers speak for us</h2>
                        </div>
                        <div className="arry-btn my-4 my-lg-0">
                            <button className="arry-prev testimonial__arry-prev"><i
                                    className="fa-light fa-chevron-left"></i></button>
                            <button className="ms-3 active arry-next testimonial__arry-next"><i
                                    className="fa-light fa-chevron-right"></i></button>
                        </div>
                    </div>
                    <div className="pt-45 pb-45 pr-55">
                        <div className="row g-4 align-items-center justify-content-between">
                            <div className="col-lg-7">
                                <div className="swiper testimonial__slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="testimonial__item pl-65">
                                                <div className="testi-header mb-30">
                                                    <div className="testi-content">
                                                        <h3>Kenneth S. Fisher</h3>
                                                        <span>marketing manager</span>
                                                    </div>
                                                    <i className="fa-solid fa-quote-right"></i>
                                                </div>
                                                <p>posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu.
                                                    Aenean non odio porttitor, convallis erat sit amet, facilisis velit.
                                                    Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac
                                                    fringilla.</p>
                                                <div className="star mt-30">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial__item pl-65">
                                                <div className="testi-header mb-30">
                                                    <div className="testi-content">
                                                        <h3>Francis A. Cote</h3>
                                                        <span>Garden Maker</span>
                                                    </div>
                                                    <i className="fa-solid fa-quote-right"></i>
                                                </div>
                                                <p>posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu.
                                                    Aenean non odio porttitor, convallis erat sit amet, facilisis velit.
                                                    Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac
                                                    fringilla.</p>
                                                <div className="star mt-30">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial__image">
                                    <div className="swiper testimonial__slider">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <img src="src/assets/images/testimonial/testimonial1.png" alt="image"/>
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="src/assets/images/testimonial/testimonial2.png" alt="image"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Testimonial