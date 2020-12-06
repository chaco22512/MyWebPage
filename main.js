$(document).ready(function(){

    $('.toggle-icon').click(function(){
         $('.nav-menu').toggleClass('collapse');
    });

    $('.carousel').slick({
      autoplay:true,
      autoplaySpeed:5000,
      dots:true,
      slidesToShow:3,
      slidesToScroll:3,
      prevArrow:$('.prev'),
  });

  // The animation with scrolling
  const targetElement = document.querySelectorAll(".art");

  document.addEventListener("scroll", function(){
  for (let i=0; i<targetElement.length;i++){
    const getElementDistance = targetElement[i].getBoundingClientRect().top
    +targetElement[i].clientHeight*0.6;

    if(window.innerHeight>getElementDistance){
      targetElement[i].classList.add("show");
    }

  }

  });

})