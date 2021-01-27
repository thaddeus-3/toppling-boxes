const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ground, box1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(200,400,400,50)
  
 box1 = new Box(230,200,50,50);
  box2 = new Box(200,100,50,70);
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
}