## Installing depends
cd to whatever directory this is saved in, then run `./setup.sh`. If that doesn't work, try doing it manually by running `npm install` followed by `bower update`, and finally `grunt build`
Message me on Slack if you have issues.

## Notes
This is a prototype for what we're thinking about for guest (aka: alien) home as a part of the rebrand

## Mike P's feedback on intial mocks
*People who aren't me:* don't try and make sense of these notes, the numbers correspond to a marked up mock

* 0 - This is really wide for a normal interface, **I recommend we make this the wide variant of `.bounds`**
* 1 - Let's test this height as the default height for all `.stripe--photoHero`
* 2 - Is this dark overlay a one-off or do we see it being useful in our system?
* 3 - This button is pretty non-standard
	* No border-radius
	* No spacing between button and input. **I recommend we just standardize it** unless there is something being gained from it being non-standard
* 4 - These seem like they could be come pretty useful and complex modules. We should talk to Adam D about how/if they fit into Sassquatch
	* These are text inputs that behave like dropdowns, which will require JavaScript
	* We should have a way to add icons inside of an input and align them `left` or `right`
* 5 - On mobile, don't force users to horizontally scroll and tap to change tabs on mobile - the tap target area is too small to do this comfortably. **I recommend we use a progressive disclosure pattern ([example](http://codepen.io/Dreamdealer/pen/waVzmK))**
* 6 - Are these realistic?
	* Where do these links under "about us" go? Do we have a back up plan if we can get some content but not others?
	* Is red right for links?
	* If we decide red is absolutely right here, should we make red links a variant on normal links?
* 7 - I can't think of any places outside of marketting pages we'd use this grey box. Should we make this a one-off for the page?
* 8 - This button is pretty non-standard
	* It's 2 lines
	* It has lots of extra left and right padding
* 9 - We could easily style this as `.text--secondary`, but it's being used as a heading.
	* Do you imagine headings like this being a part of our typographic system?
	* Is this a one-off?
	* Should this just be some other standardized header?
* 10 - You mentioned you want this nav to stick to the top of the page as the user scrolls, and the Meetup logo goes from the wordmark into the swarm logo.
	* Is this the best way to showcase both logo marks in the new brand?
	* I'm worried that keeping the header sticky is going to distract from the content of the page
* 11 - I like this treatment for MUG cards, but we need to make some decisions
	* There's no mention of how many members/chapterWho are in the MUG. **I recommend we add this**
	* Do we want to always show the next scheduled MUP below the card?  **I recommend we keep it**
	* What do MUGs without an upcoming MUP look like?
	* Are the MUP and the MUG separate links? **For now, I recommend we keep them separate because mobile MUP pages are more separate from the MUG than desktop MUPs**
	* Do we always want to show the first few topics? **I recommend we don't**
* 12 - It looks like we're missing some categories. How are the categories even ordered in this mock? **I recommend we order them by local popularity**
  * I'd also recommend we do an asymetrical grid to make the category photos more engaging
* 13 - Having link align to the bottom may not be possible. How strongly do we feel about this?
* 14 - Having the phone image bleed off the bottom is non-standard for Sassquatch. **I recommend we keep this as a one-off**
* 15 - The share buttons don't feel right down here.
	* I assumed they were links to our social media channels
	* I'm unsure what is even going to be shared
	* SMS and FB Messages don't feel right for most a desktop browsing experience
* 16 - We need a transition for searching
* 17 - The category listing is going to be far too long on desktop. **I recommend we truncate on small screens**
* 18 - I'm torn on whether this is the right place for this CTA? Part of me feels like it comes out of nowhere, another part of me feels like it's a nice way to close out the page
