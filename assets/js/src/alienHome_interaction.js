/*
-----------------------------
	GLOBAL NAVIGATION
-----------------------------
*/
function renderNavigation() {
	if ($('.mainNav').length < 1) {
		var isLoggedIn = getParameterByName('loggedIn') || false;
		// console.log(isLoggedIn);

		views.nav_show({
			"loggedIn": isLoggedIn,
			"isModern": false
		});

		views.data.isLoggedIn = isLoggedIn;

		// if (!isLoggedIn) {
			// Change to sticky nav
			setTimeout(function() { // using this to deal with weird Waypoints bug
				$('.mainNav').waypoint({
					handler: function(direction) {
						if (direction == 'up') {
							// over photo
								// $(this).addClass('mainNav--photoOverlay inverted'); // change nav bg
							// $(this).find('.js_logo--script').removeClass('display--none').addClass('display--inlineBlock'); // show script logo
							// $(this).find('.js_logo--swarm').removeClass('display--inlineBlock').addClass('display--none'); // hide swarm logo
							$(this).find('.js_logo--swarm').addClass('_proto_nav-logo--offScreen--btm'); // hide swarm logo trns
							$(this).find('.js_logo--script').removeClass('_proto_nav-logo--offScreen--top'); // show script logo trns
								// $(this).find('.js_signUp').toggleClass('display--none');
						} else {
							// over content
								// $(this).removeClass('mainNav--photoOverlay inverted');
							// $(this).find('.js_logo--script').removeClass('display--inlineBlock').addClass('display--none'); // hide script logo
							// $(this).find('.js_logo--swarm').removeClass('display--none').addClass('display--inlineBlock'); // show swarm logo
								// $(this).find('.js_signUp').toggleClass('display--none');
							$(this).find('.js_logo--swarm').removeClass('_proto_nav-logo--offScreen--btm'); // hide swarm logo trns
							$(this).find('.js_logo--script').addClass('_proto_nav-logo--offScreen--top'); // show script logo trns

						}
					},
					offset: function() {
						return -1 * $('.stripe--photoHero').height();
					}
				});
			}, 1);
		// }

		// $('.mainNav').addClass('mainNav--sticky mainNav--photoOverlay inverted');
		$('.mainNav').addClass('mainNav--sticky');
	}
}

function toggleUserMenu() {

}

/*
-----------------------------
	VIDEO HEADER CONTROL
-----------------------------
*/
function vidPause() {
	var $vid = $('.videoFill')[0];

	if ($vid.paused) {
		$vid.play();
	} else {
		$vid.pause();
	}

}

/*
-----------------------------
	TABS
-----------------------------
*/
// TODO:
// -Merge into actual Foundation code
// -make this code less awful
// -No jquery (Mike P's stupid personal challenge)
function switchTab(e) {
	var $tabClicked = e.node,
			$tabBar     = e.node.parentNode,
			$tabLink    = e.node.children[0];
	e.original.preventDefault();

	/*
		Toggle tab selection
	*/
	$('.tabs-tab--selected').removeClass('tabs-tab--selected');
	$($tabClicked).addClass('tabs-tab--selected');

	/*
		Update tab content
	*/
	// TODO: move this into an event that listens for switchTab
	var tabHash        = $tabLink.getAttribute('href').substr(1),
			$tabSelected   = document.getElementById(tabHash);

	// Fade current content out
	// on `transitionend` set faded content to `.display--none`

	// Fade selected content in
		// If tab is to the left of clicked tab - content should animate in left-to-right
		// If tab is to the right of the clicked tab - content should animate in right-to-left

}

function priorityPlus_toggle(event) {
	event.original.preventDefault();

	if(event.node.dataset.toggleActions == 'opened') {
		views.momentary_hide();
		$('.priorityPlus').removeClass('priorityPlus--expanded');
		$('.priorityPlus-list').removeClass('tabs--vert');
		$(event.node).html('<span class="text--small">all <i class="fa fa-angle-down"></i></span>');
		event.node.dataset.toggleActions = 'closed';
	} else {
		$('.priorityPlus').addClass('priorityPlus--expanded');
		$('.priorityPlus-list').addClass('tabs--vert');
		$(event.node).html('<span class="text--small">close <i class="fa fa-close"></i></span>');
		event.node.dataset.toggleActions = 'opened';
	}
}

// function updateSlide(event) {
// 	event.original.preventDefault();
// 	var index = event.node.hash.substr(1),
// 			$storiesGallery = $('.js-storiesCarousel').flickity();

// 	console.log(index);

// 	$storiesGallery.flickity( 'select', index );
// }

function main_onComplete() {

	var $mugCarousel = $('.js-mugCarousel').flickity({
		// options
		cellAlign: 'left',
		imagesLoaded: true,
		pageDots: false,
		wrapAround: true
	});

	$mugCarousel.css({ opacity: 1 });

	/*
	// Initialize app carousel
	var $storiesGallery = $('.js-storiesCarousel').flickity({
		prevNextButtons: false,
		pageDots: false,
		cellSelector: '.stories-cell'
	});

	// we can use this to randomize selected cell
	// $storiesGallery.flickity('select', 1);

	$('.js-storiesNav').on( 'click', 'a', function(event) {
		event.preventDefault();
		var index = $(this).parent().index();
		$storiesGallery.flickity('select', index, false, true);
	});

	// Initialize app carousel
	$('.js-appCarousel').flickity({
		// options
		cellAlign: 'left',
		contain: true,
		imagesLoaded: true
	});
	*/

}
