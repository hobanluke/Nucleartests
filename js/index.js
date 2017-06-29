


//-----Actives menu  | START -----//

//$('#operation-1').mouseenter(function(){
//                    $('.arrow1').css('opacity','1');
//                });
//                $('#operation-1').mouseleave(function(){
//                    $('.arrow1').css('opacity','0');
//                });       


$('.maincontent-ending').hover(function(){
         $('.more-readings').toggleClass('open');
     });

$('.menu2').hover(function(){
         $('.serif-font3').toggleClass('open');
     });
$('.menu3').hover(function(){
         $('.serif-font3').toggleClass('open');
     });
$('.menu4').hover(function(){
         $('.serif-font3').toggleClass('open');
     });
$('.menu5').hover(function(){
         $('.serif-font3').toggleClass('open');
     });

$('.menu2-bottom').hover(function(){
         $('.serif-font4').toggleClass('open');
     });
$('.menu3-bottom').hover(function(){
         $('.serif-font4').toggleClass('open');
     });
$('.menu4-bottom').hover(function(){
         $('.serif-font4').toggleClass('open');
     });
$('.menu5-bottom').hover(function(){
         $('.serif-font4').toggleClass('open');
     });






$('#operation-1').hover(function(){
         $('.arrow1').toggleClass('open');
     });
$('#operation-2').hover(function(){
         $('.arrow2').toggleClass('open');
     });
$('#operation-3').hover(function(){
         $('.arrow3').toggleClass('open');
     });
$('#operation-4').hover(function(){
         $('.arrow4').toggleClass('open');
     });
$('#operation-5').hover(function(){
         $('.arrow5').toggleClass('open');
     });
$('#operation-6').hover(function(){
         $('.arrow6').toggleClass('open');
     });
$('#operation-7').hover(function(){
         $('.arrow7').toggleClass('open');
     });
$('#operation-8').hover(function(){
         $('.arrow8').toggleClass('open');
     });
$('#operation-9').hover(function(){
         $('.arrow9').toggleClass('open');
     });
$('#operation-10').hover(function(){
         $('.arrow10').toggleClass('open');
     });
$('#operation-11').hover(function(){
         $('.arrow11').toggleClass('open');
     });
$('#operation-12').hover(function(){
         $('.arrow12').toggleClass('open');
     });
$('#operation-13').hover(function(){
         $('.arrow13').toggleClass('open');
     });
$('#operation-14').hover(function(){
         $('.arrow14').toggleClass('open');
     });
$('#operation-15').hover(function(){
         $('.arrow15').toggleClass('open');
     });
$('#operation-16').hover(function(){
         $('.arrow16').toggleClass('open');
     });
$('#operation-17').hover(function(){
         $('.arrow17').toggleClass('open');
     });
$('#operation-18').hover(function(){
         $('.arrow18').toggleClass('open');
     });

    $('#operation-1').on('click', function (){
        $('.operation-info1').toggleClass('open');
         $('.arrow1').toggleClass('open');

         $('#video1').get(0).play()
     });

    $('#operation-2').on('click', function (){
        $('.operation-info2').toggleClass('open');
         $('.arrow2').toggleClass('open');
         
        
         $('#video2').get(0).play();
       
     });
    $('#operation-3').on('click', function (){
        $('.operation-info3').toggleClass('open');
         $('.arrow3').toggleClass('open');
        
         $('#video3').get(0).play();

     });
    $('#operation-4').on('click', function (){
        $('.operation-info4').toggleClass('open');
         $('.arrow4').toggleClass('open');
        
         $('#video4').get(0).play();

     });
    $('#operation-5').on('click', function (){
        $('.operation-info5').toggleClass('open');
         $('.arrow5').toggleClass('open');
        
         $('#video5').get(0).play();

     });
    $('#operation-6').on('click', function (){
        $('.operation-info6').toggleClass('open');
         $('.arrow6').toggleClass('open');
        
         $('#video6').get(0).play();

     });
    $('#operation-7').on('click', function (){
        $('.operation-info7').toggleClass('open');
         $('.arrow7').toggleClass('open');
        
         $('#video7').get(0).play();

     });
    $('#operation-8').on('click', function (){
        $('.operation-info8').toggleClass('open');
         $('.arrow8').toggleClass('open');

        
         $('#video8').get(0).play();
     });
    $('#operation-9').on('click', function (){
        $('.operation-info9').toggleClass('open');
         $('.arrow9').toggleClass('open');
        
         $('#video9').get(0).play();

     });
    $('#operation-10').on('click', function (){
        $('.operation-info10').toggleClass('open');
         $('.arrow10').toggleClass('open');
        
         $('#video10').get(0).play();
 
     });
    $('#operation-11').on('click', function (){
        $('.operation-info11').toggleClass('open');
         $('.arrow11').toggleClass('open');
        
         $('#video11').get(0).play();

     });
    $('#operation-12').on('click', function (){
        $('.operation-info12').toggleClass('open');
         $('.arrow12').toggleClass('open');
        
         $('#video12').get(0).play();
 
     });
    $('#operation-13').on('click', function (){
        $('.operation-info13').toggleClass('open');
         $('.arrow13').toggleClass('open');
        
         $('#video13').get(0).play();
     });
    $('#operation-14').on('click', function (){
        $('.operation-info14').toggleClass('open');
         $('.arrow14').toggleClass('open');
        
        
         $('#video14').get(0).play();

     });
    $('#operation-15').on('click', function (){
        $('.operation-info15').toggleClass('open');
         $('.arrow15').toggleClass('open');
        
         $('#video15').get(0).play();

     });
    $('#operation-16').on('click', function (){
        $('.operation-info16').toggleClass('open');
         $('.arrow16').toggleClass('open');
        
         $('#video16').get(0).play();

     });
    $('#operation-17').on('click', function (){
        $('.operation-info17').toggleClass('open');
         $('.arrow17').toggleClass('open');
        
         $('#video17').get(0).play();

     });

    $('#operation-18').on('click', function (){
         
         $('.operation-info18').toggleClass('open');
         $('.arrow18').toggleClass('open');
        
         $('#video18').get(0).play();
        
     });

         
 








  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".top-section").toggleClass('open');

                
                $(".bottom-heading").toggleClass('open');
                $(".bottom-heading2").toggleClass('open');
                $(".bottom-heading3").toggleClass('open');
                $(".bottom-heading4").toggleClass('open');
                $(".bottom-heading5").toggleClass('open');
                $(".bottom-heading6").toggleClass('open');

			} else {
				$(".top-section").toggleClass('open');

                
                $(".bottom-heading").toggleClass('open');
                $(".bottom-heading2").toggleClass('open');
                $(".bottom-heading3").toggleClass('open');
                $(".bottom-heading4").toggleClass('open');
                $(".bottom-heading5").toggleClass('open');
                $(".bottom-heading6").toggleClass('open');
			}
		}
		new ScrollMagic.Scene({triggerElement: "#trigger", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});


  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link3").css('opacity','1');
                $('.image-3').toggleClass('open');
                $('.hover-link3').mouseenter(function(){
                    $('.hover-link3').css('opacity','.25');
                });
                $('.hover-link3').mouseleave(function(){
                    $('.hover-link3').css('opacity','1');
                });        
			} else {
				$(".hover-link3").css('opacity','.25');
                $('.image-3').toggleClass('open');
                $('.hover-link3').mouseenter(function(){
                    $('.hover-link3').css('opacity','1');
                });
                $('.hover-link3').mouseleave(function(){
                    $('.hover-link3').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#three", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link4").css('opacity','1');
                $('.image-4').toggleClass('open');
                $('.hover-link4').mouseenter(function(){
                    $('.hover-link4').css('opacity','.25');
                });
                $('.hover-link4').mouseleave(function(){
                    $('.hover-link4').css('opacity','1');
                });        
			} else {
				$(".hover-link4").css('opacity','.25');
                $('.image-4').toggleClass('open');
                $('.hover-link4').mouseenter(function(){
                    $('.hover-link4').css('opacity','1');
                });
                $('.hover-link4').mouseleave(function(){
                    $('.hover-link4').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#four", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link5").css('opacity','1');
                $('.image-5').toggleClass('open');
                $('.hover-link5').mouseenter(function(){
                    $('.hover-link5').css('opacity','.25');
                });
                $('.hover-link5').mouseleave(function(){
                    $('.hover-link5').css('opacity','1');
                });        
			} else {
				$(".hover-link5").css('opacity','.25');
                $('.image-5').toggleClass('open');
                $('.hover-link5').mouseenter(function(){
                    $('.hover-link5').css('opacity','1');
                });
                $('.hover-link5').mouseleave(function(){
                    $('.hover-link5').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#five", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

    $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link6").css('opacity','1');
                $('.image-6').toggleClass('open');
                $('.hover-link6').mouseenter(function(){
                    $('.hover-link6').css('opacity','.25');
                });
                $('.hover-link6').mouseleave(function(){
                    $('.hover-link6').css('opacity','1');
                });        
			} else {
				$(".hover-link6").css('opacity','.25');
                $('.image-6').toggleClass('open');
                $('.hover-link6').mouseenter(function(){
                    $('.hover-link6').css('opacity','1');
                });
                $('.hover-link6').mouseleave(function(){
                    $('.hover-link6').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#six", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});









  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
			if (e.type == "enter") {
				$(".hover-link21").css('opacity','1');
                $('.hover-link21').mouseenter(function(){
                    $('.hover-link21').css('opacity','.25');
                });
                $('.hover-link21').mouseleave(function(){
                    $('.hover-link21').css('opacity','1');
                });        
			} else {
				$(".hover-link21").css('opacity','.25');
                $('.hover-link21').mouseenter(function(){
                    $('.hover-link21').css('opacity','1');
                });
                $('.hover-link21').mouseleave(function(){
                    $('.hover-link21').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#two", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link31").css('opacity','1');
                $('.hover-link31').mouseenter(function(){
                    $('.hover-link31').css('opacity','.25');
                });
                $('.hover-link31').mouseleave(function(){
                    $('.hover-link31').css('opacity','1');
                });        
			} else {
				$(".hover-link31").css('opacity','.25');
                $('.hover-link31').mouseenter(function(){
                    $('.hover-link31').css('opacity','1');
                });
                $('.hover-link31').mouseleave(function(){
                    $('.hover-link31').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#three", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link41").css('opacity','1');
                $('.hover-link41').mouseenter(function(){
                    $('.hover-link41').css('opacity','.25');
                });
                $('.hover-link41').mouseleave(function(){
                    $('.hover-link41').css('opacity','1');
                });        
			} else {
				$(".hover-link41").css('opacity','.25');
                $('.hover-link41').mouseenter(function(){
                    $('.hover-link41').css('opacity','1');
                });
                $('.hover-link41').mouseleave(function(){
                    $('.hover-link41').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#four", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link51").css('opacity','1');
                $('.hover-link51').mouseenter(function(){
                    $('.hover-link51').css('opacity','.25');
                });
                $('.hover-link51').mouseleave(function(){
                    $('.hover-link51').css('opacity','1');
                });        
			} else {
				$(".hover-link51").css('opacity','.25');
                $('.hover-link51').mouseenter(function(){
                    $('.hover-link51').css('opacity','1');
                });
                $('.hover-link51').mouseleave(function(){
                    $('.hover-link51').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#five", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

    $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link61").css('opacity','1');
                $('.hover-link61').mouseenter(function(){
                    $('.hover-link61').css('opacity','.25');
                });
                $('.hover-link61').mouseleave(function(){
                    $('.hover-link61').css('opacity','1');
                });        
			} else {
				$(".hover-link61").css('opacity','.25');
                $('.hover-link61').mouseenter(function(){
                    $('.hover-link61').css('opacity','1');
                });
                $('.hover-link61').mouseleave(function(){
                    $('.hover-link61').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#six", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

$(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
			if (e.type == "enter") {
                $('.image-book2').toggleClass('open');
			} else {
                $('.image-book2').toggleClass('open'); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#book-image", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});


//-----Actives menu  | END -----//

//-----Information Page | START -----//

//hover over images
    
    
    $('.landing-image').hover(function(){
        $('.image-credit-header').css('color', '#000');
        $('.image-credit').css('color', '#000');
    },function(){
        $('.image-credit-header').css('z-index','1').css('color', '#999');
        $('.image-credit').css('z-index','1').css('color', '#999');
    })
    $('.image').hover(function(){
        $('.image-credit-header').css('color', '#000');
        $('.image-credit').css('color', '#000');
    },function(){
        $('.image-credit-header').css('z-index','1').css('color', '#999');
        $('.image-credit').css('z-index','1').css('color', '#999');
    })
    $('.image-small').hover(function(){
        $('.image-credit-header').css('color', '#000');
        $('.image-credit').css('color', '#000');
    },function(){
        $('.image-credit-header').css('color', '#999');
        $('.image-credit').css('color', '#999');
    })
    $('.image-small2').hover(function(){
        $('.image-credit-header').css('color', '#000');
        $('.image-credit').css('color', '#000');
    },function(){
        $('.image-credit-header').css('color', '#999');
        $('.image-credit').css('color', '#999');
    })
    $('.image').hover(function(){
        $('.image-timeline-credit-header').css('color', '#000');
        $('.image-timeline-credit').css('color', '#000');
    },function(){
        $('.image-timeline-credit-header').css('color', '#999');
        $('.image-timeline-credit').css('color', '#999');
    })
        $('.image-small3').hover(function(){
        $('.image-timeline-credit-header').css('color', '#000');
        $('.image-timeline-credit').css('color', '#000');
    },function(){
        $('.image-timeline-credit-header').css('color', '#999');
        $('.image-timeline-credit').css('color', '#999');
    })
    
//scrolling effect 
    
  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
			if (e.type == "enter") {
				$(".hover-bar-top").css('opacity','1');
                $('.fixed-white-header').css('opacity','0.95');
			} else {
				$(".hover-bar-top").css('opacity','0');
                $('.fixed-white-header').css('opacity','0');
			}
		}

		// build scenes
		new ScrollMagic.Scene({triggerElement: "#trigger-nav", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

	});

$(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".landing-image-book").toggleClass('open');   
                $(".landing-image-book2").toggleClass('open');   
			} else {
				$(".landing-image-book").toggleClass('open');   
                $(".landing-image-book2").toggleClass('open');      
			}
		}
		new ScrollMagic.Scene({triggerElement: "#book", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

//-----Information Page | END -----//
         
 //-----Acknowledgements Page | START -----//

//hover over the names

    $('#Adams').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Adams-image').toggleClass('open');
     });

    $('#Kitchin').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Kitchin-image').toggleClass('open');
     });

    $('#Mackie').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Mackie-image').toggleClass('open');
     });

    $('#Mudge').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Mudge-image').toggleClass('open');
     });

    $('#Marden').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Marden-image').toggleClass('open');
     });

    $('#Cruse').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Cruse-image').toggleClass('open');
     });

    $('#Dunbar').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Dunbar-image').toggleClass('open');
     });

    $('#Monk').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Monk-image').toggleClass('open');
     });

    $('#Hoggart').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Hoggart-image').toggleClass('open');
     });

    $('#Nieper').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Nieper-image').toggleClass('open');
     });

    $('#Holling').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Holling-image').toggleClass('open');
     });

    $('#Drew').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Drew-image').toggleClass('open');
     });

    $('#Campbell').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Campbell-image').toggleClass('open');
     });

    $('#Herk').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Herk-image').toggleClass('open');
     });

    $('#Jonker').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Jonker-image').toggleClass('open');
     });

    $('#Dixon').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Dixon-image').toggleClass('open');     
     });

    $('#Joynson').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Joynson-image').toggleClass('open');
     });

    $('#Keane').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Keane-image').toggleClass('open');
     });

    $('#Duggan').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Duggan-image').toggleClass('open');
     });

    $('#Neill').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Neill-image').toggleClass('open');
     });

    $('#Osborne').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Osborne-image').toggleClass('open');
     });

    $('#Hale').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Hale-image').toggleClass('open');
     });

    $('#Palmer').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Palmer-image').toggleClass('open');
     });

    $('#Rodger').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Rodger-image').toggleClass('open');
     });

    $('#Rockhouse').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Rockhouse-image').toggleClass('open');
     });

    $('#Sims').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Sims-image').toggleClass('open');
     });

    $('#Ufer').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Ufer-image').toggleClass('open');
     });

    $('#Valli').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Valli-image').toggleClass('open');
     });

    $('#Hurren').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Hurren-image').toggleClass('open');
     });



    //Alternating names
    
     var quotes = $(".alternating-introtext");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(300)
            .delay(700)
            .fadeOut(300, showNextQuote);
    }
    
    showNextQuote();
    
    
 //-----Acknowledgements Page | END -----//

 //-----Footer | START -----//


  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
			if (e.type == "enter") {
                $(".bottom-footer-header").toggleClass('open');
                $(".bottom-footer-content").toggleClass('open');
                $(".bottom-footer-credit").toggleClass('open');
			} else {
                $(".bottom-footer-header").toggleClass('open');
                $(".bottom-footer-content").toggleClass('open');
                $(".bottom-footer-credit").toggleClass('open');
			}
		}

		// build scenes
		new ScrollMagic.Scene({triggerElement: "#footer", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

	});

 //-----Footer | END -----//

 //-----Remove Hover for moblie | START -----//


$(function () {
var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
    });

 //-----Remove Hover for moblie | END -----//