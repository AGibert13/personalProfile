$(document).ready(function(){
	$('#welcome').fadeIn(1000).animate({fontSize:"2.5em"}, 1000, "linear").dequeue();
	$('#slide').click(function(){
		if ($(this).is(':checked')){
			$('#theme').attr('href','spidey.css')
		}
		else{
			$('#theme').attr('href', 'style.css')
		}

	});
	$('#aboutButton, #aboutLink').click(function(){
		fade('#homeNav, #code, #projects, #welcome','#aboutHead, #about, #headerNav')	
	})
	$('#codeButton, #codeLink').click(function(){
		fade('#homeNav, #about, #projects, #welcome','#codeHead, #code, #headerNav')	
	})
	$('#projectButton, #projectLink').click(function(){	
		fade('#homeNav, #about, #code, #welcome','#projectHead, #projects, #headerNav')
	})

	function fade(outId, inId){
		$(outId).fadeOut(function(){
				$(inId).fadeIn(2000);
		});
	}
	$('.website').click(function(){
		var source = $(this).attr('data-link');
		$('#websiteDisplay').attr('src',source);
		$('#frame').show();
	})
	$('#close').click(function(){
		$('#frame').hide();
		$('#websiteDisplay').removeAttr('src');
	})
});