jQuery(function ($) {
  $(".single-main-thumb").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: false,
    asNavFor: ".pager-thumbnail",
     prevArrow: '<span data-role="none" class="slick-prev" tabindex="0"></span>',
	  nextArrow: '<span data-role="none" class="slick-next" tabindex="0"></span>',
    rtl: true,
    responsive: [
     
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]
  });

  $(".pager-thumbnail").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".single-main-thumb",
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      arrows: true,
      vertical: true,
      prevArrow:
        '<span data-role="none" class="slick-prev" tabindex="0"></span>',
      nextArrow:
        '<span data-role="none" class="slick-next" tabindex="0"></span>',
  
  });

  $(".section-related-product-carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    infinite: true,
    prevArrow:
      '<span data-role="none" class="slick-prev" tabindex="0"></span>',
    nextArrow:
      '<span data-role="none" class="slick-next" tabindex="0"></span>',
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
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  $('.faq-list').find('.faq-content').hide();
  $(document).on('click', '.faq-title', function(){
    $(this).parent().siblings().removeClass('acc_active');
    $(this).parent().siblings().find('.faq-content').slideUp('slow');
    $(this).parent().toggleClass('acc_active');
    $(this).parent().siblings().removeClass('acc_active');
    $(this).next('.faq-content').slideToggle('slow');
  })


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
