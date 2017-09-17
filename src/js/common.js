$(document).ready( function() { 

$('.wrapp-bio').removeClass('bio-animate');

	function winHeight() {
		$( '#scene' ).css("height", $( window ).height());
	}
	winHeight();
	$( window ).resize(function() {
		winHeight();
		
	});

	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
	
	
	$(window).scroll( function() {
		$('#about').css({'background-positionY': -$(window).scrollTop()/5 + 'px'});
		
		if ($(window).scrollTop() > 400) {
			$('.wrapp-bio').addClass('bio-animate');
			
		}

	}).scroll();

	$('#bio').typeIt({
		autoStart: false,
		speed: 20
	});

	$( '.title' ).typeIt({
		autoStart: false,
		speed: 200,
		cursor: false
	})

});