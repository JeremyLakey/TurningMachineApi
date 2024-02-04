
const rules = require("../../model/rules/rule")
const rule = rules[25]

// "3 Numbers Straight : 2 Numbers Straight : No Straight"

describe("Rule 25", () => {
    test('Works as intended for 3 Numbers Straight', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if((a - 1 === b && b - 1 == c) || (a + 1 === b && b + 1 === c)) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(6)
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
                    if(((a - 1 === b && b - 1 !== c) || (a - 1 !== b && b - 1 === c)) || ((a + 1 === b && b + 1 !== c) || (a + 1 !== b && b + 1 === c))) compare++
                    expect(count).toBe(compare)}
            }
        }
        expect(count).toBe(68)
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
                    if((a - 1 !== b && b - 1 !== c) || (a + 1 !== b && b + 1 !== c)) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(51)
        expect(count).toBe(compare)
        
    })
} 
)
