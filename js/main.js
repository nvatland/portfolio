jQuery(document).ready(function($) {
	console.log(navigator.userAgent);
	$('#content-1, #content-2, #content-3, #content-4, #content-5, #content-6, #content-7, #content-8').hide();
	$('.content').removeClass('active');
	var i = 0,
	content = '',
	animations = {
		'-webkit-animation': 'scale 2.5s infinite alternate-reverse cubic-bezier(0.17, 0.89, 0.32, 1.28)',
			'-o-animation': 'scale 2.5s infinite alternate-reverse cubic-bezier(0.17, 0.89, 0.32, 1.28)',
			'-moz-animation': 'scale 2.5s infinite alternate-reverse cubic-bezier(0.17, 0.89, 0.32, 1.28)',
			'animation': 'scale 2.5s infinite alternate-reverse cubic-bezier(0.17, 0.89, 0.32, 1.28)',
			'-webkit-transform-origin': 'center center',
			'-moz-transform-origin': '68px center 0',
			'-o-transform-origin': 'center center',
			'transform-origin': 'center center'
	},
	noanimation = {'-webkit-animation': 'none','-o-animation': 'none','-moz-animation': 'none','animation': 'none','-webkit-transform': 'scale(1)','-o-transform': 'scale(1)','-moz-transform': 'scale(1)','transform': 'scale(1)'};
	if (navigator.appCodeName.match('Mozilla')) {
		$('.st0, .st1, .st2, .st3').css('transform-origin', '68px center 0');
	};
	//logo animation
	$('#Layer_1').hover(function() {
		$('.st0, .st1, .st2, .st3').css(animations);

		if (navigator.appCodeName.match('Mozilla')) {
			$('.st0, .st1, .st2, .st3').css('transform-origin', '68px cent/er 0');
		};
	}, function() {
		$('.st0, .st1, .st2, .st3').css(noanimation);
	});

	$('ul.mobilemenu').hide();
	//mobile menu
	$('.menubtn').click(function(event) {
		event.preventDefault();
		$('ul.mobilemenu').slideToggle(400);
	});

	$('.mob-menu').click(function(event) {
		event.preventDefault();
		$('ul.mobilemenu').slideToggle(400);
	});

	//form styling
  $('input').each(function() {

    $(this).on('focus', function() {
      $(this).parent('.css').addClass('active');
    });

    $(this).on('blur', function() {
      if ($(this).val().length == 0) {
        $(this).parent('.css').removeClass('active');
      }
    });

    if ($(this).val() != '') $(this).parent('.css').addClass('active');

  });

  $('textarea').each(function() {

    $(this).on('focus', function() {
      $(this).parent('.css').addClass('active');
    });

    $(this).on('blur', function() {
      if ($(this).val().length == 0) {
        $(this).parent('.css').removeClass('active');
      }
    });



    if ($(this).val() != '') $(this).parent('.css').addClass('active');

  });
  	//form submit

		var form = $('#contactform');
		var formMessages = $('#form-messages');
		$(form).submit(function(event) {
			/* Act on the event */
			event.preventDefault();
			var formData = $(form).serialize();
			$.ajax({
				url: $(form).attr('action'),
				type: 'POST',
				data: formData,
			})
				.done(function(response) {
					console.log("success");
					$(formMessages).removeClass('error');
					$(formMessages).addClass('success');

					$(formMessages).text(response);

					$('#name').val('');
					$('#email').val('');
					$('#subject').val('');
					$('#message').val('');
					$('fieldset.css').removeClass('active');
				})
				.fail(function(data) {
					$(formMessages).removeClass('success');
					$(formMessages).addClass('error');

					if (data.responseText !== '') {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text('Oops! An error occured and your message could not be sent.');
					}


				})
				.always(function() {
					console.log("complete");
				});
				
		});
	});

//portfolio image click
var i = 0;
	$('.port-boxes').on('click', function(event) {
		i = 0;
		event.preventDefault();
		content = $(this).data('content');
		var test = $('.content').find('#' + content);
		console.log(test);
		test.addClass('active').show();
		$('body').addClass('modal-open');
		$('.slider').show();
		$('.content').addClass('active').fadeIn(400, function() {
			console.log('testing ' + i + ' here');
			i = 0;
			console.log('and ' + i + ' here');

			console.log('slider height is ' + top);
			});
			var slidercount = $('#' + content + ' .slider .slide').length;
			console.log('there are ' + slidercount + ' slides.');
			
			$('#' + content + ' .slider .slide:eq(0)').show().addClass('active');
			test.show(150);
			$('.arrow-right').unbind('click');
			$('.arrow-right').click(function(event) {
				/* Act on the event */
				event.preventDefault;
				$('#' + content + ' .slider .content__item-img.slide:eq(' + i + ')').fadeOut(10, function() {
					$('.slide').hide().removeClass('active');
					i+=1;

					if (i > slidercount - 1) {
						i = 0;
					}
					$('#' + content + ' .slider .content__item-img.slide:eq(' + i + ')').fadeIn(10, function() {
						$('#' + content + ' .slider .slide:eq(' + i + ')').show().addClass('active');
					});
				});
				
				
			});	
			$('.arrow-left').unbind('click');
			$('.arrow-left').click(function(event) {
				event.preventDefault;
				$('#' + content + ' .slider .slide:eq(' + i + ')').fadeOut(10, function() {
					$('.slide').hide().removeClass('active');
					i-=1;
					if (i < 0) {
						i = slidercount - 1;
					}
					$('#' + content + ' .slider .slide:eq(' + i + ')').fadeIn(10, function() {
						$('#' + content + ' .slider .slide:eq(' + i + ')').addClass('active');
					});
				});
			});	
			$(document).unbind('keydown');

			$('.close').on('click', function(event) {
					event.preventDefault();
					$('.content').removeClass('active');
					$('body').removeClass('modal-open');
					$('#content-1, #content-2, #content-3, #content-4, #content-5, #content-6, #content-7, #content-8, .content').hide().removeClass('active');
					$('img.content__item-img.slide').removeClass('active').css('display', 'none');
					i = 0;
				});

			$(document).on('keydown', function(event) {
				console.log(event.which);
		  		console.log(i);
		  		if (event.which == 27) { //escape key
		  			$('.content').removeClass('active');
					$('body').removeClass('modal-open');
					$('#content-1, #content-2, #content-3, #content-4, #content-5, #content-6, #content-7, #content-8, .content').hide().removeClass('active');
					$('img.content__item-img.slide').removeClass('active').css('display', 'none');
		  			i = 0;
		  		};


		  		if(event.which == 39) {//right arrow
		  			event.preventDefault;
					$('#' + content + ' .slider .content__item-img.slide:eq(' + i + ')').fadeOut(10, function() {
						$('.slide').removeClass('active').hide();
						i++;
						if (i > slidercount - 1) {
									i = 0;
						}
						$('#' + content + ' .slider .slide:eq(' + i + ')').fadeIn(0, function() {
									$('#' + content + ' .slider .slide:eq(' + i + ')').addClass('active');
						});
		  			});
				};

		  		if (event.which == 37) {//left arrow
		  			event.preventDefault;
					$('#' + content + ' .slider .content__item-img.slide:eq(' + i + ')').fadeOut(10, function() {
						$('.slide').removeClass('active').hide();
						i--;
						if (i < 0) {
							i = slidercount - 1;
						}
						$('#' + content + ' .slider .slide:eq(' + i + ')').fadeIn(10, function() {
							$('#' + content + ' .slider .slide:eq(' + i + ')').addClass('active');
						});
					});
				};
			  
	});
i = 0;

});

