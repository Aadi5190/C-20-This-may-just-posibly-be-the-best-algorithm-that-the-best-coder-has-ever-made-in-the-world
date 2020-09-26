var fixrect, movrect;

function setup() {
  createCanvas(1200,800);
  fixrect = createSprite(600,400,50,80);
  movrect = createSprite(400,200,80,30);
  movrect.debug = true
  fixrect.debug = true
}

function draw() {
  background("cyan");
  movrect.x = World.mouseX
  movrect.y = World.mouseY
  if (movrect.x-fixrect.x < fixrect.width/2 + movrect.width/2 && 
    fixrect.x-movrect.x < fixrect.width/2 + movrect.width/2 &&
     movrect.y-fixrect.y < fixrect.width/2 + movrect.width/2 && 
    fixrect.y-movrect.y < fixrect.width/2 + movrect.width/2) {
    fixrect.shapeColor = "yellow"
    movrect.shapeColor = "yellow"
  } else {
    fixrect.shapeColor = "green"
    movrect.shapeColor = "green"
  }
  drawSprites();
}