const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    //new is keyword: which tells the machine that it has to create an object
    //after new we're supposed to write the class name
    //() --> it means machine will call the constructor
    //new <CLASS Name>()
    var ground_options = {
        isStatic: true
    }

    ground = Bodies.rectangle(200, 380, 400, 40, ground_options);
    World.add(world, ground);
    box = new Box(100, 100, 40, 40);
    console.log(box.body);

}

function draw() {
    background(0);
    Engine.update(engine);
    box.display();
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 40);

}