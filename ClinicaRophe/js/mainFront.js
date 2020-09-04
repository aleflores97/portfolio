//navbar mobile
document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }


  // console.log('js');

});

//cards expandible
document.addEventListener('DOMContentLoaded', function() {
	let cardToggles = document.getElementsByClassName('card-toggle');
	for (let i = 0; i < cardToggles.length; i++) {
		cardToggles[i].addEventListener('click', e => {
			e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle('is-hidden');
		});
  }

  let cardToggles2 = document.getElementsByClassName('card-header-title');
	for (let i = 0; i < cardToggles2.length; i++) {
		cardToggles2[i].addEventListener('click', e => {
			e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle('is-hidden');
		});
	}
});


// Smooth Anchor Scrolling
// $(document).on("click", 'a[href="#top"]', function(event) {
//   // event.preventDefault();
//   $("html, body").animate(
//     { scrollTop: 0 }, "slow"
//   );
//   return false;

// });

// When the user scrolls down 20px from the top of the document, show the scroll up button
// window.onscroll = function() {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("toTop").style.display = "block";
//   } else {
//     document.getElementById("toTop").style.display = "none";
//   }

//   // var menu = $('#hero-foot').css('color');
//   // if($('.hero').css('color') == 'rgb(255, 255, 255)'){
//   //   console.log('iguales');
//   // }else{
//   //   console.log('distintos');
    
//   // }
//   // console.log(menu);
// }

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});





// Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).load(function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});


