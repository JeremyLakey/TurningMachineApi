
const rules = require("../../model/rules/rule")
const rule = rules[36]

// Total is a multiple of 3 : Total is a multiple of 4 : Total is a multiple of 5

describe("Rule 36", () => {
    test('Works as intended for Total is a multiple of 3', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if((a + b + c) % 3 === 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(41)
    })

    test('Works as intended for Total is a multiple of 4', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if((a + b + c) % 4 === 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(31)
    })

    test('Works as intended for Total is a multiple of 5', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if((a + b + c) % 5 === 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(25)
    })
} 
)
