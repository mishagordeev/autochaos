function targetClick() {
    clearCanvas('board')
    clearCanvas('shapes')
    clearCanvas('task')
    time += 5
    showTime(time)
    clearInterval(score_timer)

    if (score_counter < 100) {
        score += 100 - score_counter
    }
    if (score_counter < 1000 && score_counter >= 100) {
        score += 10 - Math.floor(score_counter / 100)
    }
    if (score_counter >= 1000) {
        score1 += 0
    }

    showScore(score)
    loadLevel(0)
}