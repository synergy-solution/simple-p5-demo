var img;

/*
* preload(), setup() and draw() functions are P5 specific functions.
*
* When P5 starts to render, first preload() is call once,
*
* after which setup() is called once.
*
* then draw() function is called for every frame that is being rendered
* */


// P5 specific function
function preload() {
    // preload() runs once
    //For loading images, you will need to define the preload function
    img = loadImage('TomAndJerry.jpg');
}

// P5 specific function
function setup() {
    createCanvas(600, 600);
}

// P5 specific function
function draw() {
    background(220);
    writeText('hello', 100, 100, 'blue');
    drawCircle(200, 200, 30, 'red');
    drawRectangle(300, 300, 50, 75, 'green');
    drawLine(400, 300, 200, 200, 'yellow');
    drawImage(img, 500, 500, 150, 100);
}

function writeText(myText, x, y, myColor) {
    push();
    fill(color(myColor));
    textSize(32);
    text(myText, x, y);
    pop();
}

function drawCircle(x, y, radius, myColor) {
    push();
    rectMode(CENTER);
    fill(color(myColor));
    circle(x, y, radius);
    pop();
}

function drawRectangle(x, y, width, height, myColor) {
    push();
    rectMode(CENTER);
    fill(color(myColor));
    rect(x, y, width, height);
    pop();
}

function drawLine(x1, x2, y1, y2, myColor) {
    push();
    strokeWeight(4);
    stroke(color(myColor));// A line cannot be filled, therefore the fill() function will not affect the color of a line
    line(x1, y1, x2, y2)
    pop();
}

function drawImage(img, x, y, imageWidth, imageHeight) {
    push();
    imageMode(CENTER);
    image(img, x, y, imageWidth, imageHeight);
    pop();
}