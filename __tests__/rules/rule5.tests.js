
const rules = require("../../model/rules/rule")
const rule = rules[5]

// "B is even : B is Odd"

describe("Rule 5", () => {
    test('Works as intended for B is even', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(b % 2 === 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(50)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for B is odd', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(b % 2 === 1) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(75)
        expect(count).toBe(compare)
        
    })
} 
)