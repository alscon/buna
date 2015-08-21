$(document).ready(function () {
		var carousel =	$("#baner-slider");

		carousel.owlCarousel({
			items: 1,
			slideSpeed : 500,
			navigation: false,
			singleItem: true
		});
		$('#item-1').click(function(){
			carousel.trigger('owl.goTo', 0)
		});
		$('#item-2').click(function(){
			carousel.trigger('owl.goTo', 1)
		});
		$('#item-3').click(function(){
			carousel.trigger('owl.goTo', 2)
		});
		$('#item-4').click(function(){
			carousel.trigger('owl.goTo', 3)
		});
		$('#item-5').click(function(){
			carousel.trigger('owl.goTo', 4)
		});



	});
