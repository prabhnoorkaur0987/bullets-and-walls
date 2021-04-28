var wall,thickness
var bullet,speed,weight
function setup() {
  createCanvas(1600,400);
    
  
thickness=random(22,83)
bullet=createSprite(1200,200,thickness,height)
wall=createSprite(1200,200,thickness,height/2)
speed=random(55,90)
weight=random(400,1500)

}

function draw() {
  background("grey");  
  bullet.velocityX=speed
  wall.shapeColor=color(80,80,80)
  bullet.shapeColor="blue"


  if(wall.x-car.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0
    var deformation=0.5*weight*speed*speed/22500
    if(deformation>100)
    {
      
      car.shapeColor=color(255,0,0)
    }
    if(deformation<100 &&  deformation>100)
    {
      
      car.shapeColor=color(230,230,0)
    }
    if(deformation<100)
    {
     
      car.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}