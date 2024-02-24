
const rules = require("../../model/rules/rule")
const rule = rules[42]

// A is the Smallest : A is the Largest : B is the Smallest : B is the Largest : C is the Smallest : C is the Largest

describe("Rule 42", () => {
    test('Works as intended for A is the Smallest', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a < b && a < c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(30)
    })

    test('Works as intended for A is the Largest', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a > b && a > c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(30)
    })

    test('Works as intended for B is the Smallest', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(b < a && b < c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(30)
    })

    test('Works as intended for B is the Largest', () => {
        rule.setMode(3)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(b > a && b > c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(30)
    })

    test('Works as intended for C is the Smallest', () => {
        rule.setMode(4)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(c < a && c < b) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(30)
    })

    test('Works as intended for C is the Largest', () => {
        rule.setMode(5)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(c > a && c > b) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(30)
    })
} 
)
