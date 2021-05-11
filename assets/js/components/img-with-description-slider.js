export function imgSlick(){
    $('.img-with-description-slider__slider').slick({
      arrows: true,
      infinite: false,
      prevArrow: $('.img-with-description-slider__prev-arrow'),
      nextArrow: $('.img-with-description-slider__next-arrow'),
    });


    $('.img-with-description-slider__slider').on('afterChange', function( event, slick, currentSlide) { 
           $( ".img-with-description-slider__current-slide" ).html( `${currentSlide + 1}` )    
      });
}
