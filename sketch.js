const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,box1,box2,box3;
var bin;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	paper = new Paper(50,620);
	ground = new Ground(500,690,width,20);
	//box1 = new Dustbin(580,600,20,180);
	//box2 = new Dustbin(740,600,20,180);
	//box3 = new Dustbin(660,680,160,20);
	bin = new Bin(660,600,160,170);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("chartreuse");

  paper.display();
  bin.display();
  ground.display();
  //box1.display();
  //box2.display();
  //box3.display();
 
  
  keyPressed();
  
  drawSprites();
 
}


function keyPressed(){

if(keyDown("UP_ARROW")){

Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70})

}

}

