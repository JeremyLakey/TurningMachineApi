
const rules = require("../../model/rules/rule")
const rule = rules[19]

// "Triple number : Double number : No repeting numbers"

describe("Rule 19", () => {
    test('Works as intended for Triple Number', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a === b && a === c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(5)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for Double Number', () => {
        rule.setMode(1)
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
    })

    test('Works as intended for No repeting Number', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a !== b && c !== b && a !== c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(60)
        expect(count).toBe(compare)
    })
} 
)
