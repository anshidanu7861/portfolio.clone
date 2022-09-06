(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
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

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);


var nameError=document.getElementById('nameError');
var emailError=document.getElementById('emailError');
var phoneError=document.getElementById('phoneError');
var MessageError=document.getElementById('Message');

function validateName(){
	var name = document.getElementById('contact-name').value;
	if(name.length == 0){
		nameError.innerHTML = 'Name is required';
		nameError.style.color = 'red';
		return false;
	}
	if(name.match(/['!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)){
		nameError.innerHTML = 'Special  charectors not Allowed';
		nameError.style.color = 'red';
		return false;
	}
	if(name.match(/[1234567890]/)){
	nameError.innerHTML = 'Numbers not Allowed';
	nameError.style.color = 'red';
	return false;
	}

	nameError.innerHTML = 'valid';
	nameError.style.color = 'green';
	return true;
}




function validatePhone(){
	var phone = document.getElementById('contact-phone').value;

	if(phone.length == 0){
		phoneError.innerHTML = 'Phone number is required';
		phoneError.style.color = 'red';
		return false;
	}

	if(phone.length !==10){
		phoneError.innerHTML = 'Phone number should be 10 digits';
		phoneError.style.color = 'red';
		return false;
	}
	phoneError.innerHTML = 'valid';
	phoneError.style.color = 'green';
	return true;
	
}


function validateEmail(){
var email = document.getElementById('contact-email').value;
	if(email.length == 0){
		emailError.innerHTML = 'Email is required';
		emailError.style.color = 'red';
		return false;
	}

	if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
		emailError.innerHTML = 'Invalid Email';
		emailError.style.color = 'red';
		return false;
	}

	emailError.innerHTML = 'valid';
	emailError.style.color='green';
	return true;

}

function validateMessage(){
	var message = document.getElementById('contact-message').value;
	var required = 30;
	var left = required - message.length;
	
	if(left>0){
		messageError.innerHTML = left + 'More charectors required';
		messageError.style.color='red';
		return false;
	}
	messageError.innerHTML = 'valid';
	messageError.style.color='green';
	return true;
}