import { Link } from 'react-router-dom'
import shopImg from '/src/assets/images/banner/inner-banner.jpg'
function Shop_banner(){
    return(
        <>
         <section className="page-banner bg-image pt-130 pb-130" style={{ backgroundImage: `url(${shopImg})`}}>
            <div className="container">
                <h2 className="wow fadeInUp mb-15" data-wow-duration="1.1s" data-wow-delay=".1s">Shop Details</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-duration="1.3s" data-wow-delay=".3s">
                    <Link to="/" className="primary-hover"><i className="fa-solid fa-house me-1"></i> Home <i
                            className="fa-regular text-white fa-angle-right"></i></Link>
                    <Link to="allProduct" className="primary-hover"> shop <i
                            className="fa-regular text-white fa-angle-right"></i></Link>
                    <span>Shop Details</span>
                </div>
            </div>
        </section>
        </>
    )
}
export default Shop_banner