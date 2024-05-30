
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
        if (hasUpgrade('s', 22)) mult = mult.times(1.5)
        if (hasUpgrade('s', 23)) mult = mult.times(upgradeEffect('s', 23))
        if (hasUpgrade('s', 24)) mult = mult.times(upgradeEffect('s', 24))
        if (hasUpgrade('s', 41)) mult = mult.times(1.1)
        if (hasUpgrade('s', 42)) mult = mult.times(1.2)
        if (hasUpgrade('s', 43)) mult = mult.times(1.3)
        if (hasUpgrade('s', 44)) mult = mult.times(1.4)
        if (hasUpgrade('s', 61)) mult = mult.times(1.5)
        if (hasUpgrade('s', 62)) mult = mult.times(1.6)
        if (hasUpgrade('s', 63)) mult = mult.times(1.7)
        if (hasUpgrade('s', 64)) mult = mult.times(1.8)
        if (hasUpgrade('s', 81)) mult = mult.times(1.9)
        if (hasUpgrade('s', 82)) mult = mult.times(2)
        if (hasUpgrade('s', 83)) mult = mult.times(2.1)
        if (hasUpgrade('s', 84)) mult = mult.times(2.2)
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
            title: "Girlfriend",
            description: "Multiply code gain by 2",
            cost: new Decimal(1),
            unlocked: true,  
        },

        12: {
            title: "Tutorial",
            description: "Multiply code gain based on code",
            cost: new Decimal(1),
            effect() {
                return player.points.add(1).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            unlocked: function() {return hasUpgrade('s', 11)},  
        },

        21: {
            title: "Daddy Dearest",
            description: "Multiply code gain based on songs",
            cost: new Decimal(3),  
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            unlocked: function() {return hasUpgrade('s', 12)},  
        },

        22: {
            title: "Bopeebo",
            description: "Multiply song gain by 1.5",
            cost: new Decimal(5),  
            unlocked: function() {return hasUpgrade('s', 21)},  
        },

        23: {
            title: "Fresh",
            description: "Multiply song gain based on code",
            cost: new Decimal(15),  
            effect() {
                return player.points.add(1).pow(0.2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            unlocked: function() {return hasUpgrade('s', 22)},  
        },

        24: {
            title: "Dadbattle",
            description: "Multiply song gain based on songs",
            cost: new Decimal(25),  
            effect() {
                return player[this.layer].points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            unlocked: function() {return hasUpgrade('s', 23)},  
        },

        31: {
            title: "Skip & Pump",
            description: "Multiply code gain by 1.1",
            cost: new Decimal(50),  
            unlocked: function() {return hasUpgrade('s', 24)},  
        },

        32: {
            title: "Spookeez",
            description: "Multiply code gain by 1.2",
            cost: new Decimal(75),  
            unlocked: function() {return hasUpgrade('s', 31)},  
        },

        33: {
            title: "South",
            description: "Multiply code gain by 1.3",
            cost: new Decimal(100),
            unlocked: function() {return hasUpgrade('s', 32)},    
        },

        34: {
            title: "Monster",
            description: "Multiply code gain by 1.4",
            cost: new Decimal(200),  
            unlocked: function() {return hasUpgrade('s', 33)},  
        },

        41: {
            title: "Pico",
            description: "Multiply song gain by 1.1",
            cost: new Decimal(2500),  
            unlocked: function() {return hasUpgrade('s', 34)},  
        },

        42: {
            title: "Pico",
            description: "Multiply song gain by 1.2",
            cost: new Decimal(4000),  
            unlocked: function() {return hasUpgrade('s', 41)},  
        },

        43: {
            title: "Philly Nice",
            description: "Multiply song gain by 1.3",
            cost: new Decimal(5000),  
            unlocked: function() {return hasUpgrade('s', 42)},  
        },

        44: {
            title: "Blammed",
            description: "Multiply song gain by 1.4",
            cost: new Decimal(5550),  
            unlocked: function() {return hasUpgrade('s', 43)},  
        },

        51: {
            title: "Mommy Mearest",
            description: "Multiply code gain by 1.5",
            cost: new Decimal(6666),
            unlocked: function() {return hasUpgrade('s', 44)},   
        },

        52: {
            title: "Satin Panties",
            description: "Multiply code gain by 1.6",
            cost: new Decimal(7000),  
            unlocked: function() {return hasUpgrade('s', 51)},  
        },

        53: {
            title: "High",
            description: "Multiply code gain by 1.7",
            cost: new Decimal(7500),  
            unlocked: function() {return hasUpgrade('s', 52)},  
        },

        54: {
            title: "M.I.L.F.",
            description: "Multiply code gain by 1.8",
            cost: new Decimal(7690),  
            unlocked: function() {return hasUpgrade('s', 53)},  
        },

        61: {
            title: "Christmas",
            description: "Multiply song gain by 1.5",
            cost: new Decimal(10000), 
            unlocked: function() {return hasUpgrade('s', 54)},   
        },

        62: {
            title: "Cocoa",
            description: "Multiply song gain by 1.6",
            cost: new Decimal(125000), 
            unlocked: function() {return hasUpgrade('s', 61)},  
        },

        63: {
            title: "Eggnog",
            description: "Multiply song gain by 1.7",
            cost: new Decimal(1500000), 
            unlocked: function() {return hasUpgrade('s', 62)},   
        },

        64: {
            title: "Winter Horrorland",
            description: "Multiply song gain by 1.8",
            cost: new Decimal(1750000),  
            unlocked: function() {return hasUpgrade('s', 63)},  
        },

        71: {
            title: "Senpai/Spirit",
            description: "Multiply code gain by 1.9",
            cost: new Decimal(2000000),  
            unlocked: function() {return hasUpgrade('s', 64)},  
        },

        72: {
            title: "Senpai",
            description: "Multiply code gain by 2",
            cost: new Decimal(40000000), 
            unlocked: function() {return hasUpgrade('s', 71)},   
        },

        73: {
            title: "Roses",
            description: "Multiply code gain by 2.1",
            cost: new Decimal(80000000),  
            unlocked: function() {return hasUpgrade('s', 72)},  
        },

        74: {
            title: "Thorns",
            description: "Multiply code gain by 2.2",
            cost: new Decimal(150000000),  
            unlocked: function() {return hasUpgrade('s', 73)},  
        },

        81: {
            title: "Tankman",
            description: "Multiply song gain by 1.9",
            cost: new Decimal(200000000),  
            unlocked: function() {return hasUpgrade('s', 74)},  
        },

        82: {
            title: "Ugh",
            description: "Multiply song gain by 2",
            cost: new Decimal(2500000000),  
            unlocked: function() {return hasUpgrade('s', 81)},  
        },

        83: {
            title: "Guns",
            description: "Multiply song gain by 2.1",
            cost: new Decimal(3500000000),  
            unlocked: function() {return hasUpgrade('s', 82)},  
        },

        84: {
            title: "Stress",
            description: "Multiply song gain by 2.2",
            cost: new Decimal(5000000000),  
            unlocked: function() {return hasUpgrade('s', 83)},  
        },

        91: {
            title: "Darnell",
            description: "Multiply code gain by 2.3",
            cost: new Decimal(100000000000),  
            unlocked: function() {return hasUpgrade('s', 84)},  
        },

        92: {
            title: "Darnell",
            description: "Multiply code gain by 2.4",
            cost: new Decimal(250000000000),  
            unlocked: function() {return hasUpgrade('s', 91)},  
        },

        93: {
            title: "Lit Up",
            description: "Multiply code gain by 2.5",
            cost: new Decimal(50000000000000),  
            unlocked: function() {return hasUpgrade('s', 92)},  
        },

        94: {
            title: "2hot",
            description: "Multiply code gain by 1000",
            cost: new Decimal(100000000000000), 
            unlocked: function() {return hasUpgrade('s', 93)},   
        },

        95: {
            title: "Blazin",
            description: "You Win",
            cost: new Decimal(1000000000000000000),  
            unlocked: function() {return hasUpgrade('s', 94)},  
        },


    },

    

    layerShown(){return true}
})
