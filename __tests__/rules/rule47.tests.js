
const rules = require("../../model/rules/rule")
const rule = rules[47]

// Zero 1's : One 1's : Two 1's : Zero 4's : One 4's : Two 4's

const count = (a, b, c, v) => {
    total = 0
    if (a === v) total++
    if (b === v) total++
    if (c === v) total++
    return total
}

describe("Rule 47", () => {
    test('Works as intended for Zero 1\'s', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(count(a,b,c,1) === 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(64)
    })

    test('Works as intended for One 1\'s', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(count(a,b,c,1) === 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(48)
    })

    test('Works as intended for Two 1\'s', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(count(a,b,c,1) === 2) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(12)
    })

    test('Works as intended for Zero 4\'s', () => {
        rule.setMode(3)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(count(a,b,c,4) === 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(64)
    })

    test('Works as intended for One 4\'s', () => {
        rule.setMode(4)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(count(a,b,c,4) === 1) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(48)
    })

    test('Works as intended for Two 4\'s', () => {
        rule.setMode(5)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(count(a,b,c,4) === 2) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(12)
    })
} 
)
