
const rules = require("../../model/rules/rule")
const rule = rules[21]

// "Ascending order : Descending order : No order"

describe("Rule 21", () => {
    test('Works as intended for Ascending order', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a < b && b < c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(10)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for Descending order', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a > b && b > c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(10)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for No order', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(!(a < b && b < c) && !(a < b && b < c)) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(105)
        expect(count).toBe(compare)
        
    })
} 
)
