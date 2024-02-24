
const rules = require("../../model/rules/rule")
const rule = rules[7]

// "Zero 1's : One 1's : Two 1's : Three 1's"
const county = (a,b,c) => {
    count = 0
    if (a === 1) count++
    if (b === 1) count++
    if (c === 1) count++
    return count
}

describe("Rule 7", () => {
    test('Works as intended for Zero 1\'s', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(county(a, b, c) === 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(64)
        expect(count).toBe(compare)
    })

    test('Works as intended for One 1\'s', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(county(a, b, c) === 1) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(48)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for Two 1\'s', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(county(a, b, c) === 2) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(12)
        expect(count).toBe(compare)
        
    })

    test('Works as intended for Three 1\'s', () => {
        rule.setMode(3)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(county(a, b, c) === 3) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(1)
        expect(count).toBe(compare)
    })
} 
)
