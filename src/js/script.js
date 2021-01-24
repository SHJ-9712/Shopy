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

// price filters
$(".price_range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [74, 312],
    slide: function(event, ui) {
        $("#from").val(ui.values[0]);
        $("#to").val(ui.values[1]);

        priceFirstVal.find("i").text(ui.values[0] + "$");
        priceLastVal.find("i").text(ui.values[1] + "$");
    }
});
$("#from").val($(".price_range").slider("values", 0));
$("#to").val($(".price_range").slider("values", 1));

const priceVal = $(".price_filtter .price_range .ui-slider-handle"),
    priceFirstVal = priceVal.filter(":first-of-type"),
    priceLastVal = priceVal.filter(":last-of-type");

priceVal.append("<i></i>");
priceFirstVal.find("i").text($(".price_range").slider("values", 0) + "$");
priceLastVal.find("i").text($(".price_range").slider("values", 1) + "$");

$("#from").change(function(){
    const userVal = $(this).val();
    $(".price_range").slider("values", 0, userVal);
    priceFirstVal.find("i").text(userVal + "$");
});
$("#to").change(function(){
    const userVal = $(this).val();
    $(".price_range").slider("values", 1, userVal);
    priceLastVal.find("i").text(userVal + "$");
});

// product Filtering
// const sizeFilter = $(".sizes input"),
//     targetList = $(".product_list .product");

// sizeFilter.click(function(){
//     let targetValue = [];
//     sizeFilter.filter(":checked").each(function(){
//         targetValue.push("." + $(this).val());
//     });
//     const targetClass = targetValue.join(",");
    
//     targetList.hide();
//     $(targetClass).fadeIn();
// });

let $grid = $('.product_list').isotope({
    itemSelector: '.product'
});
let $filters = $(".combi_filters input");
let filters = {};
$filters.on('click', function(){
    // var $button = $( event.currentTarget );
    let $button = $(this);

    let $buttonGroup = $button.parents('ul');
    let filterGroup = $buttonGroup.attr('data-filter-group');

    filters[filterGroup] = $button.val();

    let filterValue = concatValues(filters);
    $grid.isotope({filter: filterValue});

    if($button.val() === "*") {
        $filters.prop("checked", false);
        $button.prop("checked", true);
    } else {
        $filters.eq(0).prop("checked", false);
    }
});
function concatValues(obj) {
    var value = '';
    for (var prop in obj) {
        value += obj[prop];
    }
    return value;
}