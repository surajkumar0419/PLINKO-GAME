const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionsHeight=300;

var ground;
var boundary1,boundary2,boundary3,boundary4;

function setup() {
  createCanvas(480,800);
  
	engine = Engine.create();
  world = engine.world;
  
  boundary1 = new Ground(2,400,5,800);
  boundary2 = new Ground(478,400,5,800);
  boundary3 = new Ground(240,795,480,10);
  boundary4 = new Ground(240,5,480,10);
  ground = new Ground(245,785,480,10);
  
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionsHeight/2,10,divisionsHeight))
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }  
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));
  }  
}

function draw() {
  background(0);
  Engine.update(engine);
  fill("brown");
  boundary1.display();
  boundary2.display();
  boundary3.display();
  boundary4.display();
  fill("white");
  ground.display();

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(var l=0;l<particles.length;l++){
    particles[l].display();
  }
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
}
