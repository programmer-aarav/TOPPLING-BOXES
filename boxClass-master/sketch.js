const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new ground(150,380, 500,20)
    box1 = new Box(200,80,50,50);
    box2=new Box(100,200 ,200,60)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display()
   box2.display()
}