$("#home1-testimonial").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    769: {
      items: 2,
      nav: false,
    },
    1201: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});
