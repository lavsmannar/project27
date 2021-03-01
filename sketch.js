
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(360,100,600,50);
	bob1=new Bob(110,550,15);
	bob2=new Bob(230,550,15);
	bob3=new Bob(350,550,15);
	bob4=new Bob(470,550,15);
	bob5=new Bob(590,550,15);
	
	rope1=new Rope(roof,bob1);
	rope2=new Rope(roof,bob2);
	rope3=new Rope(roof,bob3);
	rope4=new Rope(roof,bob4);
	rope5=new Rope(roof,bob5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();
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



