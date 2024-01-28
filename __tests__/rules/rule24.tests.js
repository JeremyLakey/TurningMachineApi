
const rules = require("../../model/rules/rule")
const rule = rules[24]

// "3 Numbers Straight Descending : 2 Numbers Straight Descending : No Straight Descending"

describe("Rule 24", () => {
    test('Works as intended for 3 Numbers Straight Descending', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a - 1 === b && b - 1 == c) compare++
                }
            }
        }
        expect(count).toBe(3)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for 2 Numbers Straight Descending', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if((a - 1 === b && b - 1 !== c) || (a - 1 !== b && b - 1 === c)) compare++
                }
            }
        }
        expect(count).toBe(34)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for No Straight Descending', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a - 1 !== b && b - 1 !== c) compare++
                }
            }
        }
        expect(count).toBe(88)
        expect(count).toBe(compare)
        
    })
} 
)
