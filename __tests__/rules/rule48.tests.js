
const rules = require("../../model/rules/rule")
const rule = rules[48]

// A < B : A < C : B < C : A = B : A = B : B = C : A > B : A > C : B > C

describe("Rule 48", () => {
    test('Works as intended for A < B', () => {
        rule.setMode(0)
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

    test('Works as intended for A < C', () => {
        rule.setMode(1)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a < c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(50)
    })

    test('Works as intended for B < C', () => {
        rule.setMode(2)
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

    test('Works as intended for A = B', () => {
        rule.setMode(3)
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

    test('Works as intended for A = C', () => {
        rule.setMode(4)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a === c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(25)
    })

    test('Works as intended for B = C', () => {
        rule.setMode(5)
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

    test('Works as intended for A > B', () => {
        rule.setMode(6)
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

    test('Works as intended for A > C', () => {
        rule.setMode(7)
        let count = 0
        let compare = 0
        for(let a = 1; a <= 5; a++) {
            for(let b = 1; b <= 5; b++) {
                for(let c = 1; c <=5 ; c++) {
                    if(rule.checkRule(a,b,c)) count++
                    if(a > c) compare++
                    expect(count).toBe(compare)
                }
            }
        }
        expect(count).toBe(50)
    })

    test('Works as intended for B > C', () => {
        rule.setMode(8)
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
