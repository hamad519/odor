import serviceImg from '/src/assets/images/bg/about-bg.jpg'
function Service_area(){
    return(
        <>
        <section className="service-area pt-130 pb-130 bg-image" style={{backgroundImage: `url(${serviceImg})`}}>
            <div className="container">
                <div className="row g-4 align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="service__item mb-50">
                            <div className="service__icon">
                                <img src="src/assets/images/icon/feature-icon1.png" alt="icon"/>
                            </div>
                            <div className="service__content">
                                <h4>Free delivery</h4>
                                <p>For all orders above $45</p>
                            </div>
                        </div>
                        <div className="service__item">
                            <div className="service__icon">
                                <img src="src/assets/images/icon/feature-icon2.png" alt="icon"/>
                            </div>
                            <div className="service__content">
                                <h4>Secure payments</h4>
                                <p>Confidence on all your devices</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4 d-none d-lg-block">
                        <div className="service__image image">
                            <img src="src/assets/images/service/service-image.png" alt="image"/>
                            <div className="section-header service-header d-flex align-items-center">
                                <span className="title-icon mr-10"></span>
                                <h2>sign up & save 25%</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="service__item mb-50">
                            <div className="service__icon">
                                <img src="src/assets/images/icon/feature-icon3.png" alt="icon"/>
                            </div>
                            <div className="service__content">
                                <h4>Top-notch support</h4>
                                <p>sayhello&gazacom</p>
                            </div>
                        </div>
                        <div className="service__item">
                            <div className="service__icon">
                                <img src="src/assets/images/icon/feature-icon4.png" alt="icon"/>
                            </div>
                            <div className="service__content">
                                <h4>180 Days Return</h4>
                                <p>money back guranry</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Service_area