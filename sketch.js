const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

 var ground,bridge,leftwall,rightwall,jointPoint,jointLink;

stones=[];

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
  ground = new Base(0,height-10,width*2,20,"grey",true);

  leftwall = new Base(100,height/2+50,300,100,"grey",true);
  
  rightwall = new Base(width-100,height/2+50,600,100,"grey",true);
  
  bridge = new Bridge(15,{x:width/2-500,y:height/2});
  jointPoint=new Base(width-400,height/2+10,40,20,"grey",true);

  //create bridge

  //create jointPoint

  //add the bridgebody & jointPoint in MAtter.composite.add() // Hint2
Matter.Composite.add(bridge.body,jointPoint);
jointLink=new Link(bridge,jointPoint);
  //create stones at random position using for loop // Hint 3
for(var i=0;i<=8;i++){
  var x=random(width/2-200,width/2+300);
  var y=random(-10,140);
  var stone=new Stone(x,y,80,80);
  stones.push(stone);
  
}
}

function draw() {
  background("lightblue");
  Engine.update(engine);
 ground.show();
 leftwall.show();
 rightwall.show();
 bridge.show();

// loop to display stones
for(var stone of  stones){
  stone.show();
  
}

}
