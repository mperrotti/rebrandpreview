//
// For more info on how this magic works:
// https://github.com/meetup/gimme
//

var views = new ViewManager(function(){
	gimme.apiKey = "7060231d422c3421e3c13406e606631"; // use your own api key!

	var groupId = getParameterByName('mugID') || 1579989,
			eventId = getParameterByName('mupID') || 223601492,
			topic   = getParameterByName('topic') || 'hiking',
			topicID = 638, //hiking
			zip     = 11216;

			// Chicago lat/lon and zip
			// lat     = 41.8369,
			// lon     = 87.6847;
			// zip     = 60606

	// ↓ ↓ ↓ ↓ Where we pick which data we want ↓ ↓ ↓ ↓
	var shoppingList = [
		{"gimme": "topic_categories", "key":"categories", "data": {"zip": zip, "radius": 50}}
		// {"gimme": "categories", "key":"categories", "data": {"zip": zip, "radius": 50}}
	];
	// ↑ ↑ ↑ ↑ Where we pick which data we want ↑ ↑ ↑ ↑

	gimme.get(shoppingList, true).then(function(data){
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
		Update('identity', 'lgbt', 'LGBT');
		Update('languages', 'languages', 'Language & Culture');
		Update('moms', 'family', 'Family');
		Update('photo', 'photography', 'Photography');

		/* "Brand" category order via Rick */
		var indexes = [
			14, // outdoors
			19, // tech
			11, // family
			20, // health-wellness
			18, // fitness
			6,  // learning
			16, // photo
			7,  // food
			21, // writing
			10, // language-culture
			13, // music
			12, // movements
			9,  // lgbt
			// film does not yet exist
			8,  // games sci-fi
			1,  // beliefs
			0,  // arts
			2,  // books
			5,  // dancing
			15, // pets
			4,  // crafts
			// fashion does not yet exist
			17, // social
			3   // career-biz
		];

		var catsNew = [];
		for (var i = 0; i < indexes.length; i++) {
			var idx = indexes[i];
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

	});

});
