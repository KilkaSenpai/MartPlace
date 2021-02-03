$(function () {
  var mixer = mixitup('.products__items');
  $(".create__select").select2({
    selectionCssClass:  'create__select',
    dropdownCssClass: 'create__option'
  });

  new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });
  var options = {
    initial_value: 4.5,
    readonly: true,
  }
  $(".product-card__star").rate(options);
  var options = {
    initial_value: 4.5,
    readonly: true,
  }
});