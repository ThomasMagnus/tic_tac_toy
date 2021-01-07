window.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.table')
    const crosses = document.querySelectorAll('th')
    const retry = document.querySelector('.retry')

    let detector = false;

    const winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    let x = [],
        y = []

    const retryGame = () => {
        crosses.forEach(item => item.textContent = '')
        x = []; y = []
    }

    const getValue = (value) => {
        if (value.textContent === '') {
            return detector ? 'x' : 'o'
        } else {
            return value.textContent
        }
    }

    const checkWin = (data) => {
        for (let i = 0; i < winner.length; i++) {
            let win = true
            for (let j = 0; j < winner[i].length; j++) {
                const id = winner[i][j]
                const res = data.indexOf(id)
                if (res === -1) {
                    win = false
                }
            }
            if (win) return true
        }
        return false
    }

    const startGame = (e) => {
        const target = e.target

        target.textContent = getValue(target)
        detector = !detector

        crosses.forEach((item, i) => {
            if (target === item) {
                if (detector) {
                    y.push(i)
                } else {
                    x.push(i)
                }
            }
        })

        if (checkWin(x)) alert('Выйграли X')
        else if (checkWin(y)) alert('Выйграли O')
    }

    table.addEventListener('click', startGame)
    retry.addEventListener('click', retryGame)
})
