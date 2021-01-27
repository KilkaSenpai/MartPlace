$(function () {
  var mixer = mixitup('.products__items');
  var $disabledResults = $(".js-example-disabled-results");
  $disabledResults.select2();
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
  $(".resume__star").rate(options);
  var options = {
    initial_value: 4.5,
    readonly: true,
  }
  $(".products__star").rate(options);
});