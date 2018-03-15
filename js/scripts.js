$(function(){

	var carouselList = $("#carousel ul");

	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

	var sliderMove = setInterval(function(){
		carouselList.animate({'margin-left': '-=400px'}, 1000, moveFirstSlide);
	}, 3000);

	// Dla ambitnych w trakcie produkcji //

	/*

	var prevSlide = $("#prevSlide");
		nextSlide = $("#nextSlide");

	prevSlide.click(function(){
 		    	
  	});

  	nextSlide.click(function(){
		carouselList.animate({'margin-left': '-=400px'});
  	});

  	nextSlide.mouseout(function(){
  		sliderMove;
  	})

  	*/

  	// Kiedy naciskam nextSlide slider wyraźnie przyspiesza, ale chciałem miec efekt, że po wsicnieciu,
  	// slide szybko się zmienia a po zjechaniu "mouseout" wszystko wraca do normy. Jednak zauważam przeskok, że
  	// przed powrotem animacja wraca do jakiegos poprzedniego elementu i dopiero rozpoczyna sekwencje. 



});
