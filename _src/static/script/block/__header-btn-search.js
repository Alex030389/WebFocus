$('[data-js="header__btn-search"]').on('click', function() {
  $('[data-js="header__search-form"]').slideToggle(50);
})

$(window).on('resize', function() {
  if($('[data-js="header__btn-search"]').is(':hidden')) {
    $('[data-js="header__search-form"]').hide();
  }
})