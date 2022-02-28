function targetClick() {
    clearCanvas('board')
    clearCanvas('shapes')
    time += 5
    showTime(time)
    score += 5
    showScore(score)
    loadLevel(0)
}