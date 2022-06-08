$(document).ready( function()
{

	$('.toggle-about' ).click( function(){

		$('#about-section').slideToggle( 10 );
		return false;
	});


	$( '#overlay-title' ).fitText( 0.7 );

});
