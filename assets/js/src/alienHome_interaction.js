/*
*****************************
GLOBAL HELPERS
*****************************
*/
// TODO: move this to it's own file

// CSS transition end callback
// via https://davidwalsh.name/css-animation-callback
// TODO: stop from firing for each transitioned property
function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    };

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}
var transitionEvent = whichTransitionEvent();
function transEndCallback(el, handler) {
	transitionEvent && el.addEventListener(transitionEvent, handler);
}

/*
*****************************
PROTOTYPE
*****************************
*/
/*
-----------------------------
	GLOBAL NAVIGATION
-----------------------------
*/
function renderNavigation() {
	if ($('.mainNav').length < 1) {
		views.nav_show({
			"loggedIn": false,
			"isModern": false
		});
	}
}

/*
-----------------------------
	TABS
-----------------------------
*/
// TODO: Merge into actual Foundation code
function switchTab(e) {
	var $tabClicked = e.node,
			$tabBar     = e.node.parentNode,
			$tabLink    = e.node.children[0],
			$allTabs    = Array.prototype.filter.call($tabBar.children, function(child){
				return child !== $tabClicked;
			});

	e.original.preventDefault();

	// console.log(e);
	// console.log($tabClicked);
	// console.log($tabBar);
	// console.log($tabLink);

	// TODO: no jquery (Mike P personal challenge)
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

	// TODO:
	// -no jquery (Mike P personal challenge)
	// -make this code less awful

	// Fade current content out
	$('.js-tabContent:not(".display--none")').addClass('trans trans--fadeOut');
	// Set faded tab to display--none

	// Fade selected content in
		// If tab is to the left of clicked tab - content should animate in left-to-right
		// If tab is to the right of the clicked tab - content should animate in right-to-left


	/*
	for (var i = 0; i < document.getElementsByClassName('js-tabContent').length; i++) {
		var tabContent = document.getElementsByClassName('js-tabContent')[i];

		transEndCallback(tabContent, function(transEvt){
			$(this).addClass('display--none');
			$(this).removeClass('trans trans--fadeOut');
			$($tabSelected).removeClass('display--none').addClass('trans trans--fadeIn');
		});

	}
	*/

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

function showAllCategories(event) {
	var categoryItems = event.node.previousElementSibling.childNodes;

	$(event.node).removeClass('display--block');
	$(event.node).addClass('display--none');

	for (var i = 0; i < categoryItems.length; i++) {
		$(categoryItems[i]).removeClass('display--none');
	}
}
