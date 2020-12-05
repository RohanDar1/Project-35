
var dogimg, happyimg;
var database;
var dog, happydog, foodS, foodStock;

function preload()
{
  dogimg = loadImage("images/dogImg.png")
  happyimg = loadImage("images/dogImg1.png")
 


}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250, 250, 50, 50)
  dog.addImage(dogimg);
  dog.scale=0.2

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  

  background ("yellow")

if (keyDown(LEFT_ARROW)){
  writeStock(foodS)
  dog.addImage(happyimg)
}

text ("Food Remaining: "+foodS, 150, 100)
text("Note: Press Left Arrow to Feed Drago", 150, 400)
drawSprites();
}



function readStock(data)
{
foodS = data.val();
}

function writeStock(x){

  if (x<=0){
    x=0
  }
  else {
    x=x-1
  }
  database.ref('/').update({

    Food:x
  })



}
