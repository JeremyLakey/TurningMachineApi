
const rules = require("../../model/rules/rule")
const rule = rules[17]

// "Total is Even : Total is Odd"
describe("Rule 17", () => {
    test('Works as intended for Total is Even', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if((a + b + c) % 2 === 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(62)
        expect(count).toBe(compare)
    })

    test('Works as intended for Total is Odd', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if((a + b + c) % 2 === 1) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(63)
        expect(count).toBe(compare)
    })
} 
)
