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

function showAllCategories(event) {
	var categoryItems = event.node.previousElementSibling.childNodes;

	$(event.node).removeClass('display--block');
	$(event.node).addClass('display--none');

	for (var i = 0; i < categoryItems.length; i++) {
		$(categoryItems[i]).removeClass('display--none');
	}
}
