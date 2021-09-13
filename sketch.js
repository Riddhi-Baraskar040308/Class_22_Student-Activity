const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg,towerImg,tower,cannon;



function preload() {
 backgroundImg = loadImage("assets/background.gif")
 towerImg = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 var ground2 = {
   isStatic: true

 }
 
 ground = Bodies.rectangle(0,height-1,width*2,1,ground2);
 World.add(world,ground);

tower = Bodies.rectangle(160,350,150,300,ground2);
World.add(world,tower);
angle = -PI/4
cannon = new Cannon(200,110,130,100,angle)
}

function draw() {
  background(189);
 
  Engine.update(engine);
 image(backgroundImg,0,0,1200,600);
push();
imageMode(CENTER);

 image(towerImg,tower.position.x,tower.position.y,150,300);  
 pop();
 cannon.display()
}
