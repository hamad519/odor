import React from 'react';
import HeroBanner from "../components/bannners/heroBanner";
import Disccount_banner from "../components/bannners/discount_banner";
import TopBrandsBanner from "../components/bannners/topBrands_banner";
import Latest_Blogs from "../components/blogs/blogs";
import Preloader from "../components/loader/preLoader";
import Service from "../components/serviceArea/service_area";
import Testimonial from "../components/testimonials/testimonial";

// Import the background image for the About page


function About() {
    return (
        <>
            <Preloader />
            <HeroBanner 
                pageTitle="About Us" 
            />
            <Disccount_banner />
            <Service />
            <Testimonial />
            <Latest_Blogs />
            <TopBrandsBanner />
        </>
    );
}

export default About;
