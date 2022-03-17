var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstaculo1,obstaculo2
var obstaculo3,obstaculo4
var obstaculo5,obstaculo6

var cloud, cloudsGroup, cloudImage;

var obstaculo

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
obstaculo1 = loadImage ("obstacle1.png")
obstaculo2 = loadImage ("obstacle2.png")
obstaculo3 = loadImage ("obstacle3.png")
obstaculo4 = loadImage ("obstacle4.png")
obstaculo5 = loadImage ("obstacle5.png")
obstaculo6 = loadImage ("obstacle6.png")

}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  obstaculos();
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();
  
  drawSprites();
}

function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //atribua tempo de vida à variável
    cloud.lifetime = 50
    
    //ajuste a profundidade
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    } 
  }
 function obstaculos() {
  if (frameCount % 60 === 0) {
  obstaculo = createSprite (400,165,10,40);
  obstaculo.velocityX = -6

  var rand = Math.round (random(1,6))

  switch(rand){
    case 1 : obstaculo.addImage (obstaculo1);
             break;
    case 2: obstaculo.addImage (obstaculo2);
             break;
    case 3 : obstaculo.addImage (obstaculo3);
             break;
    case 4 : obstaculo.addImage (obstaculo4);
             break;
    case 5: obstaculo.addImage (obstaculo5);
             break;
    case 6 : obstaculo.addImage (obstaculo6);
             break;

    default : break ;
  }
   obstaculo.scale = 0.7;

 }
}