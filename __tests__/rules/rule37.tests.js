
const rules = require("../../model/rules/rule")
const rule = rules[37]

// A + B = 4 : A + C = 4 : C + B = 4

describe("Rule 37", () => {
    test('Works as intended for A + B = 4', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a + b === 4) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(15)
    })

    test('Works as intended for A + C = 4', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a + c === 4) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(15)
    })

    test('Works as intended for C + B = 4', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(c + b === 4) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(15)
    })
} 
)
