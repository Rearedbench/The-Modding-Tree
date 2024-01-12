let modInfo = {
	name: "The Planting Tree",
	id: "PvZmod",
	author: "Rearedbench",
	pointsName: "Sun",
	modFiles: ["layerA.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1.1",
	name: "Literally nothing",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1</h3><br>
		- Added a prestige layer<br>
	<h3>v0.1.1</h3><br>
		- Balenced some Things<br>
		- Fixed Some Challenges`
	

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

	let gain = new Decimal(0)
	// Upgrade Day Effects
	if (hasUpgrade('d', 11)) gain = gain.plus(1)
	if (hasUpgrade('d', 12)) gain = gain.times(2)
	if (hasUpgrade('d', 13)) gain = gain.times(upgradeEffect('d', 13))
	if (hasUpgrade('d', 21)) gain = gain.times(upgradeEffect('d', 21))
	// Challenge Rewards Day
	if (hasChallenge('d', 11)) gain = gain.plus(challengeCompletions('d', 11))
	if (hasChallenge('d', 12)) gain = gain.plus(challengeCompletions('d', 12)(3))
	if (hasChallenge('d', 21)) gain = gain.plus(challengeCompletions('d', 21)(10))
	if (hasChallenge('d', 22)) gain = gain.times(challengeCompletions('d', 22))
	// Challenge Effect Day
	if (inChallenge('d', 12)) gain = gain.times(0.5)
	if (inChallenge('d', 13)) gain = gain.times((challengeCompletions('d', 13)+1)/2)
	if (inChallenge('d', 21)) gain = gain.times(0.25)
	if (inChallenge('d', 22)) gain = gain.times(0.5).times(0.25).times((challengeCompletions('d', 13)+1)/2)
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
	return player.n.points.gte(new Decimal("1"))
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