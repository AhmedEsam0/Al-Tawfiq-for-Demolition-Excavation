(function ($) {
  'use strict';

  // Initiate the wowjs
  new WOW().init();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.sticky-topbar').addClass('shadow-sm').css('top', '0px','!important');

      $('.sticky-top').addClass('shadow-sm').css('top', '49px');
    } else {
      $('.sticky-topbar').removeClass('shadow-sm').css('top', '-200px');

      $('.sticky-top').removeClass('shadow-sm').css('top', '-200px');
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });
})(jQuery);
