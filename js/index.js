


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



 


//$('.arrow-moblie').click(function() {
//   $(this).toggleClass('active');
//    $('.main').toggleClass('open');
//     $('.arrow-moblie').text('CLOSE');
//  });



$(function() {
    $(".arrow-moblie").click(function () {
        if ($(".arrow-moblie").is(":visible"))
            $(".main").toggleClass('open');
            
        else
            $(".main").toggleClass('open');
            
    });
});



//$('.arrow-moblie').click(function() {
//
//    if ($("#frm01").is(":visible"))
//     $('.main').toggleClass('open');
//     $('.arrow-moblie').text('CLOSE');
//
//    } else {
//     $('.main').toggleClass('open');
//     $('.arrow-moblie').text('MENU');
//    }
//});



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