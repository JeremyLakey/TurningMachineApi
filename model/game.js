const baseRules = require("./rules/rule")

class Game {
    constructor(rules, modes) {
        this.rules = [].concat(rules)
        this.modes = [].concat(modes)
    }

    test(a, b, c) {
        return testRules(a, b, c, this.rules, this.modes)
    }
}

// not inclusive of max
const randInt = (max) => {
    return Math.floor(Math.random() * max);
}

const testRules = (a, b, c, rules, modes) => {
    for (let i = 0; i < rules.length; i++) {
        if (!baseRules[rules[i]].rule(a, b, c, modes[i])) return false
    }
    return true
}

const increamentRules = (rules, modes, index) => {
    if (index >= rules.length) {
        return
    }

    let temp = modes[index] + 1
    if (baseRules[rules[index]].maxMode === temp) {
        modes[index] = 0
        increamentRules(rules, modes, index+1)
    }
    else {
        modes[index] = temp
    }
}

const testModes = (rules, modes) => {
    foundSolution = false
    for (let a = 1; a <= 5; a++) {
        for (let b = 1; b <= 5; b++) {
            for (let c = 1; c <= 5; c++) {
                if(testRules(a, b, c, rules, modes)) {
                    if (foundSolution) {
                        return false
                    }
                    else {
                        foundSolution = true
                    }
                }
            }
        }
    }
    return foundSolution
}

const generateGame = (n) => {
    while(true) {
        rules = []
        modes = []
        while (!rules.length || rules.length < n) {
            let nr
            do {
                nr = randInt(baseRules.length)
            } while (rules.includes(nr))
            rules.push(nr)
            let nm = randInt(baseRules[nr].maxMode)
            modes.push(nm)
        }
        originalModes = [].concat(modes)
        do {
            let result = testModes(rules, modes)
            if (result) {
                return new Game(rules, modes)
            }
            else {
                increamentRules(rules, modes, 0)
                let diff = false
                for (let i = 0; i < modes.length; i++) {
                    if (modes[i] != originalModes[i]) {
                        diff = true
                        break
                    }
                }
                if (!diff) {
                    break;
                }
            }
        } while(true)      
    }
}

module.exports = generateGame