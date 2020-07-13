
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var dustbin;
var chain;
 var drops=[]
function setup() {
  var cansvas=createCanvas(1200,600);
   engine = Engine.create();
   world = engine.world;
   fill("black")
  ground = new Ground(600,590,1200,20);
  paperball = new Paper(100,200,20);
  side1 = new Dustbin(800,500,20,162)
	side2 = new Dustbin(950,500,20,162)
	side3 = new Dustbin(875,570,170,20)
  
  chain = new Launcher(paperball.body,{x:200,y:300})
}
 
function draw() {
  background(255,237,61); 
  Engine.update(engine);
  /*
  drops.push(new Raindrop(random(10,790),0,2,7));
  for (var i=0; i<drops.length;i=i+1){
    drops[i].display();

  }
  */
  chain.display();
  side1.display();
  side2.display();
  side3.display();
  ground.display();
  paperball.display();
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(paperball.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    chain.fly()
}
