$(function () {
    if ($('.products__items').length > 0) {
        var mixer = mixitup('.products__items');
    }

    $(".create__select").select2({
        selectionCssClass: 'create__select',
        dropdownCssClass: 'create__option'
    });

    $(".top-filter__select").select2({
        selectionCssClass: 'top-filter__select',
        dropdownCssClass: 'top-filter__option'
    });

    new Swiper('.resume__container', {
        navigation: {
            nextEl: '.resume__arrow-right',
            prevEl: '.resume__arrow-left',
        },
        pagination: {
            el: '.resume__pagination',
            clickable: true,
        },
        loop: true,
        centeredSlides: true,
        breakpoints: {
            1200: {
                slidesPerView: 1,
            },
            1120: {
                slidesPerView: 3,
            },
            780: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1.5,
            },
            320: {
                slidesPerView: 1,
            },
        },
    });

    new Swiper('.followers__container', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,

        navigation: {
            nextEl: '.followers__arrow-right',
            prevEl: '.followers__arrow-left',
        },

        pagination: {
            el: '.followers__pagination',
            clickable: true,
        },

        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            1000: {
                slidesPerView: 2.7,
                spaceBetween: 10,
            },
            790: {
                slidesPerView: 2.2,
            },
            650: {
                slidesPerView: 1.7,
            },
            570: {
                slidesPerView: 1.4,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    });

    new Swiper('.feedback__container', {
        spaceBetween: 30,
        navigation: {
            nextEl: '.feedback__arrow-right',
            prevEl: '.feedback__arrow-left',
        },

        pagination: {
            el: '.feedback__pagination',
            clickable: true,
        },

        loop: true,
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        },
    });

    $(".product-card__star").rate(options);
    var options = {
        initial_value: 4.5,
        readonly: true,
    };

    var $range = $(".aside-filter__slider"),
        $inputFrom = $(".js_from"),
        $inputTo = $(".js_to"),
        instance,
        min = 0,
        max = 1000,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        hide_min_max: true,
        hide_from_to: true,
        onStart: updateInputs,
        onChange: updateInputs,
        prefix: "$"
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;
        $inputFrom.prop("value", '$' + from);
        $inputTo.prop("value", '$' + to);
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });


    $('.top-filter__show--list').on('click', function () {
        $('.product-list').addClass('list');
        $('.top-filter__show--list').addClass('active');
        $('.top-filter__show--large').removeClass('active');
    });
    $('.top-filter__show--large').on('click', function () {
        $('.product-list').removeClass('list');
        $('.top-filter__show--large').addClass('active');
        $('.top-filter__show--list').removeClass('active'); 
    });

});

$(".menu__burger").on("click", function () {
    $(".menu__inner").slideToggle("slow");
    $(".menu__burger").toggleClass("menu__burger--close");
});

$(function () {
    if ($(window).width() <= 1200) {
        $(".header__icon,.header__user").on("click", function () {
            $(".dropdowns").slideToggle("slow");
        });
    };
});

$('.js_btn').on('click', function () {
    $(this).next('.js_list').slideToggle();
    $(this).on(".js_btn").toggleClass("open");
});

$('.js_title').on('click', function () {
    $(this).on(".js_title").toggleClass("closed");
    $(this).on(".js_btn").removeClass("open");
}); 