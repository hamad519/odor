import Preloader from "./components/loader/preLoader";
import HomeBanner from "./components/bannners/home_banner";
import Categories from "./components/categories/categories";
import PremiumSolu from "./components/premiumVapingSolu.jsx/premiumVaping";
import { useEffect } from "react";
import ArrivalProducts from "./components/products/ArrivalProducts";
import Favourite from "./components/favourite/favourite";
import ArrivalProductBanner from "./components/bannners/arrivalProduct_banner";
import VapeTypesBanner from "./components/bannners/vapeTypes_banner";
import GalleryBanner from "./components/bannners/productGalley_banner";
import TopBrandsBanner from "./components/bannners/topBrands_banner";

function App() {
  useEffect(() => {
    ("use strict");

    $(".header-bar").on("click", function (e) {
      $(".main-menu, .header-bar").toggleClass("active");
    });
    $(".main-menu li a").on("click", function (e) {
      var element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(300, "swing");
      } else {
        element.addClass("open");
        element.children("ul").slideDown(300, "swing");
        element.siblings("li").children("ul").slideUp(300, "swing");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.siblings("li").find("ul").slideUp(300, "swing");
      }
    });
    var fixed_top = $(".header-section");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 220) {
        fixed_top.addClass("menu-fixed animated fadeInDown");
        fixed_top.removeClass("slideInUp");
        $("body").addClass("body-padding");
      } else {
        fixed_top.removeClass("menu-fixed fadeInDown");
        fixed_top.addClass("slideInUp");
        $("body").removeClass("body-padding");
      }
    });
  }, []);

  return (
    <>
      <Preloader />
      <HomeBanner />
      <Categories />
      <PremiumSolu />
      <ArrivalProducts />
      <Favourite />
      <ArrivalProductBanner />
      <VapeTypesBanner />
      <GalleryBanner />
      <TopBrandsBanner/>
    </>
  );
}

export default App;
