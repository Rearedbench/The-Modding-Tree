addLayer("d", {
    name: "Day", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
    branches: "n",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    
    color: "Green",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Days", // Name of prestige currency
    baseResource: "Sun", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
        
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "d", description: "D: Reset for Days", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    buyables: {
        11: {
            title: "Zombie",
            cost(x) { return new Decimal(1).mul(x) },
            display() { return "Blah" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            
        },
        12: {
            title: "Zombie",
            cost(x) { return new Decimal(1).mul(x) },
            display() { return "Blah" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            
        },
        
    },

    upgrades: {
        11: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        
        12: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        13: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        14: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        21: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        22: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        23: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        24: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },

        

    },
    challenges: {
        11: {
            name: "Zomboss",
            challengeDescription: "sus",
            goalDescription: "sus",
            unlocked: function() {return hasUpgrade('d', 11)},
            canComplete: function() {return player.points.gte("1e4")},
        },

    12: {
        name: "Zomboss",
        challengeDescription: "sus",
        goalDescription: "sus",
        unlocked: function() {return hasUpgrade('d', 11)},
        canComplete: function() {return player.points.gte("1e4")},
    },
},
    

    layerShown(){return true}
})

addLayer("n", {
    name: "Night", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "N", // This appears on the layer's node. Default is the id with the first letter capitalized
    branches: "p",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    
    color: "Purple",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Nights", // Name of prestige currency
    baseResource: "Days", // Name of resource prestige is based on
    baseAmount() {return player.d.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    passiveGeneration() {
        
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "n", description: "N: Reset for Nights", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    buyables: {
        11: {
            title: "Zombie",
            cost(x) { return new Decimal(1).mul(x) },
            display() { return "Blah" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            
        },
        12: {
            title: "Zombie",
            cost(x) { return new Decimal(1).mul(x) },
            display() { return "Blah" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            
        },
        
    },
    upgrades: {
        11: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },

        12: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        13: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        14: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        21: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        22: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        23: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        24: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
    },
    challenges: {
        11: {
            name: "Zomboss",
            challengeDescription: "sus",
            goalDescription: "sus",
            unlocked: function() {return hasUpgrade('d', 11)},
            canComplete: function() {return player.points.gte("1e4")},
        },

    12: {
        name: "Zomboss",
        challengeDescription: "sus",
        goalDescription: "sus",
        unlocked: function() {return hasUpgrade('d', 11)},
        canComplete: function() {return player.points.gte("1e4")},
    },
},

    

    layerShown(){return true}
})

addLayer("p", {
    name: "Pool", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    branches: "f",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    
    color: "aqua",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Pools", // Name of prestige currency
    baseResource: "Nights", // Name of resource prestige is based on
    baseAmount() {return player.n.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for Pools", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    buyables: {
        11: {
            title: "Zombie",
            cost(x) { return new Decimal(1).mul(x) },
            display() { return "Blah" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            
        },
        12: {
            title: "Zombie",
            cost(x) { return new Decimal(1).mul(x) },
            display() { return "Blah" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            
        },
        
    },
    upgrades: {
        11: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },

        12: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        13: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        14: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        21: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        22: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        23: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        24: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
    },
    challenges: {
        11: {
            name: "Zomboss",
            challengeDescription: "sus",
            goalDescription: "sus",
            unlocked: function() {return hasUpgrade('d', 11)},
            canComplete: function() {return player.points.gte("1e4")},
        },

    12: {
        name: "Zomboss",
        challengeDescription: "sus",
        goalDescription: "sus",
        unlocked: function() {return hasUpgrade('d', 11)},
        canComplete: function() {return player.points.gte("1e4")},
    },
},
    

    layerShown(){return true}
})

addLayer("f", {
    name: "Fog", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    branches: "r",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    
    color: "Gray",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Fog", // Name of prestige currency
    baseResource: "Pools", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "F: Reset for Fog", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    buyables: {
        11: {
            title: "Zombie",
            cost(x) { return new Decimal(1).mul(x) },
            display() { return "Blah" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            
        },
        12: {
            title: "Zombie",
            cost(x) { return new Decimal(1).mul(x) },
            display() { return "Blah" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            
        },
        
    },
    upgrades: {
        11: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },

        12: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        13: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        14: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        21: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        22: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        23: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        24: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
    },
    challenges: {
        11: {
            name: "Zomboss",
            challengeDescription: "sus",
            goalDescription: "sus",
            unlocked: function() {return hasUpgrade('d', 11)},
            canComplete: function() {return player.points.gte("1e4")},
        },

    12: {
        name: "Zomboss",
        challengeDescription: "sus",
        goalDescription: "sus",
        unlocked: function() {return hasUpgrade('d', 11)},
        canComplete: function() {return player.points.gte("1e4")},
    },
},
    

    layerShown(){return true}
})

addLayer("r", {
    name: "Roof", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    
    color: "Brown",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Roofs", // Name of prestige currency
    baseResource: "Fog", // Name of resource prestige is based on
    baseAmount() {return player.f.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
   
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "R: Reset for Roofs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    buyables: {
        11: {
            title: "Zombie",
            cost(x) { return new Decimal(1).mul(x) },
            display() { return "Blah" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            
        },
        12: {
            title: "Zombie",
            cost(x) { return new Decimal(1).mul(x) },
            display() { return "Blah" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            
        },
        
    },
    upgrades: {
        11: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },

        12: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        13: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        14: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        21: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        22: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        23: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
        24: {
            title: "Peashooter",
            description: "sus",
            cost: new Decimal(1),
        

        },
    },
    challenges: {
        11: {
            name: "Zomboss",
            challengeDescription: "sus",
            goalDescription: "sus",
            unlocked: function() {return hasUpgrade('d', 11)},
            canComplete: function() {return player.points.gte("1e4")},
        },

    12: {
        name: "Zomboss",
        challengeDescription: "sus",
        goalDescription: "sus",
        unlocked: function() {return hasUpgrade('d', 11)},
        canComplete: function() {return player.points.gte("1e4")},
    },
},
    

    layerShown(){return true}
})



