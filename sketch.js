var bg,bgImg;
var player, shooterImg, shooter_shooting;
var bullet;
var game;


function preload(){
  

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {


  createCanvas(windowWidth,windowHeight);

 
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

game = new Game();

}

function draw() {
  background(0); 
  game.play();
  drawSprites();
}
