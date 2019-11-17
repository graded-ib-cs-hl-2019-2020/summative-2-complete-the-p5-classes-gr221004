export class Snowflake {

    /* TODO REQUIRED - Make this work. The snowflakes should drift slowly downward. I have implemented only the draw() method.
     * You can base the rest of the behavior after bubbles, with only a few changes. */

    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number = random(-0.3, 0.2);
    private ySpeed: number = random(-0.4, 1.6);
    private stopped: boolean = false;
    private color: string;
    private borderColor: string;

    constructor(x: number, y: number, size: number, color: string = "white", borderColor: string = "white") {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.borderColor = borderColor;
        this.xSpeed;
        this.ySpeed;
        this.stopped = false;
    }

    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }

    public move(): void {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    /* This border behavior implements a wrap, so snowflakes will flip over to the other side */
    private doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        } else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        } else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }

    public draw(): void {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }

}
