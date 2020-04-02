$('.page-scroll').click(function (e) {

    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 70
    }, 1000, 'easeInOutExpo');

    e.preventDefault();

});


//navbar responsive
$(".burger").click(function () {
    $(".nav-links").toggleClass("nav-active");
    $(".burger").toggleClass("cross");
});

// navbar fixed
if ($('body').width() >= 720) {

    // DEKSTOP VERSION
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('nav').addClass("nav-fixed");
        } else {
            $('nav').removeClass("nav-fixed");
        }
    });
} else {
    // MOBILE VERSION
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('nav').addClass("nav-fixed");
        } else {
            $('nav').removeClass("nav-fixed");
        }
    });
}


// load animation
$(window).on("load", function () {
    $('nav').addClass("nav-show");
    $('.colom1').addClass("colom1-show");
    $('.colom2').addClass("colom2-show");
});


if ($('body').width() >= 720) {
    // DEKSTIOP VERDION
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.about-content2').addClass("about-show2");
            $('.about-content1').addClass("about-show1");
        } else {
            $('.about-content2').removeClass("about-show2");
            $('.about-content1').removeClass("about-show1");
        }

        if ($(this).scrollTop() > 1000) {
            $('.card').each(function (i) {
                setTimeout(function () {
                    $('.card').eq(i).addClass("card-show");
                }, 300 * (i + 1));
            });
        }
    });

} else {
    // MOBILE VERSION
    $(window).on("load", function () {
        $('.about-content2').addClass("about-show2");
        $('.about-content1').addClass("about-show1");
        $('.card').addClass("card-show");
    });
}