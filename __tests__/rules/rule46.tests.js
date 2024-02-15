
const rules = require("../../model/rules/rule")
const rule = rules[46]

// Zero 3's : One 3's : Two 3's : Zero 4's : One 4's : Two 4's

const county = (a, b, c, v) => {
    total = 0
    if (a === v) total++
    if (b === v) total++
    if (c === v) total++
    return total
}

describe("Rule 46", () => {
    test('Works as intended for Zero 3\'s', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(county(a,b,c,3) === 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(64)
    })

    test('Works as intended for One 3\'s', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(county(a,b,c,3) === 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(48)
    })

    test('Works as intended for Two 3\'s', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(county(a,b,c,3) === 2) compare++
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
                    if(county(a,b,c,4) === 0) compare++
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
                    if(county(a,b,c,4) === 1) compare++
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
                    if(county(a,b,c,4) === 2) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(12)
    })
} 
)
