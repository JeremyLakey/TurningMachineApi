
const rules = require("../../model/rules/rule")
const rule = rules[20]

// "A pair exists : No pair exists"

describe("Rule 20", () => {
    test('Works as intended for A pair exists', () => {
        rule.setMode(0)
        for(let i = 0; i < 100; i++) {
            let count = 0
            let compare = 0
            for(let a = 1; a <= 5; a++) {
                for(let b = 1; b <= 5; b++) {
                    for(let c = 1; c <=5 ; c++) {
                        if(rule.checkRule(a,b,c)) count++
                        if((a === b && a !== c) || (a === c && a !== b) || (b === c && a !== b)) compare++
                        expect(count).toBe(compare)
                    }
                }
            }
            expect(count).toBe(60)
            expect(count).toBe(compare)
        }
        
    })

    test('Works as intended for No pair exists', () => {
        rule.setMode(1)
        for(let i = 0; i < 100; i++) {
            let count = 0
            let compare = 0
            for(let a = 1; a <= 5; a++) {
                for(let b = 1; b <= 5; b++) {
                    for(let c = 1; c <=5 ; c++) {
                        if(rule.checkRule(a,b,c)) count++
                        if(!((a === b && a !== c) || (a === c && a !== b) || (b === c && a !== b))) compare++
                        expect(count).toBe(compare)
                    }
                }
            }
            expect(count).toBe(65)
            expect(count).toBe(compare)
        }
        
    })
} 
)
