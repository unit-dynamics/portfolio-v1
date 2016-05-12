$(document).foundation();


// Scroll to location

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 40 // Accounts for the fixed menu pixels
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});



// Scroll effects
var devider = TweenMax.to('.devider', 3, {
	opacity: '1',
	ease: Linear.easeNone                                                                                                                                                                 
});

var links = TweenMax.to('.portfolio-card__btn-container', 1, {
	margin: '0 10px 0 0',
	opacity: '1',
	ease: Linear.easeNone                                                                                                                                                                 
});


var controller = new ScrollMagic.Controller();

var enlarge_devider_scene = new ScrollMagic.Scene({
	triggerElement: ".work",
	triggerHook: 0,
	reverse: true                                                                                                                                                                         
})
.setTween(devider);

var enlarge_links_scene = new ScrollMagic.Scene({
	triggerElement: "#portfolio",
	triggerHook: 0.8,
	reverse: true                                                                                                                                                                         
})
.setTween(links);


controller.addScene([
	enlarge_devider_scene,
	enlarge_links_scene
]);