
const rules = require("../../model/rules/rule")
const rule = rules[18]

// "A + B < 6 : A + B = 6 : A + B > 6"

describe("Rule 18", () => {
    test('Works as intended for A + B < 6', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a < 6) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(50)
        expect(count).toBe(compare)
    })

    test('Works as intended for A + B = 6', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a === 6) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(25)
        expect(count).toBe(compare)
    })

    test('Works as intended for A + B > 6', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a + b > 6) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(50)
        expect(count).toBe(compare)
    })
} 
)
