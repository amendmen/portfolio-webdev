$(document).ready( function() { 


$('#sayhi').modal({
	backdrop: false,
	show: false
})
$('#sayhi').on('show.bs.modal', function (e) {
  $('.toggle-icon').addClass('hidden');
   $('.btn-move').addClass('hidden');
  $('.main-page').addClass('mini')
})
$('#sayhi').on('hide.bs.modal', function (e) {
  $('.toggle-icon').removeClass('hidden');
  $('.btn-move').removeClass('hidden');
  $('.main-page').removeClass('mini')
})

$("#myform").validate({
  debug: false
});


$("#menu").mmenu({
		"slidingSubmenus": false,
		"extensions": [
			"fx-panels-zoom",
			"listview-huge",
			"pagedim-black"
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


$('.carousel').carousel({
	interval: 7000,
})

////////


var row = document.querySelectorAll('#works>.container .row:nth-child(even)');
 for (var i = 0; i < row.length; i++) {
 			row[i].classList.add('flex-row-reverse');
 	}


/////////////////
  $('.owl-carousel').owlCarousel({
   	center:true,
    loop:true,
    autoWidth:true,
    autoplay: true,
    items:4,
    margin:50,
    smartSpeed:500,
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
				var coordx = e.pageX - $(this).offset().left - $('.btn-move').outerWidth()/3;
				var coordy = e.pageY - $(this).offset().top - $('.btn-move').outerHeight();
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