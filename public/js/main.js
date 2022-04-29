function form2JSON(elem) {
	var o = {};
	var a = elem.serializeArray();

	$.each(a, function (i, item) {
		if (o[item.name] !== undefined) {
			if (!o[item.name].push) {
				o[item.name] = [o[item.name]];
			}
			o[item.name].push(item.value || '');
		} else {
			o[item.name] = item.value || '';
		}
	});
	return JSON.stringify(o);
}

$('#whitepaper-button').click(function () {
	$('#whitepaper-button').hide();
	// $('#whitepaper-text').show();
	$('#popup').show();

	return false;
});

$(document).ready(function () {
	$('.li-solutions, .solutions .dropdown-solutions').mouseenter(function () {
		$('.dropdown-solutions').show();
		$('.arrow-down').hide();
		$('.arrow-up-regular').show();
		$('.arrow-up').removeClass('hidden');
		$('.add-space').addClass('space');
	});
	$('.li-solutions, .solutions .dropdown-solutions').mouseleave(function () {
		$('.dropdown-solutions').hide();
		$('.arrow-down').show();
		$('.arrow-up-regular').hide();
		$('.arrow-up').addClass('hidden');
		$('.add-space').removeClass('space');
	});

	$('.all').on('click', function () {
		$('.case-studies-show').show();
		$('.white-paper-show').show();
		$('.all').removeClass('select-all-white');
		$('.studies').removeClass('select-studies-blue');
		$('.white-paper').removeClass('select-white-paper-blue');
		$('.studies-head').html('Case Studies and White Papers');
	});

	$('.studies').on('click', function () {
		$('.case-studies-show').show();
		$('.white-paper-show').hide();
		$('.all').addClass('select-all-white');
		$('.studies').addClass('select-studies-blue');
		$('.white-paper').removeClass('select-white-paper-blue');
		$('.studies-head').html('Case Studies');
	});

	$('.white-paper-btn').on('click', function () {
		$('.case-studies-show').hide();
		$('.white-paper-show').show();
		$('.all').addClass('select-all-white');
		$('.studies').removeClass('select-studies-blue');
		$('.white-paper').addClass('select-white-paper-blue');
		$('.studies-head').html('White Papers');
	});

	$('.play-btn').on('click', function () {
		$('.play-video-brisqq').show();
		$('#brisqq-video')[0].src += '&autoplay=1';
	});

	$('.play-video-brisqq .closeBtn').on('click', function () {
		$('.play-video-brisqq').hide();
		var videoURL = $('#brisqq-video').prop('src');
		videoURL = videoURL.replace('&autoplay=1', '');
		$('#brisqq-video').prop('src', '');
		$('#brisqq-video').prop('src', videoURL);
	});

	$(function () {
		var index = $('.index');
		var header = $('.header');
		var first = $('.first-header');
		var solutions = $('.dropdown-solutions a');

		var index_solution = $('.header .menu li');
		var index_solution_arrow = $('.header .menu li .solutions i');
		var index_solution_word = $('.header .menu li .solutions a');
		var index_navigation = $('.header .menu li a');
		var index_login = $('.first-header .float-right .menu li a');
		var hamburger = $('.header .hamburger');
		var menu_cont_full = $('.menu-cont-full');

		if (index.length != 0) {
			$('.hamburger').on('click', function () {
				var scroll1 = $(window).scrollTop();
				if (scroll1 < 400) {
					$('#main-menu-full').toggle();
					$('.header').toggleClass('header-back-small-background');
					$('.header .hamburger .menu-icon').toggleClass('icon-white');
					$('.black_logo').toggle();
					$('.white_logo').toggle();
					$('body').toggleClass('select-overflow-hidden');
				} else if (scroll1 > 400) {
					$('#main-menu-full').toggle();
					$('body').toggleClass('select-overflow-hidden');
				}
			});
		} else {
			$('.hamburger').on('click', function () {
				$('#main-menu-full').toggle();
				$('.header').toggleClass('header-back-small-background');
			});
		}

		$(window).scroll(function () {
			if (index.length != 0) {
				var scroll = $(window).scrollTop();
				if (scroll >= 400) {
					header.addClass('header-back');
					first.addClass('first-header-back');
					solutions.addClass('dropdown-header-back');

					index_solution.removeClass('letter-color');
					index_solution_arrow.removeClass('arrow-letter-color');
					index_solution_word.removeClass('word-letter-color');
					index_navigation.removeClass('a-letter-color');
					index_login.removeClass('login-letter-color');

					$('.black_logo').show();
					$('.white_logo').hide();
					$('.header .hamburger .menu-icon').removeClass('icon-white');
				} else {
					header.removeClass('header-back');
					first.removeClass('first-header-back');
					solutions.removeClass('dropdown-header-back');

					index_solution.addClass('letter-color');
					index_solution_arrow.addClass('arrow-letter-color');
					index_solution_word.addClass('word-letter-color');
					index_navigation.addClass('a-letter-color');
					index_login.addClass('login-letter-color');

					$('.black_logo').hide();
					$('.white_logo').show();
					$('.header .hamburger .menu-icon').addClass('icon-white');
				}
			}
		});

		$(window).scroll(function () {
			var scroll = $(window).scrollTop();
			if (scroll >= 1) {
				$('.first-header').hide();
				if (index.length == 0) {
					$('.page-container').addClass('select-all-scroll');
					$('.blog-feed').addClass('select-all-scroll');
					$('.blog-entry').addClass('select-all-scroll');
				}
			} else {
				$('.first-header').show();
				if (index.length == 0) {
					$('.page-container').removeClass('select-all-scroll');
					$('.blog-feed').removeClass('select-all-scroll');
					$('.blog-entry').removeClass('select-all-scroll');
				}
			}
		});

		// function popupGallery() {
		// 	if ($('.img_popup,.image-link').length) {
		// 		$('.img_popup,.image-link').each(function () {
		// 			$('.img_popup,.image-link').magnificPopup({
		// 				type: 'image',
		// 				tLoading: 'Loading image #%curr%...',
		// 				removalDelay: 300,
		// 				mainClass: 'mfp-with-zoom mfp-img-mobile',
		// 				gallery: {
		// 					enabled: true,
		// 					navigateByImgClick: true,
		// 					preload: [0, 1] // Will preload 0 - before current, and 1 after the current image,
		// 				}
		// 			});
		// 		});
		// 	}
		// 	// if ($('.popup-youtube').length) {
		// 	$('.popup-youtube').magnificPopup({
		// 		disableOn: 700,
		// 		type: 'iframe',
		// 		removalDelay: 160,
		// 		preloader: false,
		// 		fixedContentPos: false,
		// 		mainClass: 'mfp-with-zoom mfp-img-mobile'
		// 	});
		// 	$('.popup-youtube').magnificPopup({
		// 		disableOn: 700,
		// 		type: 'iframe',
		// 		mainClass: 'mfp-fade',
		// 		removalDelay: 160,
		// 		preloader: false,
		// 		fixedContentPos: false
		// 	});
		// 	// }
		// }
		// popupGallery();

		function serviceSlider() {
			var service_slider = $('.service_carousel');
			if (service_slider.length) {
				service_slider.owlCarousel({
					loop: true,
					// margin: 200,
					margin: 0,
					items: 1,
					autoplay: true,
					autoplayTimeout: 4000,
					autoplaySpeed: 2000,
					responsiveClass: true,
					// nav: true,
					dots: false,
					stagePadding: 100,
					// navText: [
					//   '<i class="ti-arrow-right"></i>',
					//   '<i class="ti-arrow-left"></i>'
					// ],
					responsiveClass: true,
					responsive: {
						0: {
							items: 1,
							stagePadding: 0
						},
						578: {
							items: 3,
							stagePadding: 0
						},
						992: {
							items: 4,
							stagePadding: 0
						},
						1200: {
							items: 4
						}
					}
				});
			}
		}
		serviceSlider();
	});

	$(window).on('load', function () {
		var index = $('.index');
		var header = $('.header');
		var first = $('.first-header');
		var solutions = $('.dropdown-solutions a');
		var about = $('.about');
		var success_stories = $('.success-stories');
		var use_cases = $('.use-cases');
		var resources = $('.resources');
		var faq = $('.faq');
		var blog_feed = $('.blog-feed');
		var blog_entry = $('.blog-entry');
		var contact = $('.contact');
		var ecom = $('.eCommerce');
		var in_store = $('.in-store');
		var deliver_with_us = $('.become-courier-page1');
		var sign_up_to_deliver = $('.become-courier');
		var sign_up = $('.sign-up');
		var thank_you = $('.thank-you');
		var terms = $('.terms');
		var privacy = $('.privacy');
		var refer_retailer = $('.refer-retailer');
		var verify_identity = $('.verify-identity');

		if (
			verify_identity != 0 ||
			refer_retailer.length != 0 ||
			sign_up_to_deliver.length != 0 ||
			deliver_with_us.length != 0 ||
			sign_up.length != 0 ||
			thank_you.length != 0 ||
			about.length != 0 ||
			success_stories.length != 0 ||
			use_cases.length != 0 ||
			resources.length != 0 ||
			faq.length != 0 ||
			blog_feed.length != 0 ||
			blog_entry.length != 0 ||
			contact.length != 0 ||
			ecom.length != 0 ||
			in_store.length != 0 ||
			terms.length != 0 ||
			privacy.length != 0
		) {
			header.addClass('header-back');
			first.addClass('first-header-back');
			solutions.addClass('dropdown-header-back');

			$('.black_logo').show();
			$('.white_logo').hide();
			$('.header .hamburger .menu-icon').removeClass('icon-white');
		}
		if (index.length != 0) {
			var index_solution = $('.header .menu li');
			var index_solution_arrow = $('.header .menu li .solutions i');
			var index_solution_word = $('.header .menu li .solutions a');
			var index_navigation = $('.header .menu li a');
			var index_login = $('.first-header .float-right .menu li a');

			index_solution.addClass('letter-color');
			index_solution_arrow.addClass('arrow-letter-color');
			index_solution_word.addClass('word-letter-color');
			index_navigation.addClass('a-letter-color');
			index_login.addClass('login-letter-color');

			$('.header .hamburger .menu-icon').addClass('icon-white');
		}

		if (index) {
			$(window).scrollTop(1);
			$(window).scrollTop(-1);
		}
	});

	// ///////////////////////// ---FAQ--- /////////////////////////////

	$('.general').on('click', function () {
		$('.show-questions-general').toggle();
		$('.general .arrow-down').toggle();
		$('.general .arrow-up').toggle();
	});

	$('.delivery').on('click', function () {
		$('.show-questions-delivery').toggle();
		$('.delivery .arrow-down').toggle();
		$('.delivery .arrow-up').toggle();
	});

	$('.payment').on('click', function () {
		$('.show-questions-payment').toggle();
		$('.payment .arrow-down').toggle();
		$('.payment .arrow-up').toggle();
	});

	$('.deliver-brisqq').on('click', function () {
		$('.show-questions-deliver-brisqq').toggle();
		$('.deliver-brisqq .arrow-down').toggle();
		$('.deliver-brisqq .arrow-up').toggle();
	});

	$('.exact-question-1').on('click', function () {
		$('.answer-1').toggle();
		$('.exact-question-1 .arrow-down').toggle();
		$('.exact-question-1 .arrow-up').toggle();
	});

	$('.exact-question-2').on('click', function () {
		$('.answer-2').toggle();
		$('.exact-question-2 .arrow-down').toggle();
		$('.exact-question-2 .arrow-up').toggle();
	});

	$('.exact-question-3').on('click', function () {
		$('.answer-3').toggle();
		$('.exact-question-3 .arrow-down').toggle();
		$('.exact-question-3 .arrow-up').toggle();
	});

	$('.exact-question-4').on('click', function () {
		$('.answer-4').toggle();
		$('.exact-question-4 .arrow-down').toggle();
		$('.exact-question-4 .arrow-up').toggle();
	});

	$('.exact-question-5').on('click', function () {
		$('.answer-5').toggle();
		$('.exact-question-5 .arrow-down').toggle();
		$('.exact-question-5 .arrow-up').toggle();
	});

	$('.exact-question-6').on('click', function () {
		$('.answer-6').toggle();
		$('.exact-question-6 .arrow-down').toggle();
		$('.exact-question-6 .arrow-up').toggle();
	});

	$('.exact-question-7').on('click', function () {
		$('.answer-7').toggle();
		$('.exact-question-7 .arrow-down').toggle();
		$('.exact-question-7 .arrow-up').toggle();
	});

	$('.exact-question-8').on('click', function () {
		$('.answer-8').toggle();
		$('.exact-question-8 .arrow-down').toggle();
		$('.exact-question-8 .arrow-up').toggle();
	});

	$('.exact-question-9').on('click', function () {
		$('.answer-9').toggle();
		$('.exact-question-9 .arrow-down').toggle();
		$('.exact-question-9 .arrow-up').toggle();
	});

	$('.exact-question-10').on('click', function () {
		$('.answer-10').toggle();
		$('.exact-question-10 .arrow-down').toggle();
		$('.exact-question-10 .arrow-up').toggle();
	});

	$('.exact-question-11').on('click', function () {
		$('.answer-11').toggle();
		$('.exact-question-11 .arrow-down').toggle();
		$('.exact-question-11 .arrow-up').toggle();
	});

	$('.exact-question-12').on('click', function () {
		$('.answer-12').toggle();
		$('.exact-question-12 .arrow-down').toggle();
		$('.exact-question-12 .arrow-up').toggle();
	});

	$('.exact-question-13').on('click', function () {
		$('.answer-13').toggle();
		$('.exact-question-13 .arrow-down').toggle();
		$('.exact-question-13 .arrow-up').toggle();
	});

	$('.exact-question-14').on('click', function () {
		$('.answer-14').toggle();
		$('.exact-question-14 .arrow-down').toggle();
		$('.exact-question-14 .arrow-up').toggle();
	});

	$('.exact-question-15').on('click', function () {
		$('.answer-15').toggle();
		$('.exact-question-15 .arrow-down').toggle();
		$('.exact-question-15 .arrow-up').toggle();
	});

	$('.exact-question-16').on('click', function () {
		$('.answer-16').toggle();
		$('.exact-question-16 .arrow-down').toggle();
		$('.exact-question-16 .arrow-up').toggle();
	});

	$('.exact-question-17').on('click', function () {
		$('.answer-17').toggle();
		$('.exact-question-17 .arrow-down').toggle();
		$('.exact-question-17 .arrow-up').toggle();
	});

	$('.exact-question-18').on('click', function () {
		$('.answer-18').toggle();
		$('.exact-question-18 .arrow-down').toggle();
		$('.exact-question-18 .arrow-up').toggle();
	});

	$('.exact-question-19').on('click', function () {
		$('.answer-19').toggle();
		$('.exact-question-19 .arrow-down').toggle();
		$('.exact-question-19 .arrow-up').toggle();
	});

	$('.exact-question-20').on('click', function () {
		$('.answer-20').toggle();
		$('.exact-question-20 .arrow-down').toggle();
		$('.exact-question-20 .arrow-up').toggle();
	});

	$('.exact-question-21').on('click', function () {
		$('.answer-21').toggle();
		$('.exact-question-21 .arrow-down').toggle();
		$('.exact-question-21 .arrow-up').toggle();
	});

	$('.exact-question-22').on('click', function () {
		$('.answer-22').toggle();
		$('.exact-question-22 .arrow-down').toggle();
		$('.exact-question-22 .arrow-up').toggle();
	});

	$('.exact-question-23').on('click', function () {
		$('.answer-23').toggle();
		$('.exact-question-23 .arrow-down').toggle();
		$('.exact-question-23 .arrow-up').toggle();
	});

	$('.exact-question-24').on('click', function () {
		$('.answer-24').toggle();
		$('.exact-question-24 .arrow-down').toggle();
		$('.exact-question-24 .arrow-up').toggle();
	});

	$('.vehicle-type a').on('click', function () {
		$('.vehicle-type a').removeClass('active');
		$('input[name="vehicle"]').val($(this).attr('data-type'));
		$('input[name="vehicle"]').trigger('keyup');
		$(this).addClass('active');
		return false;
	});

	$('.video-play-btn').on('click', function (ev) {
		$(this).parents('.video-cont').hide();
		$('#brisqq-video').attr('src', $('#brisqq-video').attr('next-src'));
	});
});

function smoothScrollTo(element, to, duration) {
	var start = element.scrollTop,
		change = to - start,
		currentTime = 0,
		increment = 20;

	var animateScroll = function () {
		currentTime += increment;
		var val = Math.easeInOutQuad(currentTime, start, change, duration);
		element.scrollTop = val;
		if (currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	};
	animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
	t /= d / 2;
	if (t < 1) return (c / 2) * t * t + b;
	t--;
	return (-c / 2) * (t * (t - 2) - 1) + b;
};

var captchaResult = null;
var formValid = null;

function verifyCaptcha(param) {
	captchaResult = true;
	$('form input').trigger('keyup');
}

function showFormSuccess() {
	$('.splash').hide();
	$('.first').hide();
	$('.form-cont').hide();
	$('.partners').hide();
	$('.icons').hide();
	$('.success-message-cont').show();
}

// ===================================================================================================================
var config = {
	siteUrl: 'https://brisqq.com',
	serverUrl: 'https://core.brisqq.com'
	// serverUrl: "http://192.168.1.245:9001"
};

var allowedCities = ['london', 'amsterdam'];

// var postCodeValidation = {
// 	london: {
// 		message: {
// 			valid: 'This store location is in a Brisqq Zone.',
// 			invalid: 'This store location is currently not in a Brisqq Zone, but we are working on it.'
// 		},
// 		icon: {
// 			valid: '/assets/img/checked.svg',
// 			invalid: '/assets/img/error.svg'
// 		}
// 	},
// 	amsterdam: {
// 		message: {
// 			valid: 'This store location is in a Brisqq Zone.',
// 			invalid: 'This store location is currently not in a Brisqq Zone, but we are working on it. Please <a src='#'>contact us</a> to speak to a Delivery Specialist and we will try our best to accommodate your business.'
// 		},
// 		icon: {
// 			valid: '/assets/img/checked.svg',
// 			invalid: '/assets/img/error.svg'
// 		}

// 	}
// }

var postCodes = {
	london: [
		'E1',
		'E1W',
		'E2',
		'E3',
		'E5',
		'E6',
		'E8',
		'E9',
		'E10',
		'E14',
		'E15',
		'E16',
		'E17',
		'E20',
		'WC1',
		'WC2',
		'EC1',
		'EC2',
		'EC3',
		'EC4',
		'N1',
		'N2',
		'N4',
		'N5',
		'N6',
		'N7',
		'N8',
		'N9',
		'N10',
		'N15',
		'N16',
		'N19',
		'NW1',
		'NW2',
		'NW3',
		'NW5',
		'NW6',
		'NW8',
		'NW10',
		'NW11',
		'SE1',
		'SE4',
		'SE5',
		'SE6',
		'SE8',
		'SE10',
		'SE11',
		'SE13',
		'SE14',
		'SE15',
		'SE16',
		'SE17',
		'SE22',
		'SE23',
		'SE24',
		'W1',
		'W2',
		'W4',
		'W6',
		'W8',
		'W9',
		'W10',
		'W11',
		'W12',
		'W14',
		'SW1',
		'SW2',
		'SW3',
		'SW4',
		'SW5',
		'SW6',
		'SW7',
		'SW8',
		'SW9',
		'SW10',
		'SW11',
		'SW12',
		'SW13',
		'SW15',
		'SW17',
		'SW18',
		'SW19'
	],
	amsterdam: [
		'1011',
		'1054',
		'1012',
		'1055',
		'1013',
		'1056',
		'1014',
		'1057',
		'1015',
		'1058',
		'1016',
		'1059',
		'1017',
		'1071',
		'1018',
		'1072',
		'1019',
		'1073',
		'1021',
		'1074',
		'1022',
		'1075',
		'1023',
		'1076',
		'1024',
		'1077',
		'1025',
		'1078',
		'1031',
		'1079',
		'1032',
		'1091',
		'1033',
		'1092',
		'1034',
		'1093',
		'1034',
		'1094',
		'1035',
		'1095',
		'1051',
		'1096',
		'1051',
		'1097',
		'1053',
		'1098'
	]
};

// var awesompletes = [];

// var firstAddress = $('input[name=company_address_1]');

// if (firstAddress.length) {
// 	initAutocomplete(firstAddress[0]);
// }

// var companyAddressElements = [
// 	{
// 		name: 'company_address_1',
// 		address: firstAddress.length ? firstAddress.val().trim() : ''
// 	}
// ];

// var removeAddressButtonHtml = '<a href='#' style='float: right;' class='remove_field'>remove</a>';

// var max_fields = 10;
// var wrapper = $('.input_fields_wrap');
// var add_button = $('.add_field_button');

// var x = 1;

var customerFormRequiredFieldsFilled = {
	firstName: false,
	lastName: false,
	title: false,
	email: false,
	phone: false,
	company: false,
	// city: false,
	estimatedMonthly: false,
	scheduleDelivery: false
};

var courierFormRequiredFieldsFilled = {
	firstName: false,
	lastName: false,
	email: false,
	phone: false,
	// courierCity: false,
	postal_code: false,
	vehicle: false,
	dob: false
};

var customerIp;

var passedCaptcha = false;

var firstLastNameMinLen = 2;

function isAllRequiredFieldsFilled(fields) {
	$.each(fields, function (fieldName, val) {
		fields[fieldName] = $('#' + fieldName).val() !== '';
	});

	var hasFalseKeys = Object.keys(fields).some(function (k) {
		return !fields[k];
	});

	return !hasFalseKeys;
}

function isPostCodesValid() {
	return selectr.getSelected().length;
}

(function inputFocus() {
	[].slice
		.call(document.querySelectorAll('[data-js="input-field"]'))
		.forEach(function (inputEl) {
			if (inputEl.value.trim() !== '') {
				$(inputEl).closest('.input-field').addClass('is-active');
			}
			inputEl.addEventListener('focus', onInputFocus);
			inputEl.addEventListener('blur', function (ev) {
				onInputBlur(ev);
				// if ($(inputEl).hasClass('company-address')) {
				// 	updatePostCodeValidationMessage($(inputEl));
				// }
			});

			// if ($(inputEl).hasClass('company-address')) {
			// 	inputEl.addEventListener('change', function (ev) {
			// 		updateAddress($(inputEl));
			// 		disableOrEnablePostcodes();
			// 	});
			// }
		});
})();

// function disableOrEnablePostcodes() {
// 	$('.address-input-wrapper option').removeAttr('disabled')
// 	$.each(companyAddressElements, function (i, el) {
// 		$('.address-input-wrapper option[value=''+ el.address +'']').attr('disabled','disabled')
// 	})
// }

// function getSelectedCity() {
// 	return $('#city').val().trim().toLowerCase();
// }

function getSelectedCity() {
	var city = $('#city');
	return city.length ? $('#city').val().trim().toLowerCase() : '';
}

function onInputFocus(ev) {
	$(ev.target).closest('.input-field').addClass('is-active');
}

function onInputBlur(ev) {
	if (ev.target.value.trim() === '') {
		$(ev.target.parentNode).closest('.input-field').removeClass('is-active');
	}
}

// function isPostCodeValid(code) {
// 	var city = getSelectedCity();
// 	if (!allowedCities.includes(city)) {
// 		return false;
// 	}
// 	code = code.split(' ');

// 	return postCodes[city].includes(code[0]);
// }

// function updatePostCodeValidationMessage(el) {

// 	var postcode = el.val().trim();

// 	var city = getSelectedCity();

// 	var messageObj = {
// 		textEl: el.closest('.address-input-wrapper').find('.post-code-message > span'),
// 		iconEl: el.closest('.address-input-wrapper').find('.post-code-message > img')
// 	}

// 	if (!postcode || !city) {
// 		messageObj.textEl.text('');
// 		messageObj.iconEl.hide();

// 		return;
// 	}

// 	if (isPostCodeValid(postcode.toUpperCase())) {
// 		messageObj.textEl.html(postCodeValidation[city].message.valid);
// 		messageObj.iconEl.attr('src', postCodeValidation[city].icon.valid);
// 		messageObj.iconEl.show();
// 		return;
// 	}

// 	messageObj.textEl.html(postCodeValidation[city].message.invalid);
// 	messageObj.iconEl.attr('src', postCodeValidation[city].icon.invalid);
// 	messageObj.iconEl.show();
// }

// $(add_button).click(function (e) {
// 	e.preventDefault();

// 	var city = getSelectedCity();

// 	if (!city) {
// 		return;
// 	}

// 	if (x < max_fields) {
// 		x++;
// 		var elem = $('.address-input-wrapper').first().clone(true);
// 		var inputField = elem.find('[data-js='input-field']');
// 		inputField.attr('name', inputField.attr('name').replace('1', x));
// 		companyAddressElements.push({ name: inputField.attr('name'), address: '' });
// 		$(removeAddressButtonHtml).insertBefore(elem.find('.input-field'));
// 		inputField.focus(onInputFocus);
// 		inputField.blur(function (ev) {
// 			onInputBlur(ev);
// 			updatePostCodeValidationMessage($(this));
// 		});
// 		inputField.on('change', function () {
// 			updateAddress($(this));
// 			isCustomerFormValid();
// 			disableOrEnablePostcodes();
// 		})
// 		$(wrapper).append(elem);
// 		initAutocomplete(inputField[0]);
// 		inputField.val('').focus();
// 		updatePostCodeValidationMessage(inputField);
// 	}

// 	isCustomerFormValid();

// });

// function updateAddress(adr) {
// 	$.each(companyAddressElements, function (i, el) {
// 		if (el.name === adr.attr('name')) {
// 			el.address = adr.val().trim();
// 		}
// 	})
// }

if ($('#myinput').length) {
	var selectr = new Selectr('#myinput', {
		multiple: true,
		placeholder: 'Company Postcode (you can select multiple) *',
		disabled: true
	});

	var postCodesData = postCodes.london;
	var options = [];

	for (var i = 0; i < postCodesData.length; i++) {
		options.push({
			value: postCodesData[i],
			text: postCodesData[i]
		});
	}

	selectr.removeAll();
	selectr.add(options);
	selectr.enable();

	$('.selectr-selected').removeAttr('disabled');
}

// function enableAddressInput() {
// 	$('.add_field_button').removeAttr('disabled');
// 	$('.address-input-wrapper .input-field select').removeAttr('disabled');
// 	$('.address-input-wrapper .input-field').removeClass('disabled');
// }

// function disableAddressInput() {
// 	$('.add_field_button').attr('disabled', 'disabled');
// 	$('.address-input-wrapper .input-field select').attr('disabled', 'disabled');
// 	$('.address-input-wrapper .input-field').addClass('disabled');
// }

// $(wrapper).on('click', '.remove_field', function (e) {
// 	e.preventDefault();
// 	$(this).closest('.address-input-wrapper').remove();
// 	x--;

// 	var elemToRemove = $(this).closest('.address-input-wrapper').find('select').attr('name');

// 	$.each(companyAddressElements, function (i) {
// 		if (companyAddressElements[i].name === elemToRemove) {
// 			companyAddressElements.splice(i, 1);
// 			return false;
// 		}
// 	});

// 	isCustomerFormValid();
// 	disableOrEnablePostcodes();
// })

// function initAutocomplete(el) {
// 	var awesomeplete = new Awesomplete(el, {
// 		minChars: 1,
// 		maxItems: 15,
// 		list: getSelectedCity() ? postCodes[getSelectedCity()] : [],
// 		autoFirst: true,
// 	});

// 	awesompletes.push(awesomeplete);
// }
// document.addEventListener('awesomplete-selectcomplete', function(e) {
// 	updateAddress($(e.target));
// 	updatePostCodeValidationMessage($(e.target));
// 	isCustomerFormValid();
// })

function isEmailValid(email) {
	var re =
		/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(email.val())) {
		return false;
	}
	return true;
}

function isCustomerFormValid() {
	if (
		!isEmailValid($('#email')) ||
		!isNameValid($('#firstName')) ||
		!isNameValid($('#lastName')) ||
		!isAllRequiredFieldsFilled(customerFormRequiredFieldsFilled) ||
		!isPostCodesValid() ||
		!passedCaptcha
	) {
		$('#join').attr('disabled', 'disabled');
		return false;
	}

	$('#join').removeAttr('disabled');
	return true;
}

function isCourierFormValid() {
	if (
		// !isAddressValid() ||
		!isEmailValid($('#email')) ||
		!isAllRequiredFieldsFilled(courierFormRequiredFieldsFilled) ||
		!isNameValid($('#firstName')) ||
		!isNameValid($('#lastName')) ||
		!passedCaptcha
	) {
		$('#nextStep').attr('disabled', 'disabled');
		return false;
	}

	$('#nextStep').removeAttr('disabled');
	return true;
}

function verifyGoogleCaptcha() {
	passedCaptcha = true;
	if ($('#myinput').length) {
		isCustomerFormValid();
	}
	isCourierFormValid();
}

function recaptchaExpired() {
	passedCaptcha = false;
	if ($('#myinput').length) {
		isCustomerFormValid();
	}
	isCourierFormValid();
}

$('.sign-up input:not(.selectr-input):not(#email)').on('keyup', function () {
	isCustomerFormValid();
});

$('.sign-up #email').on('keyup', function () {
	var email = $('#email');
	isCustomerFormValid();
	if (!isEmailValid(email)) {
		email.addClass('invalid');
	} else {
		email.removeClass('invalid');
	}
});

$('.sign-up #firstName').on('keyup', function () {
	isNameValid($('#firstName'));
});

$('.sign-up #lastName').on('keyup', function () {
	isNameValid($('#lastName'));
});

$('.sign-up select').on('change', function () {
	isCustomerFormValid();
});

$('.become-courier input')
	.not('#autocomplete')
	.on('keyup', function () {
		isCourierFormValid();
	});

$('.become-courier #autocomplete').on('blur', function () {
	isCourierFormValid();
	showMess = true;
});

$('.become-courier select').on('change', function () {
	isCourierFormValid();
});

$('.become-courier #email').on('keyup', function () {
	var email = $('#email');
	isCourierFormValid();
	if (!isEmailValid(email)) {
		email.addClass('invalid');
	} else {
		email.removeClass('invalid');
	}
});

$('.become-courier #firstName').on('keyup', function () {
	isNameValid($('#firstName'));
});

$('.become-courier #lastName').on('keyup', function () {
	isNameValid($('#lastName'));
});

$('.become-courier #addressField #autocomplete').on('keyup', function () {
	clearAddress();
});

if ($('#myinput').length) {
	selectr.on('selectr.select', function (option) {
		isCustomerFormValid();
	});
	selectr.on('selectr.deselect', function (option) {
		isCustomerFormValid();
	});
}

function getClientIp(cb) {
	$.getJSON('//api.ipify.org?format=jsonp&callback=?', function (data) {
		if (cb) {
			cb(data.ip);
		}
	});
}

getClientIp(function (ip) {
	customerIp = ip;
});

$('#join').click(function (e) {
	if (!isCustomerFormValid()) {
		return;
	}

	var customerFormData = form2JSON($('#partner-form'));

	var postData = JSON.parse(customerFormData);

	postData.marketingConsent = $('#marketingConsent').is(':checked');

	postData.companyPostcodes = selectr.getValue();
	postData.companyPostcodes.shift();

	postData.firstName = trimWord(postData.firstName);
	postData.lastName = trimWord(postData.lastName);
	postData.title = trimWord(postData.title);
	postData.email = trimWord(postData.email);
	postData.phone = trimWord(postData.phone);
	postData.company = trimWord(postData.company);
	postData.companyWebsite = trimWord(postData.companyWebsite);
	postData.promoCode = trimWord(postData.promoCode);
	postData.pageUrl = window.location.href;

	$.ajax({
		type: 'POST',
		url: config.serverUrl + '/site/customer',
		data: JSON.stringify(postData),
		contentType: 'application/json',
		dataType: 'json',
		success: function (data, status, xhr) {
			if (data.result === 'ok') {
				var redirectUrl = config.siteUrl + '/thank-you';
				if (window.location.href.indexOf('nl') > -1) {
					redirectUrl = config.siteUrl + '/nl/dank-je';
				}
				window.location.href = redirectUrl;
			} else {
				alert(data.message);
			}
		},
		error: function (xhr, errorType, error) {
			var res = xhr.responseJSON;
			// if (xhr.response) {
			//   var res = JSON.parse(xhr.response);
			// }
			if (res && res.message) {
				if (res.message.indexOf('User validation failed') !== -1) {
					alert(
						'The email you have entered already exists in our system. Please try another one.'
					);
				} else if (res.message.indexOf('E11000') !== -1) {
					alert(
						'The company name you have entered already exists in our system. Please try another one.'
					);
				} else {
					alert('There was an error submitting your request: ' + res.message);
				}
			} else {
				alert(
					'There was an error submitting your request. We apologize for the inconvenience - please try again, or contact us directly.'
				);
			}
		}
	});

	// fbq('track', 'CompleteRegistration');

	return false;
});

$('#nextStep').click(function (e) {
	if ($('#firstName').val().length < firstLastNameMinLen) {
		alertify
			.alert('Error', 'First name is too short (minimum is 2 characters).')
			.set({ transition: 'zoom' })
			.show();
		return;
	}

	if ($('#lastName').val().length < firstLastNameMinLen) {
		alertify
			.alert('Error', 'Last name is too short (minimum is 2 characters).')
			.set({ transition: 'zoom' })
			.show();
		return;
	}

	if (!isCourierFormValid()) {
		return;
	}

	var self = this;

	$(self).attr('disabled', 'disabled');

	var courierFormData = form2JSON($('#courier-form'));

	var postData = JSON.parse(courierFormData);

	postData.courierCity = 'London';

	postData.address = {
		city: $('#city').val(),
		country: $('#country').val(),
		postcode: $('#postal_code').val(),
		state: $('#state').val(),
		address: $('#address').val()
	};

	postData.firstName = trimWord(postData.firstName);
	postData.lastName = trimWord(postData.lastName);
	postData.email = trimWord(postData.email);
	postData.phone = trimWord(postData.phone);

	$.ajax({
		type: 'POST',
		url: config.serverUrl + '/site/courier',
		data: JSON.stringify(postData),
		contentType: 'application/json',
		dataType: 'json',
		success: function (data, status, xhr) {
			if (data.result === 'ok') {
				var redirectUrl =
					config.siteUrl + '/verify-identity?applicant=' + data.applicantId;
				if (window.location.href.indexOf('nl') > -1) {
					redirectUrl = config.siteUrl + '/nl/bedankt-koerier';
				}
				window.location.href = redirectUrl;
			} else {
				alertify
					.alert('Error', data.message)
					.set({ transition: 'zoom' })
					.show();
			}
		},
		error: function (error) {
			alertify
				.alert('Error', JSON.parse(error.responseText).message)
				.set({ transition: 'zoom' })
				.show();
			$(self).removeAttr('disabled');
		}
	});

	return false;
});

$('#submit').click(function () {
	var redirectUrl = config.siteUrl + '/sign-up-to-deliver';
	if (window.location.href.indexOf('nl') > -1) {
		redirectUrl = config.siteUrl + '/nl/sign-up-to-deliver';
	}
	window.location.href = redirectUrl;
});

$('#holder .nav-item').click(function () {
	$('#holder .nav-item').removeClass('active');
	$('#holder .step-block').removeClass('active');
	$(this).addClass('active');
	$('#holder .step' + $(this).attr('rel')).addClass('active');
});

function getCookie(cname) {
	var name = cname + '=';
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

// ===================================================================================

if ($('#onfido-mount').length) {
	var options = window.location.search
		.slice(1)
		.split('&')
		.reduce(function _reduce(a, b) {
			b = b.split('=');
			a[b[0]] = decodeURIComponent(b[1]);
			return a;
		}, {});

	var useModal = options.useModal === 'true';
	if (!useModal) {
		document.getElementById('onfido-button').style.visibility = 'hidden';
	}

	window.onload = function () {
		if (options.async === 'false') {
			getToken(createSDK);
		} else if (options.link_id) {
			window.onfidoOut = Onfido.init({ mobileFlow: true });
		} else {
			createSDK(null);
			getToken(injectOptions);
		}
	};

	var steps = [
		{
			type: 'welcome',
			options: {
				title: 'Verify your identity',
				descriptions: []
			}
		},
		{
			type: 'document',
			options: {
				useWebcam: false
			}
		},
		'face',
		'complete'
	];

	var createSDK = function (token) {
		window.onfidoOut = Onfido.init({
			token: token,
			useModal: useModal,
			buttonId: 'onfido-button',
			onComplete: function () {
				var applicantId = options.applicant;

				if (!applicantId) {
					alertify
						.alert(
							'Error',
							'Your applicant ID is not valid - please contact us directly.'
						)
						.set({ transition: 'zoom' })
						.show();
					return null;
				}

				var postData = {
					applicantId: applicantId
				};

				$.ajax({
					type: 'POST',
					url: config.serverUrl + '/site/onfidoUploadCompleted',
					data: JSON.stringify(postData),
					contentType: 'application/json',
					dataType: 'json',
					success: function (data, status, xhr) {
						if (!data.status === 'ok') {
							alertify
								.alert('Error', data.message)
								.set({ transition: 'zoom' })
								.show();
						}
					},
					error: function () {
						alertify
							.alert(
								'Error',
								'There was an error submitting your request. We apologize for the inconvenience - please try again, or contact us directly.'
							)
							.set({ transition: 'zoom' })
							.show();
					}
				});
			},
			language: 'en',
			steps: steps
		});
	};

	var injectOptions = function (data) {
		steps.forEach(function (step) {
			if (step.type == 'document') {
				step.options.documentType = data.documentType;
			}
		});

		window.onfidoOut.setOptions({ token: data.token, steps: steps });
	};

	var getToken = function (onSuccess) {
		$('.onfido-sdk-ui-Theme-btn').attr('disabled', 'disabled');
		$('.onfido-sdk-ui-Theme-btn').html('Loading...');

		var applicantId = options.applicant;

		if (!applicantId) {
			alertify
				.alert(
					'Error',
					'Your applicant ID is not valid - please contact us directly.'
				)
				.set({ transition: 'zoom' })
				.show();
			$('.onfido-sdk-ui-Theme-btn').html('Click here');
			return null;
		}

		var postData = {
			applicantId: applicantId
		};

		$.ajax({
			type: 'POST',
			url: config.serverUrl + '/site/onfidoSdkInfo',
			data: JSON.stringify(postData),
			contentType: 'application/json',
			dataType: 'json',
			success: function (data, status, xhr) {
				if (data && data.result === 'ok') {
					if (data.token && data.documentType) {
						onSuccess(data);
						$('.onfido-sdk-ui-Theme-btn').removeAttr('disabled');
					} else {
						alertify
							.alert(
								'Error',
								'Your applicant ID is not valid - please contact us directly.'
							)
							.set({ transition: 'zoom' })
							.show();
						onSuccess(null);
					}
				} else {
					alertify
						.alert('Error', data.message)
						.set({ transition: 'zoom' })
						.show();
				}
			},
			error: function () {
				alertify
					.alert(
						'Error',
						'Your applicant ID is not valid - please contact us directly.'
					)
					.set({ transition: 'zoom' })
					.show();
				$('.onfido-sdk-ui-Theme-btn').html('Click here');
			}
		});
	};
}

// ==========================================================================================

// flatpickr('#dob', {
// 	enableTime: false,
// 	dateFormat: 'Y-m-d',
// 	disableMobile: 'true',
// 	maxDate: new Date().fp_incr(-6574),
// 	onChange: function (selectedDates, dateStr, instance) {
// 		isCourierFormValid();
// 	}
// });

// ===========================================================================================

function isNameValid(nameEl) {
	if (allLetter(nameEl)) {
		nameEl.removeClass('invalid');
		nameEl.next('span').hide();
		return true;
	}

	nameEl.addClass('invalid');
	nameEl.next('span').show();
	return false;
}

function allLetter(el) {
	var letters = /^([a-zA-Z ']*)$/;
	if (!letters.test(el.val())) {
		return false;
	}

	return true;
}

function trimWord(word) {
	return word && word.replace(/ {1,}/g, ' ').trim();
}

// ================================== AUTOCOMPLETE =============================================

var placeSearch, autocomplete, addressErrorMessage;
var selectedAddress = false;
var showMess = true;

var componentForm = {
	locality: 'long_name',
	postal_town: 'long_name',
	country: 'short_name',
	postal_code: 'short_name',
	administrative_area_level_1: 'short_name'
};

function clearAddress() {
	addressErrorMessage = '';
	selectedAddress = false;

	$('#postcodeField').removeClass('is-active');

	document.getElementById('addressAlert').innerHTML = '';
	for (var component in componentForm) {
		document.getElementById(component).value = '';
	}
}

function isAddressValid() {
	if (!document.getElementById('autocomplete').value) {
		return;
	}

	var address = {
		city: $('#locality').val() || $('#postal_town').val(),
		country: $('#country').val(),
		state: $('#administrative_area_level_1').val()
	};

	var missingParts = [];

	if (!address.country) {
		missingParts.push('COUNTRY');
	}

	if (!address.state) {
		missingParts.push('STATE');
	}

	if (!address.city) {
		missingParts.push('CITY');
	}

	if (missingParts.length && showMess) {
		if (selectedAddress) {
			addressErrorMessage =
				'Selected address is not valid. The following are missing: ' +
				missingParts.join(', ');
		} else {
			addressErrorMessage = 'Please select an address from drop down list';
		}

		document.getElementById('addressAlert').innerHTML = addressErrorMessage;

		return false;
	}

	return true;
}
