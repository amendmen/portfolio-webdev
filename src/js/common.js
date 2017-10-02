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
	
	
	$(document).scroll( function() {
		$('#about').css({'background-positionY': -$(window).scrollTop()/5 + 'px'});
		
		if ($(window).scrollTop() > 400) {
			$('.wrapp-bio').addClass('bio-animate');
		}

		if ($(window).scrollTop() >= $('#aims').offset().top - 300){
      $('.aims-item').addClass('item-animate');
    }
		
	}).scroll();

	$('#bio').typeIt({
		autoStart: false,
		speed: 15
	});

	$( '.aims-descr' ).typeIt({
		autoStart: false,
		speed: 50,
		cursor: false
	})

});