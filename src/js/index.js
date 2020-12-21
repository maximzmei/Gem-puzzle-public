import '../css/style.css';
import '../css/style.scss';
import PuzzleConfig from './puzzle'

const puzzle = new PuzzleConfig({
    stepsCounter: 0,
    seconds: 0,
    cellSize: 80,
    cellSizeThree: 106.66,
    cellSizeFour: 80,
    cellSizeFive: 64,
    cellSizeSix: 53.3,
    cellSizeSeven: 45.714,
    cellSizeEight: 40,
    soundMuted: false,
})

window.addEventListener('DOMContentLoaded', () => {
    puzzle.createField()
    if (localStorage.getItem('cells') === null) {
        puzzle.init()
    }
    else if (JSON.parse(localStorage.getItem('cells')).length === 9) {
        puzzle.initThree()
    }
    else if (JSON.parse(localStorage.getItem('cells')).length === 16) {
        puzzle.init()
    }
    else if (JSON.parse(localStorage.getItem('cells')).length === 25) {
        puzzle.initFive()
    }
    else if (JSON.parse(localStorage.getItem('cells')).length === 36) {
        puzzle.initSix()
    }
    else if (JSON.parse(localStorage.getItem('cells')).length === 49) {
        puzzle.initSeven()
    }
    else if (JSON.parse(localStorage.getItem('cells')).length === 64) {
        puzzle.initEight()
    }
    puzzle.dragAndDrop()
    puzzle.newGame()
})

setInterval(puzzle.timer, 1000)
