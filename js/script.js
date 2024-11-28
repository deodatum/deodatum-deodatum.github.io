const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu');
    closeElement = document.querySelector('.menu__header-close');
    hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

closeElement.addEventListener('click', () => {
    menu.classList.remove('active')
});

$(document).ready(function(){
$('.carousel__inner').slick({
  infinite: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 4,
  speed: 500,
  arrows: true, 
  dots: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left_arrow.png" alt="arrow"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right_arrow.png" alt="arrow"></button>',
  responsive: [
    {
      breakpoint: 767,
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
        slidesToShow: 1
      }
    }
  ]
});
});
