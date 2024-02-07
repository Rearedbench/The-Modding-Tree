addLayer("s", {
    name: "FNF", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    
    color: "Blue",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "songs", // Name of prestige currency
    baseResource: "Lines of Code", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade(this.layer, 22)) mult = mult.times(1.5)
        if (hasUpgrade(this.layer, 32)) mult = mult.times(upgradeEffect(this.layer, 32))
        if (hasChallenge(this.layer, 12)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
        
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for Songs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    

    upgrades: {
        11: {
            title: "Left",
            description: "Click the reset button for Songs, and then click this upgrade to buy it.",
            cost: new Decimal(1),
            

        },
        
        12: {
            title: "Right",
            description: "Upgrades can boost your code gain by a specific number such as 2",
            cost: new Decimal(1),
            unlocked: function() {return hasUpgrade('s', 11)},

        },
        13: {
            title: "Up",
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },  
            description: "They can also boost based on resources.",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            cost: new Decimal(2),
            unlocked: function() {return hasUpgrade('s', 12)},

        },
        14: {
            title: "Down",
            description: "Some upgrades also unlock other features such as challenges.",
            cost: new Decimal(5),
            unlocked: function() {return hasUpgrade('s', 13)},

        },

        21: {
            title: "Daddy Dearest",
            description: "Your First Opponent. Gain a 2x multiplier to code.",
            cost: new Decimal(10),
            unlocked: function() {return hasChallenge('s', 11)},

        },
        
        22: {
            title: "Bopeebo",
            description: "Starting off Simple. x1.5 multiplier to songs",
            cost: new Decimal(15),
            unlocked: function() {return hasUpgrade('s', 21)},

        },
        23: {
            title: "Fresh",
            effect() {
                return player.points.add(1).pow(0.07)
            },
            description: "Drop the Beat(box). Boost Code gain based on Code",
            cost: new Decimal(20),
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked: function() {return hasUpgrade('s', 22)},
        

        },
        24: {
            title: "Dadbattle",
            description: "The last rap. Unlock a challange",
            cost: new Decimal(30),
            unlocked: function() {return hasUpgrade('s', 23)},
        

        },
        
        31: {
            title: "Skid & Pump",
            effect() {
                if (hasUpgrade(this.layer, 32))
                    if (hasUpgrade(this.layer, 33))
                        if(hasUpgrade(this.layer, 34))
                            return new Decimal(16)
                        else
                            return new Decimal(8)
                    else 
                        return new Decimal(4)
                else    
                    return new Decimal(2)
            },
            description: "The second week. Gain 2x to code for every upgrade in this row",
            cost: new Decimal(50),
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked: function() {return hasChallenge('s', 12)},

        },
        
        32: {
            title: "Spookeez",
            effect() {    
                if (hasUpgrade(this.layer, 33))
                    if(hasUpgrade(this.layer, 34))
                        return new Decimal(1.4641)
                    else
                        return new Decimal(1.331)
                else 
                    return new Decimal(1.21)
            
            },
            description: "Gain a 1.5x multiplier to songs for every upgrade in this row",
            cost: new Decimal(90),
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked: function() {return hasUpgrade('s', 31)},

        },
        33: {
            title: "South",
            effect() {
                if (hasChallenge(this.layer, 21 ))
                    if (hasChallenge(this.layer, 22))
                        if(hasChallenge(this.layer, 31))
                            if(hasChallenge(this.layer, 32))
                                return new Decimal(64)
                            else
                                return new Decimal(32)
                        else
                            return new Decimal(16)
                    else
                        return new Decimal(8)   
                else 
                    return new Decimal(4) 
            },
            description: "Boost code by 2 per challenge completed",
            cost: new Decimal(125),
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked: function() {return hasUpgrade('s', 32)},

        },
        34: {
            title: "Monster",
            description: "Don't stop fighting. Unlock a Challenge",
            cost: new Decimal(1000),
            unlocked: function() {return hasUpgrade('s', 33)},

        },

        41: {
            title: "Pico",
            description: "sus",
            cost: new Decimal(1),
            unlocked: function() {return hasChallenge('s', 21)},

        },
        
        42: {
            title: "Pico, again",
            description: "sus",
            cost: new Decimal(1),
            unlocked: function() {return hasUpgrade('s', 41)},
        

        },
        43: {
            title: "Philly Nice",
            description: "sus",
            cost: new Decimal(1),
            unlocked: function() {return hasUpgrade('s', 42)},
        

        },
        44: {
            title: "Blammed",
            description: "Unlock a Challenge",
            cost: new Decimal(1),
            unlocked: function() {return hasUpgrade('s', 43)},

        },

        51: {
            title: "Mommy Mearest",
            description: "sus",
            cost: new Decimal(1),
            unlocked: function() {return hasChallenge('s', 22)},
        

        },
        
        52: {
            title: "Satin Panties",
            description: "sus",
            cost: new Decimal(1),
            unlocked: function() {return hasUpgrade('s', 51)},
        

        },
        53: {
            title: "High",
            description: "sus",
            cost: new Decimal(1),
            unlocked: function() {return hasUpgrade('s', 52)},
        

        },
        54: {
            title: "M.I.L.F",
            description: "Unlock a Challenge",
            cost: new Decimal(1),
            unlocked: function() {return hasUpgrade('s', 53)},
        

        },

        61: {
            title: "Christmas",
            description: "sus",
            cost: new Decimal(1),
            unlocked: function() {return hasChallenge('s', 31)},
        

        },
        
        62: {
            title: "Cocoa",
            description: "sus",
            cost: new Decimal(1),
            unlocked: function() {return hasUpgrade('s', 61)},
        

        },
        63: {
            title: "Eggnog",
            description: "sus",
            cost: new Decimal(1),
            unlocked: function() {return hasUpgrade('s', 62)},
        

        },
        64: {
            title: "Winter Horrorland",
            description: "Unlock a Challenge",
            cost: new Decimal(1),
            unlocked: function() {return hasUpgrade('s', 63)},
        

        },
    },

    challenges: {
        11: {
            name: "That's how you do it!!",
            challengeDescription: "Click Start, wait to gat 10 lines of code and click Finish to end the tutorial.",
            goalDescription: "Get 15 lines of code",
            rewardDescription: "Get a 1.5x to lines of code",
            unlocked: function() {return hasUpgrade('s', 14)},
            canComplete: function() {return player.points.gte("15")},
        },

        12: {
            name: "Dating his Daughter",
            challengeDescription: "Daddy Dearest ain't going down without a fight. Divide point gain by 2",
            goalDescription: "Get 100 lines of code",
            rewardDescription: "Get a 2x to lines of songs",
            unlocked: function() {return hasUpgrade('s', 24)},
            canComplete: function() {return player.points.gte("100")},
        },

        21: {
            name: "Is a Spooky Month",
            challengeDescription: "The Monster is here... Code gain is square rooted",
            goalDescription: "Get 5000 lines of code",
            rewardDescription: "Boost code to the power of 1.1",
            unlocked: function() {return hasUpgrade('s', 34)},
            canComplete: function() {return player.points.gte("5000")},
        },

        22: {
            name: "Back to School",
            challengeDescription: "sus",
            goalDescription: "sus",
            rewardDescription: "Get a 1.5x to lines of code",
            unlocked: function() {return hasUpgrade('s', 44)},
            canComplete: function() {return player.points.gte("10")},
        },

        31: {
            name: "Standing on a Car",
            challengeDescription: "sus",
            goalDescription: "sus",
            rewardDescription: "Get a 1.5x to lines of code",
            unlocked: function() {return hasUpgrade('s', 54)},
            canComplete: function() {return player.points.gte("10")},
        },

        32: {
            name: "Christmas Lemons",
            challengeDescription: "sus",
            goalDescription: "sus",
            rewardDescription: "Get a 1.5x to lines of code",
            unlocked: function() {return hasUpgrade('s', 64)},
            canComplete: function() {return player.points.gte("10")},
        },
    
    },

    layerShown(){return true}
})

