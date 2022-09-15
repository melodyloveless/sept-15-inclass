// positions
var ypos = 0; // save my initial state
var xpos = 20;
// speed
var yspeed = 1;
var xspeed = 1;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(0);
  ellipse(xpos,ypos,50);

  ypos = ypos + yspeed;
  xpos = xpos + xspeed;

  if (ypos >= height || ypos < 0) {
    yspeed = yspeed * -1;
  }

  if (xpos >= width || xpos < 0) {
    xspeed = xspeed * -1;
  }

}
