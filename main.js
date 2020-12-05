$(document).ready(function(){

    $('.toggle-icon').click(function(){
         $('.nav-menu').toggleClass('collapse');
    });

    $('.carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow:$('.next'),
      prevArrow:$('.prev'),
    });

})