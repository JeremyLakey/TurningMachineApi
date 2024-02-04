
const rules = require("../../model/rules/rule")
const rule = rules[28]

// "A = 1 : B = 1 : C = 1"

describe("Rule 28", () => {
    test('Works as intended for A = 1', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a === 1) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(25)
    })

    test('Works as intended for B = 1', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(b === 1) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(25)
    })

    test('Works as intended for C = 1', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(c === 1) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(25)
    })
} 
)
