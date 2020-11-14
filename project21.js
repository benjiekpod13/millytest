var wall,thickness
var bullet,speed, weight



function setup() {
background.color=("black")
    bullet =  createSprite(50,200,50,10);
  createCanvas(1600,400);
 wall = createSprite(400,200,thickness,100);
 speed=random(223,321)
 weight=random(30,52)
 bullet.velocityX = speed
thickness=random(22,85)
bullet.shapeColor=("white")

}

function draw() {
  if(hasCollided(bullet,wall))
  {
   bullet.velocityX=0;
   var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
   
   
   if(damage>10)
   {
    wall.shapeColor=color(255,0,0)
   }
   if(damege<10)
   {
       wall.shapeColor=(0,255,0)
   }

   
  }




   hasCollided();
  background(255,255,255);  
  drawSprites();
}



function hasCollided(Lbullet, Lwall)
{
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
    return true
}
  return false
}














