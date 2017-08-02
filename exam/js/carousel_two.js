(function($) {
	$.fn.carousel_two=function(){
	    var leftUIEl = $('.first-left');
		var rightUIEl = $('.first-right');
		var elementsList = $('.first-list');
	 
	   var pixelsOffset = 400;
	    var currentLeftValue = 0;
	    var elementsCount = 3;
	    var minimumOffset = -2*$('.carousel-hider').width();
	    var maximumOffset = 0;
	    leftUIEl.click(function() {        
	        if (currentLeftValue != maximumOffset) {
	            currentLeftValue += $('.carousel-hider').width();
	            elementsList.animate({ left : currentLeftValue + "px"}, 400);
	        }        
	    });
	 
	    rightUIEl.click(function() {        
	        if (currentLeftValue != minimumOffset) {
	            currentLeftValue -= $('.carousel-hider').width();;
	            elementsList.animate({ left : currentLeftValue + "px"}, 400);
	        }        
	    });
	
	}
})(jQuery);