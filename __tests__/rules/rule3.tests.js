
const rules = require("../../model/rules/rule")
const rule = rules[3]

// "B < 4 : B = 4 : B > 4"

describe("Rule 3", () => {
    test('Works as intended for B < 4', () => {
        rule.setMode(0)
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
        expect(count).toBe(compare)
        
    })

    test('Works as intended for B = 4', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(b === 4) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(25)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for B > 4', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(b > 4) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(25)
        expect(count).toBe(compare)
        
    })

} 
)
