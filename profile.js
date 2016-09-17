$(document).ready(function(){
	$('#aboutButton, #aboutLink').click(function(){
		$('#homeNav, #code, #projects').fadeOut(function(){
				$('#about, #headerNav').fadeIn();
		});	
	})
	$('#codeButton, #codeLink').click(function(){
		$('#homeNav, #about, #projects').fadeOut(function(){
				$('#code, #headerNav').fadeIn();
		});	
	})
	$('#projectButton, #projectLink').click(function(){
		$('#homeNav, #about, #code').fadeOut(function(){
				$('#projects, #headerNav').fadeIn();
		});	
	})
});