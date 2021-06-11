//Declaring Global Variables{

var gameState = 1;
var invisible;
var invisible2;
var EnemyShip, EnemyShipImage;
var EnemyShip1, EnemyShip2, EnemyShip3, EnemyShip4, EnemyShip5;
var game;
var bg3, bg3Image;
var upBorder, downBorder, rightBorder, leftBorder;
var missionFail, missionFailImage
var invisible5;
var landed, landedImage;
var bg4, bg4Image;
var invisibleGround;
var missionComplete, completeImage
var invisible6;
var alertText1, alertText1Image;
var alertPlay, alertImage;

var bg1, bg1Img;
var bg2, bg2Img;
var rocket1, rocket1Image;
var rocket2, rocket3;
var ast1, ast1Image;
var missionStart, missionStartIMG
var playButton, playImage;

var enemy, enemyImage;
var Earth, earthImg
var Start, startImg
var astStart, astStartImg
var hill, hillImage;
var invisible3;
var invisible4;
var moon, moonImage;
var astBack, astBackImage;
var invisibleObj

var land, landImage;
var win, winImage;
var missionOver

//}


function preload(){

    //Loading images to the code

    bg1Img = loadImage("images/before1.png");

   bg2img= loadImage("images/background.jpg");

   bg3Image = loadImage("images/background1.jpg");

   bg4Image = loadImage("images/bg4.jpg")

   rocket1Image = loadImage("images/rocket1.png")

   playImage = loadImage("images/playButton.png");

   hillImage = loadImage("images/hill.png")

   landImage = loadImage("images/LAND.png");

   astBackImage = loadImage("images/astroBack.png");


alertText1Image = loadImage("images/alertText1.png");

alertImage = loadImage("images/alert.png");



   


   //Creating astronaut walking animation
   ast1Image = loadAnimation("images/Ast1-0/ast1.png", "images/Ast1-0/ast2.png", 
   "images/Ast1-0/ast3.png", "images/Ast1-0/ast4.png", "images/Ast1-0/ast5.png",
   "images/Ast1-0/ast6.png", "images/Ast1-0/ast7.png", "images/Ast1-0/ast8.png", 
   "images/Ast1-0/ast9.png", "images/Ast1-0/ast10.png", "images/Ast1-0/ast11.png",
   "images/Ast1-0/ast12.png", "images/Ast1-0/ast13.png", "images/Ast1-0/ast14.png",
   "images/Ast1-0/ast15.png", "images/Ast1-0/ast16.png", "images/Ast1-0/ast17.png",
   "images/Ast1-0/ast18.png", "images/Ast1-0/ast19.png", "images/Ast1-0/ast20.png",
   "images/Ast1-0/ast21.png", "images/Ast1-0/ast22.png", "images/Ast1-0/ast23.png",
   "images/Ast1-0/ast24.png", "images/Ast1-0/ast25.png", "images/Ast1-0/ast26.png",
   "images/Ast1-0/ast27.png", "images/Ast1-0/ast28.png", "images/Ast1-0/ast29.png",
   "images/Ast1-0/ast30.png", "images/Ast1-0/ast31.png", "images/Ast1-0/ast32.png",
   "images/Ast1-0/ast33.png","images/Ast1-0/ast34.png","images/Ast1-0/ast35.png",
   "images/Ast1-0/ast36.png", "images/Ast1-0/ast37.png",)
    
    missionStartIMG = loadImage("images/MissionStarted.png");
     
    //stone obstacle animation creation
    enemyImage = loadAnimation("images/Enemy/anemy1.png", "images/Enemy/anemy2.png",
    "images/Enemy/anemy3.png","images/Enemy/anemy4.png","images/Enemy/anemy5.png", 
    "images/Enemy/anemy6.png", "images/Enemy/anemy7.png","images/Enemy/anemy8.png",
    "images/Enemy/anemy9.png","images/Enemy/anemy10.png","images/Enemy/anemy11.png",
    "images/Enemy/anemy12.png","images/Enemy/anemy13.png","images/Enemy/anemy14.png",
    "images/Enemy/anemy15.png", "images/Enemy/anemy16.png","images/Enemy/anemy17.png",
    "images/Enemy/anemy18.png", "images/Enemy/anemy19.png", "images/Enemy/anemy20.png",)

    //Earth animation creation.
    
    

     EnemyShipImage = loadImage("images/obstacles/spaceship2.png");

     startImg = loadImage("images/Start.jpeg");


     //Making an animation of astronaut dancing 
     astStartImg = loadAnimation("images/astStart/astDance-0.png", "images/astStart/astDance-1.png",
     "images/astStart/astDance-2.png","images/astStart/astDance-3.png",
     "images/astStart/astDance-4.png", "images/astStart/astDance-5.png",
     "images/astStart/astDance-6.png","images/astStart/astDance-7.png",
     "images/astStart/astDance-8.png","images/astStart/astDance-9.png",
     "images/astStart/astDance-10.png","images/astStart/astDance-11.png",
     "images/astStart/astDance-12.png","images/astStart/astDance-13.png",
     "images/astStart/astDance-14.png","images/astStart/astDance-15.png",
     "images/astStart/astDance-16.png","images/astStart/astDance-17.png",
     "images/astStart/astDance-18.png","images/astStart/astDance-19.png",
     "images/astStart/astDance-20.png","images/astStart/astDance-21.png",
     "images/astStart/astDance-22.png","images/astStart/astDance-23.png",
     "images/astStart/astDance-24.png","images/astStart/astDance-25.png",
     "images/astStart/astDance-26.png","images/astStart/astDance-27.png",
     "images/astStart/astDance-28.png","images/astStart/astDance-29.png",
     "images/astStart/astDance-30.png","images/astStart/astDance-31.png",
     "images/astStart/astDance-32.png","images/astStart/astDance-33.png",
     "images/astStart/astDance-34.png","images/astStart/astDance-35.png",
     "images/astStart/astDance-36.png","images/astStart/astDance-37.png",
     "images/astStart/astDance-38.png","images/astStart/astDance-39.png",
     "images/astStart/astDance-40.png",)

     missionFailImage = loadImage("images/missionFailed.png")

     moonImage = loadAnimation("images/moon/MOON-unscreen-0.png","images/moon/MOON-unscreen-1.png",
     "images/moon/MOON-unscreen-2.png", "images/moon/MOON-unscreen-3.png", "images/moon/MOON-unscreen-4.png",
     "images/moon/MOON-unscreen-4.png", "images/moon/MOON-unscreen-5.png", "images/moon/MOON-unscreen-6.png",
     "images/moon/MOON-unscreen-7.png", "images/moon/MOON-unscreen-8.png", "images/moon/MOON-unscreen-9.png",
     "images/moon/MOON-unscreen-10.png", "images/moon/MOON-unscreen-11.png", "images/moon/MOON-unscreen-12.png",
     "images/moon/MOON-unscreen-13.png", "images/moon/MOON-unscreen-14.png", "images/moon/MOON-unscreen-15.png", 
     "images/moon/MOON-unscreen-16.png", "images/moon/MOON-unscreen-17.png", "images/moon/MOON-unscreen-18.png",
     "images/moon/MOON-unscreen-19.png", "images/moon/MOON-unscreen-20.png", "images/moon/MOON-unscreen-21.png", 
     "images/moon/MOON-unscreen-22.png", "images/moon/MOON-unscreen-23.png", "images/moon/MOON-unscreen-24.png",
     "images/moon/MOON-unscreen-25.png", "images/moon/MOON-unscreen-26.png", "images/moon/MOON-unscreen-27.png",
     "images/moon/MOON-unscreen-28.png", "images/moon/MOON-unscreen-29.png", "images/moon/MOON-unscreen-30.png",
     "images/moon/MOON-unscreen-31.png", "images/moon/MOON-unscreen-32.png", "images/moon/MOON-unscreen-33.png",
     "images/moon/MOON-unscreen-34.png", "images/moon/MOON-unscreen-35.png", "images/moon/MOON-unscreen-36.png",
     "images/moon/MOON-unscreen-37.png", "images/moon/MOON-unscreen-38.png", "images/moon/MOON-unscreen-39.png",
     "images/moon/MOON-unscreen-40.png","images/moon/MOON-unscreen-41.png","images/moon/MOON-unscreen-42.png",
     "images/moon/MOON-unscreen-43.png","images/moon/MOON-unscreen-44.png","images/moon/MOON-unscreen-45.png",
     "images/moon/MOON-unscreen-46.png","images/moon/MOON-unscreen-47.png","images/moon/MOON-unscreen-48.png",
     "images/moon/MOON-unscreen-49.png","images/moon/MOON-unscreen-50.png","images/moon/MOON-unscreen-51.png",
     "images/moon/MOON-unscreen-52.png","images/moon/MOON-unscreen-53.png","images/moon/MOON-unscreen-54.png",
     "images/moon/MOON-unscreen-55.png","images/moon/MOON-unscreen-56.png","images/moon/MOON-unscreen-57.png",
     "images/moon/MOON-unscreen-58.png","images/moon/MOON-unscreen-59.png","images/moon/MOON-unscreen-60.png",
     "images/moon/MOON-unscreen-61.png","images/moon/MOON-unscreen-62.png","images/moon/MOON-unscreen-63.png",
     "images/moon/MOON-unscreen-64.png","images/moon/MOON-unscreen-65.png","images/moon/MOON-unscreen-66.png",
     "images/moon/MOON-unscreen-67.png","images/moon/MOON-unscreen-68.png","images/moon/MOON-unscreen-69.png"
     )
     


      

     
    missionOver = loadImage("images/MISSIONACCOMPLISHED.png")

     

}
function setup(){
    //The canvas which can be opened in any device
  createCanvas(displayWidth, displayHeight);

    // background creation and changes
    bg1 = createSprite(width/2, height/2, 20, 20);
    bg1.addImage(bg1Img)
    bg1.scale = 3

    bg2 = createSprite(width/2, height/2, 20, 20);
    bg2.addImage(bg2img);
    bg2.scale = 0.3;
    bg2.visible = false;

    bg3 = createSprite(width/2, height/2, 20, 20);
    bg3.addImage(bg3Image);
    bg3.scale = 0.4;
    bg3.visible  = false;

    bg4 = createSprite(width/2, height/2, 20 ,20);
    bg4.addImage(bg4Image)
    bg4.scale = 1.2;
    bg4.visible = false;

    //borders so that the ship is not able to go out of boundary
    //this function is used as game adaptivity.
    upBorder = createSprite(width/2, height/2-385, width, 5)
    upBorder.shapeColor = "red";
  upBorder.visible = false;

  downBorder = createSprite(width/2, height/2+385, width, 5)
  downBorder.shapeColor = "red";
  downBorder.visible = false;

  rightBorder = createSprite(width/2+680, height/2, 5, height)
  rightBorder.shapeColor = "red";
  rightBorder.visible = false;

  leftBorder = createSprite(width/2-680, height/2, 5, height);
  leftBorder.shapeColor = "red";
  leftBorder.visible = false

  borders = [upBorder, rightBorder, leftBorder, downBorder];

  alertText1 = createSprite(width/2-400, height/2-300, 20, 20);
  alertText1.addImage(alertText1Image)
  alertText1.scale = 0.5;

  alertPlay = createSprite(width/2, height/2-350, 20 ,20);
  alertPlay.addImage(alertImage);
  alertPlay.scale = 0.1;
   alertPlay.visible = false;

    //creating 1st scene Spaceship
    rocket1 = createSprite(width/2+300, height/2+250, 20, 20);
    rocket1.addImage(rocket1Image)
    rocket1.scale = 0.8;

    //Alienships
    EnemyShip = createSprite(width/2+420, height/2+200, 20, 20);
    EnemyShip.addImage(EnemyShipImage);
    EnemyShip.scale = 0.5
    EnemyShip.visible = false;  

    EnemyShip1 = createSprite(width/2+420, height/2-200, 200, 200);
    EnemyShip1.addImage(EnemyShipImage);
    EnemyShip1.scale = 0.5
    EnemyShip1.visible = false;  

    
    EnemyShip3 = createSprite(width/2+620, height/2+100, 200, 200);
    EnemyShip3.addImage(EnemyShipImage);
    EnemyShip3.scale = 0.5
    EnemyShip3.visible = false;  

    EnemyShip4 = createSprite(width/2+620, height/2-250, 200, 200);
    EnemyShip4.addImage(EnemyShipImage);
    EnemyShip4.scale = 0.5
    EnemyShip4.visible = false;  

//down center
   enemy = createSprite(width/2, height/2+500, 20, 20);
    enemy.addAnimation("enemy", enemyImage);


//down
    enemy1 = createSprite(width/2+300, height/2-500, 20, 20);
    enemy1.addAnimation("enemy", enemyImage);

//down
    enemy2 = createSprite(width/2+600, height/2+500, 20, 20);
    enemy2.addAnimation("enemy", enemyImage);

//down   
    enemy3 = createSprite(width/2-300, height/2-500, 20, 20);
    enemy3.addAnimation("enemy", enemyImage);

//down
    enemy4 = createSprite(width/2-600, height/2+500, 20, 20);
    enemy4.addAnimation("enemy", enemyImage);





   

    

   

// astronaut in the first scene running animation added to the sprite 'ast1'.
    ast1 = createSprite(width/2-250, height/2+200, 20, 20);
    ast1.addAnimation("ast", ast1Image);
    ast1.scale= 0.5

    //The text displayed when astronaut climbs the space ship in the scene 1.
    missionStart = createSprite(width/2, height/2, 20, 20);
    missionStart.addImage(missionStartIMG);
    missionStart.visible = false;

    //secret functions done for making game realistic
    invisible = createSprite(width/2+500, height/2+200, 20 ,20);
    invisible.visible = false;

    invisible2 = createSprite(width/2+500, height/2-400, 20 ,20);
    invisible.visible = false;

    invisible3 = createSprite(width/2+676, height/2, 4, height);
    invisible3.visible = false;

    invisible4 = createSprite(width/2-550, height/2, 4, height);
   invisible4.visible = false;

    invisible5 = createSprite(width/2+250, height/2-330, 6, height);
    invisible5.visible = false;

    invisible6 = createSprite(width/2, height/2, width, 10);
    invisible6.visible = false;

    invisibleGround = createSprite(width/2, height/2+100, 200 ,20)
    invisibleGround.shapeColor = "red";
    invisibleGround.visible = false;

    invisibleObj = createSprite(width/2+150, height/2+350, 200 ,20)
    invisibleObj.shapeColor = "red";
    invisibleObj.visible = false;


    //The '2nd scene' spaceship
    rocket2 = createSprite(width/2 - 660, height/2, 60, 60)
    rocket2.addImage(rocket1Image);
    rocket2.scale = 0.4;
    rocket2.visible = false;

    rocket3 = createSprite(width/2 - 660, height/2, 60, 60)
    rocket3.addImage(rocket1Image);
    rocket3.scale = 0.3;
    rocket3.visible = false;

    rocket4 = createSprite(width/2+150, height/2-450, 60, 60)
    rocket4.addImage(rocket1Image);
    rocket4.scale = 0.8;
    rocket4.visible = false;




    // first page play button page creation 
    Start = createSprite(width/2, height/2, 20, 20);
    Start.addImage(startImg);
    Start.scale = 1.2;

    //astronaut animation created 
   astStart = createSprite(width/2-390, height/2+2, 20, 20);
  astStart.addAnimation("astStart", astStartImg);
  astStart.scale = 1.5

  // play button made in the first page to start the game
    playButton = createSprite(width/2+200, height/2+250);
    playButton.addImage(playImage);
    playButton.scale = 0.5;

    //secret hill made to make the game realistic
    hill = createSprite(width/2-450, height/2+180, 20, 20);
    hill.addImage(hillImage);
    hill.scale = 2.9

    //mission fail text when you lose
    missionFail = createSprite(width/2, height/2, 20, 20);
    missionFail.addImage(missionFailImage);
    missionFail.visible = false;
 
   //rocket 2 colider
    rocket2.setCollider("rectangle",0,0,rocket2.width,rocket2.height);
    rocket2.debug = false;

    //enemyships colider
   EnemyShip.setCollider("rectangle",0,0,300, 300);
    EnemyShip.debug = false;

    EnemyShip1.setCollider("rectangle",0,0,300, 300);
    EnemyShip1.debug = false;

    EnemyShip3.setCollider("rectangle",0,0,300, 300);
    EnemyShip1.debug = false;

    EnemyShip4.setCollider("rectangle",0,0,300, 200);
    EnemyShip1.debug = false;
  
   
    moon = createSprite(width/2+450, height/2, 30, 30);
    moon.addAnimation("moon" ,moonImage);
    moon.scale = 1.7
   moon.visible = false;

    land = createSprite(width/2, height/2, 30, 30);
    land.addImage(landImage);
    land.visible = false;

 //   landed = createSprite(width/2, height/2, 20, 20);
    //landed.addAnimation("land", landedImage);
    //landed.scale = 3.5
   //landed.visible = false;

   astBack = createSprite(width/2-300, height/2+150);
   astBack.addImage(astBackImage)
   astBack.visible = false;

  // win = createSprite(width/2, height/2, 20, 20);
  // win.addAnimation("Won", winImage)

  missionComplete = createSprite(width/2, height/2-170, 30, 30);
  missionComplete.addImage(missionOver);
  missionComplete.visible = false;

EnemyShip.debug = false;
EnemyShip1.debug = false;
EnemyShip3.debug = false;
EnemyShip4.debug = false;


   


}
function draw(){
    background(0)

  //  game = new Game();
   // game.getState();
   // game.start();

  

   rocket2.collide(upBorder);
   
   rocket2.collide(downBorder);
   
   rocket2.collide(rightBorder);
   
   rocket2.collide(leftBorder);

  

//game state 1 declared
   if(gameState === 1){
       
    
 //astronaut speed.
    ast1.velocityY = 0;

    //rocket speed
    rocket2.velocityY = 0;

  //  rocket3.collide(moon);


//rocket front of the text mission started 
    rocket1.depth = missionStart.depth;
    rocket1.depth = rocket1.depth + 1;

    missionFail.depth = moon.depth;
    missionFail.depth = missionFail.depth + 1;



// secret code to make astronaut sit inside the space ship
    if(ast1.isTouching(invisible)){
        ast1.visible = false;
        missionStart.visible = true;
        rocket1.velocityY = -3;

        EnemyShip.velocityX = 0
       EnemyShip1.velocityX = 0
      
       EnemyShip3.velocityX = 0
       EnemyShip4.velocityX = 0
    

       EnemyShip.velocityY = 0
       EnemyShip1.velocityY = 0
     
       EnemyShip3.velocityY = 0
       EnemyShip4.velocityY = 0
  


    }
   

    //change of 1st scene to 2nd scene 
    if(rocket1.isTouching(invisible2)){
        rocket1.destroy();
        missionStart.destroy();
        bg1.destroy();
        bg2.visible = true;
        rocket2.visible = true;
        EnemyShip.visible = true;
        EnemyShip1.visible = true;
      
        rocket2.velocityX = 4;
        EnemyShip.velocityX = -7;
        EnemyShip1.velocityX = -5;
        alertText1.destroy();
        alertPlay.visible = true;
        
       // enemy.visible = true;


    }

    if(rocket4.isTouching(invisibleGround)){

        astBack.visible = true;
    
    }
    if(rocket4.isTouching(invisibleObj)){

        rocket4.velocityX = 0;
        rocket4.velocityY = 0;

        missionComplete.visible = true;
    }

    if(rocket3.isTouching(enemy)){
        rocket3.destroy();
        missionFail.visible = true;
    }

    if(rocket3.isTouching(enemy1)){
        rocket3.destroy();
        missionFail.visible = true;
    }
    if(rocket3.isTouching(enemy2)){
        rocket3.destroy();
        missionFail.visible = true;
    }
    if(rocket3.isTouching(enemy3)){
        rocket3.destroy();
        missionFail.visible = true;
    }
    if(rocket3.isTouching(enemy4)){
        rocket3.destroy();
        missionFail.visible = true;
    }
    





   }

   //things to happen when pressed up arrow on keyboard
   if(keyDown("up")){
       rocket2.velocityY = -5;
       rocket2.velocityX = 0
   }

   //things to happen when pressed down arrow on keyboard
   if(keyDown("down")){
       rocket2.velocityY = 5;
       rocket2.velocityX = 0;
   }

   //things to happen when pressed right arrow on keyboard
   if(keyDown("right")){
       rocket2.velocityX = 5;
   }
   if(keyDown("left")){
    rocket2.velocityX = -6.5;
}

   //things to happen when pressed up arrow on keyboard
   if(keyDown("w")){
    rocket3.velocityY = -5;
    rocket3.velocityX = 0
}

//things to happen when pressed down arrow on keyboard
if(keyDown("s")){
    rocket3.velocityY = 5;
    rocket3.velocityX = 0;
}

//things to happen when pressed right arrow on keyboard
if(keyDown("d")){
    rocket3.velocityX = 5;
    rocket3.velocityY = 0;
}
if(keyDown("a")){
    rocket3.velocityX = -5;
    rocket3.velocityY = 0;
}


   

//when pressed play button at starting:
   if(mousePressedOver(playButton)){
   
       Start.visible = false;
       playButton.visible = false;
       rocket2.velocityX = 0;
       rocket3.velocityX = 0;
       rocket2.velocityY = 0;
       rocket3.velocityY = 0;
       
       ast1.velocityX = 5;
       hill.destroy();
       astStart.destroy();
       EnemyShip.velocityX = 0
       EnemyShip1.velocityX = 0
     
       EnemyShip3.velocityX = 0
       EnemyShip4.velocityX = 0


       EnemyShip.velocityY = 0
       EnemyShip1.velocityY = 0
     
       EnemyShip3.velocityY = 0
       EnemyShip4.velocityY = 0
       
    


   }

   if(keyDown("enter")){
    Start.visible = false;
    playButton.visible = false;
    rocket2.velocityX = 0;
    rocket3.velocityX = 0;
    rocket2.velocityY = 0;
    rocket3.velocityY = 0;
    
    ast1.velocityX = 5;
    hill.destroy();
    astStart.destroy();
    EnemyShip.velocityX = 0
    EnemyShip1.velocityX = 0
  
    EnemyShip3.velocityX = 0
    EnemyShip4.velocityX = 0


    EnemyShip.velocityY = 0
    EnemyShip1.velocityY = 0
  
    EnemyShip3.velocityY = 0
    EnemyShip4.velocityY = 0
   }



   //change of 2nd scene to 3d scene
   if(rocket2.isTouching(invisible3)){
     rocket2.destroy();
    bg2.destroy();
    bg3.visible = true;
    rocket3.visible = true;
    rocket3.velocityX = 5
    EnemyShip.destroy();
    EnemyShip1.destroy();
    moon.visible = true;
    
    enemy.velocityY = -2
    enemy1.velocityY = +3

    enemy2.velocityY = -1
    enemy3.velocityY = +3


    enemy4.velocityY = -4

   

    

    
    EnemyShip3.destroy();
    EnemyShip4.destroy();
    
   }

 
 enemy.debug = false;
 enemy1.debug = false;
 enemy2.debug = false;
 enemy3.debug = false;
 enemy4.debug = false;

 enemy.setCollider("rectangle",0,0,200, 100);
 enemy1.setCollider("rectangle",0,0,200, 100);
 enemy2.setCollider("rectangle",0,0,200, 100);
 enemy3.setCollider("rectangle",0,0,200, 100);
 enemy4.setCollider("rectangle",0,0,200, 100);
  
   //secret code for enemy ship display
   if(EnemyShip.isTouching(invisible4)){
       EnemyShip3.velocityX = -7;
       EnemyShip4.velocityX = -6;
    

       EnemyShip3.visible = true;
       EnemyShip4.visible = true;
     
   }

   if(rocket3.isTouching(invisible5)){
       rocket3.velocityY = 0;
       rocket3.velocityX = 0
       invisible5.destroy();
       land.destroy();
    invisible5.destroy();
    rocket3.destroy();
    moon.destroy();
 //   landed.visible = true;
    bg4.visible = true;
    rocket4.velocityY = 2
    rocket4.visible = true;
    enemy.destroy();
    enemy1.destroy();
    enemy2.destroy();
    enemy3.destroy();
    enemy4.destroy();
    

      
   }

  


 

    //draw the sprites

 

    //end state of the game
    //what should happen if a player loses the game
    if(EnemyShip.isTouching(rocket2)){
        rocket2.destroy();
        missionFail.visible = true;
        EnemyShip.destroy();
        EnemyShip1.destroy();
       
        EnemyShip3.destroy();
        EnemyShip4.destroy();
       

    }

    if(EnemyShip1.isTouching(rocket2)){
        rocket2.destroy();
        missionFail.visible = true;
        EnemyShip.destroy();
        EnemyShip1.destroy();
    
        EnemyShip3.destroy();
        EnemyShip4.destroy();
      
        
    }
    
       
  
    
    if(EnemyShip3.isTouching(rocket2)){
        rocket2.destroy();
        missionFail.visible = true;
        EnemyShip.destroy();
        EnemyShip1.destroy();
       
        EnemyShip3.destroy();
        EnemyShip4.destroy();
     
      
        
    }
    if(EnemyShip4.isTouching(rocket2)){
        rocket2.destroy();
        missionFail.visible = true;
        EnemyShip.destroy();
        EnemyShip1.destroy();
       
        EnemyShip3.destroy();
        EnemyShip4.destroy();
      
     
        
    }

    drawSprites();
  

}
function half_speed() {
    winImage.speed(20);
  }








   






