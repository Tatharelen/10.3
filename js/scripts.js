$(function(){

	var carouselList = $("#carousel ul");

	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

	setInterval(function(){
		carouselList.animate({'margin-left': '-=400px'}, 1000, moveFirstSlide);
	}, 2000);

});
