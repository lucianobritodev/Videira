$(document).ready(function() {
    //var targetOffset = $('#back-to-top').offset().top;
    
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 700);
    });
});