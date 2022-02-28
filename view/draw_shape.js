function drawShape(canvasId,type,color,x,y) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    let r = 25
    let lineWidth = 10

    switch (type) {
        case 'cross':
            r = 20
            lineWidth = 8
            ctx.strokeStyle = color
            ctx.lineWidth = lineWidth

            ctx.beginPath()
            ctx.moveTo(x + r, y + r)
            ctx.lineTo(x - r, y - r)
            ctx.moveTo(x + r, y - r)
            ctx.lineTo(x - r, y + r)
            ctx.closePath()
            ctx.stroke()

            break
        case 'circle':
            r = 20
            lineWidth = 8
            ctx.strokeStyle = color
            ctx.lineWidth = lineWidth

            ctx.beginPath()
            ctx.arc(x, y, r, 0, Math.PI * 2, true)
            ctx.closePath()
            ctx.stroke()

            break
        case 'rect':
            r = 20
            lineWidth = 8
            ctx.strokeStyle = color
            ctx.lineWidth = lineWidth

            ctx.beginPath()
            ctx.moveTo(x + r, y + r)
            ctx.lineTo(x + r, y - r)
            ctx.lineTo(x - r, y - r)
            ctx.lineTo(x - r, y + r)
            ctx.lineTo(x + r, y + r)
            ctx.closePath()
            ctx.stroke()

            break
        case 'triangle':
            r = 13
            lineWidth = 8
            ctx.strokeStyle = color
            ctx.lineWidth = lineWidth

            ctx.beginPath()
            ctx.moveTo(x, y - 2 * r + 7)
            ctx.lineTo(x - 2 * r * Math.sin(a), y + r + 7)
            ctx.lineTo(x + 2 * r * Math.sin(a), y + r + 7)
            ctx.lineTo(x, y - 2 * r + 7)

            ctx.closePath();
            ctx.stroke();

            break
    } 
}