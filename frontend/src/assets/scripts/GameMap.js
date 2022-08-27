import { AcGameObject } from "./AcGameObject";
import { Wall } from "./Wall";

export class GameMap extends AcGameObject {
    constructor(ctx, parent) {
        super();

        this.ctx = ctx;
        this.parent = parent;

        this.L = 0;
        this.rows = 13;
        this.colomns = 13;

        this.walls = [];
    }

    create_walls() {
        new Wall(0, 0, this);
    }

    start() {
        
    }

    update() {
        this.update_size();
        this.render();
    }

    update_size() {
        this.L = Math.min(this.parent.clientWidth / this.colomns, this.parent.clientHeight / this.rows);
        this.ctx.canvas.width = this.L * this.colomns;
        this.ctx.canvas.height = this.L * this.rows;
    }

    render() {
        const color_even = '#AAD751', color_odd = '#A2D149'
        for (let r = 0; r < this.rows; ++r) {
            for (let c = 0; c < this.colomns; ++c) {
                if ((r + c) & 1) {
                    this.ctx.fillStyle = color_odd;
                } else {
                    this.ctx.fillStyle = color_even;
                }
                this.ctx.fillRect(c * this.L, r * this.L, this.L, this.L);
            }
        }
    }
}