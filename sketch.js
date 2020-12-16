var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1516, 720);
	rectMode(CENTER);
	
     // creatting package sprite
	packageSprite=createSprite(width/2,150, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	 // creatting helicopter sprite
	helicopterSprite=createSprite(width/2, 150, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	 // creatting ground sprite
	groundSprite=createSprite(width/2, height-40, width,10);
	groundSprite.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	 // creatting package body
	packageBody = Bodies.circle(width/2 , 150, 5, {restitution:0.5});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	

	//Creating a Ground
	ground = Bodies.rectangle(width/2, 659, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("black");
	packageSprite.x= packageBody.position.x; 
	packageSprite.y= packageBody.position.y;
	drawSprites();
	keyPressed();
 
}

function keyPressed() {
	if (keyCode == DOWN_ARROW) {

		Matter.Body.setStatic(packageBody, false);

	}
}




