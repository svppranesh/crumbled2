
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var circle,ground,rect;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rect=new dustbin(600,640,200,200);
	  //rect1= new dustbin(600,640,200,20);
	  //rect2= new dustbin(500,600,20,100);
	  //rect3= new dustbin(700,600,20,100);
	
	 circle=new paper(100,600,70);

	 ground=new Ground(50,500,800,10);
	 rectMode(CENTER);


	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  rect.display();
//   rect1.display();
//   rect2.display();
// rect3.display();

  circle.display();
 
 ground.display();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){
Matter.Body.applyForce(circle.body,circle.body.position,{x:500,y:-1000});

}

}



