
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
  bobDiameter=40;
  a=width/2;
	b=height/4+300;
	//Create the Bodies Here.
 roofObject=new Roof(width/2,height/4,width/7,20)

 bobObject1=new Bob(a-40*2,b,40)
 bobObject2=new Bob(a-40*1,b,40)
 bobObject3=new Bob(a,b,40)
 bobObject4=new Bob(a+40*1,b,40)
 bobObject5=new Bob(a+40*2,b,40)
 rope1=new Rope(bobObject1.body,roofObject.body,-40*2,0)
 rope2=new Rope(bobObject2.body,roofObject.body,-40*1,0)
 rope3=new Rope(bobObject3.body,roofObject.body,0,0)
 rope4=new Rope(bobObject4.body,roofObject.body,40,0)
 rope5=new Rope(bobObject5.body,roofObject.body,40*2,0)




 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
 bobObject2.display();
  bobObject3.display();
 bobObject4.display();
  bobObject5.display();
 
  

  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  }
}

