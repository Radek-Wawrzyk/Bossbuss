
  //Preloader & Afterloader
  $(document).ready(function() {
      $('a').click(function(e){
        redirect = $(this).attr('href');
        e.preventDefault();
        $('body').fadeOut("slow", function(){
          document.location.href = redirect;
        });
    });

  });

  //Menu mobile
  $(document).ready(function() {
    $(".navigation-button").click(function() {
      $(this).toggleClass('open');
      $(".navigation-menu").toggleClass('open');
    });
  });

  //Modal

  $(document).ready(function() {
    $(".modal-open").click(function() {
      var modal_id = $(this).attr("data-modal");

      $(".modal").addClass('overflow');

      $(".modal").fadeOut();
      $("#" + modal_id).fadeIn();

      $(".btn-close-modal").click(function() {
        $(".modal").fadeOut(function () {
          $(this).hide();
        });
        $(".modal").removeClass('overflow');
      });

      $(".fa-times").click(function() {
        $(".modal").fadeOut(function () {
          $(this).hide();
        });
        $(".modal").removeClass('overflow');
      });
    });
  });

  //aos

  AOS.init();

  // Text slider
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
       nav: false,
       items: 1,
       loop:true,
       pagination: true,
       autoplay: true,
       autoplayTimeout: 3000,
       smartSpeed: 1000,
       autoplayHoverPause: true
    });
  });
