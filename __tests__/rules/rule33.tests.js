
const rules = require("../../model/rules/rule")
const rule = rules[33]

// "A is Even : A is Odd : B is Even : B is Odd : C is Even : C is Odd"

describe("Rule 33", () => {
    test('Works as intended for A is Even', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a % 2 == 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(50)
    })

    test('Works as intended for A is Odd', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a % 2 == 1) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(75)
    })

    test('Works as intended for B is Even', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(b % 2 == 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(50)
    })

    test('Works as intended for B is Odd', () => {
        rule.setMode(3)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(b % 2 == 1) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(75)
    })

    test('Works as intended for C is Even', () => {
        rule.setMode(4)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(c % 2 == 0) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(50)
    })

    test('Works as intended for C is Odd', () => {
        rule.setMode(5)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(c % 2 == 1) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(75)
    })
} 
)
