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