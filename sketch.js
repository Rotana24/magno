const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var tree,treeImage,ground;
var groundSprite;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12, mango13, mango14, mango15, mango16, mango17, mango18, mango19, mango20, mango21;
var boy, boyImage;
var stone, hand;

function preload()
{
	treeImage = loadImage("sprites/tree.png.");
	boyImage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	tree = createSprite(700,330,10,10);
	tree.addImage(treeImage);
	tree.scale = 0.5;
	boy = createSprite(200,580,100,100);
	boy.addImage(boyImage);
	boy.scale = 0.1;

	mango1 = new Mango(580,320,30);
	mango2 = new Mango(580,250,30);
	mango3 = new Mango(620,280,30);
	mango4 = new Mango(680,300,30);
	mango5 = new Mango(640,220,30);
	mango6 = new Mango(750,100,30);
	mango7 = new Mango(700,150,30);
	mango8 = new Mango(830,180,30);
	mango9 = new Mango(890,300,30);
	mango10 = new Mango(910,290,30);
	mango11 = new Mango(720,220,30);
	mango12 = new Mango(980,160,30);
	stone = new Rock(150,500,30);

	//Create the Bodies Here.
	var options={
		isStatic:true,
		resitution:0,
		friction:1
	}
	ground = Bodies.rectangle(width/2,650,width,10,options);
	World.add(world,ground);
	groundSprite=createSprite(ground.position.x, ground.position.y, width,10);
	groundSprite.shapeColor=color("yellow");
	hand = new Launcher(stone.body,{x:150,y:520});

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	background(0);
	imageMode(CENTER);
	rectMode(CENTER);
	drawSprites();
	detectollision(stone,mango1);
	detectollision(stone,mango2);
	detectollision(stone,mango3);
	detectollision(stone,mango4);
	detectollision(stone,mango5);
	detectollision(stone,mango6);
	detectollision(stone,mango7);
	detectollision(stone,mango8);
	detectollision(stone,mango9);
	detectollision(stone,mango10);
	detectollision(stone,mango11);
	detectollision(stone,mango12);
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	hand.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	hand.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420})
	  hand.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r){
  	  Matter.Body.setStatic(lmango.body,false);
    }
  }