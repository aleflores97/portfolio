$(function() {
$(".toggle").on("click", function() {
    if ($(".item").hasClass("active")) {
        $(".item").removeClass("active");
    } else {
        $(".item").addClass("active");
    }
});
});

/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
    }
    

    $(function (){
        $(window).scroll(function(){
           if ($(this).scrollTop() > 600) {
            $('nav').addClass("black");
           } else {
            $("nav").removeClass("black");
           }
        });
    });
