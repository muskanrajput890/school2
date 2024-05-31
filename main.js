$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


    $(document).ready(function(){
        $('.navbar-toggler').on('click', function(){
            $(this).toggleClass('collapsed');
            $('.navbar-collapse').toggleClass('show');
        });
    });






const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.querySelector('.text').style.fontSize = '20px';
  });

  box.addEventListener('mouseleave', () => {
    box.querySelector('.text').style.fontSize = 'inherit';
  });
});



$(document).ready(function(){
  $('.team-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });
});
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});
$(document).ready(function(){
    $('#team-carousel').carousel();
});
 // Testimonials carousel
 $(".testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  dots: true,
  loop: true,
  margin: 30,
  responsive: {
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:2
      }
  }
});

