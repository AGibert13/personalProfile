$(document).ready(function(){
	selectView()
	$('#slide').click(function(){
			if ($(this).is(':checked')){
				$('#theme').attr('href','spidey.css')
			}
			else{
				$('#theme').attr('href', 'style.css')
			}

		});

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
	function selectView(){
		if (screen.height < 801) {
			if ($('#headerNav')) {
				$('#headerNav').attr({'id':'mobileNav'})
				if ($('#homeNav')) {
					$('#welcome').css({'display':'none'})
				}
			}
			$('#aboutButton, #aboutLink').click(function(){
				fade('#homeNav, #code, #projects','#aboutHead, #about, #hambugerMenu')	
			})
			$('#codeButton, #codeLink').click(function(){
				fade('#homeNav, #about, #projects','#codeHead, #code, #hambugerMenu')	
			})
			$('#projectButton, #projectLink').click(function(){	
				fade('#homeNav, #about, #code','#projectHead, #projects, #hambugerMenu')
			})
			$('#hambugerMenu').click(function(){
				$('#mobileNav').css({"width": "40%", 'height': '100%', 'display':'block'});
			})
			$('#closeNav').click(function(){
				$('#mobileNav').removeAttr('style');
			})

		}
	
		else{
			if ($('mobileNav')) {
				$('#mobileNav').attr({'id':'headerNav'})
			}
			$('#welcome').fadeIn(1000).animate({fontSize:"2.5em"}, 1000, "linear").dequeue();
			$('#aboutButton, #aboutLink').click(function(){
				fade('#homeNav, #code, #projects, #welcome','#aboutHead, #about, #headerNav')	
			})
			$('#codeButton, #codeLink').click(function(){
				fade('#homeNav, #about, #projects, #welcome','#codeHead, #code, #headerNav')	
			})
			$('#projectButton, #projectLink').click(function(){	
				fade('#homeNav, #about, #code, #welcome','#projectHead, #projects, #headerNav')
			})
		}
	}

	$(window).resize(function(){
		selectView();
	})

	$('#suprise').click(function(){
		$('#secretPic').delay(100).css({'display': 'none'})
		$('#secretPic').delay(100).css({'right': '-10%'})
		$('#secretPic').css({'display': 'block'})
		$('#secretPic').animate({right: "+100%"}, 5000)
	})
});