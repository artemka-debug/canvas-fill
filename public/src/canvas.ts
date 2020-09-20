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
        //
        // if (ctx && canvas) {
        //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        // }
        //
        // for (const square of squares) {
        //     square.display();
        // }
        if (ctx) {
            this.drawHeart(innerWidth / 2, 0, 100, 0, innerWidth, 500, "red");
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
    };

    public drawHeart = (fromx: number, fromy: number, tox: number, toy: number, lw: number, hlen: number, color: string) => {
        const {ctx} = this;

        const x = fromx;
        const y = fromy;
        const width = lw;
        const height = hlen;

        if (ctx) {
            ctx.save();
            ctx.beginPath();
            const topCurveHeight = height * 0.3;
            ctx.moveTo(x, y + topCurveHeight);
            // top left curve
            ctx.bezierCurveTo(
                x, y,
                x - width / 2, y,
                x - width / 2, y + topCurveHeight
            );

            // bottom left curve
            ctx.bezierCurveTo(
                x - width / 2, y + (height + topCurveHeight) / 2,
                x, y + (height + topCurveHeight) / 2,
                x, y + height
            );

            // bottom right curve
            ctx.bezierCurveTo(
                x, y + (height + topCurveHeight) / 2,
                x + width / 2, y + (height + topCurveHeight) / 2,
                x + width / 2, y + topCurveHeight
            );

            // top right curve
            ctx.bezierCurveTo(
                x + width / 2, y,
                x, y,
                x, y + topCurveHeight
            );

            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            ctx.restore();
        }
    }
}