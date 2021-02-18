

var bullet,wall;


var speed, weight; 

var thickness


function setup() {
  createCanvas(1600, 400);

   thickness= random(22,83);
  speed=random(223,321)
  weight=random(30,52)


	bullet=createSprite(50, 200, 50,5);  
	
	bullet.shapeColor=color("white");

	bullet.velocityX = speed;

	bullet.shapeColor=color(80,80,80);


  
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);
if (hasCollided(bullet,wall)){
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var damage=(0.5 * weight * speed* speed)/(thickness*thickness*thickness);
	if(damage>10)
	{
		wall.shapeColor=color("red");
	}

	if(damage<10)
	{
		wall.shapeColor=color("green");
	}

	
  }  
}
  drawSprites();
 
}

function hasCollided( bulletL,wallL){

	bulletLeftEdge=bulletL.x + bulletL.width;
	wallLeftEdge= wallL.x


	if (bulletLeftEdge >wallLeftEdge){
		return true;
}
else
return false;


}
