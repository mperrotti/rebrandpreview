function renderNavigation() {
	if ($('.mainNav').length < 1) {
		views.nav_show({
			"loggedIn": true,
			"isModern": false
		});
	}
}