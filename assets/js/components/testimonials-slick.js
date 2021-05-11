export function testimonialsSlick(){
    $('.testimonials-slick').slick({
      arrows: true,
      infinite: false,
      prevArrow: $('.testimonials-slick__prev-arrow'),
      nextArrow: $('.testimonials-slick__next-arrow'),
      responsive: [
	    {
	      breakpoint: 776,
	      settings: {
	        dots: true,
            arrows: false,
	      }
	    }
    ]
    });
}
