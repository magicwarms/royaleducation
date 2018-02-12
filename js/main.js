
/*
*
* Main.js built by Riva Yudha 2017
* This file contains main plugins/library used during development.
*
* Feel free to rewrite the code, since i put some info about the related elements.
*
*
*
* ===================================================
* Anime.js - http://animejs.com
* Tingle.js - https://robinparisi.github.io/tingle/
* Parsley.js - http://parsleyjs.org/
* Backstretch.js - https://github.com/jquery-backstretch/jquery-backstretch
* Countdown.js - http://hilios.github.io/jQuery.countdown/
* ====================================================
*/




$(function() {

	'use strict';




	var btnSubs = anime({ // That modal button for subscribing
		targets: "#button-subscribe",
		opacity: 1,
		translateY: [
			{ value: "-250px" },
			{ value: "0" }
		],
		easing: "easeInOutQuad",
		duration: 200,
		delay: 1800
	});

	var logo = anime({ // Main logo - that rotating volley ball
		targets: ".logo-wrapper svg",
		rotate: "5turn",
		loop: true,
		direction: "alternate",
		duration: 12000,
		easing: "easeInOutExpo"
	});

	var socialIcons = anime({ // Social icons at the modal dialog
		targets: ".social-icons li",
		translateY: "-150",
		elasticity: 300,
		delay: function(h2, i, l) {
			return i * 200;
		}
	});

	var spanny = anime({ // The color-blinking span at the H2
		targets: ".captioner .brow",
		color: [
			{value: "#ffb600"},
			{value: "#e50979"},
			{value: "#01baf3"}
		],
		duration: 3000,
		loop: true
	});



	///////////////////////////////////////////////////////////////////////


    


	var dur = 2000,
		alt = "alternate";



	// Configuring the animation of the Preloader

	var circle1 = anime ({
	  	targets: ['.preloader div:first-child'],
	  	translateY: -24,
		translateX: 52,
		backgroundColor: ["#fff","#18FD91"],
		direction: alt,
	  	loop: true,
	  	elasticity: 40,
		easing: 'easeInOutElastic',
		duration: 500
	});

	var circle2 = anime ({
	  	targets: ['.preloader div:nth-child(2)'],
	  	translateY: 24,
	  	backgroundColor: ["#fff","#fed501"],
		direction: alt,
	  	loop: true,
	  	elasticity: 400,
		easing: 'easeInOutElastic',
		duration: 500
	});

	var circle3 = anime ({
	  	targets: ['.preloader div:nth-child(3)'],
	  	translateY: -24,
	  	backgroundColor: ["#fff","#444"],
		direction: alt,
	  	loop: true,
	  	elasticity: 40,
		easing: 'easeInOutElastic',
		duration: 500
	});

	var circle4 = anime ({
	  	targets: ['.preloader div:nth-child(4)'],
	  	translateY: 24,
		translateX: -52,
		backgroundColor: [ "#fff","#5A87FF" ],
		direction: alt,
	  	loop: true,
	  	elasticity: 400,
		easing: 'easeInOutElastic',
		duration: 500
	});

	var par = anime({ // That "please wait" text
		targets: ".preloader p",
		color: "#ffb600",
		loop: true,
		direction: "alternate",
		duration: 500
	});



	///////////////////////////////////////////////////////////////////



	// Configuring the Tingle modal

	var modal = new tingle.modal ({
		footer: false,
	    stickyFooter: false,
	    closeMethods: ['overlay', 'button', 'escape'],
	    closeLabel: "",
	    cssClass: ["content-section"],
	    onOpen: function() {
	    	new anime({
	    		targets: ".social-icons li",
	    		translateY: -50,
	    		opacity: 1,
	    		delay: function(h2, i, l) {
					return i * 200;
				}
	    	});

	    	new anime({
	    		targets: ".balls span",
				loop: true,
				direction: "alternate",
	    		delay: function(i, el, m) {
	    			return i * 300;
	    		}
	    	})

	    	var ballKeren = new anime({
				targets: ".balls span:last-child", // that green ball
				translateX: "40px",
				translateY: "40px",
				scale: 1.3,
				loop: true,
				direction: "alternate",
				duration: 10000
			});

	    	new anime({
				targets: ".balls span:nth-child(2)", // that yellow ball
				scale: 1.1,
				loop: true,
				direction: "alternate",
				duration: 8000
			});

	    	new anime({
				targets: ".balls span:first-child", // that little magenta ball
				translateX: "20px",
				translateY: "20px",
				loop: true,
				direction: "alternate",
				duration: 6000
			});
	    }
	});




	////////////////////////////////////////////////////////////////




	// then init the Tingle modal

	modal.setContent(document.querySelector("#subscribe").innerHTML);

	$("#button-subscribe").on("click", function() {
		modal.open();
	});




	//////////////////////////////////////////////////////////////////





	// Configuring and initializing jQuery Parsley

    $(function () {
        $('#subscribe-form').parsley().on('field:validated', function() {
            var ok = $('.parsley-error').length === 0;
            $('.bs-callout-info').toggleClass('hidden', !ok);
            $('.bs-callout-warning').toggleClass('hidden', ok);
        })
        .on('form:submit', function() {
            return true;
        });
    });




    /////////////////////////////////////////////////////////////////




    // Initializing the Jquery Backstretch for background image slideshow
    // udah aku pindahin ke page masing-masing pak tam, hehe sorry eh
    // $("#style1 main").backstretch([
    //     "img/bg1.jpg",
    //     "img/bg2.jpg",
    //     "img/bg3.jpg",
    //     "img/bg4.jpg"
    // ], {
    // 	duration: 4000,
    //     fade: 1400
    // });




    /////////////////////////////////////////////////////////////////




    // Initializing the YTPlayer plugin for Youtube video background

    $(function(){
      $("#player").YTPlayer(); // default settings
    });




    /////////////////////////////////////////////////////////////////




    // Configuring and initializing the countdown

    $('#countdown').countdown('2017/07/01', function(event) { // Edit the event date on this line code
        $(this).html(event.strftime(
        	"<span id=\"counter-days\">%D <span>Days</span></span>\n<span id=\"counter-hours\">%H <span>Hours</span></span>\n<span id=\"counter-minutes\">%M <span>Minutes</span></span>\n<span id=\"counter-seconds\">%S <span>Seconds</span></span>")
        );
    });



    /////////////////////////////////////////////////////////////////




	// Configuring the Preloader

	$(window).load(function() {
	    $('#preloader').delay(100).fadeOut('slow');
	    $('html,body').addClass('add-oveflow');
	});

});