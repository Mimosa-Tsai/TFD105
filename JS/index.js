// 導覽列scroll轉換背景色
$(document).ready(function() {

    $(window).scroll(function() {

        var height = $('.cover').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 400) {
            $('.nav_bg').addClass('solid_nav');
        } else {
            $('.nav_bg').removeClass('solid_nav');
        }

    });
});