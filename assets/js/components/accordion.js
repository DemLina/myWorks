export function accordion() {
    $('.accordion-section__open').on('click', function (e) {
        e.preventDefault();
        $('.accordion-section__open').not(this).removeClass('accordion-section__open--active')
        $('.accordion-section__content').not($(this).next('.accordion-section__content')).slideUp()
        $(this).toggleClass('accordion-section__open--active')
        $(this).next('.accordion-section__content').slideToggle()

    })
}