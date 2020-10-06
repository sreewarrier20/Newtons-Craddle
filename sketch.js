
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bob1=new Bob(100,350,30);
bob2=new Bob(160,350,30);
bob3=new Bob(220,350,30);
bob4=new Bob(280,350,30);
bob5=new Bob(340,350,30);


roof1=new Roof(300,100,400,40);


rope1=new Rope(bob1.object,roof1.object,-150,0);
rope2=new Rope(bob2.object,roof1.object,-90,0);
rope3=new Rope(bob3.object,roof1.object,-30,0);
rope4=new Rope(bob4.object,roof1.object,30,0);
rope5=new Rope(bob5.object,roof1.object,90,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();


roof1.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();



 // drawSprites();
 
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.object,bob1.object.position,{x:-80,y:-85});

	}
}

/*
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
*/
