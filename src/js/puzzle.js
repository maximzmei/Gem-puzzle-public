let empty = {
    value: 0,
    top: 0,
    left: 0,
}

let seconds = 0

let recordsArray = []

if (localStorage.getItem('1') !== null) {
    recordsArray.push(localStorage.getItem('1'))
}

if (localStorage.getItem('2') !== null) {
    recordsArray.push(localStorage.getItem('2'))
}

if (localStorage.getItem('3') !== null) {
    recordsArray.push(localStorage.getItem('3'))
}

if (localStorage.getItem('4') !== null) {
    recordsArray.push(localStorage.getItem('4'))
}

if (localStorage.getItem('5') !== null) {
    recordsArray.push(localStorage.getItem('5'))
}

if (localStorage.getItem('6') !== null) {
    recordsArray.push(localStorage.getItem('6'))
}

if (localStorage.getItem('7') !== null) {
    recordsArray.push(localStorage.getItem('7'))
}

if (localStorage.getItem('8') !== null) {
    recordsArray.push(localStorage.getItem('8'))
}

if (localStorage.getItem('9') !== null) {
    recordsArray.push(localStorage.getItem('9'))
}

if (localStorage.getItem('10') !== null) {
    recordsArray.push(localStorage.getItem('10'))
}

recordsArray.sort((a, b) => a - b)
let savedDivs

const pictures = [...Array(149).keys()].sort(() => Math.random() - 0.5)

let cells = []
if (localStorage.getItem('cells') === null) {
    cells.push(empty)
}

let emptyLeft = empty.left
let emptyTop = empty.top

export default class PuzzleConfig {

    constructor(properties) {
        this.stepsCounter = properties.stepsCounter
        this.seconds = properties.seconds
        this.cellSize = properties.cellSize
        this.cellSizeThree = properties.cellSizeThree
        this.cellSizeFour = properties.cellSizeFour
        this.cellSizeFive = properties.cellSizeFive
        this.cellSizeSix = properties.cellSizeSix
        this.cellSizeSeven = properties.cellSizeSeven
        this.cellSizeEight = properties.cellSizeEight
        this.soundMuted = properties.soundMuted
    }

    move(index) {
        const cell = cells[index]
        const leftDiff = Math.abs(empty.left - cell.left)
        const topDiff = Math.abs(empty.top - cell.top)
        const steps = document.querySelector("body > div.advanced > p.steps")
        setInterval(() => {
            localStorage.setItem('cells', JSON.stringify(cells))
        }, 0)

        if (leftDiff + topDiff > 1) {
            return
        }
        if (document.querySelector("#\\31 ").style.width === '10.66rem') {
            cell.element.style.left = `${empty.left * this.cellSizeThree}px`
            cell.element.style.top = `${empty.top * this.cellSizeThree}px`
        } else if (document.querySelector("#\\31 ").style.width === '8rem') {
            cell.element.style.left = `${empty.left * this.cellSize}px`
            cell.element.style.top = `${empty.top * this.cellSize}px`
        } else if (document.querySelector("#\\31 ").style.width === '6.4rem') {
            cell.element.style.left = `${empty.left * this.cellSizeFive}px`
            cell.element.style.top = `${empty.top * this.cellSizeFive}px`
        } else if (document.querySelector("#\\31 ").style.width === '5.33rem') {
            cell.element.style.left = `${empty.left * this.cellSizeSix}px`
            cell.element.style.top = `${empty.top * this.cellSizeSix}px`
        } else if (document.querySelector("#\\31 ").style.width === '4.5714rem') {
            cell.element.style.left = `${empty.left * this.cellSizeSeven}px`
            cell.element.style.top = `${empty.top * this.cellSizeSeven}px`
        } else if (document.querySelector("#\\31 ").style.width === '4rem') {
            cell.element.style.left = `${empty.left * this.cellSizeEight}px`
            cell.element.style.top = `${empty.top * this.cellSizeEight}px`
        }

        emptyLeft = empty.left
        emptyTop = empty.top
        empty.left = cell.left
        empty.top = cell.top
        cell.left = emptyLeft
        cell.top = emptyTop

        this.stepsCounter += 1
        steps.textContent = `steps ${this.stepsCounter}`
        if ((cells[1].value === (cells[1].top * 4 + cells[1].left) + 1) && (cells[2].value === (cells[2].top * 4 + cells[2].left) + 1) && (cells[3].value === (cells[3].top * 4 + cells[3].left) + 1) && (cells[4].value === (cells[4].top * 4 + cells[4].left) + 1) && (cells[5].value === (cells[5].top * 4 + cells[5].left) + 1) && (cells[6].value === (cells[6].top * 4 + cells[6].left) + 1) && (cells[7].value === (cells[7].top * 4 + cells[7].left) + 1) && (cells[8].value === (cells[8].top * 4 + cells[8].left) + 1) && (cells[9].value === (cells[9].top * 4 + cells[9].left) + 1) && (cells[10].value === (cells[10].top * 4 + cells[10].left) + 1) && (cells[11].value === (cells[11].top * 4 + cells[11].left) + 1) && (cells[12].value === (cells[12].top * 4 + cells[12].left) + 1) && (cells[13].value === (cells[13].top * 4 + cells[13].left) + 1) && (cells[14].value === (cells[14].top * 4 + cells[14].left) + 1) && (cells[15].value === (cells[15].top * 4 + cells[15].left) + 1)) {
            recordsArray.push(this.stepsCounter)
            localStorage.setItem(recordsArray.indexOf(recordsArray[recordsArray.length - 1]) + 1, this.stepsCounter)
            setTimeout(() => {
                alert(`Ура! Вы решили головоломку 4x4 за 0${Math.floor(seconds / 60)}:${seconds % 60} и ${this.stepsCounter} ходов!  Ваш рекорд добавлен. Перезагрузите страницу, чтобы посмотреть рекорд.`)
            }, 1000)
            setTimeout(() => {
                this.newGame()
            }, 1000)
        } else if ((cells[1].value === (cells[1].top * 3 + cells[1].left) + 1) && (cells[2].value === (cells[2].top * 3 + cells[2].left) + 1) && (cells[3].value === (cells[3].top * 3 + cells[3].left) + 1) && (cells[4].value === (cells[4].top * 3 + cells[4].left) + 1) && (cells[5].value === (cells[5].top * 3 + cells[5].left) + 1) && (cells[6].value === (cells[6].top * 3 + cells[6].left) + 1) && (cells[7].value === (cells[7].top * 3 + cells[7].left) + 1) && (cells[8].value === (cells[8].top * 3 + cells[8].left) + 1)) {
            recordsArray.push(this.stepsCounter)
            localStorage.setItem(recordsArray.indexOf(recordsArray[recordsArray.length - 1]) + 1, this.stepsCounter)
            setTimeout(() => {
                alert(`Ура! Вы решили головоломку 3x3 за 0${Math.floor(seconds / 60)}:${seconds % 60} и ${this.stepsCounter} ходов! Ваш рекорд добавлен. Перезагрузите страницу, чтобы посмотреть рекорд.`)
            }, 1000)
            setTimeout(() => {
                this.newGame()
            }, 1000)
        } else if ((cells[1].value === (cells[1].top * 5 + cells[1].left) + 1) && (cells[2].value === (cells[2].top * 5 + cells[2].left) + 1) && (cells[3].value === (cells[3].top * 5 + cells[3].left) + 1) && (cells[4].value === (cells[4].top * 5 + cells[4].left) + 1) && (cells[5].value === (cells[5].top * 5 + cells[5].left) + 1) && (cells[6].value === (cells[6].top * 5 + cells[6].left) + 1) && (cells[7].value === (cells[7].top * 5 + cells[7].left) + 1) && (cells[8].value === (cells[8].top * 5 + cells[8].left) + 1) && (cells[9].value === (cells[9].top * 5 + cells[9].left) + 1) && (cells[10].value === (cells[10].top * 5 + cells[10].left) + 1) && (cells[11].value === (cells[11].top * 5 + cells[11].left) + 1) && (cells[12].value === (cells[12].top * 5 + cells[12].left) + 1) && (cells[13].value === (cells[13].top * 5 + cells[13].left) + 1) && (cells[14].value === (cells[14].top * 5 + cells[14].left) + 1) && (cells[15].value === (cells[15].top * 5 + cells[15].left) + 1) && (cells[16].value === (cells[16].top * 5 + cells[16].left) + 1) && (cells[17].value === (cells[17].top * 5 + cells[17].left) + 1) && (cells[19].value === (cells[19].top * 5 + cells[19].left) + 1) && (cells[19].value === (cells[19].top * 5 + cells[19].left) + 1) && (cells[20].value === (cells[20].top * 5 + cells[20].left) + 1) && (cells[21].value === (cells[21].top * 5 + cells[21].left) + 1) && (cells[22].value === (cells[22].top * 5 + cells[22].left) + 1) && (cells[23].value === (cells[23].top * 5 + cells[23].left) + 1) && (cells[24].value === (cells[24].top * 5 + cells[24].left) + 1)) {
            recordsArray.push(this.stepsCounter)
            localStorage.setItem(recordsArray.indexOf(recordsArray[recordsArray.length - 1]) + 1, this.stepsCounter)
            setTimeout(() => {
                alert(`Ура! Вы решили головоломку 5x5 за 0${Math.floor(seconds / 60)}:${seconds % 60} и ${this.stepsCounter} ходов! Ваш рекорд добавлен. Перезагрузите страницу, чтобы посмотреть рекорд.`)
            }, 1000)
            setTimeout(() => {
                this.newGame()
            }, 1000)
        } else if ((cells[1].value === (cells[1].top * 6 + cells[1].left) + 1) && (cells[2].value === (cells[2].top * 6 + cells[2].left) + 1) && (cells[3].value === (cells[3].top * 6 + cells[3].left) + 1) && (cells[4].value === (cells[4].top * 6 + cells[4].left) + 1) && (cells[5].value === (cells[5].top * 6 + cells[5].left) + 1) && (cells[6].value === (cells[6].top * 6 + cells[6].left) + 1) && (cells[7].value === (cells[7].top * 6 + cells[7].left) + 1) && (cells[8].value === (cells[8].top * 6 + cells[8].left) + 1) && (cells[9].value === (cells[9].top * 6 + cells[9].left) + 1) && (cells[10].value === (cells[10].top * 6 + cells[10].left) + 1) && (cells[11].value === (cells[11].top * 6 + cells[11].left) + 1) && (cells[12].value === (cells[12].top * 6 + cells[12].left) + 1) && (cells[13].value === (cells[13].top * 6 + cells[13].left) + 1) && (cells[14].value === (cells[14].top * 6 + cells[14].left) + 1) && (cells[15].value === (cells[15].top * 6 + cells[15].left) + 1) && (cells[16].value === (cells[16].top * 6 + cells[16].left) + 1) && (cells[17].value === (cells[17].top * 6 + cells[17].left) + 1) && (cells[19].value === (cells[19].top * 6 + cells[19].left) + 1) && (cells[19].value === (cells[19].top * 6 + cells[19].left) + 1) && (cells[20].value === (cells[20].top * 6 + cells[20].left) + 1) && (cells[21].value === (cells[21].top * 6 + cells[21].left) + 1) && (cells[22].value === (cells[22].top * 6 + cells[22].left) + 1) && (cells[23].value === (cells[23].top * 6 + cells[23].left) + 1) && (cells[24].value === (cells[24].top * 6 + cells[24].left) + 1) && (cells[25].value === (cells[25].top * 6 + cells[25].left) + 1) && (cells[26].value === (cells[26].top * 6 + cells[26].left) + 1) && (cells[27].value === (cells[27].top * 6 + cells[27].left) + 1) && (cells[28].value === (cells[28].top * 6 + cells[28].left) + 1) && (cells[29].value === (cells[29].top * 6 + cells[29].left) + 1) && (cells[30].value === (cells[30].top * 6 + cells[30].left) + 1) && (cells[31].value === (cells[31].top * 6 + cells[31].left) + 1) && (cells[32].value === (cells[32].top * 6 + cells[32].left) + 1) && (cells[33].value === (cells[33].top * 6 + cells[33].left) + 1) && (cells[34].value === (cells[34].top * 6 + cells[34].left) + 1) && (cells[35].value === (cells[35].top * 6 + cells[35].left) + 1)) {
            recordsArray.push(this.stepsCounter)
            localStorage.setItem(recordsArray.indexOf(recordsArray[recordsArray.length - 1]) + 1, this.stepsCounter)
            setTimeout(() => {
                alert(`Ура! Вы решили головоломку 6x6 за 0${Math.floor(seconds / 60)}:${seconds % 60} и ${this.stepsCounter} ходов! Ваш рекорд добавлен. Перезагрузите страницу, чтобы посмотреть рекорд.`)
            }, 1000)
            setTimeout(() => {
                this.newGame()
            }, 1000)
        } else if ((cells[1].value === (cells[1].top * 7 + cells[1].left) + 1) && (cells[2].value === (cells[2].top * 7 + cells[2].left) + 1) && (cells[3].value === (cells[3].top * 7 + cells[3].left) + 1) && (cells[4].value === (cells[4].top * 7 + cells[4].left) + 1) && (cells[5].value === (cells[5].top * 7 + cells[5].left) + 1) && (cells[6].value === (cells[6].top * 7 + cells[6].left) + 1) && (cells[7].value === (cells[7].top * 7 + cells[7].left) + 1) && (cells[8].value === (cells[8].top * 7 + cells[8].left) + 1) && (cells[9].value === (cells[9].top * 7 + cells[9].left) + 1) && (cells[10].value === (cells[10].top * 7 + cells[10].left) + 1) && (cells[11].value === (cells[11].top * 7 + cells[11].left) + 1) && (cells[12].value === (cells[12].top * 7 + cells[12].left) + 1) && (cells[13].value === (cells[13].top * 7 + cells[13].left) + 1) && (cells[14].value === (cells[14].top * 7 + cells[14].left) + 1) && (cells[15].value === (cells[15].top * 7 + cells[15].left) + 1) && (cells[16].value === (cells[16].top * 7 + cells[16].left) + 1) && (cells[17].value === (cells[17].top * 7 + cells[17].left) + 1) && (cells[19].value === (cells[19].top * 7 + cells[19].left) + 1) && (cells[19].value === (cells[19].top * 7 + cells[19].left) + 1) && (cells[20].value === (cells[20].top * 7 + cells[20].left) + 1) && (cells[21].value === (cells[21].top * 7 + cells[21].left) + 1) && (cells[22].value === (cells[22].top * 7 + cells[22].left) + 1) && (cells[23].value === (cells[23].top * 7 + cells[23].left) + 1) && (cells[24].value === (cells[24].top * 7 + cells[24].left) + 1) && (cells[25].value === (cells[25].top * 7 + cells[25].left) + 1) && (cells[26].value === (cells[26].top * 7 + cells[26].left) + 1) && (cells[27].value === (cells[27].top * 7 + cells[27].left) + 1) && (cells[28].value === (cells[28].top * 7 + cells[28].left) + 1) && (cells[29].value === (cells[29].top * 7 + cells[29].left) + 1) && (cells[30].value === (cells[30].top * 7 + cells[30].left) + 1) && (cells[31].value === (cells[31].top * 7 + cells[31].left) + 1) && (cells[32].value === (cells[32].top * 7 + cells[32].left) + 1) && (cells[33].value === (cells[33].top * 7 + cells[33].left) + 1) && (cells[34].value === (cells[34].top * 7 + cells[34].left) + 1) && (cells[35].value === (cells[35].top * 7 + cells[35].left) + 1) && (cells[36].value === (cells[36].top * 7 + cells[36].left) + 1) && (cells[37].value === (cells[37].top * 7 + cells[37].left) + 1) && (cells[38].value === (cells[38].top * 7 + cells[38].left) + 1) && (cells[39].value === (cells[39].top * 7 + cells[39].left) + 1) && (cells[40].value === (cells[40].top * 7 + cells[40].left) + 1) && (cells[41].value === (cells[41].top * 7 + cells[41].left) + 1) && (cells[42].value === (cells[42].top * 7 + cells[42].left) + 1) && (cells[43].value === (cells[43].top * 7 + cells[43].left) + 1) && (cells[44].value === (cells[44].top * 7 + cells[44].left) + 1) && (cells[45].value === (cells[45].top * 7 + cells[45].left) + 1) && (cells[46].value === (cells[46].top * 7 + cells[46].left) + 1) && (cells[47].value === (cells[47].top * 7 + cells[47].left) + 1) && (cells[48].value === (cells[48].top * 7 + cells[48].left) + 1)) {
            recordsArray.push(this.stepsCounter)
            localStorage.setItem(recordsArray.indexOf(recordsArray[recordsArray.length - 1]) + 1, this.stepsCounter)
            setTimeout(() => {
                alert(`Ура! Вы решили головоломку 7x7 за 0${Math.floor(seconds / 60)}:${seconds % 60} и ${this.stepsCounter} ходов! Ваш рекорд добавлен. Перезагрузите страницу, чтобы посмотреть рекорд.`)
            }, 1000)
            setTimeout(() => {
                this.newGame()
            }, 1000)
        } else if ((cells[1].value === (cells[1].top * 8 + cells[1].left) + 1) && (cells[2].value === (cells[2].top * 8 + cells[2].left) + 1) && (cells[3].value === (cells[3].top * 8 + cells[3].left) + 1) && (cells[4].value === (cells[4].top * 8 + cells[4].left) + 1) && (cells[5].value === (cells[5].top * 8 + cells[5].left) + 1) && (cells[6].value === (cells[6].top * 8 + cells[6].left) + 1) && (cells[7].value === (cells[7].top * 8 + cells[7].left) + 1) && (cells[8].value === (cells[8].top * 8 + cells[8].left) + 1) && (cells[9].value === (cells[9].top * 8 + cells[9].left) + 1) && (cells[10].value === (cells[10].top * 8 + cells[10].left) + 1) && (cells[11].value === (cells[11].top * 8 + cells[11].left) + 1) && (cells[12].value === (cells[12].top * 8 + cells[12].left) + 1) && (cells[13].value === (cells[13].top * 8 + cells[13].left) + 1) && (cells[14].value === (cells[14].top * 8 + cells[14].left) + 1) && (cells[15].value === (cells[15].top * 8 + cells[15].left) + 1) && (cells[16].value === (cells[16].top * 8 + cells[16].left) + 1) && (cells[17].value === (cells[17].top * 8 + cells[17].left) + 1) && (cells[19].value === (cells[19].top * 8 + cells[19].left) + 1) && (cells[19].value === (cells[19].top * 8 + cells[19].left) + 1) && (cells[20].value === (cells[20].top * 8 + cells[20].left) + 1) && (cells[21].value === (cells[21].top * 8 + cells[21].left) + 1) && (cells[22].value === (cells[22].top * 8 + cells[22].left) + 1) && (cells[23].value === (cells[23].top * 8 + cells[23].left) + 1) && (cells[24].value === (cells[24].top * 8 + cells[24].left) + 1) && (cells[25].value === (cells[25].top * 8 + cells[25].left) + 1) && (cells[26].value === (cells[26].top * 8 + cells[26].left) + 1) && (cells[27].value === (cells[27].top * 8 + cells[27].left) + 1) && (cells[28].value === (cells[28].top * 8 + cells[28].left) + 1) && (cells[29].value === (cells[29].top * 8 + cells[29].left) + 1) && (cells[30].value === (cells[30].top * 8 + cells[30].left) + 1) && (cells[31].value === (cells[31].top * 8 + cells[31].left) + 1) && (cells[32].value === (cells[32].top * 8 + cells[32].left) + 1) && (cells[33].value === (cells[33].top * 8 + cells[33].left) + 1) && (cells[34].value === (cells[34].top * 8 + cells[34].left) + 1) && (cells[35].value === (cells[35].top * 8 + cells[35].left) + 1) && (cells[36].value === (cells[36].top * 8 + cells[36].left) + 1) && (cells[37].value === (cells[37].top * 8 + cells[37].left) + 1) && (cells[38].value === (cells[38].top * 8 + cells[38].left) + 1) && (cells[39].value === (cells[39].top * 8 + cells[39].left) + 1) && (cells[40].value === (cells[40].top * 8 + cells[40].left) + 1) && (cells[41].value === (cells[41].top * 8 + cells[41].left) + 1) && (cells[42].value === (cells[42].top * 8 + cells[42].left) + 1) && (cells[43].value === (cells[43].top * 8 + cells[43].left) + 1) && (cells[44].value === (cells[44].top * 8 + cells[44].left) + 1) && (cells[45].value === (cells[45].top * 8 + cells[45].left) + 1) && (cells[46].value === (cells[46].top * 8 + cells[46].left) + 1) && (cells[47].value === (cells[47].top * 8 + cells[47].left) + 1) && (cells[48].value === (cells[48].top * 8 + cells[48].left) + 1) && (cells[49].value === (cells[49].top * 8 + cells[49].left) + 1) && (cells[50].value === (cells[50].top * 8 + cells[50].left) + 1) && (cells[51].value === (cells[51].top * 8 + cells[51].left) + 1) && (cells[52].value === (cells[52].top * 8 + cells[52].left) + 1) && (cells[53].value === (cells[53].top * 8 + cells[53].left) + 1) && (cells[54].value === (cells[54].top * 8 + cells[54].left) + 1) && (cells[55].value === (cells[55].top * 8 + cells[55].left) + 1) && (cells[56].value === (cells[56].top * 8 + cells[56].left) + 1) && (cells[57].value === (cells[57].top * 8 + cells[57].left) + 1) && (cells[58].value === (cells[58].top * 8 + cells[58].left) + 1) && (cells[59].value === (cells[59].top * 8 + cells[59].left) + 1) && (cells[60].value === (cells[60].top * 8 + cells[60].left) + 1) && (cells[61].value === (cells[61].top * 8 + cells[61].left) + 1) && (cells[62].value === (cells[62].top * 8 + cells[62].left) + 1) && (cells[63].value === (cells[63].top * 8 + cells[63].left) + 1)) {
            recordsArray.push(this.stepsCounter)
            localStorage.setItem(recordsArray.indexOf(recordsArray[recordsArray.length - 1]) + 1, this.stepsCounter)
            setTimeout(() => {
                alert(`Ура! Вы решили головоломку 8x8 за 0${Math.floor(seconds / 60)}:${seconds % 60} и ${this.stepsCounter} ходов! Ваш рекорд добавлен. Перезагрузите страницу, чтобы посмотреть рекорд.`)
            }, 1000)
            setTimeout(() => {
                this.newGame()
            }, 1000)
        }
    }

    createField() {
        const body = document.querySelector('body')
        const field = document.createElement('div')
        const newGame = document.createElement('button')
        const advanced = document.createElement('div')
        const advancedTwo = document.createElement('div')
        const advancedThree = document.createElement('div')
        const time = document.createElement('p')
        const steps = document.createElement('p')
        const autowin = document.createElement('button')
        const muteSound = document.createElement('button')
        const audio = document.createElement('audio')
        const three = document.createElement('button')
        const four = document.createElement('button')
        const five = document.createElement('button')
        const six = document.createElement('button')
        const seven = document.createElement('button')
        const eight = document.createElement('button')
        const picturesOrDigits = document.createElement('button')
        const raiting = document.createElement('button')
        const raitingModule = document.createElement('div')
        const raitingModuleBack = document.createElement('button')
        const pRaiting = document.createElement('p')
        const records = document.createElement('div')
        const raitingModuleReset = document.createElement('button')
     
        recordsArray.forEach(el => {
            const record = document.createElement('p')
            record.textContent = `${recordsArray.indexOf(el) + 1}. ${el} steps`
            record.className = `record ${recordsArray.indexOf(el)}`
            records.append(record)
        })

        audio.id = 'cells'
        audio.src = './assets/button28.wav'
        field.className = 'field'
        newGame.className = 'new-game'
        newGame.textContent = 'New game'
        advanced.className = 'advanced'
        advancedTwo.className = 'advanced-two'
        advancedThree.className = 'advanced-three'
        time.textContent = `time: `
        time.className = 'time'
        steps.className = 'steps'
        steps.textContent = `steps 0`
        autowin.className = 'auto-win'
        autowin.textContent = 'Auto win'
        muteSound.className = 'mute-sound'
        muteSound.textContent = 'Mute sound'
        picturesOrDigits.className = 'pictures-or-digits'
        picturesOrDigits.textContent = 'Digits On'
        raiting.className = 'raiting'
        raiting.textContent = 'Raiting'
        raitingModule.className = 'raiting-module'
        raitingModuleBack.className = 'raiting-module-back'
        raitingModuleBack.textContent = 'Back'
        raitingModuleReset.className = 'raiting-module-reset'
        raitingModuleReset.textContent = 'Reset'
        pRaiting.className = 'p-raiting'
        pRaiting.textContent = 'Raiting:'
        records.className = 'records'

        three.className = 'three'
        three.textContent = '3x3'
        four.className = 'four'
        four.textContent = '4x4'
        five.textContent = `5x5`
        five.className = 'five'
        six.className = 'six'
        six.textContent = `6x6`
        seven.className = 'seven'
        seven.textContent = '7x7'
        eight.className = 'eight'
        eight.textContent = '8x8'

        body.append(audio)
        body.append(raitingModule)
        advanced.append(muteSound)
        advanced.append(picturesOrDigits)
        advanced.append(newGame)
        advanced.append(autowin)
        advanced.append(time)
        advanced.append(steps)
        advancedTwo.append(three)
        advancedTwo.append(four)
        advancedTwo.append(five)
        advancedTwo.append(six)
        advancedTwo.append(seven)
        advancedTwo.append(eight)
        advancedThree.append(raiting)
        raitingModule.append(raitingModuleBack)
        raitingModule.append(raitingModuleReset)
        raitingModule.append(pRaiting)
        raitingModule.append(records)
        body.append(advanced)
        body.append(advancedTwo)
        body.append(advancedThree)
        body.append(field)

        document.querySelector("body > div.field").style.width = "32rem"
        document.querySelector("body > div.field").style.height = "32rem"

        newGame.addEventListener('click', () => {
            this.newGame()
            document.querySelector("body > div.field").style.width = "32rem"
            document.querySelector("body > div.field").style.height = "32rem"
        })

        raitingModuleReset.addEventListener('click', () => {
            localStorage.clear()
            recordsArray = []
            document.querySelector("body > div.raiting-module > div").remove()

        })

        muteSound.addEventListener('click', () => {
            muteSound.classList.toggle('selected')
            if (muteSound.textContent === 'Mute sound') {
                this.soundMuted = !this.soundMuted
                muteSound.textContent = 'Unmute sound'
            } else if (muteSound.textContent === 'Unmute sound') {
                muteSound.textContent = 'Mute sound'
                this.soundMuted = !this.soundMuted
            }
        })

        picturesOrDigits.addEventListener('click', () => {
            picturesOrDigits.classList.toggle('selected')
            if (picturesOrDigits.textContent === 'Digits On') {
                picturesOrDigits.textContent = 'Digits Off'
                savedDivs.forEach(div => { div.style.color = 'rgba(255, 255, 255, 0.5)' })
            } else if (picturesOrDigits.textContent === 'Digits Off') {
                savedDivs.forEach(div => { div.style.color = 'rgba(255, 255, 255, 0)' })
                picturesOrDigits.textContent = 'Digits On'
            }
        })

        raiting.addEventListener('click', () => {
            document.querySelector("body > div.raiting-module").style.top = '0rem'
        })

        raitingModuleBack.addEventListener('click', () => {
            document.querySelector("body > div.raiting-module").style.top = '-44.5rem'
        })

        three.addEventListener('click', () => {
            localStorage.removeItem('cells')
            emptyLeft = 0
            emptyTop = 0
            empty.left = 0
            empty.top = 0
            empty.value = 0
            field.remove();
            document.querySelector(".raiting-module").remove()
            document.querySelector(".new-game").remove()
            document.querySelector(".auto-win").remove()
            document.querySelector(".time").remove()
            document.querySelector(".steps").remove()
            document.querySelector(".advanced").remove()
            document.querySelector(".advanced-two").remove()
            document.querySelector(".advanced-three").remove()
            document.querySelector("#cells").remove()
            cells = []
            cells.push(empty)
            this.createField()
            document.querySelector("body > div.advanced-two > button.three").classList.toggle('selected')
            document.querySelector("body > div.field").style.width = "32rem"
            document.querySelector("body > div.field").style.height = "32rem"
            this.initThree()
            this.dragAndDrop()
            this.stepsCounter = 0
            seconds = 0
            this.timer()
        })

        four.addEventListener('click', () => {
            localStorage.removeItem('cells')
            emptyLeft = 0
            emptyTop = 0
            empty.left = 0
            empty.top = 0
            empty.value = 0
            field.remove();
            document.querySelector(".raiting-module").remove()
            document.querySelector(".new-game").remove()
            document.querySelector(".auto-win").remove()
            document.querySelector(".time").remove()
            document.querySelector(".steps").remove()
            document.querySelector(".advanced").remove()
            document.querySelector(".advanced-two").remove()
            document.querySelector(".advanced-three").remove()
            document.querySelector("#cells").remove()
            cells = []
            cells.push(empty)
            this.createField()
            document.querySelector("body > div.advanced-two > button.four").classList.toggle('selected')
            document.querySelector("body > div.field").style.width = "32rem"
            document.querySelector("body > div.field").style.height = "32rem"
            this.init()
            this.dragAndDrop()
            this.stepsCounter = 0
            seconds = 0
            this.timer()
        })

        five.addEventListener('click', () => {
            localStorage.removeItem('cells')
            emptyLeft = 0
            emptyTop = 0
            empty.left = 0
            empty.top = 0
            empty.value = 0
            field.remove();
            document.querySelector(".raiting-module").remove()
            document.querySelector(".new-game").remove()
            document.querySelector(".auto-win").remove()
            document.querySelector(".time").remove()
            document.querySelector(".steps").remove()
            document.querySelector(".advanced").remove()
            document.querySelector(".advanced-two").remove()
            document.querySelector(".advanced-three").remove()
            document.querySelector("#cells").remove()
            cells = []
            cells.push(empty)
            this.createField()
            document.querySelector("body > div.advanced-two > button.five").classList.toggle('selected')
            document.querySelector("body > div.field").style.width = "32rem"
            document.querySelector("body > div.field").style.height = "32rem"
            this.initFive()
            this.dragAndDrop()
            this.stepsCounter = 0
            seconds = 0
            this.timer()
        })

        six.addEventListener('click', () => {
            localStorage.removeItem('cells')
            emptyLeft = 0
            emptyTop = 0
            empty.left = 0
            empty.top = 0
            empty.value = 0
            field.remove();
            document.querySelector(".raiting-module").remove()
            document.querySelector(".new-game").remove()
            document.querySelector(".auto-win").remove()
            document.querySelector(".time").remove()
            document.querySelector(".steps").remove()
            document.querySelector(".advanced").remove()
            document.querySelector(".advanced-two").remove()
            document.querySelector(".advanced-three").remove()
            document.querySelector("#cells").remove()
            cells = []
            cells.push(empty)
            this.createField()
            document.querySelector("body > div.advanced-two > button.six").classList.toggle('selected')
            document.querySelector("body > div.field").style.width = "32rem"
            document.querySelector("body > div.field").style.height = "32rem"
            this.initSix()
            this.dragAndDrop()
            this.stepsCounter = 0
            seconds = 0
            this.timer()
        })

        seven.addEventListener('click', () => {
            localStorage.removeItem('cells')
            emptyLeft = 0
            emptyTop = 0
            empty.left = 0
            empty.top = 0
            empty.value = 0
            field.remove();
            document.querySelector(".raiting-module").remove()
            document.querySelector(".new-game").remove()
            document.querySelector(".auto-win").remove()
            document.querySelector(".time").remove()
            document.querySelector(".steps").remove()
            document.querySelector(".advanced").remove()
            document.querySelector(".advanced-two").remove()
            document.querySelector(".advanced-three").remove()
            document.querySelector("#cells").remove()
            cells = []
            cells.push(empty)
            this.createField()
            document.querySelector("body > div.advanced-two > button.seven").classList.toggle('selected')
            document.querySelector("body > div.field").style.width = "32rem"
            document.querySelector("body > div.field").style.height = "32rem"
            this.initSeven()
            this.dragAndDrop()
            this.stepsCounter = 0
            seconds = 0
            this.timer()
        })

        eight.addEventListener('click', () => {
            localStorage.removeItem('cells')
            emptyLeft = 0
            emptyTop = 0
            empty.left = 0
            empty.top = 0
            empty.value = 0
            field.remove();
            document.querySelector(".raiting-module").remove()
            document.querySelector(".new-game").remove()
            document.querySelector(".auto-win").remove()
            document.querySelector(".time").remove()
            document.querySelector(".steps").remove()
            document.querySelector(".advanced").remove()
            document.querySelector(".advanced-two").remove()
            document.querySelector(".advanced-three").remove()
            document.querySelector("#cells").remove()
            cells = []
            cells.push(empty)
            this.createField()
            document.querySelector("body > div.advanced-two > button.eight").classList.toggle('selected')
            document.querySelector("body > div.field").style.width = "32rem"
            document.querySelector("body > div.field").style.height = "32rem"
            this.initEight()
            this.dragAndDrop()
            this.stepsCounter = 0
            seconds = 0
            this.timer()
        })
    }

    init() {
        if (localStorage.getItem('cells') === null) {
            const numbers = [...Array(15).keys()]
                .sort(() => Math.random() - 0.5)
            const field = document.querySelector('.field')
            pictures.sort(() => Math.random() - 0.5)
            for (let i = 1; i <= 15; i += 1) {
                const cell = document.createElement('div')
                const value = numbers[i - 1] + 1
                cell.className = 'cell'
                cell.draggable = 'true'
                cell.style.width = '8rem'
                cell.style.height = '8rem'
                cell.id = i
                cell.textContent = numbers[i - 1] + 1
                if (cell.textContent === '1') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 0% 0%`

                } else if (cell.textContent === '2') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 33% 0%`
                } else if (cell.textContent === '3') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 66% 0%`
                } else if (cell.textContent === '4') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 100% 0%`
                } else if (cell.textContent === '5') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 0% 33%`
                } else if (cell.textContent === '6') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 33% 33%`
                } else if (cell.textContent === '7') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 66% 33%`
                } else if (cell.textContent === '8') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 100% 33%`
                } else if (cell.textContent === '9') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 0% 66%`
                } else if (cell.textContent === '10') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 33% 66%`
                } else if (cell.textContent === '11') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 66% 66%`
                } else if (cell.textContent === '12') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 100% 66%`
                } else if (cell.textContent === '13') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 0% 100%`
                } else if (cell.textContent === '14') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 33% 100%`
                } else if (cell.textContent === '15') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 66% 100%`
                }
                const left = i % 4
                const top = (i - left) / 4

                cells.push({
                    value,
                    left,
                    top,
                    element: cell
                })

                cell.style.top = `${top * this.cellSize}px`
                cell.style.left = `${left * this.cellSize}px`

                field.append(cell)

                cell.addEventListener('mouseup', () => {
                    if (this.soundMuted === false) {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                        audioKeys.play()
                    } else {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                    }
                    this.move(i)
                })
            }

            localStorage.setItem('cells', JSON.stringify(cells))
            const cellsDivs = document.querySelectorAll('.cell')
            savedDivs = cellsDivs

        } else {
            const newCells = JSON.parse(localStorage.getItem('cells'))
            const field = document.querySelector('.field')
            for (let i = 1; i <= 15; i += 1) {
                const cell = document.createElement('div')
                const { value } = newCells[i]
                cell.className = 'cell'
                cell.draggable = 'true'
                cell.style.width = '8rem'
                cell.style.height = '8rem'
                cell.id = newCells[i].value
                cell.textContent = newCells[i].value
                if (cell.textContent === '1') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 0% 0%`

                } else if (cell.textContent === '2') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 33% 0%`
                } else if (cell.textContent === '3') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 66% 0%`
                } else if (cell.textContent === '4') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 100% 0%`
                } else if (cell.textContent === '5') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 0% 33%`
                } else if (cell.textContent === '6') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 33% 33%`
                } else if (cell.textContent === '7') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 66% 33%`
                } else if (cell.textContent === '8') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 100% 33%`
                } else if (cell.textContent === '9') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 0% 66%`
                } else if (cell.textContent === '10') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 33% 66%`
                } else if (cell.textContent === '11') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 66% 66%`
                } else if (cell.textContent === '12') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 100% 66%`
                } else if (cell.textContent === '13') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 0% 100%`
                } else if (cell.textContent === '14') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 33% 100%`
                } else if (cell.textContent === '15') {
                    cell.style.background = `url('assets/${pictures[4]}.png') 66% 100%`
                }

                const { left } = newCells[i]
                const { top } = newCells[i]

                cells.push({
                    value,
                    left,
                    top,
                    element: cell
                })

                cell.style.top = `${top * this.cellSize}px`
                cell.style.left = `${left * this.cellSize}px`

                field.append(cell)

                cell.addEventListener('mouseup', () => {
                    if (this.soundMuted === false) {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                        audioKeys.play()
                    } else {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                    }
                    this.move(i)
                })
            }

            const insertPositions = JSON.parse(localStorage.getItem('cells'))[0]

            empty = insertPositions

            this.insertAt(cells, 0, insertPositions)

            const cellsDivs = document.querySelectorAll('.cell')
            savedDivs = cellsDivs
        }
    }

    initThree() {
        if (localStorage.getItem('cells') === null) {
            const numbers = [...Array(8).keys()]
                .sort(() => Math.random() - 0.5)
            const field = document.querySelector('.field')
            pictures.sort(() => Math.random() - 0.5)
            for (let i = 1; i <= 8; i += 1) {
                const cell = document.createElement('div')
                const value = numbers[i - 1] + 1
                const left = i % 3
                const top = (i - left) / 3
                cell.className = 'cell'
                cell.draggable = 'true'
                cell.style.width = '10.66rem'
                cell.style.height = '10.66rem'
                cell.id = i
                cell.textContent = numbers[i - 1] + 1
                if (cell.textContent === '1') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 0% 0%`

                } else if (cell.textContent === '2') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 50% 0%`
                } else if (cell.textContent === '3') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 100% 0%`
                } else if (cell.textContent === '4') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 0% 50%`
                } else if (cell.textContent === '5') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 50% 50%`
                } else if (cell.textContent === '6') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 100% 50%`
                } else if (cell.textContent === '7') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 0% 100%`
                } else if (cell.textContent === '8') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 50% 100%`
                }

                cells.push({
                    value,
                    left,
                    top,
                    element: cell
                })

                cell.style.top = `${top * this.cellSizeThree}px`
                cell.style.left = `${left * this.cellSizeThree}px`

                field.append(cell)

                cell.addEventListener('mouseup', () => {
                    if (this.soundMuted === false) {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                        audioKeys.play()
                    } else {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                    }
                    this.move(i)
                })
            }
            const cellsDivs = document.querySelectorAll('.cell')
            savedDivs = cellsDivs
            localStorage.setItem('cells', JSON.stringify(cells))
        } else {
            const newCells = JSON.parse(localStorage.getItem('cells'))
            const field = document.querySelector('.field')
            for (let i = 1; i <= 8; i += 1) {
                const cell = document.createElement('div')
                const { value } = newCells[i]
                const { left } = newCells[i]
                const { top } = newCells[i]
                cell.id = newCells[i].value
                cell.textContent = newCells[i].value
                cell.className = 'cell'
                cell.draggable = 'true'
                cell.style.width = '10.66rem'
                cell.style.height = '10.66rem'
                if (cell.textContent === '1') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 0% 0%`

                } else if (cell.textContent === '2') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 50% 0%`
                } else if (cell.textContent === '3') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 100% 0%`
                } else if (cell.textContent === '4') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 0% 50%`
                } else if (cell.textContent === '5') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 50% 50%`
                } else if (cell.textContent === '6') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 100% 50%`
                } else if (cell.textContent === '7') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 0% 100%`
                } else if (cell.textContent === '8') {
                    cell.style.background = `url('assets/${pictures[3]}.png') 50% 100%`
                }

                cells.push({
                    value,
                    left,
                    top,
                    element: cell
                })

                cell.style.top = `${top * this.cellSizeThree}px`
                cell.style.left = `${left * this.cellSizeThree}px`

                field.append(cell)

                cell.addEventListener('mouseup', () => {
                    if (this.soundMuted === false) {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                        audioKeys.play()
                    } else {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                    }
                    this.move(i)
                })
            }

            const insertPositions = JSON.parse(localStorage.getItem('cells'))[0]
            empty = insertPositions
            this.insertAt(cells, 0, insertPositions)
            const cellsDivs = document.querySelectorAll('.cell')
            savedDivs = cellsDivs
        }
    }

    initFive() {
        if (localStorage.getItem('cells') === null) {
            const numbers = [...Array(24).keys()]
                .sort(() => Math.random() - 0.5)
            const field = document.querySelector('.field')
            pictures.sort(() => Math.random() - 0.5)
            for (let i = 1; i <= 24; i += 1) {
                const cell = document.createElement('div')
                const value = numbers[i - 1] + 1
                cell.className = 'cell'
                cell.draggable = 'true'
                cell.style.width = '6.4rem'
                cell.style.height = '6.4rem'
                cell.style.fontSize = '2rem'
                cell.id = i
                cell.textContent = numbers[i - 1] + 1
                if (cell.textContent === '1') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 0% 0%`

                } else if (cell.textContent === '2') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 25% 0%`
                } else if (cell.textContent === '3') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 50% 0%`
                } else if (cell.textContent === '4') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 75% 0%`
                } else if (cell.textContent === '5') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 100% 0%`
                } else if (cell.textContent === '6') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 0% 25%`
                } else if (cell.textContent === '7') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 25% 25%`
                } else if (cell.textContent === '8') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 50% 25%`
                } else if (cell.textContent === '9') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 75% 25%`
                } else if (cell.textContent === '10') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 100% 25%`
                } else if (cell.textContent === '11') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 0% 50%`
                } else if (cell.textContent === '12') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 25% 50%`
                } else if (cell.textContent === '13') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 50% 50%`
                } else if (cell.textContent === '14') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 75% 50%`
                } else if (cell.textContent === '15') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 100% 50%`
                } else if (cell.textContent === '16') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 0% 75%`
                } else if (cell.textContent === '17') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 25% 75%`
                } else if (cell.textContent === '18') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 50% 75%`
                } else if (cell.textContent === '19') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 75% 75%`
                } else if (cell.textContent === '20') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 100% 75%`
                } else if (cell.textContent === '21') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 0% 100%`
                } else if (cell.textContent === '22') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 25% 100%`
                } else if (cell.textContent === '23') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 50% 100%`
                } else if (cell.textContent === '24') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 75% 100%`
                }

                const left = i % 5
                const top = (i - left) / 5

                cells.push({
                    value,
                    left,
                    top,
                    element: cell
                })

                cell.style.top = `${top * this.cellSizeFive}px`
                cell.style.left = `${left * this.cellSizeFive}px`

                field.append(cell)

                cell.addEventListener('mouseup', () => {
                    if (this.soundMuted === false) {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                        audioKeys.play()
                    } else {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                    }
                    this.move(i)
                })
            }
            const cellsDivs = document.querySelectorAll('.cell')
            savedDivs = cellsDivs
            localStorage.setItem('cells', JSON.stringify(cells))
        } else {
            const newCells = JSON.parse(localStorage.getItem('cells'))
            const field = document.querySelector('.field')
            for (let i = 1; i <= 24; i += 1) {
                const cell = document.createElement('div')
                const { value } = newCells[i]
                const { left } = newCells[i]
                const { top } = newCells[i]
                cell.id = newCells[i].value
                cell.textContent = newCells[i].value
                cell.className = 'cell'
                cell.draggable = 'true'
                cell.style.width = '6.4rem'
                cell.style.height = '6.4rem'
                cell.style.fontSize = '2rem'

                if (cell.textContent === '1') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 0% 0%`
                } else if (cell.textContent === '2') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 25% 0%`
                } else if (cell.textContent === '3') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 50% 0%`
                } else if (cell.textContent === '4') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 75% 0%`
                } else if (cell.textContent === '5') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 100% 0%`
                } else if (cell.textContent === '6') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 0% 25%`
                } else if (cell.textContent === '7') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 25% 25%`
                } else if (cell.textContent === '8') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 50% 25%`
                } else if (cell.textContent === '9') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 75% 25%`
                } else if (cell.textContent === '10') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 100% 25%`
                } else if (cell.textContent === '11') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 0% 50%`
                } else if (cell.textContent === '12') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 25% 50%`
                } else if (cell.textContent === '13') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 50% 50%`
                } else if (cell.textContent === '14') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 75% 50%`
                } else if (cell.textContent === '15') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 100% 50%`
                } else if (cell.textContent === '16') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 0% 75%`
                } else if (cell.textContent === '17') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 25% 75%`
                } else if (cell.textContent === '18') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 50% 75%`
                } else if (cell.textContent === '19') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 75% 75%`
                } else if (cell.textContent === '20') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 100% 75%`
                } else if (cell.textContent === '21') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 0% 100%`
                } else if (cell.textContent === '22') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 25% 100%`
                } else if (cell.textContent === '23') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 50% 100%`
                } else if (cell.textContent === '24') {
                    cell.style.background = `url('assets/${pictures[5]}.png') 75% 100%`
                }

                cells.push({
                    value,
                    left,
                    top,
                    element: cell
                })

                cell.style.top = `${top * this.cellSizeFive}px`
                cell.style.left = `${left * this.cellSizeFive}px`

                field.append(cell)

                cell.addEventListener('mouseup', () => {
                    if (this.soundMuted === false) {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                        audioKeys.play()
                    } else {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                    }
                    this.move(i)
                })
            }

            const insertPositions = JSON.parse(localStorage.getItem('cells'))[0]
            empty = insertPositions
            this.insertAt(cells, 0, insertPositions)
            const cellsDivs = document.querySelectorAll('.cell')
            savedDivs = cellsDivs
        }
    }

    initSix() {
        if (localStorage.getItem('cells') === null) {
            const numbers = [...Array(35).keys()]
                .sort(() => Math.random() - 0.5)
            const field = document.querySelector('.field')
            pictures.sort(() => Math.random() - 0.5)
            for (let i = 1; i <= 35; i += 1) {
                const cell = document.createElement('div')
                const value = numbers[i - 1] + 1
                cell.className = 'cell'
                cell.draggable = 'true'
                cell.style.width = '5.33rem'
                cell.style.height = '5.33rem'
                cell.style.fontSize = '2rem'

                cell.id = i
                cell.textContent = numbers[i - 1] + 1

                if (cell.textContent === '1') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 0% 0%`
                } else if (cell.textContent === '2') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 20% 0%`
                } else if (cell.textContent === '3') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 40% 0%`
                } else if (cell.textContent === '4') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 60% 0%`
                } else if (cell.textContent === '5') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 80% 0%`
                } else if (cell.textContent === '6') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 100% 0%`
                } else if (cell.textContent === '7') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 0% 20%`
                } else if (cell.textContent === '8') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 20% 20%`
                } else if (cell.textContent === '9') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 40% 20%`
                } else if (cell.textContent === '10') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 60% 20%`
                } else if (cell.textContent === '11') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 80% 20%`
                } else if (cell.textContent === '12') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 100% 20%`
                } else if (cell.textContent === '13') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 0% 40%`
                } else if (cell.textContent === '14') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 20% 40%`
                } else if (cell.textContent === '15') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 40% 40%`
                } else if (cell.textContent === '16') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 60% 40%`
                } else if (cell.textContent === '17') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 80% 40%`
                } else if (cell.textContent === '18') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 100% 40%`
                } else if (cell.textContent === '19') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 0% 60%`
                } else if (cell.textContent === '20') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 20% 60%`
                } else if (cell.textContent === '21') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 40% 60%`
                } else if (cell.textContent === '22') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 60% 60%`
                } else if (cell.textContent === '23') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 80% 60%`
                } else if (cell.textContent === '24') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 100% 60%`
                } else if (cell.textContent === '25') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 0% 80%`
                } else if (cell.textContent === '26') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 20% 80%`
                } else if (cell.textContent === '27') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 40% 80%`
                } else if (cell.textContent === '28') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 60% 80%`
                } else if (cell.textContent === '29') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 80% 80%`
                } else if (cell.textContent === '30') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 100% 80%`
                } else if (cell.textContent === '31') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 0% 100%`
                } else if (cell.textContent === '32') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 20% 100%`
                } else if (cell.textContent === '33') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 40% 100%`
                } else if (cell.textContent === '34') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 60% 100%`
                } else if (cell.textContent === '35') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 80% 100%`
                }

                const left = i % 6
                const top = (i - left) / 6

                cells.push({
                    value,
                    left,
                    top,
                    element: cell
                })

                cell.style.top = `${top * this.cellSizeSix}px`
                cell.style.left = `${left * this.cellSizeSix}px`

                field.append(cell)

                cell.addEventListener('mouseup', () => {
                    if (this.soundMuted === false) {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                        audioKeys.play()
                    } else {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                    }
                    this.move(i)
                })
            }
            localStorage.setItem('cells', JSON.stringify(cells))
            const cellsDivs = document.querySelectorAll('.cell')
            savedDivs = cellsDivs
        } else {
            const newCells = JSON.parse(localStorage.getItem('cells'))
            const field = document.querySelector('.field')
            for (let i = 1; i <= 35; i += 1) {
                const cell = document.createElement('div')
                const { value } = newCells[i]
                const { left } = newCells[i]
                const { top } = newCells[i]
                cell.id = newCells[i].value
                cell.textContent = newCells[i].value
                cell.className = 'cell'
                cell.draggable = 'true'
                cell.style.width = '5.33rem'
                cell.style.height = '5.33rem'
                cell.style.fontSize = '2rem'

                if (cell.textContent === '1') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 0% 0%`
                } else if (cell.textContent === '2') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 20% 0%`
                } else if (cell.textContent === '3') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 40% 0%`
                } else if (cell.textContent === '4') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 60% 0%`
                } else if (cell.textContent === '5') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 80% 0%`
                } else if (cell.textContent === '6') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 100% 0%`
                } else if (cell.textContent === '7') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 0% 20%`
                } else if (cell.textContent === '8') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 20% 20%`
                } else if (cell.textContent === '9') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 40% 20%`
                } else if (cell.textContent === '10') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 60% 20%`
                } else if (cell.textContent === '11') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 80% 20%`
                } else if (cell.textContent === '12') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 100% 20%`
                } else if (cell.textContent === '13') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 0% 40%`
                } else if (cell.textContent === '14') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 20% 40%`
                } else if (cell.textContent === '15') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 40% 40%`
                } else if (cell.textContent === '16') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 60% 40%`
                } else if (cell.textContent === '17') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 80% 40%`
                } else if (cell.textContent === '18') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 100% 40%`
                } else if (cell.textContent === '19') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 0% 60%`
                } else if (cell.textContent === '20') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 20% 60%`
                } else if (cell.textContent === '21') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 40% 60%`
                } else if (cell.textContent === '22') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 60% 60%`
                } else if (cell.textContent === '23') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 80% 60%`
                } else if (cell.textContent === '24') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 100% 60%`
                } else if (cell.textContent === '25') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 0% 80%`
                } else if (cell.textContent === '26') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 20% 80%`
                } else if (cell.textContent === '27') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 40% 80%`
                } else if (cell.textContent === '28') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 60% 80%`
                } else if (cell.textContent === '29') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 80% 80%`
                } else if (cell.textContent === '30') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 100% 80%`
                } else if (cell.textContent === '31') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 0% 100%`
                } else if (cell.textContent === '32') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 20% 100%`
                } else if (cell.textContent === '33') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 40% 100%`
                } else if (cell.textContent === '34') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 60% 100%`
                } else if (cell.textContent === '35') {
                    cell.style.background = `url('assets/${pictures[6]}.png') 80% 100%`
                }

                cells.push({
                    value,
                    left,
                    top,
                    element: cell
                })

                cell.style.top = `${top * this.cellSizeSix}px`
                cell.style.left = `${left * this.cellSizeSix}px`

                field.append(cell)

                cell.addEventListener('mouseup', () => {
                    if (this.soundMuted === false) {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                        audioKeys.play()
                    } else {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                    }
                    this.move(i)
                })
            }

            const insertPositions = JSON.parse(localStorage.getItem('cells'))[0]
            empty = insertPositions
            this.insertAt(cells, 0, insertPositions)
            const cellsDivs = document.querySelectorAll('.cell')
            savedDivs = cellsDivs
        }
    }

    initSeven() {
        if (localStorage.getItem('cells') === null) {
            const numbers = [...Array(48).keys()]
                .sort(() => Math.random() - 0.5)
            const field = document.querySelector('.field')
            pictures.sort(() => Math.random() - 0.5)
            for (let i = 1; i <= 48; i += 1) {
                const cell = document.createElement('div')
                const value = numbers[i - 1] + 1
                cell.className = 'cell'
                cell.draggable = 'true'
                cell.style.width = '4.5714rem'
                cell.style.height = '4.5714rem'
                cell.style.fontSize = '1.6rem'
                cell.id = i
                cell.textContent = numbers[i - 1] + 1

                if (cell.textContent === '1') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 0% 0%`
                } else if (cell.textContent === '2') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 16.66% 0%`
                } else if (cell.textContent === '3') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 33.33% 0%`
                } else if (cell.textContent === '4') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 49.99% 0%`
                } else if (cell.textContent === '5') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 66.66% 0%`
                } else if (cell.textContent === '6') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 83.33% 0%`
                } else if (cell.textContent === '7') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 100% 0%`
                } else if (cell.textContent === '8') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 0% 16.66%`

                } else if (cell.textContent === '9') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 16.66% 16.66%`
                } else if (cell.textContent === '10') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 33.33% 16.66%`
                } else if (cell.textContent === '11') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 49.99% 16.66%`
                } else if (cell.textContent === '12') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 66.66% 16.66%`
                } else if (cell.textContent === '13') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 83.33% 16.66%`
                } else if (cell.textContent === '14') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 100% 16.66%`
                } else if (cell.textContent === '15') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 0% 33.33%`
                } else if (cell.textContent === '16') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 16.66% 33.33%`
                } else if (cell.textContent === '17') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 33.33% 33.33%`
                } else if (cell.textContent === '18') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 49.99% 33.33%`
                } else if (cell.textContent === '19') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 66.66% 33.33%`
                } else if (cell.textContent === '20') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 83.33% 33.33%`
                } else if (cell.textContent === '21') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 100% 33.33%`
                } else if (cell.textContent === '22') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 0% 49.99%`
                } else if (cell.textContent === '23') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 16.66% 49.99%`
                } else if (cell.textContent === '24') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 33.33% 49.99%`
                } else if (cell.textContent === '25') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 49.99% 49.99%`
                } else if (cell.textContent === '26') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 66.66% 49.99%`
                } else if (cell.textContent === '27') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 83.33% 49.99%`
                } else if (cell.textContent === '28') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 100% 49.99%`
                } else if (cell.textContent === '29') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 0% 66.66%`
                } else if (cell.textContent === '30') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 16.66% 66.66%`
                } else if (cell.textContent === '31') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 33.33% 66.66%`
                } else if (cell.textContent === '32') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 49.99% 66.66%`
                } else if (cell.textContent === '33') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 66.66% 66.66%`
                } else if (cell.textContent === '34') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 83.33% 66.66%`
                } else if (cell.textContent === '35') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 100% 66.66%`
                } else if (cell.textContent === '36') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 0% 83.33%`
                } else if (cell.textContent === '37') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 16.66% 83.33%`
                } else if (cell.textContent === '38') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 33.33% 83.33%`
                } else if (cell.textContent === '39') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 49.99% 83.33%`
                } else if (cell.textContent === '40') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 66.66% 83.33%`
                } else if (cell.textContent === '41') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 83.33% 83.33%`
                } else if (cell.textContent === '42') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 100% 83.33%`
                } else if (cell.textContent === '43') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 0% 100%`
                } else if (cell.textContent === '44') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 16.66% 100%`
                } else if (cell.textContent === '45') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 33.33% 100%`
                } else if (cell.textContent === '46') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 49.99% 100%`
                } else if (cell.textContent === '47') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 66.66% 100%`
                } else if (cell.textContent === '48') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 83.33% 100%`
                }

                const left = i % 7
                const top = (i - left) / 7

                cells.push({
                    value,
                    left,
                    top,
                    element: cell
                })

                cell.style.top = `${top * this.cellSizeSeven}px`
                cell.style.left = `${left * this.cellSizeSeven}px`

                field.append(cell)

                cell.addEventListener('mouseup', () => {
                    if (this.soundMuted === false) {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                        audioKeys.play()
                    } else {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                    }
                    this.move(i)
                })
            }
            const cellsDivs = document.querySelectorAll('.cell')
            savedDivs = cellsDivs
            localStorage.setItem('cells', JSON.stringify(cells))
        } else {
            const newCells = JSON.parse(localStorage.getItem('cells'))
            const field = document.querySelector('.field')
            for (let i = 1; i <= 48; i += 1) {
                const cell = document.createElement('div')
                const { value } = newCells[i]
                const { left } = newCells[i]
                const { top } = newCells[i]
                cell.id = newCells[i].value
                cell.textContent = newCells[i].value
                cell.className = 'cell'
                cell.draggable = 'true'
                cell.style.width = '4.5714rem'
                cell.style.height = '4.5714rem'
                cell.style.fontSize = '1.6rem'
                if (cell.textContent === '1') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 0% 0%`
                } else if (cell.textContent === '2') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 16.66% 0%`
                } else if (cell.textContent === '3') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 33.33% 0%`
                } else if (cell.textContent === '4') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 49.99% 0%`
                } else if (cell.textContent === '5') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 66.66% 0%`
                } else if (cell.textContent === '6') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 83.33% 0%`
                } else if (cell.textContent === '7') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 100% 0%`
                } else if (cell.textContent === '8') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 0% 16.66%`
                } else if (cell.textContent === '9') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 16.66% 16.66%`
                } else if (cell.textContent === '10') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 33.33% 16.66%`
                } else if (cell.textContent === '11') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 49.99% 16.66%`
                } else if (cell.textContent === '12') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 66.66% 16.66%`
                } else if (cell.textContent === '13') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 83.33% 16.66%`
                } else if (cell.textContent === '14') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 100% 16.66%`
                } else if (cell.textContent === '15') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 0% 33.33%`
                } else if (cell.textContent === '16') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 16.66% 33.33%`
                } else if (cell.textContent === '17') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 33.33% 33.33%`
                } else if (cell.textContent === '18') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 49.99% 33.33%`
                } else if (cell.textContent === '19') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 66.66% 33.33%`
                } else if (cell.textContent === '20') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 83.33% 33.33%`
                } else if (cell.textContent === '21') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 100% 33.33%`
                } else if (cell.textContent === '22') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 0% 49.99%`
                } else if (cell.textContent === '23') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 16.66% 49.99%`
                } else if (cell.textContent === '24') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 33.33% 49.99%`
                } else if (cell.textContent === '25') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 49.99% 49.99%`
                } else if (cell.textContent === '26') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 66.66% 49.99%`
                } else if (cell.textContent === '27') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 83.33% 49.99%`
                } else if (cell.textContent === '28') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 100% 49.99%`
                } else if (cell.textContent === '29') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 0% 66.66%`
                } else if (cell.textContent === '30') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 16.66% 66.66%`
                } else if (cell.textContent === '31') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 33.33% 66.66%`
                } else if (cell.textContent === '32') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 49.99% 66.66%`
                } else if (cell.textContent === '33') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 66.66% 66.66%`
                } else if (cell.textContent === '34') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 83.33% 66.66%`
                } else if (cell.textContent === '35') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 100% 66.66%`
                } else if (cell.textContent === '36') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 0% 83.33%`
                } else if (cell.textContent === '37') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 16.66% 83.33%`
                } else if (cell.textContent === '38') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 33.33% 83.33%`
                } else if (cell.textContent === '39') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 49.99% 83.33%`
                } else if (cell.textContent === '40') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 66.66% 83.33%`
                } else if (cell.textContent === '41') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 83.33% 83.33%`
                } else if (cell.textContent === '42') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 100% 83.33%`
                } else if (cell.textContent === '43') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 0% 100%`
                } else if (cell.textContent === '44') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 16.66% 100%`
                } else if (cell.textContent === '45') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 33.33% 100%`
                } else if (cell.textContent === '46') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 49.99% 100%`
                } else if (cell.textContent === '47') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 66.66% 100%`
                } else if (cell.textContent === '48') {
                    cell.style.background = `url('assets/${pictures[7]}.png') 83.33% 100%`
                }

                cells.push({
                    value,
                    left,
                    top,
                    element: cell
                })

                cell.style.top = `${top * this.cellSizeSeven}px`
                cell.style.left = `${left * this.cellSizeSeven}px`

                field.append(cell)

                cell.addEventListener('mouseup', () => {
                    if (this.soundMuted === false) {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                        audioKeys.play()
                    } else {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                    }
                    this.move(i)
                })
            }

            const insertPositions = JSON.parse(localStorage.getItem('cells'))[0]
            empty = insertPositions
            this.insertAt(cells, 0, insertPositions)
            const cellsDivs = document.querySelectorAll('.cell')
            savedDivs = cellsDivs
        }
    }

    initEight() {
        if (localStorage.getItem('cells') === null) {
            const numbers = [...Array(63).keys()]
                .sort(() => Math.random() - 0.5)
            const field = document.querySelector('.field')
            pictures.sort(() => Math.random() - 0.5)
            for (let i = 1; i <= 63; i += 1) {
                const cell = document.createElement('div')
                const value = numbers[i - 1] + 1
                cell.className = 'cell'
                cell.draggable = 'true'
                cell.style.width = '4rem'
                cell.style.height = '4rem'
                cell.style.fontSize = '1.4rem'
                cell.id = i
                cell.textContent = numbers[i - 1] + 1

                if (cell.textContent === '1') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 0%`
                } else if (cell.textContent === '2') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 0%`
                } else if (cell.textContent === '3') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 0%`
                } else if (cell.textContent === '4') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 0%`
                } else if (cell.textContent === '5') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 0%`
                } else if (cell.textContent === '6') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 0%`
                } else if (cell.textContent === '7') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 0%`
                } else if (cell.textContent === '8') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 100% 16.66%`
                } else if (cell.textContent === '9') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 0%`
                } else if (cell.textContent === '10') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 14.285%`
                } else if (cell.textContent === '11') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 14.285%`
                } else if (cell.textContent === '12') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 14.285%`
                } else if (cell.textContent === '13') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 14.285%`
                } else if (cell.textContent === '14') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 14.285%`
                } else if (cell.textContent === '15') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 14.285%`
                } else if (cell.textContent === '16') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 100% 14.285%`
                } else if (cell.textContent === '17') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 28.571%`
                } else if (cell.textContent === '18') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 28.571%`
                } else if (cell.textContent === '19') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 28.571%`
                } else if (cell.textContent === '20') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 28.571%`
                } else if (cell.textContent === '21') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 28.571%`
                } else if (cell.textContent === '22') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 28.571%`
                } else if (cell.textContent === '23') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 28.571%`
                } else if (cell.textContent === '24') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 100% 28.571%`
                } else if (cell.textContent === '25') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 42.857%`
                } else if (cell.textContent === '26') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 42.857%`
                } else if (cell.textContent === '27') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 42.857%`
                } else if (cell.textContent === '28') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 42.857%`
                } else if (cell.textContent === '29') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 42.857%`
                } else if (cell.textContent === '30') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 42.857%`
                } else if (cell.textContent === '31') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 42.857%`
                } else if (cell.textContent === '32') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 100% 42.857%`
                } else if (cell.textContent === '33') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 57.142%`
                } else if (cell.textContent === '34') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 57.142%`
                } else if (cell.textContent === '35') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 57.142%`
                } else if (cell.textContent === '36') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 57.142%`
                } else if (cell.textContent === '37') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 57.142%`
                } else if (cell.textContent === '38') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 57.142%`
                } else if (cell.textContent === '39') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 57.142%`
                } else if (cell.textContent === '40') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 100% 57.142%`
                } else if (cell.textContent === '41') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 71.428%`
                } else if (cell.textContent === '42') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 71.428%`
                } else if (cell.textContent === '43') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 71.428%`
                } else if (cell.textContent === '44') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 71.428%`
                } else if (cell.textContent === '45') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 71.428%`
                } else if (cell.textContent === '46') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 71.428%`
                } else if (cell.textContent === '47') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 71.428%`
                } else if (cell.textContent === '48') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 100% 71.428%`
                } else if (cell.textContent === '49') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 85.714%`
                } else if (cell.textContent === '50') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 85.714%`
                } else if (cell.textContent === '51') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 85.714%`
                } else if (cell.textContent === '52') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 85.714%`
                } else if (cell.textContent === '53') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 85.714%`
                } else if (cell.textContent === '54') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 85.714%`
                } else if (cell.textContent === '55') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 85.714%`
                } else if (cell.textContent === '56') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 100% 85.714%`
                } else if (cell.textContent === '57') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 100%`
                } else if (cell.textContent === '58') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 100%`
                } else if (cell.textContent === '59') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 100%`
                } else if (cell.textContent === '60') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 100%`
                } else if (cell.textContent === '61') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 100%`
                } else if (cell.textContent === '62') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 100%`
                } else if (cell.textContent === '63') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 100%`
                }

                const left = i % 8
                const top = (i - left) / 8

                cells.push({
                    value,
                    left,
                    top,
                    element: cell
                })

                cell.style.top = `${top * this.cellSizeEight}px`
                cell.style.left = `${left * this.cellSizeEight}px`

                field.append(cell)

                cell.addEventListener('mouseup', () => {
                    if (this.soundMuted === false) {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                        audioKeys.play()
                    } else {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                    }
                    this.move(i)
                })
            }
            const cellsDivs = document.querySelectorAll('.cell')
            savedDivs = cellsDivs
            localStorage.setItem('cells', JSON.stringify(cells))
        } else {
            const newCells = JSON.parse(localStorage.getItem('cells'))
            const field = document.querySelector('.field')
            for (let i = 1; i <= 63; i += 1) {
                const cell = document.createElement('div')
                const { value } = newCells[i]
                const { left } = newCells[i]
                const { top } = newCells[i]
                cell.id = newCells[i].value
                cell.textContent = newCells[i].value
                cell.className = 'cell'
                cell.draggable = 'true'
                cell.style.width = '4rem'
                cell.style.height = '4rem'
                cell.style.fontSize = '1.4rem'

                if (cell.textContent === '1') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 0%`
                } else if (cell.textContent === '2') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 0%`
                } else if (cell.textContent === '3') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 0%`
                } else if (cell.textContent === '4') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 0%`
                } else if (cell.textContent === '5') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 0%`
                } else if (cell.textContent === '6') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 0%`
                } else if (cell.textContent === '7') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 0%`
                } else if (cell.textContent === '8') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 100% 16.66%`
                } else if (cell.textContent === '9') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 0%`
                } else if (cell.textContent === '10') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 14.285%`
                } else if (cell.textContent === '11') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 14.285%`
                } else if (cell.textContent === '12') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 14.285%`
                } else if (cell.textContent === '13') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 14.285%`
                } else if (cell.textContent === '14') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 14.285%`
                } else if (cell.textContent === '15') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 14.285%`
                } else if (cell.textContent === '16') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 100% 14.285%`
                } else if (cell.textContent === '17') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 28.571%`
                } else if (cell.textContent === '18') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 28.571%`
                } else if (cell.textContent === '19') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 28.571%`
                } else if (cell.textContent === '20') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 28.571%`
                } else if (cell.textContent === '21') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 28.571%`
                } else if (cell.textContent === '22') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 28.571%`
                } else if (cell.textContent === '23') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 28.571%`
                } else if (cell.textContent === '24') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 100% 28.571%`
                } else if (cell.textContent === '25') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 42.857%`
                } else if (cell.textContent === '26') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 42.857%`
                } else if (cell.textContent === '27') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 42.857%`
                } else if (cell.textContent === '28') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 42.857%`
                } else if (cell.textContent === '29') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 42.857%`
                } else if (cell.textContent === '30') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 42.857%`
                } else if (cell.textContent === '31') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 42.857%`
                } else if (cell.textContent === '32') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 100% 42.857%`
                } else if (cell.textContent === '33') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 57.142%`
                } else if (cell.textContent === '34') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 57.142%`
                } else if (cell.textContent === '35') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 57.142%`
                } else if (cell.textContent === '36') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 57.142%`
                } else if (cell.textContent === '37') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 57.142%`
                } else if (cell.textContent === '38') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 57.142%`
                } else if (cell.textContent === '39') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 57.142%`
                } else if (cell.textContent === '40') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 100% 57.142%`
                } else if (cell.textContent === '41') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 71.428%`
                } else if (cell.textContent === '42') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 71.428%`
                } else if (cell.textContent === '43') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 71.428%`
                } else if (cell.textContent === '44') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 71.428%`
                } else if (cell.textContent === '45') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 71.428%`
                } else if (cell.textContent === '46') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 71.428%`
                } else if (cell.textContent === '47') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 71.428%`
                } else if (cell.textContent === '48') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 100% 71.428%`
                } else if (cell.textContent === '49') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 85.714%`
                } else if (cell.textContent === '50') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 85.714%`
                } else if (cell.textContent === '51') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 85.714%`
                } else if (cell.textContent === '52') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 85.714%`
                } else if (cell.textContent === '53') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 85.714%`
                } else if (cell.textContent === '54') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 85.714%`
                } else if (cell.textContent === '55') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 85.714%`
                } else if (cell.textContent === '56') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 100% 85.714%`
                } else if (cell.textContent === '57') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 0% 100%`
                } else if (cell.textContent === '58') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 14.285% 100%`
                } else if (cell.textContent === '59') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 28.571% 100%`
                } else if (cell.textContent === '60') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 42.857% 100%`
                } else if (cell.textContent === '61') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 57.142% 100%`
                } else if (cell.textContent === '62') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 71.428% 100%`
                } else if (cell.textContent === '63') {
                    cell.style.background = `url('assets/${pictures[8]}.png') 85.714% 100%`
                }

                cells.push({
                    value,
                    left,
                    top,
                    element: cell
                })

                cell.style.top = `${top * this.cellSizeEight}px`
                cell.style.left = `${left * this.cellSizeEight}px`

                field.append(cell)

                cell.addEventListener('mouseup', () => {
                    if (this.soundMuted === false) {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                        audioKeys.play()
                    } else {
                        const audioKeys = document.getElementById('cells')
                        if (!audioKeys) {
                            return
                        }
                        audioKeys.currentTime = 0
                    }
                    this.move(i)
                })
            }

            const insertPositions = JSON.parse(localStorage.getItem('cells'))[0]
            empty = insertPositions
            this.insertAt(cells, 0, insertPositions)
            const cellsDivs = document.querySelectorAll('.cell')
            savedDivs = cellsDivs
        }
    }

    newGame() {
        localStorage.removeItem('cells')
        emptyLeft = 0
        emptyTop = 0
        empty.left = 0
        empty.top = 0
        empty.value = 0
        const field = document.querySelector('.field')
        field.remove();
        document.querySelector(".raiting-module").remove()
        document.querySelector(".new-game").remove()
        document.querySelector(".auto-win").remove()
        document.querySelector(".time").remove()
        document.querySelector(".steps").remove()
        document.querySelector(".advanced").remove()
        document.querySelector(".advanced-two").remove()
        document.querySelector(".advanced-three").remove()
        document.querySelector("#cells").remove()
        cells = []
        cells.push(empty)
        this.createField()
        if (field.childElementCount === 8) {
            this.initThree()
        }
        else if (field.childElementCount === 15) {
            this.init()
        }
        else if (field.childElementCount === 24) {
            this.initFive()
        }
        else if (field.childElementCount === 35) {
            this.initSix()
        }
        else if (field.childElementCount === 48) {
            this.initSeven()
        }
        else if (field.childElementCount === 63) {
            this.initEight()
        }
        this.dragAndDrop()
        this.stepsCounter = 0
        seconds = 0
        this.timer()
    }

    dragAndDrop() {
        const cellDivs = document.querySelectorAll('.cell');

        cellDivs.forEach(cell => {
            cell.addEventListener('dragstart', () => {
                setTimeout(() => {
                    cell.classList.add('hide');
                }, 0);
            });
            cell.addEventListener('dragend', () => {
                if (this.soundMuted === false) {
                    const audioKeys = document.getElementById('cells')
                    if (!audioKeys) {
                        return
                    }
                    audioKeys.currentTime = 0
                    audioKeys.play()
                } else {
                    const audioKeys = document.getElementById('cells')
                    if (!audioKeys) {
                        return
                    }
                    audioKeys.currentTime = 0
                }
                cell.classList.remove('hide');

                this.move(+cell.id)
            });
        })
    }

    timer() {
        if (seconds < 10 || (seconds >= 60 && seconds <= 69) || (seconds >= 120 && seconds <= 129) || (seconds >= 180 && seconds <= 189) || (seconds >= 240 && seconds <= 249) || (seconds >= 300 && seconds <= 309) || (seconds >= 360 && seconds <= 369) || (seconds >= 420 && seconds <= 429) || (seconds >= 480 && seconds <= 489) || (seconds >= 540 && seconds <= 549) || (seconds >= 600 && seconds <= 609) || (seconds >= 660 && seconds <= 669) || (seconds >= 720 && seconds <= 729) || (seconds >= 780 && seconds <= 789) || (seconds >= 840 && seconds <= 849) || (seconds >= 900 && seconds <= 909) || (seconds >= 960 && seconds <= 969) || (seconds >= 1020 && seconds <= 1029) || (seconds >= 1080 && seconds <= 1089) || (seconds >= 1140 && seconds <= 1449) || (seconds >= 1200 && seconds <= 1209) || (seconds >= 1260 && seconds <= 1269) || (seconds >= 1320 && seconds <= 1329) || (seconds >= 1380 && seconds <= 1389) || (seconds >= 1440 && seconds <= 1449) || (seconds >= 1500 && seconds <= 1509) || (seconds >= 1560 && seconds <= 1569) || (seconds >= 1620 && seconds <= 1629) || (seconds >= 1680 && seconds <= 1689) || (seconds >= 1740 && seconds <= 1749) || (seconds >= 1800 && seconds <= 1800) || (seconds >= 1860 && seconds <= 1869) || (seconds >= 1920 && seconds <= 1929) || (seconds >= 1980 && seconds <= 1989) || (seconds >= 2040 && seconds <= 2049)) {
            document.querySelector("body > div.advanced > p.time").textContent = `time: ${Math.floor(seconds / 60)}:0${seconds % 60}`
            seconds += 1
            this.seconds += 1
        } else {
            document.querySelector("body > div.advanced > p.time").textContent = `time: ${Math.floor(seconds / 60)}:${seconds % 60}`
            seconds += 1
        }
    }

    insertAt(array, index, ...elements) {
        array.splice(index, 0, ...elements);
        this.seconds += 1
    }
}
