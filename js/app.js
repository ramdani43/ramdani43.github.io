$('.page-scroll').on('click', function () {

    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 100
    }, 1000);

});


//navbar responsive
$(".burger").click(function () {
    $(".nav-links").toggleClass("nav-active");
    $(".burger").toggleClass("cross");
});

// navbar fixed
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('nav').addClass("nav-fixed");
    } else {
        $('nav').removeClass("nav-fixed");
    }
});


// load animation
$(window).on("load", function () {
    $('nav').addClass("nav-show");
    $('.colom1').addClass("colom1-show");
    $('.colom2').addClass("colom2-show");
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.about-content2').addClass("about-show2");
        $('.about-content1').addClass("about-show1");
    } else {
        $('.about-content2').removeClass("about-show2");
        $('.about-content1').removeClass("about-show1");
    }


    if ($(this).scrollTop() > 900) {
        $('.card').each(function (i) {
            setTimeout(function () {
                $('.card').eq(i).addClass("card-show");
            }, 300 * (i + 1));
        });
    }
});