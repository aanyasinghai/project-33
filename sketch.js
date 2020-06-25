var player;
var box1,box2,box3,box4,box5,box6;
var log1,log2;
var ground;
var rope;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  log1 = new Log(560,350,30,400);
  log2 = new Log(760,350,30,400);
  
  box1 = new Box(600,500,50,50);
  box2 = new Box(650,500,50,50);
  box3 = new Box(700,500,50,50);
  box4 = new Box(630,450,50,50);
  box5 = new Box(680,450,50,50);
  box6 = new Box(650,400,50,50);

  player = new Player(100,300,50,50);

  ground = new Ground(500,600,1000,50);
  

  rope = new Rope(player.body,{x:100,y:300})

}

function draw() {
  background(255,255,255);  

  Engine.update(engine)

  log1.display();
  log2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  player.display();

  ground.display();
  
  
  rope.display();

}

function mouseDragged(){
  Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
    rope.attach(player.body);
  }
}

