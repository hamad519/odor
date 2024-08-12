import { Link } from "react-router-dom";

function Disccount_banner(){
    return(
        <>
        <section className="discount-area about-area pt-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="image position-relative">
                            <img className="radius-10" src="src/assets/images/about/about-image.jpg" alt="image"/>
                            <div className="video__btn-wrp">
                                <div className="video-btn video-pulse">
                                    <Link className="video-popup secondary-bg"
                                        to="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"><i
                                            className="fa-solid fa-play"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="discount__item pl-30">
                            <div className="section-header">
                                <div className="section-title-icon">
                                    <span className="title-icon mr-10"></span>
                                    <h2>We Are Here To Increase Your Modern Life</h2>
                                </div>
                                <p className="mt-30 mb-55">Sell globally in minutes with localized currencies languages, and
                                    <br/>
                                    experie in every
                                    market. only a variety of vaping
                                    products globally in with localized currencies languages globally in
                                    with localized currencies languages Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Neque exercitationem perspiciatis rem sed ipsum assumenda nemo
                                    praesentium blanditiis tempora consequuntur cum beatae saepe facere quis dolore
                                    dignissimos nihil.
                                </p>
                                <Link className="btn-one" to="contact"><span>More About us</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default Disccount_banner