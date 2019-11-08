/*global $*/
$('document').ready(function () {
    'use strict';
       //stiky nav
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.navbar').addClass('sticky-nav');
        } else {

            $('.navbar').removeClass('sticky-nav');
        }
    });

      // scroll smoth 

    $('nav .navbar-nav .nav-item .nav-link ').click(function () {
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    $('.resume-down').click(function () {
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    //skills
    $('.skills .btn-style').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        window.console.log('yes');
        if ($(this).data('class') === 'pers-skills') {
            $('.pers-skills').fadeIn();
            $('.hair-skills').hide();
        } else {
            $('.pers-skills').hide();
            $('.hair-skills').fadeIn();
        }
    });

    // work
    $(".work .btn-style").click(function () {
        $(".work .group-two .box").toggle();
    });

   // scroll top 
    $('.scroll-top').click(function () {
        $('html , body').animate({
            scrollTop: $('#hea').offset().top
        }, 1000);
        
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {$('#scroll').fadeOut();
            }
    });

});


  