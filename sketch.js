var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxSprite,boxPosition,boxY;
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
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	boxPosition=width/2-100
	boxY=610
	boxLeftSprite=createSprite(boxPosition,boxY,20,100);
	boxLeftSprite.shapeColor=color(255,0,0);
	boxLeftBody=Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true});
	World.add(world,boxLeftBody);

	boxBaseSprite=createSprite(boxPosition+100,boxY+40,200,20);
	boxBaseSprite.shapeColor=color(255,0,0);
	boxBaseBody=Bodies.rectangle(boxPosition+100,boxY+25,200,20,{isStatic:true});
	World.add(world,boxBaseBody);

	boxRightSprite=createSprite(boxPosition+200,boxY,20,100);
	boxRightSprite.shapeColor=color(255,0,0);
	boxRightBody=Bodies.rectangle(boxPosition+200-20,boxY,20,100,{isStatic:true});
	World.add(world,boxRightBody);

	Engine.run(engine);

	var packageSprite_options= {
		restitution:1
	}
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	var ground_options ={
        isStatic: true
    }
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	

  
}


function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false)
		
	}
if(keyCode === LEFT_ARROW) {
	helicopterSprite.x=helicopterSprite.x-20
	translation={x:-20,y:0}
	Matter.Body.translate(packageBody, translation);
}
if(keyCode === RIGHT_ARROW) {
	helicopterSprite.x=helicopterSprite.x+20
	translation={x:20,y:0}
	Matter.Body.translate(packageBody, translation);
}
}




