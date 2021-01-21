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

// product_show
const $productPictures = $('.product_pictures'),
    $bigImg = $productPictures.find('.big_img'),
    $thumbImgList = $productPictures.find('.thumb_img li');

$thumbImgList.click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    const targetImgPath = 'images/' + $(this).find('img').attr('data-target');
    $bigImg.attr('src', targetImgPath);
});

const $quantity = $('.quantity'),
    $quantityBtn = $quantity.find('button'),
    $quantityInput = $quantity.find('input'),
    $tagetPrice = $('.total_price strong'),
    $price = $tagetPrice.attr('date-price');

$quantityBtn.click(function(){
    let currentCount = $quantityInput.val();

    if($(this).hasClass('plus')) {
        $quantityInput.val(++currentCount);
    } else if($(this).hasClass('minus')) {
        if(currentCount > 1) {
            $quantityInput.val(--currentCount);
        }
    }

    let total = (currentCount * $price).toLocaleString('en');
    $tagetPrice.text(total + '$');
})