$(document).ready(function() {
//smooth js
$('.list').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 500); // The number here represents the speed of the scroll in milliseconds
      return false;
    }
  }
});

$('.backgroundimages').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplayspeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseonhover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.upComingEventsSlider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200){  
        $('body').addClass("sticky");
      }
      else{
        $('body').removeClass("sticky");
      }
    });


  //menu
    $(".menubtn").click(function() {
       $('.menuholder').addClass("menuholderadd");
  });
     $(".cross").click(function() {
       $('.menuholder').removeClass("menuholderadd");
  });

     $(".hashchild .newadd").click(function() {
       $(this).parents('.hashchild').children('.submenu').slideToggle();
  });
    
    });