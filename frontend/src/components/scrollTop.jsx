import { useEffect } from "react"

function ScrollTop() {
    useEffect(()=>{
        var scrollPath = document.querySelector(".scroll-up path");
var pathLength = scrollPath.getTotalLength();
scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
scrollPath.style.strokeDashoffset = pathLength;
scrollPath.getBoundingClientRect();
scrollPath.style.transition = scrollPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
var updatescroll = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var scroll = pathLength - (scroll * pathLength) / height;
    scrollPath.style.strokeDashoffset = scroll;
};
updatescroll();
$(window).scroll(updatescroll);
var offset = 50;
var duration = 950;
jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
        jQuery(".scroll-up").addClass("active-scroll");
    } else {
        jQuery(".scroll-up").removeClass("active-scroll");
    }
});
jQuery(".scroll-up").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate(
        {
            scrollTop: 0,
        },
        duration
    );
    return false;
});
    },[])
    return (
       
        <>
            <div className="scroll-up">
                <svg className="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
        </>
    )
}
export default ScrollTop