//////////////////////////////////////////// data-slider="1"
$('[data-slider="1"]').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  accessibility: false,
  touchThreshold: 10,
  swipeToSlide: true
});

$('.agitation__btn.slick-btn_prev').on('click', function() {
  $('[data-slider="1"]').slick('slickPrev')
})
$('.agitation__btn.slick-btn_next').on('click', function() {
  $('[data-slider="1"]').slick('slickNext')
})


//////////////////////////////////////////// data-slider="2"
$('[data-slider="2"]').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  accessibility: false,
  touchThreshold: 10,
  swipeToSlide: true,
  fade: true
  // responsive: [
  //   {
  //     breakpoint: 1200,
  //     settings: {
  //       variableWidth: true
  //     }
  //   }
  // ]
});

$('.priciple__btn.slick-btn_prev').on('click', function() {
  $('[data-slider="2"]').slick('slickPrev')
})
$('.priciple__btn.slick-btn_next').on('click', function() {
  $('[data-slider="2"]').slick('slickNext')
})

// //////////////////////////////////////////// data-slider="3"
$('[data-slider="3"]').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  infinite: true,
  dots: true,
  accessibility: false,
  touchThreshold: 10,
  swipeToSlide: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.feedback__btn.slick-btn_prev').on('click', function() {
  $('[data-slider="3"]').slick('slickPrev')
})
$('.feedback__btn.slick-btn_next').on('click', function() {
  $('[data-slider="3"]').slick('slickNext')
})