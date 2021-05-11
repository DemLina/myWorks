export function header() {
  const $header = document.getElementById('header')
  const headerMenuActiveClassName = 'header--menu-opened'
  const headerMinClassName = 'header--min'

  window.addEventListener('click', function (e) {
    if (e.target.closest('.js-menu-toggle')) {
      $header.classList.toggle(headerMenuActiveClassName)
    } else if (e.target.closest('.js-menu-close')) {
      $header.classList.remove(headerMenuActiveClassName)
    } else if (e.target.closest('.js-menu-open')) {
      $header.classList.add(headerMenuActiveClassName)
    }
  })

  window.addEventListener('scroll', function () {
    if (window.scrollY > 30) {
      $header.classList.add(headerMinClassName)
    } else {
      $header.classList.remove(headerMinClassName)
    }
  })

  $('.header__submenu-head').on('click', function (e) {
    if (window.innerWidth < 1024 && e.target === e.currentTarget ) {
      $(this).toggleClass('header__submenu-head--active')
      $(this).next('.header__submenu').slideToggle()
    }
  })
}


