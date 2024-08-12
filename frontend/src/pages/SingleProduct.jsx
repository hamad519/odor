import Shop_banner from "../components/bannners/shop_banner";
import Preloader from "../components/loader/preLoader";
import ProductDetailArea from "../components/products/products_detail_area";

function SingleProduct(){
    return(
        <>
        <Preloader/>
        <Shop_banner/>
        <ProductDetailArea/>
        </>
    );
}
export default SingleProduct