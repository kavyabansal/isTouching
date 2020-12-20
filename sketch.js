var movingRect,fixedRect;
var rect1;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(100, 200, 50, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  fixedRect=createSprite(400,200,50,50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  rect1 = createSprite(200,200,50,50);
  rect1.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

if (IsTouching(rect1,movingRect)){
  rect1.shapeColor="red";
  movingRect.shapeColor="red";
}else {
  rect1.shapeColor="green";
  movingRect.shapeColor="green";
}

  drawSprites();
}



