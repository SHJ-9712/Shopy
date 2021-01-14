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
    autoplay: true,
    autoplaySpeed: 2000,
});
// product 더보기 버튼
var limit = 4;
var per_page = 4;
$('.product_list > li.product:gt('+(limit-1)+')').hide();
if ($('.product_list > li.product').length <= limit) {
    $('.more_view').hide();
};
$('.more_view').bind('click', function(){
    limit += per_page;
    $('.product_list > li.product:lt('+(limit)+')').show();
    if ($('.product_list > li.product').length <= limit) {
        $(this).hide();
    }
});