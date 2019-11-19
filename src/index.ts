/* Programming Summative 2

    This summative comes in 2 parts.

    Part 1 - Programming
    ---------------------
    Your PRIMARY goal is to get the program running. You can find missing elements by looking for comments marked
    TODO REQUIRED. If they are all fixed, the program should run with 10 red balls, 10 white snowflakes, and
    10 transluscent bubbles.

    Your SECONDARY goal is to implement the optional TODO requirements and any other fun things you think of.

    Part 2 - Documenting
    ------------------------
    Create UML diagrams for all three of these classes, and a flowchart that shows the basic program flow of
    index.ts. You can do these by hand (be neat!) or using an online tool - draw.io and lucidchart are both nice
    online offerings.

    For a Proficient, the documentation must be complete and the program must run and be readable.
        An Approaching might mean incomplete documentation OR hard-to-read code OR not-quite-working code
        Work your way downwrd from there
    For an Accomplished, some optional requirements or embellishments are required or the code must be particularly beautiful
    For an Exemplary, I would expect all optional rquirements to be implemented, or additional features of similar or greater
        difficulty.
*/
import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";

let balls: Ball[] = [];
let snowflakes: Snowflake[] = [];
let bubbles: Bubble[] = [];
let clickedIndex = -1;

function setup() {
    let numBubbles = 10;
    let numBalls = 10;
    let numFlakes = 10;

    createCanvas(500, 500);
    for (let i = 0; i < numBalls; i++) {
        let symbols = "0123456789ABCDEF";
        let color = "#";
        for (let j = 0; j < 6; j++) {
            color = color + symbols[Math.floor(Math.random() * 16)];
        }
        balls[i] = new Ball(random(25, width - 25), random(25, height - 25), random(10, 50), color);
    }
    for (let i = 0; i < numBubbles; i++) {
        bubbles[i] = new Bubble(random(25, width - 25), random(25, height - 25), random(10, 50));
    }
    for (let i = 0; i < numFlakes; i++) {
        snowflakes[i] = new Snowflake(random(25, width - 25), random(25, height - 25), random(10, 50));
    }
}

function draw() {
    background("skyblue");
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();

    }
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].draw();
        bubbles[i].move();
    }
    for (let i = 0; i < snowflakes.length; i++) {
        snowflakes[i].draw();
        snowflakes[i].move();

    }

}

function mousePressed(): void {
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].touchingMouse()) {
            balls[i].stop();
        }
        if (!balls[i].touchingMouse()) {
            balls[i].go();
        }
    }

    for (let i = 0; i < bubbles.length; i++) {
        if (bubbles[i].touchingMouse()) {
            bubbles[i].stop();
        }
        if (!bubbles[i].touchingMouse()) {
            bubbles[i].go();
        }
    }

    for (let i = 0; i < snowflakes.length; i++) {
        if (snowflakes[i].touchingMouse()) {
            snowflakes[i].stop();
        }
        if (!snowflakes[i].touchingMouse()) {
            snowflakes[i].go();
        }
    }

}

function mouseReleased(): void {
    for (let i = 0; i < bubbles.length; i++) {
        balls[i].go();
    }

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].go();
    }

    for (let i = 0; i < snowflakes.length; i++) {
        snowflakes[i].go();
    }

}

// do not edit the below lines
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
