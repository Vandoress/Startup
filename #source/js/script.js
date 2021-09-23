function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
function Sibg(){
	$.each($('.Sibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('data-lazy')+'")');
		}
	});
}
Sibg();
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.burger__logo,.header__burger,.menu-header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
function resize(){
	if( window.innerWidth >= 768 ){
		$('.burger__logo,.header__burger,.menu-header__menu').removeClass('active');
	} 
}
$(document).ready(function(){
    resize();
    $(window).resize(resize);
});
$(document).ready(function() {
	$('.header-block__link').click(function(e){
		e.preventDefault();

		$('.header-block__link').removeClass('header-block__link--active');
		$(this).addClass('header-block__link--active');

		$('.works__column').removeClass('works__column--active');
		$($(this).attr('href')).addClass('works__column--active')
	});
	$('.header-block__link:first').click();
});
