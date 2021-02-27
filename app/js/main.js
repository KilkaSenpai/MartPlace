$(function () {
  var mixer = mixitup('.products__items');
  $(".create__select").select2({
    selectionCssClass: 'create__select',
    dropdownCssClass: 'create__option'
  });

  new Swiper('.resume__container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });
  new Swiper('.followers__container', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });
  new Swiper('.feedback__container', {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });

  $(".product-card__star").rate(options);
  var options = {
    initial_value: 4.5,
    readonly: true,
  }
});