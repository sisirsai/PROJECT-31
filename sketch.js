
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground3,ground1,ground2,img0;

var particals = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var mkj = 0;

function preload(){
	img0 = loadImage("img.png");
}

function setup() {
	createCanvas(windowWidth, 800);


	engine = Engine.create();
	world = engine.world;

	ground1 = new GROUND(width/2,height,width,20);
	ground2 = new GROUND(width,height/2,10,height);
	ground3 = new GROUND(0,height/2,10,height);

  
	for(var k = 0; k<=width; k+=80){
		divisions.push(new DIVISION(k , height-divisionHeight/2 , 10 , divisionHeight));
	}
	
	for(var j = 40; j<=width; j += 50){
		plinkos.push(new PLINKO(j,75,20));
	
	}
	
	for(var r = 15; r<=width-10; r += 50){
		plinkos.push(new PLINKO(r,175,20));
	
	}
	
	for(var o = 40; o<=width; o += 50){
		plinkos.push(new PLINKO(o,275,20));
	
	}

	for(var a = 15; a<=width-10; a += 50){
		plinkos.push(new PLINKO(a,375,20));
	
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,199,204);
  console.log(mkj);

  mkj  += 50;




for(var v = 0; v <divisions.length; v++){

	divisions[v].display();

}

for(var j = 0; j <particals.length; j++){

	particals[j].display();

}

for(var t = 0; t <plinkos.length; t++){

	plinkos[t].display();

}


if(mkj % 60 === 0){
	particals.push(new PARTICLE(random(100,1100),7,7));
}

ground1.display(48,22,8);
ground2.display(48,22,8);
ground3.display(48,22,8);
 
image(img0,0,0,width=width,5);

}



