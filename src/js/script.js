// big_header shopping_nav search form
function searchForm() {
    document.getElementById("search").style.display = "block";
    document.querySelector(".search_icon").type = "submit";
}
// 메인 슬라이더
$('.main_visual').slick({
    infinite : true,
    pauseOnHover : false,
    pauseOnFocus: false,
    vertical : true,
    dots: true,
    arrows : false,
    autoplay: false,
    autoplaySpeed: 2500,
});