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
	
});