
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(400,200,10);
	bob2 = new Bob(450,200,10);
	bob3 = new Bob(500,200,10);
	bob4 = new Bob(550,200,10);
	bob5 = new Bob(600,200,10);
	roof = new Roof(400,10,400,10);

	//Create the Bodies Here.


	Engine.run(engine);

	rope1 = new Rope(roof.body,bob1.body)
	rope2 = new Rope(roof.body,bob2.body)
	rope3 = new Rope(roof.body,bob3.body)
	rope4 = new Rope(roof.body,bob4.body)
	rope5 = new Rope(roof.body,bob5.body)

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}