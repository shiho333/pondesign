$(function () {
  $(window).on('scroll', function () {
    if ($('.header').height() < $(this).scrollTop()) {
      $('.js-header').addClass('change-color');
    } else {
      $('.js-header').removeClass('change-color');
    }
    });
  });



const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: true,
  pagination: {
  el: ".swiper-pagination",
  type: "bullets",
  clickable: "clickable", 
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  

});


$(".scroll-top").hide();

$(window).scroll(function() {
  if($(this).scrollTop() > 100) {
    $(".scroll-top").fadeIn();
  } else {
    $(".scroll-top").fadeOut();
  }
});

$(".scroll-top").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 300);
  return false;
});

$(document).ready(function() {
  $('#open_nav').on('click',function() {
    $('#nav').toggleClass('show');
  });
});


$('.hamburger').on('click',function(){
  $('.hamburger').toggleClass('active');
  $('#nav').toggleClass('active');
});