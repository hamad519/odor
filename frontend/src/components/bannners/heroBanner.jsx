import React from 'react';
import { Link } from 'react-router-dom';
import heroBannerImg from '/src/assets/images/banner/inner-banner.jpg';
function HeroBanner({ pageTitle }) {
    return (
        <section 
            className="page-banner bg-image pt-130 pb-130" 
            style={{ backgroundImage: `url(${heroBannerImg})` }}
        >
            <div className="container">
                <h2 
                    className="wow fadeInUp mb-15" 
                    data-wow-duration="1.1s" 
                    data-wow-delay=".1s"
                >
                    {pageTitle}
                </h2>
                <div 
                    className="breadcrumb-list wow fadeInUp" 
                    data-wow-duration="1.3s" 
                    data-wow-delay=".3s"
                >
                    <Link 
                        to="/" 
                        className="primary-hover"
                    >
                        <i className="fa-solid fa-house me-1"></i> 
                        Home 
                        <i className="fa-regular text-white fa-angle-right pl-4"></i>
                    </Link>
                    <span className='pl-4'>{pageTitle}</span>
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;
