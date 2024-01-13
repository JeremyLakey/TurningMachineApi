
const rules = require("../../model/rules/rule")
const rule = rules[0]

// "A Equal 1 : A > 1"

describe("Rule 0", () => {
    test('Works as intended for A = 1', () => {
        rule.setMode(0)
        for(let i = 0; i < 100; i++) {
            let count = 0
            let compare = 0
            for(let a = 1; a <= 5; a++) {
                for(let b = 1; b <= 5; b++) {
                    for(let c = 1; c <=5 ; c++) {
                        if(rule.checkRule(a,b,c)) count++
                        if(a === 1) compare++
                    }
                }
            }
            expect(count).toBe(25)
            expect(count).toBe(compare)
        }
        
    })

    test('Works as intended for A > 1', () => {
        rule.setMode(1)
        for(let i = 0; i < 100; i++) {
            let count = 0
            let compare = 0
            for(let a = 1; a <= 5; a++) {
                for(let b = 1; b <= 5; b++) {
                    for(let c = 1; c <=5 ; c++) {
                        if(rule.checkRule(a,b,c)) count++
                        if(a > 1) compare++
                    }
                }
            }
            expect(count).toBe(100)
            expect(count).toBe(compare)
        }
        
    })
} 
)
