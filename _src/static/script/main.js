'use strict';

svg4everybody();

// ///////////////////////////////////// polifill inicialize
objectFitImages();

// //////////////////////////////////// plagin inicialize
$('[data-js="selectric"]').selectric()

// ///////////////////////////////////// block
@@include('block/__slider.js');
@@include('block/__button-blur.js');
@@include('block/__header-btn-search.js')
@@include('block/__up.js');




$('[data-js="header__btn-menu"]').on('click', function() {
  $('[data-js="m-nav"]').fadeIn(300);
  $('body').css('overflow-y', 'hidden');
})

$('[data-js="m-nav__btn"]').on('click', function() {
  $('[data-js="m-nav"]').fadeOut(300);
  $('body').css('overflow-y', 'auto');
})

$(window).on('resize', function() {
  if($('[data-js="header__btn-search"]').is(':visible')) {
    $('[data-js="m-nav"]').hide();
    $('body').css('overflow-y', 'auto');
  }
})