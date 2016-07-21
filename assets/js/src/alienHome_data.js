//
// For more info on how this magic works:
// https://github.com/meetup/gimme
//
var views,
		groupId = getParameterByName('mugID') || 1579989,
		eventId = getParameterByName('mupID') || 223601492,
		topic   = getParameterByName('topic') || 'hiking',
		topicID = 638, //hiking
		zip     = 10012;

var shoppingList = [
	{"gimme": "topic_categories", "key":"categories", "data": {"zip": zip, "radius": 50}},
	{"gimme": "open_events", "key": "local_meetups", "data": {"zip": zip, "page": 20}, children: [
		{"gimme": "group", "key": "group_data", "data": {"only": "organizer,group_photo,name"}, "match": [["group.id", "group_id"]]}
	]}
];

var processData = function(data){
	var categories = data.categories;

	/****************************************
		Let's fuck up some data! (hack-tastic)
	*****************************************/
	function Update(oldShortname, newShortname, newName) {
		for(var i=0;i<categories.length;i++){
			if(categories[i].shortname==oldShortname){
				categories[i].shortname=newShortname;
				categories[i].name=newName;
				break;
			}
		}
	}
	// Update('identity', 'lgbt', 'LGBT');
	// Update('languages', 'languages', 'Language & Culture');
	Update('moms', 'family', 'Family');
	Update('photo', 'photography', 'Photography');
	Update('well-being', 'wellbeing', 'Health & Wellness');

	/* "Brand" category order via Rick */
	var indexes = [
		16, // outdoors
		21, // tech
		13, // family
		22, // health-wellness
		20, // fitness
		6,  // learning
		18, // photo
		9,  // food
		23, // writing
		11, // language-culture
		15, // music
		14, // movements
		12, // lgbt
		8,  // film
		10, // games sci-fi
		1,  // beliefs
		0,  // arts
		2,  // books
		5,  // dancing
		17, // pets
		4,  // crafts
		7,  // fashion
		19, // social
		3   // career-biz
	];

	var catsNew = [];
	for (var i = 0; i < indexes.length; i++) {
		var idx = indexes[i];

		switch (categories[idx].shortname) {
			case "outdoors":
				categories[idx].slug = "outdoors-adventures";
				break;
			default:
				break;
		}

		catsNew.push(categories[idx]);
	}

	categories.splice.apply(categories, [0,categories.length].concat(catsNew));

	/****************************************
		end fucking up some data
	****************************************/

	$.extend(views.data, data);

	console.log(views.data);

	// Now that the data is all ready, go ahead and start the router
	window.addEventListener('hashchange', processHash);
	processHash();

};

gimme.apiKey = "7060231d422c3421e3c13406e606631"; // 7060231d422c3421e3c13406e606631 715d68731b3913292f447f4c45547

	views = new ViewManager(function(){

		// localstorage magic
		var hours = 4, // how many hours before refreshing data
				now = new Date().getTime(),
				setupTime = localStorage.getItem('setupTime');

		if (localStorage.getItem('cachedAPI') === null || setupTime === null || now-setupTime > hours*60*60*1000 || getParameterByName('refresh')) {
			localStorage.clear();
			gimme.get(shoppingList, true).then(function(data){
				console.log('pulling API data');

				$.extend(views.data, data);

				// quickfix for caching API data
				localStorage.setItem('cachedAPI', JSON.stringify(views.data));
				localStorage.setItem('setupTime', now);

				processData(data);

			});
		} else {
			var localData = JSON.parse(localStorage.getItem('cachedAPI'));
			console.log('pulling local data');

			$.extend(views.data, localData);

			processData(localData);
		}

	});

// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// var views = new ViewManager(function(){
// 	gimme.apiKey = "7060231d422c3421e3c13406e606631"; // use your own api key!

// 	var groupId = getParameterByName('mugID') || 1579989,
// 			eventId = getParameterByName('mupID') || 223601492,
// 			topic   = getParameterByName('topic') || 'hiking',
// 			topicID = 638, //hiking
// 			zip     = 10012;

// 			// Chicago lat/lon and zip
// 			// lat     = 41.8369,
// 			// lon     = 87.6847;
// 			// zip     = 60606

// 	// ↓ ↓ ↓ ↓ Where we pick which data we want ↓ ↓ ↓ ↓
// 	var shoppingList = [
// 		{"gimme": "topic_categories", "key":"categories", "data": {"zip": zip, "radius": 50}},
// 		{"gimme": "open_events", "key": "local_meetups", "data": {"zip": zip, "page": 20}, children: [
// 			{"gimme": "group", "key": "group_data", "data": {"only": "organizer,group_photo,name"}, "match": [["group.id", "group_id"]]}
// 		]}
// 	];
// 	// ↑ ↑ ↑ ↑ Where we pick which data we want ↑ ↑ ↑ ↑

// 	gimme.get(shoppingList, true).then(function(data){
// 		var categories = data.categories;

// 		/****************************************
// 			Let's fuck up some data! (hack-tastic)
// 		*****************************************/
// 		function Update(oldShortname, newShortname, newName) {
// 			for(var i=0;i<categories.length;i++){
// 				if(categories[i].shortname==oldShortname){
// 					categories[i].shortname=newShortname;
// 					categories[i].name=newName;
// 					break;
// 				}
// 			}
// 		}
// 		// Update('identity', 'lgbt', 'LGBT');
// 		// Update('languages', 'languages', 'Language & Culture');
// 		Update('moms', 'family', 'Family');
// 		Update('photo', 'photography', 'Photography');
// 		Update('well-being', 'wellbeing', 'Health & Wellness');

// 		/* "Brand" category order via Rick */
// 		var indexes = [
// 			16, // outdoors
// 			21, // tech
// 			13, // family
// 			22, // health-wellness
// 			20, // fitness
// 			6,  // learning
// 			18, // photo
// 			9,  // food
// 			23, // writing
// 			11, // language-culture
// 			15, // music
// 			14, // movements
// 			12, // lgbt
// 			8,  // film
// 			10, // games sci-fi
// 			1,  // beliefs
// 			0,  // arts
// 			2,  // books
// 			5,  // dancing
// 			17, // pets
// 			4,  // crafts
// 			7,  // fashion
// 			19, // social
// 			3   // career-biz
// 		];

// 		var catsNew = [];
// 		for (var i = 0; i < indexes.length; i++) {
// 			var idx = indexes[i];

// 			switch (categories[idx].shortname) {
// 				case "outdoors":
// 					categories[idx].slug = "outdoors-adventures";
// 					break;
// 				default:
// 					break;
// 			}

// 			catsNew.push(categories[idx]);
// 		}

// 		categories.splice.apply(categories, [0,categories.length].concat(catsNew));

// 		/****************************************
// 			end fucking up some data
// 		****************************************/

// 		$.extend(views.data, data);

// 		console.log(views.data);

// 		// Now that the data is all ready, go ahead and start the router
// 		window.addEventListener('hashchange', processHash);
// 		processHash();

// 	});

// });
