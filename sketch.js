
var RunnerImg
var pathImg
var path, runner



function preload(){
  //pre-load images
  RunnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,600);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(70,580,20,20);
  runner.addAnimation("running",RunnerImg)
  runner.scale = 0.08
  
}

function draw() {
  background(0);

  runner.x = World.mouseX;

  path.velocityY = 4;
  
  edges= createEdgeSprites();
  runner.collide(edges);

  if(path.y > 400 ){
    path.y = height/2;
  }

  drawSprites();
  
}
