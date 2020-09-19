import Canvas from "./canvas";

type SquareProps = {
    x: number,
    y: number,
    l: number
}

export default class Square {
    private readonly x: number;
    private readonly y: number;
    private readonly l: number;
    private readonly canvas = Canvas.getInstance();

    constructor({
                    x = 0,
                    y = 0,
                    l = 0
                }: SquareProps) {
        this.x = x;
        this.y = y;
        this.l = l;
    }


    public display = () => {
        const {ctx} = this.canvas;

        if (ctx) {
            ctx.beginPath();
            ctx.strokeStyle = 'gray';
            ctx.rect(this.x, this.y, this.l, this.l);
            ctx.stroke();
            ctx.closePath();
        }
    };
}