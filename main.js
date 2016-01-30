jQuery(document).ready(function($) {
	console.log(navigator.userAgent);
	$('#content-1, #content-2, #content-3, #content-4, #content-5').hide();
	$('.content').removeClass('active');
	var i = 0;
	var content = '';
	var animations = {
		'-webkit-animation': 'scale 2.5s infinite alternate-reverse cubic-bezier(0.17, 0.89, 0.32, 1.28)',
			'-o-animation': 'scale 2.5s infinite alternate-reverse cubic-bezier(0.17, 0.89, 0.32, 1.28)',
			'-moz-animation': 'scale 2.5s infinite alternate-reverse cubic-bezier(0.17, 0.89, 0.32, 1.28)',
			'animation': 'scale 2.5s infinite alternate-reverse cubic-bezier(0.17, 0.89, 0.32, 1.28)',
			'-webkit-transform-origin': 'center center',
			'-moz-transform-origin': '68px center 0',
			'-o-transform-origin': 'center center',
			'transform-origin': 'center center'
	}
	var windowWidth = $(window).width();
	var noanimation = {'-webkit-animation': 'none','-o-animation': 'none','-moz-animation': 'none','animation': 'none','-webkit-transform': 'scale(1)','-o-transform': 'scale(1)','-moz-transform': 'scale(1)','transform': 'scale(1)'};
	console.log(windowWidth);
	$(window).resize(function(event) {
		windowWidth = $(window).width();
		// console.log('new width is ' + windowWidth);
	});
	if (navigator.appCodeName.match('Mozilla')) {
		$('.st0, .st1, .st2, .st3').css('transform-origin', '68px center 0');
	};
	$('#Layer_1').hover(function() {
		$('.st0, .st1, .st2, .st3').css(animations);

		if (navigator.appCodeName.match('Mozilla')) {
			$('.st0, .st1, .st2, .st3').css('transform-origin', '68px cent/er 0');
		};
	}, function() {
		$('.st0, .st1, .st2, .st3').css(noanimation);
	});

	$('ul.mobilemenu').hide();

	$('.menubtn').click(function(event) {
		event.preventDefault();
		$('ul.mobilemenu').slideToggle(400);
	});

	$('.mob-menu').click(function(event) {
		event.preventDefault();
		$('ul.mobilemenu').slideToggle(400);
	});


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
			// var testwidth = $('#' + content).width();
			// console.log('content width is ' + testwidth);
			// var halfwindow = (windowWidth - testwidth)/2;
			// console.log('halfwindow is ' + halfwindow);
			// var top = test.height();
			// console.log(top);

			console.log('slider height is ' + top);
			// test.css('left', halfwindow + 'px');
			// $('.arrow-right').css('right', (halfwindow + 5) +'px');
			// $('.arrow').css('top', top);
			// if (windowWidth < 760) {
			// 	$('.arrow').css('top', '120px');
			// };
			// $(window).resize(function(event) {
			// 	windowWidth = $(window).width();
			// 	var topresize = $('.slide').height();
			// 	testwidth = $('#' + content).width();
			// 	halfwindow = (windowWidth - testwidth)/2;
			// 	// test.css('left', halfwindow + 'px');
			// 	$('.arrow-right').css('right', halfwindow);
			// 	$('.arrow').css('top', top);
			// 	if (windowWidth < 760) {
			// 	$('.arrow').css('top', '120px');
			// };
			});
			var slidercount = $('#' + content + ' .slider .slide').length;
			console.log('there are ' + slidercount + ' slides.');
			
			$('#' + content + ' .slider .slide:eq(0)').show().addClass('active');
			test.show(150);
			$('.arrow-right').unbind('click');
			$('.arrow-right').click(function(event) {
				// console.log('arrow right has been clicked and i is now ' + i);
				/* Act on the event */
				event.preventDefault;
				$('#' + content + ' .slider .content__item-img.slide:eq(' + i + ')').fadeOut(10, function() {
					$('.slide').hide().removeClass('active');
					i+=1;

					// console.log('i has been increased. it is now ' + i);
					if (i > slidercount - 1) {
						// console.log('i (' + i + ') was greater than slidercount (' + slidercount + ') so it has been set to 0.');
						i = 0;
					}
					// console.log('testing i value ' + i);
					// if (i==4) {
					// 	i=0;
					// }
					$('#' + content + ' .slider .content__item-img.slide:eq(' + i + ')').fadeIn(10, function() {
						// console.log('finding the next slider item ' + i);
						$('#' + content + ' .slider .slide:eq(' + i + ')').show().addClass('active');
					});
				});
				
				
			});	
			$('.arrow-left').unbind('click');
			$('.arrow-left').click(function(event) {
				/* Act on the event */
				// console.log(i);
				event.preventDefault;
				$('#' + content + ' .slider .slide:eq(' + i + ')').fadeOut(10, function() {
					$('.slide').hide().removeClass('active');
					i-=1;
					// console.log('i has been increased. it is now ' + i);
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
					/* Act on the event */
					$('.content').removeClass('active');
					// $('.content').hide();
					$('body').removeClass('modal-open');
					$('#content-1, #content-2, #content-3, #content-4, #content-5, .content').hide().removeClass('active');
					$('img.content__item-img.slide').removeClass('active').css('display', 'none');
					i = 0;
					// content = '';
				});

			$(document).on('keydown', function(event) {
				console.log(event.which);
		  		console.log(i);
		  		if (event.which == 27) { //escape key
		  			$('.content').removeClass('active');
					$('body').removeClass('modal-open');
					$('#content-1, #content-2, #content-3, #content-4, #content-5, .content').hide().removeClass('active');
					$('img.content__item-img.slide').removeClass('active').css('display', 'none');
		  			i = 0;
		  			// content = '';
		  		};


		  		if(event.which == 39) {//right arrow
		  			event.preventDefault;
					$('#' + content + ' .slider .content__item-img.slide:eq(' + i + ')').fadeOut(10, function() {
						$('.slide').removeClass('active').hide();
						i++;
						// console.log('i has been increased. it is now ' + i);
						if (i > slidercount - 1) {
									i = 0;
									// console.log('i has been increased. it is now ' + i);
						}
						$('#' + content + ' .slider .slide:eq(' + i + ')').fadeIn(0, function() {
							// console.log('#' + content + ' .slider .slide:eq(' + i + ')');
									$('#' + content + ' .slider .slide:eq(' + i + ')').addClass('active');
						});
		  			});
				};

		  		if (event.which == 37) {//left arrow
		  			// console.log(i);
		  			event.preventDefault;
					$('#' + content + ' .slider .content__item-img.slide:eq(' + i + ')').fadeOut(10, function() {
						$('.slide').removeClass('active').hide();
						i--;
						// console.log('i has been increased. it is now ' + i);
						if (i < 0) {
							i = slidercount - 1;
						}
						$('#' + content + ' .slider .slide:eq(' + i + ')').fadeIn(10, function() {
							// console.log('#' + content + ' .slider .slide:eq(' + i + ')');
							$('#' + content + ' .slider .slide:eq(' + i + ')').addClass('active');
						});
					});
				};
			  
	});
i = 0;

});

