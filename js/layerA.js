addLayer("d", {
    name: "Day", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
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
        if (hasUpgrade('d', 23)) mult = mult.times(upgradeEffect('d', 23))
        if (hasChallenge('d',13)) gain = gain.times(challengeCompletions('d', 13))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "d", description: "D: Reset for Days", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
            title: "Peashooter",
            description: "Start earning Sun",
            cost: new Decimal(1),
        },
        12: {
            title: "Sunflower",
            description: "Double Sun Gain and Unlock A Second Challenge",
            cost: new Decimal(1),
            unlocked() {
                if (hasUpgrade('d', 11))
                    return true
                else 
                    return false

            }
        },
        13: {
            title: "Cherry Bomb",
            description: "Boost Sun gain based on Days",
            cost: new Decimal(2),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            unlocked() {
                if (hasUpgrade('d', 12))
                    return true
                else 
                    return false
            }
        },
        14: {
            title: "Wallnut",
            description: "Unlock a Third Challenge",
            cost: new Decimal(5),
            unlocked() {
                if (hasUpgrade('d', 13))
                    return true
                else 
                    return false
            }
        },
        21: {
            title: "Potato Mine",
            description: "Boost Sun gain based on Sun",
            cost: new Decimal(10),
            effect() {
                return player.points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked() {
                if (hasUpgrade('d', 14))
                    return true
                else 
                    return false
            }
        },
        22: {
            title: "Snow Pea",
            description: "Unlock a Fourth Challenge",
            cost: new Decimal(25),
            unlocked() {
                if (hasUpgrade('d', 21))
                    return true
                else 
                    return false
            }
        },
        23: {
            title: "Chomper",
            description: "Boost Day gain based on Days",
            cost: new Decimal(40),
            effect() {
                return player[this.layer].points.add(1).pow(0.225)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked() {
                if (hasUpgrade('d', 22))
                    return true
                else 
                    return false
            }
        },
        24: {
            title: "Repeater",
            description: "Unlock a Fifth Challenge",
            cost: new Decimal(50),
            unlocked() {
                if (hasUpgrade('d', 23))
                    return true
                else 
                    return false
            }
        },


    },
    challenges: {
        11: {
            name: "Browncoat",
            challengeDescription: "No nerfs, just reach the goal",
            completionLimit() {
                 return (1000)
            },
            rewardDescription() {return "+1 to base Sun gain per completion ("+format(challengeCompletions('d', 11))+"/1000)"},
            goalDescription() {return "Reach "+format (new Decimal(25).times(new Decimal(3).pow(new Decimal(challengeCompletions('d', 11)))))+" Sun"},
            canComplete() {return player.points.gte(new Decimal(30).times(new Decimal(3).pow(new Decimal(challengeCompletions('d', 11)))))},
            unlocked() {
                if (hasUpgrade('d', 11))
                    return true
                else 
                    return false
            }
        },
        12: {
            name: "Conehead",
            challengeDescription: "Divide point gain by 2",
            completionLimit() {
                 return (500)
            },
            rewardDescription() {return "+3 to base Sun Gain per completion ("+format(challengeCompletions('d', 12))+"/500)"},
            goalDescription() {return "Reach "+format (new Decimal(30).times(new Decimal(3).pow(new Decimal(challengeCompletions('d', 12)))))+" Sun"},
            canComplete() {return player.points.gte(new Decimal(30).times(new Decimal(3).pow(new Decimal(challengeCompletions('d', 12)))))},
            unlocked() {
                if (hasUpgrade('d', 14))
                    return true
                else 
                    return false
            }
        },
        13: {
            name: "Pole Vaulter",
            challengeDescription: "Divide point gain by Challenge Completions divided by 2",
            completionLimit() {
                 return (300)
            },
            rewardDescription() {return "+1 to base Day gain per completion ("+format(challengeCompletions('d', 13))+"/300)"},
            goalDescription() {return "Reach "+format (new Decimal(40).times(new Decimal(3).pow(new Decimal(challengeCompletions('d', 13)))))+" Sun"},
            canComplete() {return player.points.gte(new Decimal(40).times(new Decimal(3).pow(new Decimal(challengeCompletions('d', 13)))))},
            unlocked() {
                if (hasUpgrade('d', 14))
                    return true
                else 
                    return false
            }
        },
        21: {
            name: "Buckethead",
            challengeDescription: "Divide point gain by 4",
            completionLimit() {
                 return (150)
            },
            rewardDescription() {return "+10 to base Sun gain per completion ("+format(challengeCompletions('d', 21))+"/150)"},
            goalDescription() {return "Reach "+format (new Decimal(50).times(new Decimal(3).pow(new Decimal(challengeCompletions('d', 21)))))+" Sun "},
            canComplete() {return player.points.gte(new Decimal(50).times(new Decimal(3).pow(new Decimal(challengeCompletions('d', 21)))))},
            unlocked() {
                if (hasUpgrade('d', 14))
                    return true
                else 
                    return false
            }
        },
        22: {
            name: "Ultimate Battle 1",
            challengeDescription: "Stuck in all previous challenges",
            completionLimit() {
                 return (100)
            },
            rewardDescription() {return "Multiply Sun gain per completion ("+format(challengeCompletions('d', 22))+"/100)"},
            goalDescription() {return "Reach "+format (new Decimal(100).times(new Decimal(3).pow(new Decimal(challengeCompletions('d', 22)))))+" Sun"},
            canComplete() {return player.points.gte(new Decimal(100).times(new Decimal(3).pow(new Decimal(challengeCompletions('d', 22)))))},
            unlocked() {
                if (hasUpgrade('d', 24))
                    return true
                else 
                    return false
            }
        },
    },

    layerShown(){return true}
})

addLayer("n", {
    name: "Night", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "N", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    
    color: "Purple",
    requires: new Decimal(100), // Can be a function that takes requirement increases into account
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
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "N", description: "N: Reset for Days", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    



    layerShown(){return hasChallenge('d', 22)}
})