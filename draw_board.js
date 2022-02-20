function drawBoard(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    drawGrid(ctx, 1000, 1000)
}

function drawHexagon(ctx, x, y) {
    ctx.strokeStyle = "gray";
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
        ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
    }
    ctx.closePath();
    ctx.stroke();
}

function drawGrid(ctx, width, height) {
    for (let y = r; y + r * Math.sin(a) < height; y = y + 2 * r * Math.sin(a)) {
        for (let x = r, j = 0; x + r + r * Math.cos(a) < width; x = x + r + r * Math.cos(a), y += (-1) ** j++ * r * Math.sin(a)) {
            drawHexagon(ctx, x, y);
        }
    }
}