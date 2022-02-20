function loadLevel(levelNumber) {
    const level = levels[levelNumber]
    const targetIndex = Math.floor(Math.random() * level.coordinates.length)
    
    for (let i = 0; i < level.coordinates.length; i++) {
        let x = level.coordinates[i][0]
        let y = level.coordinates[i][1]
        if (i == targetIndex) {
            drawShape('shapes', level.target.type, level.target.color, x, y)
        } else {
            let randomShape = Math.floor(Math.random() * level.shapes.length)
            drawShape('shapes', level.shapes[randomShape].type, level.shapes[randomShape].color, x, y)
        }
    }
}