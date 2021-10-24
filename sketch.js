var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i, play, gameState;
var coin, bomb, energyDrink, power;
var score, cloud;






function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coin = loadImage("coin.png");
  bomb = loadImage("bomb.png");
  energyDrink = loadImage("energyDrink.png");



}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

 leftBoundary.invisible = false;
 leftBoundary.visible = true;
// leftBoundary.invisible = true;
// leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.invisible = false;
}

function draw() {
  background(0);
 gamesate=play;

 
 score=0;
 score= score+frameCount;
 if(gameState===play){ path.velocityY = 4;
  
  boy.x = World.mouseX;

console.log(score);
console.log(frameCount); 





  if(path.y > 400 ){
    path.y = height/2;
  }}
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  spawning();
  drawSprites();
}





function spawning(){

coin.lifetime=400/4;
bomb.lifetime=100;
energyDrink.lifetime=100;

if (boy.collide(coin)||boy.collide(bomb)){
  gameState=nihility;
}

//if (gameState===nihility){
//boy.destroy;
//path.destroy;
//coin.destroy;
//energyDrink.destroy;
//Text("Game Over! Press R to restart. Your score is:" score, 200, 200);



//}

if (keyWentDown("space")){
  gameState="play";
}

}
