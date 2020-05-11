import { drawGrid, drawPacman } from './drawing.js'

let canvas = document.getElementById("asteroidz-canvas");
const context = canvas.getContext("2d");

drawGrid(context, 15, 45, 'red', 'yellow');

drawPacman(context, { x: 300, y: 200 }, 100, Math.random());

const min_radius = 5;
const max_radius = 50;
do {
    let x = context.canvas.width * Math.random();
    let y = context.canvas.height * Math.random();
    let radius = min_radius + (max_radius - min_radius) * Math.
        random();
    drawPacman(context, { x: x, y: y }, radius, Math.random());
}
while (Math.random() < 0.9);

