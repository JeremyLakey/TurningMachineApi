
const generateGame = require("../model/game")




describe("Game Generation", () => 
    test('Generating random games doesn\'t produce multiple answers', () => {
        for(let i = 0; i < 100; i++) {
            let result = generateGame(n = 4)
            let count = 0
            for(let a = 1; a <= 5; a++) {
                for(let b = 1; b <= 5; b++) {
                    for(let c = 1; c <=5 ; c++) {
                        if(result.test(a, b, c)) count++
                    }
                }
            }
            expect(count).toBe(1)
        }
        
    })
)
