var sea,seaImage;
var ship,shipImg1,shipImg2;

function preload(){
seaImage=loadImage("sea.png");
  ship_sail=loadAnimation("ship-1.png","ship-2.png");
  ship_2=loadAnimation("ship-2.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400);
  sea.addImage(seaImage);
  sea.velocityX=-3;
  ship=createSprite(200,200,20,20);
  ship.scale=0.3;
  ship.addAnimation("moving",ship_sail);
  
  
}

function draw() {
  background("blue");
  
  if(sea.x<0)
    {
      sea.x=sea.width/2;
    }
  
  
 drawSprites();
}