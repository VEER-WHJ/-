//Create variables here
var dog, food
function preload()
{
	//load images here
  dog=loadImage("dogImg.png")
  happy=loadImage("dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  var dog = new Dog(400, 325, 100, 100)
}


function draw() {  

  drawSprites();
  //add styles here

}



