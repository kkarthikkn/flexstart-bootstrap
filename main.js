new Swiper('.clients', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },

      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },

      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },

      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

// $('.clients').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 8,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });