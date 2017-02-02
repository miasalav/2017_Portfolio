$(document).ready(function(){

$('.columnContainer').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


  setInterval(function() {
      $('.scroll-animation').effect('bounce', 2000)
      console.log('this works');
  }, 3000);




  $(function() {

    var special = ['reveal', 'top', 'boring', 'perspective', 'extra-pop'];

    // Toggle Nav on Click
    $('#menu-button').click(function() {

      var transitionClass = $(this).data('transition');

      if ($.inArray(transitionClass, special) > -1) {
        $('body').removeClass();
        $('body').addClass(transitionClass);
      } else {
        $('body').removeClass();
        $('#site-canvas').removeClass();
        $('#site-canvas').addClass(transitionClass);
      }

      $('#site-wrapper').fadeToggle("fast", "linear" );
      $('#site-wrapper').toggleClass('show-nav');

      return false;

    });

  });


    $(document).foundation();



    var projectArray = document.querySelectorAll('.project-wrapper');
    var modalArray = document.querySelectorAll('.modal');
    var captionArray = document.querySelectorAll('.project-overlay');
    var workContainer = document.querySelector('.columnContainer');
   // console.log(projectArray);

 for (var i = 0; i < projectArray.length; i++){
     
       $(projectArray[i]).hover(function() {
            var currentIndex = $(this).index();
            console.log('hover works' + currentIndex);
        $(captionArray).eq(currentIndex).fadeIn('900', function() {
        // Animation complete
            $(workContainer).mouseleave(function() { 
                $(captionArray).eq(currentIndex).fadeOut('800', function() {
                });
            });
         });
      });

       $(projectArray[i]).on( "click", function() {
          var currentIndex = $(this).index();
          console.log(currentIndex);
          $('.modal').eq(currentIndex).fadeIn('600', function() {
            });

          $('.close-button'). on("click", function() {
            $('.modal').eq(currentIndex).fadeOut('600', function() {
            });  
          });
       });
             
    } 


    
});




