import { drawGrid, drawPacman, drawShip } from './drawing.js'

let canvas = document.getElementById("asteroidz-canvas");
const context = canvas.getContext("2d");

drawGrid(context, 15, 45, 'red', 'yellow');

drawShip(context, 200, 200, 125, { guide: true });
drawShip(context, 75, 75, 50, {
    stroke: 'gold', fill:
        'purple'
});
drawShip(context, 325, 325, 50, {
    angle: 0.8 * Math.PI,
    guide: true
});
drawShip(context, 75, 325, 50, {
    angle: 0.3 * Math.PI, guide:
        true
});

drawShip(context, 325, 75, 50, { lineWidth: 8, fill: 'blue' })