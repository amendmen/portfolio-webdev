$(document).ready( function() { 



$("#menu").mmenu({
		"slidingSubmenus": false,
		"extensions": [
			"fx-panels-zoom",
			"listview-huge"
		],

		"offCanvas": {
			"position": "right"
		},

	}, {
		classNames: {
			fixedElements: {
				fixed: "fix",
				sticky: "stick"
			}
		}
	});

	var api = $("#menu").data( "mmenu" );

	$("#nav-container").click(function() {
         api.close();
      });

	api.bind("open:finish", function($panel) {
		$('#nav-container').addClass('pushed');
	});
	api.bind("close:finish", function($panel) {
		$('#nav-container').removeClass('pushed')
	});

	$('.mm-panels li').hover(
		function(){
			$(this).addClass('hover')
		},
		function(){
			$(this).removeClass('hover')
		})



	function winHeight() {
		$( '#scene' ).css("height", $( window ).height());
	}
	winHeight();
	$( window ).resize(function() {
		winHeight();
		
	});

	$('#btn-area').hover(
		function() {
			$('.btn-move').addClass('btn-moving');
			$(this).mousemove(function(e) {
				var coordx = e.pageX - $('#btn-area').offset().left - $('.btn-move').outerWidth()/2;
				var coordy = e.pageY - $('#btn-area').offset().top - $('.btn-move').outerHeight()*1.5;
				$('.btn-move').css({
					'left': coordx + 'px',
					'top': coordy + 'px'
				})
			})
		},
		function() {
			$('.btn-move').removeClass('btn-moving');
			$('.btn-move').css({
					'position': 'relative',
					'left': 0,
					'top': 0
				})
		})

	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);

	var scenefooter = document.getElementById('scenefooter');
	var parallax = new Parallax(scenefooter);
	
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
				top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});


	var div = document.querySelectorAll('#works .row>div:first-child');
	for (var i = 0; i < div.length; i = i + 2) {
			 div[i].classList.add('order-2');
	}
	
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
	});

	$( '.main-descr' ).typeIt({
		autoStart: false,
		speed: 50,
		cursor: false
	});
	

});