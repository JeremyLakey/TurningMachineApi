
const rules = require("../../model/rules/rule")
const rule = rules[15]

// "More Evens than Odds : More Odds than Evens"

const countOdds = (a, b, c) => {
    let total = 0
    if (a % 2 === 1) total++
    if (b % 2 === 1) total++
    if (c % 2 === 1) total++
    return total
}

describe("Rule 15", () => {
    test('Works as intended for More Evens than Odds', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(countOdds(a, b, c) < 2) compare++
                }
            }
        }
        expect(count).toBe(44)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for More Odds than Evens', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(countOdds(a, b, c) >= 2) compare++
                }
            }
        }
        expect(count).toBe(81)
        expect(count).toBe(compare)
        
    })
} 
)
