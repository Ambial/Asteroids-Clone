import { drawGrid } from './drawing.js'

let canvas = document.getElementById("asteroidz-canvas");
const context = canvas.getContext("2d");

drawGrid(context, 15, 45, 'red', 'yellow');