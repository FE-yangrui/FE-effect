$(function() {
    // 选择行业-close 动画
    $(document).on("click", '.floating-nav-content ul a, .close-floating-nav-pop', function() { // 选择行业收起
        industryPopHide();
    }).on("click", '.floating-nav-fixed-ball', function() { // 选择行业展开
        industryPopShow();
    })

    function industryPopHide() {
        $('.floating-nav-mask').hide();
        $(".floating-nav-content").removeClass("floating-nav-pop-show").addClass("floating-nav-pop-hide");
        setTimeout(function() {
            $(".floating-nav-content").hide();
            $('.floating-nav-fixed-ball').show();
        }, 990)
    }

    function industryPopShow() {
        $(".floating-nav-content").addClass("floating-nav-pop-show");
        $('.floating-nav-mask, .floating-nav-content').show();
        $('.floating-nav-fixed-ball').hide();
        setTimeout(function() {
            $(".floating-nav-content").removeClass('floating-nav-pop-hide');
        }, 350);
    }
})