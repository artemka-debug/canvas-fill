import Canvas from "./canvas";
import Square from "./square";

let squares: Square[] = [];
// @ts-ignore
window.squares = squares;
let length = 10;
const squaresInRow = 72 || Math.ceil(innerWidth / length);
const squaresInColumn = 144 || Math.ceil(innerHeight / length);

for (let x = 0; x < squaresInRow; x++) {
    const outerDiv = document.createElement('div');
    outerDiv.className = 'outer';

    for (let y = 0; y < squaresInColumn; y++) {
        const index = y * (squaresInColumn - squaresInRow) + x;
        const div = document.createElement('div');
        div.className = 'inner';
        div.id = `${index}`;
        div.addEventListener('mousedown', (e: MouseEvent) => {
            if (e.target) {
                // @ts-ignore
                const id = e.target.id;
                const div = document.getElementById(id);

                if (div) {
                    div.style.backgroundColor = 'blue'
                }
            }
        })

        outerDiv.appendChild(div);
        // squares[x * (squaresInRow - squaresInColumn) + y] = new Square({x: x * length, y: y * length, l: length, color: 'white'});
    }

    document.body.appendChild(outerDiv);
}

// canvas.display(squares);
