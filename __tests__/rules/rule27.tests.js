
const rules = require("../../model/rules/rule")
const rule = rules[27]

// "A < 4 : B < 4 : C < 4"

describe("Rule 27", () => {
    test('Works as intended for A < 4', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a < 4) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(75)
    })

    test('Works as intended for B < 4', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(b < 4) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(75)
    })

    test('Works as intended for C < 4', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(c < 4) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(75)
    })
} 
)
