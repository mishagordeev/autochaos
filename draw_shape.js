function drawShape(canvasId,type,color,x,y) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    let r = 25
    let lineWidth = 10

    switch (type) {
        case 'cross':
            r = 25
            lineWidth = 10
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
            r = 27
            lineWidth = 10
            ctx.strokeStyle = color
            ctx.lineWidth = lineWidth

            ctx.beginPath()
            ctx.arc(x, y, r, 0, Math.PI * 2, true)
            ctx.closePath()
            ctx.stroke()

            break
        case 'rect':
            r = 25
            lineWidth = 10
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
            r = 25
            lineWidth = 10
            ctx.strokeStyle = color
            ctx.lineWidth = lineWidth

            ctx.beginPath()
            ctx.moveTo(x, y - r)
            ctx.lineTo(x + r, y + r)
            ctx.lineTo(x - r, y + r)
            ctx.lineTo(x, y - r)

            ctx.closePath();
            ctx.stroke();

            break
    } 
}