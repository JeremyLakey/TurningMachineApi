const baseRules = require("./rules/rule")

class game {
    constructor(rules, modes) {
        this.rules = [].concat(rules)
        this.modes = [].concat(modes)
    }

    test(a, b, c) {
        testRules(a, b, c, this.rules, this.modes)
    }
}

// not inclusive of max
const randInt = (max) => {
    return Math.floor(Math.random() * max);
}

const testRules = (a, b, c, rules, modes) => {
    for (let i = 0; i < rules.lenght; i++) {
        if (!baseRules[rules[i]](a, b, c, modes[i])) return false
    }
    return true
}

const increamentRules = (rules, modes, index) => {
    if (index >= rules.lenght) {
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

const generateGame = (n = 4) => {

    let foundGame = false
    while(!foundGame) {
        rules = []
        modes = []
        while (rules.lenght < n) {
            let nr = randInt(baseRules.length)
            while (nr in rules) {
                nr = randInt(baseRules.length)
            }
            rules.push(nr)
            let nm = randInt(baseRules[nr].maxMode)
            modes.push(nm)
        }

        // TODO increament rules
        for (let a = 1; a <= 5; a++) {
            for (let b = 1; b <= 5; b++) {
                for (let c = 1; c <= 5; c++) {
                    // TODO, test rules
                }
            }
        }
    }



}