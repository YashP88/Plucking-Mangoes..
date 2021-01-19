
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground
var stone,stoneImage
var tree
var boy,boyImage
var mango1,mango2,mango3,mango4
var launcher

function preload()
{
    boyImage=loadImage("Images/boy.png");	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  boy=createSprite(250,550,200,10)
  boy.addImage(boyImage);
  boy.scale=0.12;
  
  ground = new Ground(600,630,1200,20);
  mango1 = new Mango(510,250,30);
  mango2 = new Mango(595,160,30);
  mango3 = new Mango(690,260,30);
  mango4 = new Mango(790,220,30);
  stone = new Stone(190,490,30);
  tree = new Tree(640,340,500,610)
  launcher = new Launcher(stone.body,{x:190,y:490});
  
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  boy = Bodies.rectangle(200,20,{isStatic:true});
  World.add(world,boy)
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone.display();
  ground.display();
  launcher.display();
  

  
  
  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}

function detectCollision(Lstone,Lmango){
  mangoBodyPosition=Lmango.body.position;
  stoneBodyPosition=Lstone.body.position;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=Lmango.r+Lstone.r){
    Matter.Body.setStatic(Lmango.body,false);
  }

}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:235,y:420})
    launcher.attach(stone.body);
  }
}


