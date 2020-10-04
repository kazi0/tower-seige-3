var score = 0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg;
var bg = "day.jpg";
var hexagon, sling;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;
var box17,box18,box19,box20,box21;
var box22,box23,box24;
var box25;

function preload() {
  getBackgroundImg();
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hexagon = new Hexagon(50,200);
	
	sling = new Slingshot(hexagon.body,{x:100, y:200});

	ground1 = new Ground(390,305,225,15);
	ground2 = new Ground(690,205,165,15);
  ground3 = new Ground(500,600,1000,15);

	box1 = new Box(300,275,30,40);
	box2 = new Box(330,275,30,40);
	box3 = new Box(360,275,30,40);
	box4 = new Box(390,275,30,40);
	box5 = new Box(420,275,30,40);
	box6 = new Box(450,275,30,40);
	box7 = new Box(480,275,30,40);

	box8 = new Box(330,235,30,40);
	box9 = new Box(360,235,30,40);
	box10 = new Box(390,235,30,40);
	box11 = new Box(420,235,30,40);
	box12 = new Box(450,235,30,40);
  
	box13 = new Box(360,195,30,40);
	box14 = new Box(390,195,30,40);
	box15 = new Box(420,195,30,40);
  
	box16 = new Box(390,155,30,40);

	box17 = new Box(630,165,30,40);
	box18 = new Box(660,165,30,40);
	box19 = new Box(690,165,30,40);
	box20 = new Box(720,165,30,40);
	box21 = new Box(750,165,30,40);	

	box22 = new Box(660,125,30,40);
	box23 = new Box(690,125,30,40);
	box24 = new Box(720,125,30,40);
	
	box25 = new Box(690,85,30,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(backgroundImg)
      background(backgroundImg);

  noStroke();
  textSize(20)
  fill(100,200,100)
  text("Drag the hexagonal stone and release it, to launch it towards the blocks",100, 50)

  noStroke();
  textSize(20)
  fill(140,140,200)
  text("Press space to get a second chance to play",600, 570)

  noStroke();
  textSize(25);
  fill(100,200,100);
  text("Score " + score, width - 200,50);

  drawSprites();
 
  ground1.display();
  ground2.display();
  ground3.display();
  hexagon.display();
  sling.display();

  fill("red");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("yellow");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("pink");
  box13.display();
  box14.display();
  box15.display();

  fill("blue");
  box16.display();

  fill("green")
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  fill("blue")
  box22.display();
  box23.display();
  box24.display();
  
  fill("red")
  box25.display();

  box1.scores();
  box2.scores();
  box3.scores();
  box4.scores();
  box5.scores();
  box6.scores();
  box7.scores();
  box8.scores();
  box9.scores();
  box10.scores();
  box11.scores();
  box12.scores();
  box13.scores();
  box14.scores();
  box15.scores();
  box16.scores();
  box17.scores();
  box18.scores();
  box19.scores();
  box20.scores();
  box21.scores();
  box22.scores();
  box23.scores();
  box24.scores();
  box25.scores();

}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
  if(keyCode === 32 && hexagon.body.speed < 1){
      sling.attach(hexagon.body);
      Matter.Body.setPosition(hexagon.body,{x:50,y:200});
  }
}

async function getBackgroundImg(){

  //fetch the timezone of a country
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  console.log(response);
  
  var responseJson = await response.json();

  var datetime = responseJson.datetime;
  console.log(datetime);

  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour>06 && hour<18){
      bg = "day.jpg";
  }else{
      bg = "night.png";
  }
      
    backgroundImg = loadImage(bg);

}