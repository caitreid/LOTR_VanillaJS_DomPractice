console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth

	const section = document.createElement('section');

	section.id = 'middle-earth'

	// 2. use a for loop to iterate over the lands array that does the following:

	for (let i = 0; i < lands.length; i++) {

	//   2a. creates an article tag (there should be one for each land when the loop is done)

		const landArticle = document.createElement('article')

	//   2b. gives each land article an `id` tag of the corresponding land name

		landArticle.id = lands[i]

	//   2c. includes an h1 with the name of the land inside each land article

		const landName = document.createElement('h1');
		landName.textContent = lands[i];
		landArticle.appendChild(landName);

	//   2d. appends each land to the middle-earth section

		section.appendChild(landArticle);
	}
	
	// 3. append the section to the body of the DOM.
	document.body.appendChild(section);
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {

	console.log('2: makeHobbits')

	// const theShire = document.querySelector('#The-Shire')
	// hint: get 'The-Shire' by using its id

	const theShire = document.getElementById('The-Shire')

	console.log('this is the shire', theShire)

	// display an `unordered list` of hobbits in the shire
	// hint: create a 'ul' outside the loop into which to append the 'li's

	const ulHobbits = document.createElement('ul')

	ulHobbits.id = 'hobbits'

	// give each hobbit a class of `hobbit`

	for (let i = 0; i < hobbits.length; i++) {
		// create an li for each hobbit
		const liHobbit = document.createElement('li')
		// give each hobbit a class
		liHobbit.className = 'hobbit'
		// give each hobbit some text
		liHobbit.textContent = hobbits[i]
		// append each hobbit to the ul
		ulHobbits.appendChild(liHobbit)
	}
	theShire.appendChild(ulHobbits)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {

	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const oneRingDiv = document.createElement('div')

	oneRingDiv.id = 'the-ring'

	// give the div a class of `'magic-imbued-jewelry'`

	oneRingDiv.className = 'magic-imbued-jewelry'

	// we want to target Frodo specifically
	// so we'll start with the ul, by it's id

	const ulHobbits = document.querySelector('#hobbits')
	const hobbitsArray = ulHobbits.children

	// then we'll need to look at how we can target the individual li's from there

	const frodoLi = hobbitsArray[0]

	// add the ring as a child of `Frodo`

	frodoLi.appendChild(oneRingDiv)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	// give each of the baddies a class of "baddy"

	const baddiesList = document.createElement('ul')

	baddies.forEach( (baddie) => {

		const baddiesListItem = document.createElement('li')

		baddiesListItem.classList.add('baddie')

		baddiesListItem.textContent = baddie

		baddiesList.appendChild(baddiesListItem)

		console.log(baddiesListItem)

	})


	console.log(baddiesList)


	// remember to append them to Mordor
	const mordor = document.getElementById("Mordor")

	mordor.appendChild(baddiesList)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag

	let aside = document.createElement('aside')

	// put an `unordered list` of the `'buddies'` in the aside

	let ul = document.createElement('ul')

	buddies.forEach((bud) => {

		let li = document.createElement('li')

		li.textContent = bud

		ul.appendChild(li)

	})

	aside.appendChild(ul)

	// insert your aside as a child element of `rivendell`
	let rivendell = document.getElementById("Rivendell")

	rivendell.appendChild(aside)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {

	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`

	const hobbits = document.getElementById("hobbits")

	let rivendell = document.getElementById("Rivendell")

	rivendell.appendChild(hobbits)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`

	const rivendell = document.getElementById("Rivendell")

	const buddies = rivendell.querySelectorAll('li')

	buddies[3].textContent = 'Aragorn'

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {

	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`

	const theFellowship = document.createElement('div')

	theFellowship.classList.add('the-fellowship')

	const rivendell = document.getElementById('Rivendell')

	rivendell.appendChild(theFellowship)

	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`

	const hobbits = document.querySelectorAll('#hobbits > li')

	// hobbits.forEach(hobbit => theFellowship.appendChild(hobbit))

	hobbits.forEach((hobbit)=>{
		theFellowship.appendChild(hobbit)
		alert(`${hobbit.textContent} has joined your party.`)
	})

	// after each character is added make an alert that they // have joined your party
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')

	const Rivendell = document.getElementById("Rivendell")

	const gandalf = Rivendell.children[1].children[0].children[0]

	// change the `'Gandalf'` text to `'Gandalf the White'`
	gandalf.textContent = 'Gandalf the White'

	// apply the following style to the element, make the // background 'white', add a grey border
	gandalf.style.background = 'white'
	gandalf.style.border = '1px solid grey'
	gandalf.style.padding = '10px' // to make it look nice

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown

	alert('📣 HORN OF GONDOR HAS BEEN BLOWN 📣')
	// Boromir's been killed by the Uruk-hai!

	const Rivendell = document.getElementById("Rivendell")

	const boromir = Rivendell.children[1].children[0].children[4]
	// Remove `Boromir` from the Fellowship

	boromir.remove()
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')

	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const theFellowship = document.querySelector('.the-fellowship')

	const frodo = theFellowship.children[0]

	const sam = theFellowship.children[1]

	const mordor = document.getElementById("Mordor")

	mordor.append(frodo)
	mordor.append(sam)

	// add a div with an id of `'mount-doom'` to `Mordor`

	const mountDoom = document.createElement('div')

	mountDoom.id = 'mount-doom'

	mordor.appendChild(mountDoom)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')

	// Create a div with an id of `'gollum'` and add it to Mordor

	let gollum = document.createElement('id')

	gollum.id = 'gollum'

	const mordor = document.getElementById("Mordor")
	
	mordor.appendChild(gollum)

	// Remove `the ring` from `Frodo` and give it to `Gollum`

	const theRing = document.getElementById("the-ring")

	gollum.append(theRing)

	// Move Gollum into Mount Doom

	const mountDoom = document.getElementById('mount-doom')

	mountDoom.append(gollum)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

// const hobbits = [
// 	`Frodo Baggins`,
// 	`Samwise "Sam" Gamgee`,
// 	`Meriadoc "Merry" Brandybuck`,
// 	`Peregrin "Pippin" Took`,
// ]


function thereAndBackAgain() {
	// remove `Gollum` and `the Ring` from the document
	console.log('13: thereAndBackAgain')

	const gollum = document.getElementById("gollum")

	const theRing = document.getElementById("the-ring")

	gollum.remove()
	theRing.remove()

	// Move all the `hobbits` back to `the shire`

	const hobbitsList = document.querySelectorAll('.hobbit')

	const shire = document.getElementById('The-Shire')

	hobbitsList.forEach(hobbit => shire.append(hobbit))
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
