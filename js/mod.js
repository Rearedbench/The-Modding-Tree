let modInfo = {
	name: "The Indie Tree",
	id: "Indiemod",
	author: "rearedbench",
	pointsName: "Lines of Code",
	modFiles: ["layerA.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1",
	name: "Literally nothing",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v1</h3><br>
		- Added FNF layer with 12 upgrades and 3 challenges<br>
		- Did some balancing`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	// base adds
	// mults
	if (hasUpgrade("s", 12)) gain = gain.times(2)
	if (hasUpgrade("s", 13)) gain = gain.times(upgradeEffect("s", 13))
	if (hasUpgrade("s", 21)) gain = gain.times(2)
	if (hasUpgrade("s", 23)) gain = gain.times(upgradeEffect("s", 23))
	if (hasUpgrade("s", 31)) gain = gain.times(upgradeEffect("s", 31))
	if (hasUpgrade("s", 33)) gain = gain.times(upgradeEffect("s", 33))
	// Challenger
	if (hasChallenge("s", 11)) gain = gain.times(1.5)
	if (hasChallenge("s", 21)) gain = gain.pow(1.1)
	// Challenged
	if (inChallenge("s", 12)) gain = gain.times(0.5)
	if (inChallenge("s", 21)) gain = gain.sqrt(2)
	
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return hasChallenge("s", 21)
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}