var database ; 
var playerCount , GameState = 0  ; 
var game , player , form ; 
var allplayers ; 
var car1 , car2 , car3 , car4 , cars ; 
var car1image , car2image , car3image , car4image ; 
var track ;
var ground ; 
var trophie ; 

function preload(){
    ground = loadImage('Images/ground.png');
    track = loadImage('Images/track.jpg') ; 
    car1image = loadImage('Images/car1.png');
    car2image = loadImage('Images/car2.png');
    car3image = loadImage('Images/car3.png');
    car4image = loadImage('Images/car4.png') ; 
    trophie = loadImage('Images/trophie.png');
}

function setup(){
    createCanvas(displayWidth - 50, displayHeight - 190);
    database = firebase.database();

    game = new Game();
    game.getgameState();
    game.Start();

}

function draw(){
    console.log(player.distance);
    if(playerCount === 4 ){
        game.updategameState(1);
    }
    if(GameState == 1 ){
        clear();
        game.play();
    }
    if(GameState == 2){
        game.end();
    }
}



