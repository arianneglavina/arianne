// background color change and navigation change on scroll

$(function() {
	function addDots(pos) {
		$('nav ul li').removeClass('active');
		let dots = $('nav ul li').siblings();
		dots[pos].classList.add('active');
	}


	let windowHeight = $(window).height();
	windowHeight -= 100
	$(window).scroll (function(e){
		e.preventDefault();
		if($(this).scrollTop()>windowHeight) {
			$('body').addClass('changeColor');
			addDots(1);
		}
		if ($(this).scrollTop()<(windowHeight)) {
			$('body').removeClass('changeColor');
			let dots = $('nav ul li').siblings();
			dots[1].classList.remove('active');
			addDots(0);
		}
		if($(this).scrollTop()>(windowHeight*2)) {
			addDots(2);
			$('body').addClass('changeColor2');
		}
		if ($(this).scrollTop()<(windowHeight*2)) {
			$('body').removeClass('changeColor2');
			let dots = $('nav ul li').siblings();
			dots[2].classList.remove('active');
		}
		if($(this).scrollTop()>(windowHeight*3)) {
			addDots(3);
			$('body').addClass('changeColor3')
		}
		if ($(this).scrollTop()<(windowHeight*3)) {
			let dots = $('nav ul li').siblings();
			dots[3].classList.remove('active');
			$('body').removeClass('changeColor3')
		}
		if($(this).scrollTop()>(windowHeight*4)) {
			addDots(4);
			$('body').addClass('changeColor4')
		}
		if ($(this).scrollTop()<(windowHeight*4)) {
			let dots = $('nav ul li').siblings();
			dots[4].classList.remove('active');
			$('body').removeClass('changeColor4')
		}
	});

	// project overlays 
	$('.project-link').on('click', function(){
		const childEl = $(this).siblings();
		childEl[0].classList.add('show')
		$('body').addClass('no-scroll');
	});

	$('.close').on('click', function(e){
		e.preventDefault();
		const parentEl = $(this).parent('.modal');
		parentEl[0].classList.remove('show');
		$('body').removeClass('no-scroll');
	});



	// smooth scroll
	var $root = $('html, body');
	$('.scroll a, .top a').click(function() {
	    var href = $.attr(this, 'href');
	    $root.animate({
	        scrollTop: $(href).offset().top
	    }, 500, function () {
	        window.location.hash = href;
	    });
	    return false;
	});


});


