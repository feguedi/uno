const pile = []
const colors = ['blue', 'yellow', 'red', 'green', 'wild']
const actions = ['draw2', 'reverse', 'skip', 'draw4']

colors.forEach(color => {
    if (color !== 'wild') {
        for (let i = 0; i < 10; i++) {
            if (i !== 0) {
                pile.push({ color, number: i })
            }
            pile.push({ color, number: i })
        }
        actions.forEach(action => {
            if (action !== 'draw4') {
                pile.push({ color, action })
                pile.push({ color, action })
            }
        })
    } else {
        for (let i = 0; i < 8; i++) {
            if (i < 4) pile.push({ color })
            else pile.push({ color, action: 'draw4' })
        }
    }
})

module.exports = pile
