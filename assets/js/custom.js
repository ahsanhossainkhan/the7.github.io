(function($){
    "use strict";
    // headerr
    $(window).scroll(function(){
        if($(window).scrollTop() > 10){
            $('.top-header').addClass('scroll');
            $('.header').addClass('scroll');
            $(':root').css('--header-color-white','#333');
            $(':root').css('--heder-hover-color','#1ebbf0');
            $('.logo-img').attr('src','assets/img/skin111r.webp');
            $('.logo').addClass('scroll')
        }else{
            $('.top-header').removeClass('scroll');
            $('.header').removeClass('scroll');
            $(':root').css('--header-color-white','#ffff')
            $(':root').css('--heder-hover-color','#ffff');
            $('.logo-img').attr('src','assets/img/skin11r.webp')
            $('.logo').removeClass('scroll')
        }
    })
    // banner slider
    $('.banner-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText:['<i class="icofont-long-arrow-left"></i>','<i class="icofont-long-arrow-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    // gallery
    $('.demo-image-gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
              enabled:true
            }
        });
    });
    // feedback slider
    $('.feedback-slider').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText:['<i class="icofont-rounded-left"></i>','<i class="icofont-rounded-right"></i>'],
    });
    // work slider
    $('.work-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText:['<i class="icofont-rounded-left work-slider-icon"></i>','<i class="icofont-rounded-right work-slider-icon"></i>'],
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('#jq-1').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '0px',
        height: '6px',
        width: '100%'
      });
      $('#jq-2').LineProgressbar({
        percentage: 60,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '0px',
        height: '6px',
        width: '100%'
      });
      $('#jq-3').LineProgressbar({
        percentage: 40,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '0px',
        height: '6px',
        width: '100%'
      });
      $('#jq-4').LineProgressbar({
        percentage: 30,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '0px',
        height: '6px',
        width: '100%'
      });
      $('#jq-5').LineProgressbar({
        percentage: 20,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '0px',
        height: '6px',
        width: '100%'
      });
    //   footer
    $('.services-item-header1').click(function(){
        $('.services-item-body1').slideToggle();
        $('.services-item-body2').slideUp();
        $('.services-item-body3').slideUp();
        $('.services-item-body4').slideUp();
        $('.services-item-body5').slideUp();
    });
    $('.services-item-header2').click(function(){
        $('.services-item-body1').slideUp();
        $('.services-item-body2').slideToggle();
        $('.services-item-body3').slideUp();
        $('.services-item-body4').slideUp();
        $('.services-item-body5').slideUp();
    });
    $('.services-item-header3').click(function(){
        $('.services-item-body1').slideUp();
        $('.services-item-body2').slideUp();
        $('.services-item-body3').slideToggle();
        $('.services-item-body4').slideUp();
        $('.services-item-body5').slideUp();
    });
    $('.services-item-header4').click(function(){
        $('.services-item-body1').slideUp();
        $('.services-item-body2').slideUp();
        $('.services-item-body3').slideUp();
        $('.services-item-body4').slideToggle();
        $('.services-item-body5').slideUp();
    });
    $('.services-item-header5').click(function(){
        $('.services-item-body1').slideUp();
        $('.services-item-body2').slideUp();
        $('.services-item-body3').slideUp();
        $('.services-item-body4').slideUp();
        $('.services-item-body5').slideToggle();
    });
    // back to top 
    $(window).scroll(function(){
        if($(window).scrollTop()> 30){
            $('.back-to-top').addClass('active')
        }else{
            $('.back-to-top').removeClass('active')
        }
    });
    $('.back-to-top-btn').click(function(){
        $('html').animate({scrollTop:0},500)
    })
})(jQuery);