jQuery(".testimonial-sliderr").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav:false,
  dots:6,
  responsive: {
    0: {
      items:1,
    },

    600: {
      items:1,
    },

    1024: {
      items:3 ,
    },

    1366: {
      items:3,
    },
  },
});
$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip()
})
