import Canvas from "./canvas";
import Square from "./square";

let squares = [];
let length = 10;
const squaresInRow = 144 || Math.ceil(innerWidth / length);
const squaresInColumn = 72 || Math.ceil(innerHeight / length);
const canvas = Canvas.createInstance({id: 'canvas', w: squaresInRow * length, h: squaresInColumn * length});

for (let x = 0; x < squaresInRow; x++) {
    for (let y = 0; y < squaresInColumn; y++) {
        squares[x * (squaresInRow - squaresInColumn) + y] = new Square({x: x * length, y: y * length, l: length});
    }
}

canvas.display(squares);
