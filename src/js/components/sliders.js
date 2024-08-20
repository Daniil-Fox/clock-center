import "./owl-carousel.min.js";

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    // autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 500,
    items: 3,
    loop: true,
    center: true,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
    },
  });
});
