export function drawGrid(context, minor = 10, major, stroke = "#00FF00", fill = "#009900") {
    major = major || minor * 5;
    context.save();
    context.strokeStyle = stroke;
    context.fillStyle = fill;
    let width = context.canvas.width, height = context.canvas.height
    for (let x = 0; x < width; x += minor) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.lineWidth = (x % major == 0) ? 0.5 : 0.25;
        context.stroke();
        if (x % major == 0) {
            context.fillText(x, x, 10);
        }
    }
    for (let y = 0; y < height; y += minor) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.lineWidth = (y % major == 0) ? 0.5 : 0.25;
        context.stroke();
        if (y % major == 0) {
            context.fillText(y, 0, y + 10);
        }
    }
    context.restore();
}

export function drawPacman(context, center, radius, openness) {
    context.save();

    context.strokeStyle = '#000000';
    context.fillStyle = '#FFFF00';

    context.beginPath();
    //center-x, center-y, radius, start-angle, end-angle
    context.arc(center.x, center.y, radius, (0 + (0.2 * openness)) * Math.PI, (2 - (0.2 * openness)) * Math.PI);
    context.lineTo(center.x, center.y);
    context.closePath();
    context.stroke();
    context.fill();

    context.restore();
}

export function drawShip(context, x, y, radius, options = {}) {
    context.save();
    // optionally draw a guide showing the collision radius
    if (options.guide) {
        context.strokeStyle = "white";
        context.fillStyle = "rgba(0, 0, 0, 0.25)";
        context.lineWidth = 0.5;
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
    }
    // set some default values
    context.lineWidth = options.lineWidth || 2;
    context.strokeStyle = options.stroke || "white";
    context.fillStyle = options.fill || "black";
    let angle = (options.angle || 0.5 * Math.PI) / 2;
    // draw the ship in three lines
    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(
        x + Math.cos(Math.PI - angle) * radius,
        y + Math.sin(Math.PI - angle) * radius
    );
    context.lineTo(
        x + Math.cos(Math.PI + angle) * radius,
        y + Math.sin(Math.PI + angle) * radius
    );
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
}
