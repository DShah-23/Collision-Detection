var wall, bullet;
var v, m, df, thickness;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(400, 200, 30, 20);
  
  wall = createSprite(1200, 200, 40, 250);

  v = random(223, 321);
  m = random(30, 52);
  thickness = random(22, 83)
}

function draw() {
  background(0, 0, 0);
  
  wall.width = thickness;

  bullet.velocityX = 8;

  if(bullet.isTouching(wall)) {
    bullet.velocityX = 0;

    if(d <= 10) {
    wall.shapeColor = "green";
  }

  if(d > 10) {
    wall.shapeColor = "red";
  }
  }

  d = (0.5 * m * v * v) / (thickness * thickness * thickness);

  

  drawSprites();
}