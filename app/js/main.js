$(function () {
  var mixer = mixitup('.products__items');
  $(".create__select").select2({
    selectionCssClass: 'create__select',
    dropdownCssClass: 'create__option'
  });

  new Swiper('.resume__container', {
    navigation: {
      nextEl: '.resume__arrow-right',
      prevEl: '.resume__arrow-left',
    },
    loop: true,
  });
  new Swiper('.followers__container', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: '.followers__arrow-right',
      prevEl: '.followers__arrow-left',
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
  }
});
$(".menu__burger").on("click", function () {
  $(".menu__inner").slideToggle("slow");
});
