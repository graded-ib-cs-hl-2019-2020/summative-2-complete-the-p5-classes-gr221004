import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";
let balls = [];
let snowflakes = [];
let bubbles = [];
let clickedIndex = -1;
function setup() {
    let numBubbles = 10;
    let numBalls = 10;
    let numFlakes = 10;
    createCanvas(1400, 750);
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
    fill("white"), stroke("white"), ellipse(700, 640, 400, 400);
    fill("white"), stroke("white"), ellipse(700, 450, 300, 300);
    fill("white"), stroke("white"), ellipse(700, 270, 200, 200);
    fill("black"), ellipse(660, 250, 15, 15);
    fill("black"), ellipse(740, 250, 15, 15);
    fill("DarkOrange"), stroke("DarkOrange"), triangle(700, 280, 700, 310, 770, 320);
    fill("SaddleBrown"), stroke("SaddleBrown"), rect(800, 400, 100, 20, 6, 6);
    fill("SaddleBrown"), stroke("SaddleBrown"), rect(500, 400, 100, 20, 6, 6);
    fill("black"), ellipse(700, 400, 10, 10);
    fill("black"), ellipse(700, 470, 10, 10);
    fill("black"), ellipse(700, 540, 10, 10);
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
function mousePressed() {
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
function mouseReleased() {
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
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
//# sourceMappingURL=index.js.map