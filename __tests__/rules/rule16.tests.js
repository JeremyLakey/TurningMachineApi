
const rules = require("../../model/rules/rule")
const rule = rules[16]

// "Zero Even numbers : One Even numbers : Two Even numbers : Three Even numbers"

const countOdds = (a, b, c) => {
    let total = 0
    if (a % 2 === 1) total++
    if (b % 2 === 1) total++
    if (c % 2 === 1) total++
    return total
}

describe("Rule 16", () => {
    test('Works as intended for Zero Even numbers', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(countOdds(a, b, c) === 3) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(27)
        expect(count).toBe(compare)
    })

    test('Works as intended for One Even numbers', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(countOdds(a, b, c) === 2) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(54)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for Two Even numbers', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(countOdds(a, b, c) === 1) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(36)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for Three Even numbers', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(countOdds(a, b, c) === 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(8)
        expect(count).toBe(compare)
        
    })
} 
)
