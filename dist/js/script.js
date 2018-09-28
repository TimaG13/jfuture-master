$(document).ready(function () {

    $(window).on('mousemove', function (e) {
        var w = $(window).width();
        var h = $(window).height();


        var offsetX = 0.5 - e.pageX / w;
        var offsetY = 0.5 - e.pageY / h;

        $('.parallax').each(function (i, el) {
            var offset = parseInt($(el).data('offset'));

            var translate = 'translate3d(' + Math.round(offsetX * offset)
                + 'px,' + Math.round(offsetY * offset) + 'px, 0px)';

            $(el).css({
                '-webkit-transform': translate,
                '-moz-transform': translate,
                '-o-transform': translate,
                'transform': translate
            })

        });

    });
    $('#counter').click(function () {
        $('#counter-p').html(+$('#counter-p').html() + 1);
        $("#counter-p").addClass("intro");
        $("#counter").removeClass("anim-lov");
    });
    // slider
    $('.center').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

        var windowWidth = $(window).width();
        if(windowWidth < 400) {
            $(".serv-content .box, .box-inf > div").removeClass("col-xs-8");
            $(".serv-content .box, .box-inf > div").addClass("col-xs-12");
        }
        else {
            $(".serv-content .box, .box-inf > div").removeClass("col-xs-12");
            $(".serv-content .box, .box-inf > div").addClass("col-xs-8");
        }


});


