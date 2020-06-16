const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var ground;
var divisionHeight = 300;
var divisions = [];
var plinkos = [];
var particles = [];


function setup() {
  createCanvas(880,800);

  engine = Engine.create();
  world = engine.world;


  ground = new Ground(470, 790, 980, 20);

  for(var k = 0; k <= width; k = k+80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var x = 40; x <= width; x = x + 50){
    plinkos.push(new Plinko(x, 75,true));
  }
  for(var x = 15; x <= width; x = x + 50){
    plinkos.push(new Plinko(x, 175, true));
  }
  for(var x = 40; x <= width; x = x + 50){
    plinkos.push(new Plinko(x, 275, true));
  }
  for(var x = 15; x <= width; x = x + 50){
    plinkos.push(new Plinko(x, 375, true));
  }

}



function draw() {
  background("#33FFFF");

 /* if (frameCount % 50 === 0){
    this.color  = ['#E1C699','#4d4dff','#32CD32','#FC7233','#E4324C','#5BC0EB',"#FDE74C",'#9BC53D','#ff073a',"#FC94AF"]
    bgcolor = fill(random(this.color));
}  */
 
  Engine.update(engine);
  

  
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display("#FF3399");
  }

 
  for(var x = 0; x < plinkos.length; x++){
    plinkos[x].display("#FFFFF");
  }

  
  if(frameCount % 30 === 0){
    particles.push(new Particle(random(100,850),10,false));
    particles.push(new Particle(random(100,850),10,false));
  }

  
  for(var i =  0; i < particles.length; i++){
    particles[i].display();
  }
  ground.display();
}

//drawSprites();