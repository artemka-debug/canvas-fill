import Square from "./square";

type CanvasProps = {
    id: string,
    w: number,
    h: number
}

export default class Canvas {
    public canvas: HTMLCanvasElement | null;
    public ctx: CanvasRenderingContext2D | null;
    private static instance: Canvas;

    constructor({id = '', w = 0, h = 0}: CanvasProps) {
        this.canvas = document.getElementById(id) as HTMLCanvasElement;
        this.ctx = this.canvas?.getContext("2d");
        this.setSize(w, h);
    }

    private setSize = (width: number, height: number) => {
        if (this.ctx) {
            this.ctx.canvas.width = width;
            this.ctx.canvas.height = height;
        }
    };

    public display = (squares: Array<Square>) => {
        const {ctx, canvas} = this;

        if (ctx && canvas) {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }

        for (const square of squares) {
            square.display();
        }
        requestAnimationFrame(() => this.display(squares));
    };

    static getInstance = (): Canvas => {
        if (!Canvas.instance) {
            Canvas.instance = new Canvas({id: 'canvas', w: 0, h: 0});
        }

        return Canvas.instance;
    };

    static createInstance = ({id = '', w = 0, h = 0}: CanvasProps) => {
        Canvas.instance = new Canvas({id: id, w: w, h: h});
        return Canvas.instance;
    }
}