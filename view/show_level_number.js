function showLevelNumber(levelNumber) {
    document.getElementById('level_number_view').innerHTML = levelNumber
    let ending = 'th'
    switch(levelNumber) {
        case 1:
            ending = 'st'
            break
        case 2:
            ending = 'nd'
            break
        case 3:
            ending = 'rd'
            break
        default:
            ending = 'th'
    }
    document.getElementById('level_ending_view').innerHTML = `${ending} level`
}