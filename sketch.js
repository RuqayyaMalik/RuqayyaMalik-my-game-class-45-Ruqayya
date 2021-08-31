var bg, bgimg;
var boy,boyimg;

function preload() {

  bgimg = loadImage("water.bg.jpg")
  boyimg = loadImage("boy.png")
}

function setup() {
  createCanvas(1000,500);

  bg = createSprite(500,250,50,50)
  bg.addImage(bgimg)
  
  boy = createSprite(550,300,50,50)
  boy.addImage(boyimg)
  boy.scale = 0.4;
}

function draw() {
  background("lightblue");

  boy.display()
 

  drawSprites()
}