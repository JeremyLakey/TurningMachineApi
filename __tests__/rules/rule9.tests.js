
const rules = require("../../model/rules/rule")
const rule = rules[9]

// "Zero 4's : One 4's : Two 4's : Three 4's"
const count = (a,b,c) => {
    count = 0
    if (a === 4) count++
    if (b === 4) count++
    if (c === 4) count++
    return count
}

describe("Rule 9", () => {
    test('Works as intended for Zero 4\'s', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(count(a, b, c) === 0) compare++
                }
            }
        }
        expect(count).toBe(64)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for One 4\'s', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(count(a, b, c) === 1) compare++
                }
            }
        }
        expect(count).toBe(48)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for Two 4\'s', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(count(a, b, c) === 2) compare++
                }
            }
        }
        expect(count).toBe(12)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for Three 4\'s', () => {
        rule.setMode(3)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(count(a, b, c) === 3) compare++
                }
            }
        }
        expect(count).toBe(1)
        expect(count).toBe(compare)
        
    })
} 
)

