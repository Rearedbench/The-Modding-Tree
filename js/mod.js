let modInfo = {
	name: "FNF Tree",
	id: "FNF",
	author: "rearedbench",
	pointsName: "Lines of Code",
	modFiles: ["layer.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1",
	name: "Creation",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v1: Creation</h3><br>
		-It exists`

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
	if (hasUpgrade('s', 11)) gain = gain.times(2)
	if (hasUpgrade('s', 12)) gain = gain.times(upgradeEffect('s', 12))
	if (hasUpgrade('s', 21)) gain = gain.times(upgradeEffect('s', 21))
	if (hasUpgrade('s', 31)) gain = gain.times(1.1)
	if (hasUpgrade('s', 32)) gain = gain.times(1.2)
	if (hasUpgrade('s', 33)) gain = gain.times(1.3)
	if (hasUpgrade('s', 34)) gain = gain.times(1.4)
	if (hasUpgrade('s', 51)) gain = gain.times(1.5)
	if (hasUpgrade('s', 52)) gain = gain.times(1.6)
	if (hasUpgrade('s', 53)) gain = gain.times(1.7)
	if (hasUpgrade('s', 54)) gain = gain.times(1.8)
	if (hasUpgrade('s', 71)) gain = gain.times(1.9)
	if (hasUpgrade('s', 72)) gain = gain.times(2)
	if (hasUpgrade('s', 73)) gain = gain.times(2.1)
	if (hasUpgrade('s', 74)) gain = gain.times(2.2)
	if (hasUpgrade('s', 91)) gain = gain.times(2.3)
	if (hasUpgrade('s', 92)) gain = gain.times(2.4)
	if (hasUpgrade('s', 93)) gain = gain.times(2.5)
	if (hasUpgrade('s', 94)) gain = gain.times(1000)
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
	return hasUpgrade('s', 95)  
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