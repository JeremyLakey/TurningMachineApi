
const rules = require("../../model/rules/rule")
const rule = rules[14]


// "A is the largest : B is the largest : C is the largest"

describe("Rule 14", () => {
    test('Works as intended for A is the largest', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a > b && a > c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(30)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for B is the largest', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(b > a && b > c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(30)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for C is the largest', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(c > a && c > b) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(30)
        expect(count).toBe(compare)
        
    })
} 
)

