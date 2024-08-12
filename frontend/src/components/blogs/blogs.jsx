import { useEffect } from "react"
import { Link } from "react-router-dom"
import Swiper from "swiper";
function Latest_Blogs(){
    useEffect(()=>{
        var swiper = new Swiper(".blog__slider", {
            loop: "true",
            spaceBetween: 30,
            speed: 500,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".blog__dot",
                clickable: true,
            },
        });
    },[])
    return(
        <>
        <section className="blog pt-130 pb-130 sub-bg">
            <div className="container">
                <div className="blog__head-wrp mb-65">
                    <div className="section-header d-flex align-items-center">
                        <span className="title-icon mr-10"></span>
                        <h2>our latest blog</h2>
                    </div>
                    <Link to="blogs" className="btn-two primary-hover mt-4 mt-md-0"><span>view all blog</span></Link>
                </div>
                <div className="row g-4">
                    <div className="col-xl-8">
                        <div className="blog__item-left">
                            <div className="swiper blog__slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <div className="blog__item-left-content">
                                                    <span className="blog__tag">vapers</span>
                                                    <h3><Link to="singleBlog">roup of young volunteers
                                                            park. they are vapeing</Link></h3>
                                                    <p>vapers planting is the act of planting young vaperss, shrubs, or
                                                        other woody
                                                        plants into the
                                                        ground to establish new
                                                        vapes.</p>
                                                    <span className="blog__item-left-content-info">By <strong
                                                            className="me-3">Max
                                                            Trewhitt</strong> 2
                                                        weeks ago</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="image">
                                                    <img className="radius-10" src="src/assets/images/blog/blog-image1.png"
                                                        alt="image"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <div className="blog__item-left-content">
                                                    <span className="blog__tag">vapers</span>
                                                    <h3><Link to="singleBlog">roup of young volunteers
                                                    park. they are vapeing</Link></h3>
                                                    <p>vapers planting is the act of planting young vaperss, shrubs, or
                                                        other woody
                                                        plants into the
                                                        ground to establish new
                                                        vapes.</p>
                                                    <span className="blog__item-left-content-info">By <strong>Max
                                                            Trewhitt</strong> 2
                                                        weeks ago</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="image">
                                                    <img className="radius-10" src="src/assets/images/blog/blog-image2.png"
                                                        alt="image"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <div className="blog__item-left-content">
                                                    <span className="blog__tag">vapers</span>
                                                    <h3><Link to="singleBlog">roup of young volunteers
                                                    park. they are vapeing</Link></h3>
                                                    <p>vapers planting is the act of planting young vaperss, shrubs, or
                                                        other woody
                                                        plants into the
                                                        ground to establish new
                                                        vapes.</p>
                                                    <span className="blog__item-left-content-info">By <strong>Max
                                                            Trewhitt</strong> 2
                                                        weeks ago</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="image">
                                                    <img className="radius-10" src="src/assets/images/blog/blog-image3.png"
                                                        alt="image"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__item-left-dot-wrp">
                                <div className="dot blog__dot"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 d-block d-md-none d-xl-block">
                        <div className="blog__item-right">
                            <Link to="singleBlog" className="image d-block">
                                <img className="radius-10" src="src/assets/images/blog/blog-image-sm.png" alt="image"/>
                            </Link>
                            <h3><Link to="singleBlog">Close up picture of the sapling of the vape is</Link>
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="blog__tag">vapers</span>
                                <span>2 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Latest_Blogs