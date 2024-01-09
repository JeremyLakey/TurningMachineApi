const generateGame = require("./model/game")


let result = generateGame(n = 5)

console.log(result)

for(let a = 1; a <= 5; a++) {
    for(let b = 1; b <= 5; b++) {
        for(let c = 1; c <=5 ; c++) {
            let d = result.test(a, b, c)
            if(d) console.log(`${a} ${b} ${c}`)
        }
    }
}