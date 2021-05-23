var fixedRect,movingRect;
var bat,ball
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

  bat=createSprite(200,300,50,80)
  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
  bat.shapeColor="green"
  bat.velocityX=4

  ball=createSprite(400,300,50,80)
  ball.shapeColor="pink"
  ball.velocityX=-4
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if (isTouching(movingRect,bat)){
    bat.shapeColor="yellow"
  
  }
  else{
    bat.shapeColor="green"
  }
  
  bounceOff(bat,ball)

  drawSprites();
}



