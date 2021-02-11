var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 15 , {restitution:0, isStatic:true});
	World.add(world, starBody);
	
	fairyBody = Bodies.rectangle(mouseX , 520 , 50 , 10 , {restitution:0, isStatic:true});
	World.add(world, fairyBody);
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Matter.Body.setPosition(fairyBody,{x:mouseX + 120,y:500})

  fairy.x = mouseX

  star.x = starBody.position.x;
  star.y = starBody.position.y;

//   rectMode(CENTER);
//   rect(fairyBody.position.x,fairyBody.position.y,50,10)

  drawSprites();

}

function keyPressed() {
	//write code here();
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false)
	}
}
