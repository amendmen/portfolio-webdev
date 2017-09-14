$(document).ready( function() { 

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
		$('#about').css({'background-positionY': -$(window).scrollTop()/10 + 'px'})
	}).scroll();

});