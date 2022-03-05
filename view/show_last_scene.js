function showLastScene() {
    let mainScene = document.getElementById('main_scene')
    let lastScene = document.getElementById('last_scene')
    mainScene.style.cssText = "display: none;"
    lastScene.style.cssText = "display: block;"
    document.getElementById('final_score_view').innerHTML = score
}