import aboutBg from '/src/assets/images/banner/inner-banner.jpg'
function AboutBanner(){
    return(
        <>
          <section className="page-banner bg-image pt-130 pb-130" style={{ backgroundImage: `url(${aboutBg})` }}>
            <div className="container">
                <h2 className="wow fadeInUp mb-15" data-wow-duration="1.1s" data-wow-delay=".1s">About Us</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-duration="1.3s" data-wow-delay=".3s">
                    <a href="index.html" className="primary-hover"><i className="fa-solid fa-house me-1"></i> Home <i
                            className="fa-regular text-white fa-angle-right"></i></a>
                    <span>About</span>
                </div>
            </div>
        </section>
        </>
    );
}
export default AboutBanner