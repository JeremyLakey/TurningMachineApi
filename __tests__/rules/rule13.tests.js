
const rules = require("../../model/rules/rule")
const rule = rules[13]


// "A is the smallest : B is the smallest : C is the smallest"

describe("Rule 13", () => {
    test('Works as intended for A is the smallest', () => {
        rule.setMode(0)
        for(let i = 0; i < 100; i++) {
            let count = 0
            let compare = 0
            for(let a = 1; a <= 5; a++) {
                for(let b = 1; b <= 5; b++) {
                    for(let c = 1; c <=5 ; c++) {
                        if(rule.checkRule(a,b,c)) count++
                        if(a < b && a < c) compare++
                    }
                }
            }
            expect(count).toBe(30)
            expect(count).toBe(compare)
        }
        
    })

    test('Works as intended for B is the smallest', () => {
        rule.setMode(0)
        for(let i = 0; i < 100; i++) {
            let count = 0
            let compare = 0
            for(let a = 1; a <= 5; a++) {
                for(let b = 1; b <= 5; b++) {
                    for(let c = 1; c <=5 ; c++) {
                        if(rule.checkRule(a,b,c)) count++
                        if(b < a && b < c) compare++
                    }
                }
            }
            expect(count).toBe(30)
            expect(count).toBe(compare)
        }
        
    })

    test('Works as intended for C is the smallest', () => {
        rule.setMode(0)
        for(let i = 0; i < 100; i++) {
            let count = 0
            let compare = 0
            for(let a = 1; a <= 5; a++) {
                for(let b = 1; b <= 5; b++) {
                    for(let c = 1; c <=5 ; c++) {
                        if(rule.checkRule(a,b,c)) count++
                        if(c < a && c < b) compare++
                    }
                }
            }
            expect(count).toBe(30)
            expect(count).toBe(compare)
        }
        
    })
} 
)

