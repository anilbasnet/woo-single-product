jQuery(function ($) {
    // Single Main Slider
  $(".single-main-thumb").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: false,
    asNavFor: ".pager-thumbnail",
    prevArrow: '<button type="button" class="slick-prev" aria-label="Previous slide"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button type="button" class="slick-next" aria-label="Next slide"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>',
    rtl: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]
  });

  // Single Thumbnail Slider
  $(".pager-thumbnail").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".single-main-thumb",
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      arrows: true,
      vertical: true,
      prevArrow: '<button type="button" class="slick-prev" aria-label="Previous slide"><i class="fa-solid fa-chevron-up"></i></button>',
      nextArrow: '<button type="button" class="slick-next" aria-label="Next slide"><i class="fa-solid fa-chevron-down"></i></button>',
  });

   // Related Post Carousel
  $(".section-related-product-carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-next" aria-label="Previous slide"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>',
    nextArrow: '<button type="button" class="slick-prev" aria-label="Next slide"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>',
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      
      }
    ]
  });

 //Faq's
  $('.faq-list').find('.faq-content').hide();
  $(document).on('click', '.faq-title', function() {
    $(this).parent().siblings().removeClass('acc_active');
    $(this).parent().siblings().find('.faq-content').slideUp(200);
    $(this).parent().toggleClass('acc_active');
    $(this).parent().siblings().removeClass('acc_active');
    $(this).next('.faq-content').slideToggle(200);
  });

 // Quantity
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
 
});
