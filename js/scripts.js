
  $(document).ready(function() {
    $(window).load(function(){
      $(".preloader-left, .preloader-right ").css('width', '0')
      $(".preloader-text").fadeOut("fast");
      $("body").css({
        'overflow':'visible'
      });
      $(".preloader").css(

      );
    });
  });

  // Text slider
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
       nav: false,
       items: 1,
       loop:true,
       pagination: true,
       autoplay: true,
       autoplayTimeout: 3000,
       autoplayHoverPause: true
    });
  });

  //Menu
  $(document).ready(function() {
    $(".menu-btn").click(function() {
      $(".right-menu").toggleClass('show');
    });
    $(".right-menu span").click(function() {
      $(".right-menu").toggleClass('show');
    });
  });

