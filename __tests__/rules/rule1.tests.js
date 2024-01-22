
const rules = require("../../model/rules/rule")
const rule = rules[1]

// "A < 3 : A = 3 : A > 3"

describe("Rule 1", () => {
    test('Works as intended for A < 3', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a < 3) compare++
                }
            }
        }
        expect(count).toBe(50)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for A = 3', () => {
        rule.setMode(1)
            let count = 0
            let compare = 0
            for(let a = 1; a <= 5; a++) {
                for(let b = 1; b <= 5; b++) {
                    for(let c = 1; c <=5 ; c++) {
                        if(rule.checkRule(a,b,c)) count++
                        if(a === 3) compare++
                    }
                }
            }
            expect(count).toBe(25)
            expect(count).toBe(compare)
    })

    test('Works as intended for A > 3', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a > 3) compare++
                }
            }
        }
        expect(count).toBe(50)
        expect(count).toBe(compare)
    })

} 
)
