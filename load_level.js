function loadLevel(levelNumber) {
    const level = levels[levelNumber]
    showLevelNumber(level.level)
    const targetIndex = Math.floor(Math.random() * level.coordinates.length)
    
    for (let i = 0; i < level.coordinates.length; i++) {
        let x = level.coordinates[i][0]
        let y = level.coordinates[i][1]
        if (i == targetIndex) {
            drawShape('shapes', level.target.type, level.target.color, x, y)
            drawShape('task', level.target.type, level.target.color, 25, 25)
            const target = document.getElementById("target")
            target.style.cssText = `left: ${x-25}px; top: ${y-25}px;`
        } else {
            let randomShape = Math.floor(Math.random() * level.shapes.length)
            drawShape('shapes', level.shapes[randomShape].type, level.shapes[randomShape].color, x, y)
        }
    }
}