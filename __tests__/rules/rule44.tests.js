
const rules = require("../../model/rules/rule")
const rule = rules[44]

// B < A : B = A : B > A : B < C : B = C : B > C

describe("Rule 44", () => {
    test('Works as intended for B < A ', () => {
        rule.setMode(0)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a > b) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(50)
    })

    test('Works as intended for B = A', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a === b) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(25)
    })

    test('Works as intended for B > A', () => {
        rule.setMode(2)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a < b) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(50)
    })

    test('Works as intended for B < C', () => {
        rule.setMode(3)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(b < c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(50)
    })

    test('Works as intended for B = C', () => {
        rule.setMode(4)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(b === c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(25)
    })

    test('Works as intended for B > C', () => {
        rule.setMode(5)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(b > c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(50)
    })
} 
)
