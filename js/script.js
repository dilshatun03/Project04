$(function(){
    // manu part js started from here*/
    $('.my_manu_align').click(function(){
        $('#my_nav ul').fadeToggle(500);
        $('.my_navbar img').toggleClass('my_logo_image_return');
      
    });
    // manu part js ended from here

    // bannar part js started from here
    $('.bannar_section').slick({
        
        infinite: true,
        //slidesToShow: 3,
        //slidesToScroll: 3
        prevArrow:'<div class="bannar_arrows bannar_arrows_prev "><span><i class="fas fa-chevron-left bannar_icon "></i></span></div>',
        nextArrow:'<div class="bannar_arrows bannar_arrows_next"><span><i class="fas fa-chevron-right bannar_icon "></i></span></div>',
        autoplaySpeed:1000,
        autoplay:true,

    });
    // bannar part js ended from here

    // blog section js started from here
 $('.blog_slider').slick({
    autoplay:true,
     autoplaySpeed:1500,
    slidesToShow:3,
    centerMode: true, 
    centerPadding: '0',
    prevArrow:'<div class="font_awesome_icon left_icon"><span><i class="fas fa-chevron-left font_awesome_slider_icon_prev"></i></span></div>',
    nextArrow:'<div class="font_awesome_icon right_icon"><span><i class="fas fa-chevron-right font_awesome_slider_icon_next"></i></span></div>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            //dots: true
          }
        },
        {
            breakpoint:992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              //dots: true
            }
          },
        {
          breakpoint: 600,
          settings: {
            arrows:false,
            slidesToShow:1,
            slidesToScroll:1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            arrows:false,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

    });
// blog section js ended from here


//testimonial part js started from here
$('.testimonial_text').slick({
  //autoplay:true,
  autoplaySpeed:1500,
  slidesToShow:1,
  slidesToScroll: 1,
  arrows:false,
  asNavFor: '.testimonial_image',
  fade: true,

});
$('.testimonial_image').slick({
  //autoplay:true,
  autoplaySpeed:1500,
  slidesToShow:3,
  slidesToScroll: 1,
  centerMode: true, 
  centerPadding: '0',
  asNavFor: '.testimonial_text',
  arrows:true,
  prevArrow:'<div class="testimonial_slider_arrows  testimonial_slider_icon_prev "><span><i class="fas fa-chevron-left "></i></span></div>',
  nextArrow:'<div class="testimonial_slider_arrows  testimonial_slider_icon_next"><span><i class="fas fa-chevron-right "></i></span></div>',

});
//testimonial part js ended from here

// partner part goes here

$('.partner_part_slider').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 1000,
  prevArrow:'<div class="partner_part_slider_arrows  partner_part_slider_icon_prev "><span><i class="fas fa-chevron-left "></i></span></div>',
  nextArrow:'<div class="partner_part_slider_arrows  partner_part_slider_icon_next"><span><i class="fas fa-chevron-right "></i></span></div>',

  responsive: [
    {
      breakpoint:1199,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows:false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    },
  ]
});
// partner part ends herepartner_part_slider_arrows// partner part ends herepartner_part_slider_arrows
// partner part ends herepartner_part_slider_arrows// partner part ends herepartner_part_slider_

// about page js goes from here

$('.team_part_slider').slick({
  slidesToShow: 3,
  autoplay:true,
  autoplaySpeed: 1500,
  centerMode: true, 
  centerPadding: '0',
  slidesToScroll: 1,
  prevArrow:'<div class="team_part_slider_arrows  team_part_slider_icon_prev "><span><i class="fas fa-chevron-left "></i></span></div>',
  nextArrow:'<div class="team_part_slider_arrows  team_part_slider_icon_next"><span><i class="fas fa-chevron-right "></i></span></div>',
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 3,
        slidesToScroll:1,
        infinite: true,
        arrows:false,
        //dots: true
      }
    },
    {
      breakpoint:992,
      settings: {
        slidesToShow: 3,
        slidesToScroll:1,
        infinite: true,
        arrows:false,
        //dots: true
      }
    },
    {
      breakpoint:768,
      settings: {
        slidesToShow: 2,
        slidesToScroll:1,
        infinite: true,
        arrows:false,
        //dots: true
      }
    },
    {
      breakpoint:576,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        infinite: true,
        arrows:false,
        //dots: true
      }
    },
   
  ]
});

// about page js ended from here

});