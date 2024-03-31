
class Rule {
    constructor(description, maxMode, rule) {
         this.description = description
         this.rule = rule
         this.maxMode = maxMode
         this.mode = 0
    }
 
    checkRule(a, b, c) {
         return this.rule(a, b, c, this.mode)
    }
 
    increamentMode() {
         this.mode++
         if (this.mode >= this.maxMode) {
             this.mode = 0
             return false
         }
         return true
    }
 
    randomizeMode() {
         this.mode = Math.floor(Math.random() * max)
    }
 
    setMode(m) {
     this.mode = m
    }
 
    toString() {
         return this.description + " : " + this.mode
    }
 }
 
 
 const rule0 = new Rule("A Equal 1 : A > 1", 2, (a, b, c, m) => {
     if (m === 0) {
         return a === 1
     }
     else {
         return a > 1
     }
 })
 
 const rule1 = new Rule("A < 3 : A = 3 : A > 3", 3, (a, b, c, m) => {
     if (m === 0) {
         return a < 3
     }
     else if (m === 1) {
         return a === 3
     }
     else {
         return a > 3
     }
 })
 
 const rule2 = new Rule("B < 3 : B = 3 : B > 3", 3, (a, b, c, m) => {
     if (m === 0) {
         return b < 3
     }
     else if (m === 1) {
         return b === 3
     }
     else {
         return b > 3
     }
 })
 
 const rule3 = new Rule("B < 4 : B = 4 : B > 4", 3, (a, b, c, m) => {
     if (m === 0) {
         return b < 4
     }
     else if (m === 1) {
         return b === 4
     }
     else {
         return b > 4
     }
 })
 
 const rule4 = new Rule("A is even : A is odd", 2, (a, b, c, m) => {
     if (m === 0) {
         return a % 2 === 0
     }
     else {
         return a % 2 === 1
     }
 })
 
 const rule5 = new Rule("B is even : B is odd", 2, (a, b, c, m) => {
     if (m === 0) {
         return b % 2 === 0
     }
     else {
         return b % 2 === 1
     }
 })
 
 const rule6 = new Rule("C is even : C is odd", 2, (a, b, c, m) => {
     if (m === 0) {
         return c % 2 === 0
     }
     else {
         return c % 2 === 1
     }
 })
 
 const rule7 = new Rule("Zero 1's : One 1's : Two 1's : Three 1's", 4, (a, b, c, m) => {
     let total = 0
     if (a === 1) total++
     if (b === 1) total++
     if (c === 1) total++
     
     if (m === 0) {
         return total === 0
     }
     else if (m === 1) {
         return total === 1
     }
     else if (m === 2) {
         return total === 2
     }
     else {
         return total === 3
     }
 })
 
 const rule8 = new Rule("Zero 3's : One 3's : Two 3's : Three 3's", 4, (a, b, c, m) => {
     let total = 0
     if (a === 3) total++
     if (b === 3) total++
     if (c === 3) total++
 
     if (m === 0) {
         return total === 0
     }
     else if (m === 1) {
         return total === 1
     }
     else if (m === 2) {
         return total === 2
     }
     else {
         return total === 3
     }
 })
 
 const rule9 = new Rule("Zero 4's : One 4's : Two 4's : Three 4's", 4, (a, b, c, m) => {
     let total = 0
     if (a === 4) total++
     if (b === 4) total++
     if (c === 4) total++
 
     if (m === 0) {
         return total === 0
     }
     else if (m === 1) {
         return total === 1
     }
     else if (m === 2) {
         return total === 2
     }
     else {
         return total === 3
     }
 })
 
 const rule10 = new Rule("A < B : A = B : A > B", 3, (a, b, c, m) => {
     if (m === 0) {
         return a < b
     }
     else if (m === 1) {
         return a === b
     }
     else {
         return a > b
     }
 })
 
 const rule11 = new Rule("A < C : A = C : A > C", 3, (a, b, c, m) => {
     if (m === 0) {
         return a < c
     }
     else if (m === 1) {
         return a === c
     }
     else {
         return a > c
     }
 })
 
 const rule12 = new Rule("B < C : B = C : B > C", 3, (a, b, c, m) => {
     if (m === 0) {
         return b < c
     }
     else if (m === 1) {
         return b === c
     }
     else {
         return b > c
     }
 })
 
 const rule13 = new Rule("A is the smallest : B is the smallest : C is the smallest", 3, (a, b, c, m) => {
     if (m === 0) {
         return a < b && a < c
     }
     else if (m === 1) {
         return b < a && b < c
     }
     else {
         return c < a && c < b
     }
 })
 
 const rule14 = new Rule("A is the largest : B is the largest : C is the largest", 3, (a, b, c, m) => {
     if (m === 0) {
         return a > b && a > c
     }
     else if (m === 1) {
         return b > a && b > c
     }
     else {
         return c > a && c > b
     }
 })
 
 const rule15 = new Rule("More Evens than Odds : More Odds than Evens", 2, (a, b, c, m) => {
     let even = 0
     if (a % 2 === 0) even++
     if (b % 2 === 0) even++
     if (c % 2 === 0) even++
 
     let odd = 3 - even
 
     if (m === 0) {
         return even > odd
     }
     else {
         return even < odd
     }
 })
 
 const rule16 = new Rule("Zero Even numbers : One Even numbers : Two Even numbers : Three Even numbers", 4, (a, b, c, m) => {
     let even = 0
     if (a % 2 === 0) even++
     if (b % 2 === 0) even++
     if (c % 2 === 0) even++
 
     if (m === 0) {
         return even === 0
     }
     else if (m === 1) {
         return even === 1
     }
     else if (m === 2) {
         return even === 2
     }
     else {
         return even === 3
     }
 })
 
 const rule17 = new Rule("Total is Even : Total is Odd", 2, (a, b, c, m) => {
     if (m === 0) {
         return (a + b + c) % 2 === 0
     }
     else {
         return (a + b + c) % 2 === 1
     }
 })
 
 const rule18 = new Rule("A + B < 6 : A + B = 6 : A + B > 6", 3, (a, b, c, m) => {
     if (m === 0) {
         return (a + b) < 6
     }
     else if (m === 1) {
         return (a + b) === 6
     }
     else {
         return (a + b) > 6
     }
 })
 
 const rule19 = new Rule("A triple number : A double number : No repeting numbers", 3, (a, b, c, m) => {
     if (m === 0) {
         return a === b && a === c
     }
     else if (m === 1) {
         return (a === b && a !== c) || (a === c && a !== b) || (b === c && a !== b)
     }
     else {
         return a !== b && a !== c && b !== c
     }
 })
 
 const rule20 = new Rule("A pair exists : No pair exists", 2, (a, b, c, m) => {
     if (m === 0) {
         return ((a === b && a !== c) || (a === c && a !== b) || (b === c && a !== b))
     }
     else {
         return !((a === b && a !== c) || (a === c && a !== b) || (b === c && a !== b))
     }
 })
 
 const rule21 = new Rule("Ascending order : Descending order : No order", 3, (a, b, c, m) => {
     let ascending = a < b && b < c
     let descending = a > b && b > c
     if (m === 0) {
         return ascending
     }
     else if (m === 1) {
         return descending
     }
     else {
         return !ascending && !descending // TODO: CLARIFIY IF THIS IS CORRECT
     }
 })
 
 
 const rule22 = new Rule("Total < 6 : Total = 6 : Total > 6", 3, (a, b, c, m) => {
     if (m === 0) {
         return (a + b + c) < 6
     }
     else if (m === 1) {
         return (a + b + c) === 6
     }
     else {
         return (a + b + c) > 6
     }
 })
 
 const rule23 = new Rule("3 Numbers Straight Ascending : 2 Numbers Straight Ascending : No Straight Ascending", 3, (a, b, c, m) => {
     if (m === 0) {
         return (a + 1 === b) && (b + 1 === c)
     }
     else if (m === 1) {
         return ((a + 1 === b) && (b + 1 !== c)) || ((a + 1 !== b) && (b + 1 === c))
     }
     else {
         return (a + 1 !== b) && (b + 1 !== c)
     }
 })
 
 const rule24 = new Rule("3 Numbers Straight Descending : 2 Numbers Straight Descending : No Straight Descending", 3, (a, b, c, m) => {
     if (m === 0) {
         return (a - 1 === b) && (b - 1 === c)
     }
     else if (m === 1) {
         return ((a - 1 === b) && (b - 1 !== c)) || ((a - 1 !== b) && (b - 1 === c))
     }
     else {
         return (a - 1 !== b) && (b - 1 !== c)
     }
 })
 
 const rule25 = new Rule("3 Numbers Straight : 2 Numbers Straight: No Straight", 3, (a, b, c, m) => {
     return rule23.rule(a, b, c, m) || rule24.rule(a, b, c, m)
 })
 
 const rule26 = new Rule("A < 3 : B < 3 : C < 3", 3, (a, b, c, m) => {
     if (m === 0) {
         return a < 3
     }
     else if (m === 1) {
         return b < 3
     }
     else {
         return c < 3
     }
 })
 
 const rule27 = new Rule("A < 4 : B < 4 : C < 4", 3, (a, b, c, m) => {
     if (m === 0) {
         return a < 4
     }
     else if (m === 1) {
         return b < 4
     }
     else {
         return c < 4
     }
 })
 
 const rule28 = new Rule("A = 1 : B = 1 : C = 1", 3, (a, b, c, m) => {
     if (m === 0) {
         return a === 1
     }
     else if (m === 1) {
         return b === 1
     }
     else {
         return c === 1
     }
 })
 
 const rule29 = new Rule("A = 3 : B = 3 : C = 3", 3, (a, b, c, m) => {
     if (m === 0) {
         return a === 3
     }
     else if (m === 1) {
         return b === 3
     }
     else {
         return c === 3
     }
 })
 
 const rule30 = new Rule("A = 4 : B = 4 : C = 4", 3, (a, b, c, m) => {
     if (m === 0) {
         return a === 4
     }
     else if (m === 1) {
         return b === 4
     }
     else {
         return c === 4
     }
 })
 
 const rule31 = new Rule("A > 1 : B > 1 : C > 1", 3, (a, b, c, m) => {
     if (m === 0) {
         return a > 1
     }
     else if (m === 1) {
         return b > 1
     }
     else {
         return c > 1
     }
 })
 
 const rule32 = new Rule("A > 3 : B > 3 : C > 3", 3, (a, b, c, m) => {
     if (m === 0) {
         return a > 3
     }
     else if (m === 1) {
         return b > 3
     }
     else {
         return c > 3
     }
 })
 
 const rule33 = new Rule("A is Even : A is Odd : B is Even : B is Odd : C is Even : C is Odd", 6, (a, b, c, m) => {
     if (m === 0) {
         return a % 2 === 0
     }
     else if (m === 1) {
         return a % 2 === 1
     }
     else if (m === 2) {
         return b % 2 === 0
     }
     else if (m === 3) {
         return b % 2 === 1
     }
     else if (m === 4) {
         return c % 2 === 0
     }
     else {
         return c % 2 === 1
     }
 })
 
 const rule34 = new Rule("A is among the smallest : B is among the smallest : C is among the smallest", 3, (a, b, c, m) => {
     if (m === 0) {
         return a <= b && a <= c
     }
     else if (m === 1) {
         return b <= a && b <= c
     }
     else {
         return c <= a && c <= b
     }
 })
 
 const rule35 = new Rule("A is among the largest : B is among the largest : C is among the largest", 3, (a, b, c, m) => {
     if (m === 0) {
         return a >= b && a >= c
     }
     else if (m === 1) {
         return b >= a && b >= c
     }
     else {
         return c >= a && c >= b
     }
 })
 
 const rule36 = new Rule("Total is a multiple of 3 : Total is a multiple of 4 : Total is a multiple of 5", 3, (a, b, c, m) => {
     let total = a + b + c
     if (m === 0) {
         return total % 3 === 0
     }
     else if (m === 1) {
         return total % 4 === 0
     }
     else {
         return total % 5 === 0
     }
 })
 
 const rule37 = new Rule("A + B = 4 : A + C = 4 : C + B = 4", 3, (a, b, c, m) => {
     if (m === 0) {
         return a + b === 4
     }
     else if (m === 1) {
         return a + c === 4
     }
     else {
         return c + b === 4
     }
 })
 
 const rule38 = new Rule("A + B = 6 : A + C = 6 : C + B = 6", 3, (a, b, c, m) => {
     if (m === 0) {
         return a + b === 6
     }
     else if (m === 1) {
         return a + c === 6
     }
     else {
         return c + b === 6
     }
 })
 
 const rule39 = new Rule("A = 1 : A > 1 : B = 1 : B > 1 : C = 1 : C > 1", 6, (a, b, c, m) => {
     if (m === 0) {
         return a === 1
     }
     else if (m === 1) {
         return a > 1
     }
     else if (m === 2) {
         return b === 1
     }
     else if (m === 3) {
         return b > 1
     }
     else if (m === 4) {
         return c === 1
     }
     else {
         return c > 1
     }
 })
 
 const rule40 = new Rule("A < 3 : A = 3 : A > 3 : B < 3 : B = 3 : B > 3 : C < 3 : C = 3 : C > 3", 9, (a, b, c, m) => {
     if (m === 0) {
         return a < 3
     }
     else if (m === 1) {
         return a === 3
     }
     else if (m === 2) {
         return a > 3
     }
     else if (m === 3) {
         return b < 3
     }
     else if (m === 4) {
         return b === 3
     }
     else if (m === 5) {
         return b > 3
     }
     else if (m === 6) {
         return c < 3
     }
     else if (m === 7) {
         return c === 3
     }
     else {
         return c > 3
     }
 })
 
 const rule41 = new Rule("A < 4 : A = 4 : A > 4 : B < 4 : B = 4 : B > 4 : C < 4 : C = 4 : C > 4", 9, (a, b, c, m) => {
     if (m === 0) {
         return a < 4
     }
     else if (m === 1) {
         return a === 4
     }
     else if (m === 2) {
         return a > 4
     }
     else if (m === 3) {
         return b < 4
     }
     else if (m === 4) {
         return b === 4
     }
     else if (m === 5) {
         return b > 4
     }
     else if (m === 6) {
         return c < 4
     }
     else if (m === 7) {
         return c === 4
     }
     else {
         return c > 4
     }
 })
 
 const rule42 = new Rule("A is the Smallest : A is the Largest : B is the Smallest : B is the Largest : C is the Smallest : C is the Largest", 6, (a, b, c, m) => {
     if (m === 0) {
         return a < b && a < c
     }
     else if (m === 1) {
         return a > b && a > c
     }
     else if (m === 2) {
         return b < a && b < c
     }
     else if (m === 3) {
         return b > a && b > c
     }
     else if (m === 4) {
         return c < a && c < b
     }
     else {
         return c > a && c > b
     }
 })
 
 const rule43 = new Rule("A < B : A = B : A > B : A < C : A = C : A > C", 6, (a, b, c, m) => {
     if (m === 0) {
         return a < b
     }
     else if (m === 1) {
         return a === b
     }
     else if (m === 2) {
         return a > b
     }
     else if (m === 3) {
         return a < c
     }
     else if (m === 4) {
         return a === c
     }
     else {
         return a > c
     }
 })
 
 const rule44 = new Rule("B < A : B = A : B > A : B < C : B = C : B > C", 6, (a, b, c, m) => {
     if (m === 0) {
         return b < a
     }
     else if (m === 1) {
         return b === a
     }
     else if (m === 2) {
         return b > a
     }
     else if (m === 3) {
         return b < c
     }
     else if (m === 4) {
         return b === c
     }
     else {
         return b > c
     }
 })
 
 const rule45 = new Rule("Zero 1's : One 1's : Two 1's : Zero 3's : One 3's : Two 3's", 6, (a, b, c, m) => {
     let ones = 0
     if (a === 1) ones++
     if (b === 1) ones++
     if (c === 1) ones++
 
     let threes = 0
     if (a === 3) threes++
     if (b === 3) threes++
     if (c === 3) threes++
 
     if (m === 0) {
         return ones === 0
     }
     else if (m === 1) {
         return ones === 1
     }
     else if (m === 2) {
         return ones === 2
     }
     else if (m === 3) {
         return threes === 0
     }
     else if (m === 4) {
         return threes === 1
     }
     else {
         return threes === 2
     }
 })
 
 const rule46 = new Rule("Zero 3's : One 3's : Two 3's : Zero 4's : One 4's : Two 4's", 6, (a, b, c, m) => {
     let threes = 0
     if (a === 3) threes++
     if (b === 3) threes++
     if (c === 3) threes++
 
     let fours = 0
     if (a === 4) fours++
     if (b === 4) fours++
     if (c === 4) fours++
 
     if (m === 0) {
         return threes === 0
     }
     else if (m === 1) {
         return threes === 1
     }
     else if (m === 2) {
         return threes === 2
     }
     else if (m === 3) {
         return fours === 0
     }
     else if (m === 4) {
         return fours === 1
     }
     else {
         return fours === 2
     }
 })
 
 const rule47 = new Rule("Zero 1's : One 1's : Two 1's : Zero 4's : One 4's : Two 4's", 6, (a, b, c, m) => {
     let ones = 0
     if (a === 1) ones++
     if (b === 1) ones++
     if (c === 1) ones++
 
     let fours = 0
     if (a === 4) fours++
     if (b === 4) fours++
     if (c === 4) fours++
 
     if (m === 0) {
         return ones === 0
     }
     else if (m === 1) {
         return ones === 1
     }
     else if (m === 2) {
         return ones === 2
     }
     else if (m === 3) {
         return fours === 0
     }
     else if (m === 4) {
         return fours === 1
     }
     else {
         return fours === 2
     }
 })
 
 const rule48 = new Rule("A < B : A < C : B < C : A = B : A = B : B = C : A > B : A > C : B > C", 9, (a, b, c, m) => {
     if (m === 0) {
         return a < b
     }
     else if (m === 1) {
         return a < c
     }
     else if (m === 2) {
         return b < c
     }
     else if (m === 3) {
         return a === b
     }
     else if (m === 4) {
         return a === c
     }
     else if (m === 5) {
         return b === c
     }
     else if (m === 6) {
         return a > b
     }
     else if (m === 7) {
         return a > c
     }
     else {
         return b > c
     }
 })
 
 const rules = [rule0, rule1 , rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, 
     rule10, rule11, rule12, rule13, rule14, rule15, rule16, rule17, rule18, rule19,
     rule20, rule21, rule22, rule23, rule24, rule25, rule26, rule27, rule28, rule29, 
     rule30, rule31, rule32, rule33, rule34, rule35, rule36, rule37, rule38, rule39, 
     rule40, rule41, rule42, rule43, rule44, rule45, rule46, rule47, rule48]
 
 
 module.exports = rules