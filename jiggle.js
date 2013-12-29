/*
 * Jiggle.js  v1.0
 *
 * Copyright 2013, Kai Hillebrand, http://www.kai-webservice.de
 * 
 */
(function ( $ ) {
 
    $.fn.jiggle = function( options ) {
 
        var settings = $.extend({
            // These are the defaults.
            forever: false,
            angle: "30",
            times: 30,
            jiggle_delay: 120
        }, options );
        
		
        var jiggle_direction = '';
        var counter = 0;
        var object = this;
        
		$(object).css({
		    '-moz-transition' : 'all 0.2s ease',
			'-webkit-transition' : 'all 0.2s ease',
			'-o-transition' : 'all 0.2s ease',
			'transition' : 'all 0.2s ease'
		});
        
        var timer = setInterval(function() {

    		if(jiggle_direction == '-')
        	{
        		jiggle_direction = '';     		
        	} else {
        		jiggle_direction = '-'; 
        	}
    	
    	
        	$({deg: 0}).animate({deg: settings.angle}, {
			    duration: (settings.jiggle_delay / 30),
			    step: function(now){
			        $(object).css({
			            '-webkit-transform' : 'rotate('+jiggle_direction+''+now+'deg)',
						'-moz-transform' : 'rotate('+jiggle_direction+''+now+'deg)',
						'-ms-transform' : 'rotate('+jiggle_direction+''+now+'deg)',
						'transform' : 'rotate('+jiggle_direction+''+now+'deg)'
			        });
			    }
			});	
			
			if(settings.forever == false)
			{
	        	if(counter == settings.times ){
	        		$({deg: 0}).animate({deg: 0}, {
					    duration: settings.jiggle_delay,
					    step: function(now){
					        $(object).css({
					            '-webkit-transform' : 'rotate('+jiggle_direction+''+now+'deg)',
								'-moz-transform' : 'rotate('+jiggle_direction+''+now+'deg)',
								'-ms-transform' : 'rotate('+jiggle_direction+''+now+'deg)',
								'transform' : 'rotate('+jiggle_direction+''+now+'deg)'
					        });
					    }
					});
	        		clearInterval(timer);
	        	}
	        }
			
			counter = counter +1;
			
        }, settings.jiggle_delay);
 

		
    };
    
}( jQuery ));