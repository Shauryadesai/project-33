 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Engine = Matter.Engine;
 var snow,snowImg,bgImg
 var snow= []
 var engine,world;
var maxDrops = 100;
 function preload() {
   bgImg = loadImage("snow3.jpg")
 }
 
 
 function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  if(frameCount % 100 === 0){
    for(var i = 0; i < maxDrops; i++   ){
      snow.push(new Drops(random (0,700), random (0,400)))
    }
    
  }
}

function draw() {
  background(bgImg);
  Engine.update(engine);
for (i = 0 ; i  < maxDrops; i++){
  snow[i].display ();
  snow [i].update()
    
  
}

}