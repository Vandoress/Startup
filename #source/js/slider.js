$(document).ready(function(){
	$('.slider-about').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: false,
		speed: 700,
		waitForAnimate:false,
		responsive:[
			{
				breakpoint: 992.98,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 2,
					variableWidth: false,
				}
			},
			{
				breakpoint: 480.98,
				settings: {
					slidesToShow: 1,
					variableWidth: false,
				}
			}
		]
	});
}); 
$(document).ready(function(){
	$('.slider-partners').slick({
		arrows:false,
		dots: true,
		adaptiveHeight: true,	
		speed: 700,
		waitForAnimate:false,
		pauseOnDotsHover: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});