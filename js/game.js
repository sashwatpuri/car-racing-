class Game {
    constructor(){}

    getgameState(){
        database.ref("GameState").on("value",function(data){
            GameState = data.val();
        })

    }
    
    updategameState(State){
        database.ref("/").update({
            GameState: State 
        });
    }

    async Start(){
        if(GameState === 0 ){
            player = new Player();
            var playercountref = await database.ref('playerCount').once('value');
            if(playercountref.exists()){
                playerCount = playercountref.val();
                player.getplayerCount();
            }
            form = new Form();
            form.Display();
            car1 = createSprite(300,200);
            car1.addImage(car1image);
            car2 = createSprite(500,200);
            car2.addImage(car2image);
            car3 = createSprite(700,200);
            car3.addImage(car3image);
            car4 = createSprite(900,200);
            car4.addImage(car4image);
            cars = [car1 , car2 , car3 , car4]
           

        }
    }
    play(){
        if(GameState === 1){
            form.hide();
            Player.getallplayerinfo();
            player.getplayerRank();
            if(allplayers != undefined){
                background(ground);
                image(track,0,-height*4,width,height*5);
                var index = 0 ;
                var x = 175; 
                var y ;
                for(var i in allplayers){
                    index += 1;
                    x += 225; 
                    y = height - allplayers[i].distance ; 
                    cars[index -1].x = x;
                    cars[index -1].y = y;
                    if(i == "player" + player.index){
                        cars[index-1].shapeColor = 'red';
                        camera.position.x = width/2 ; 
                        camera.position.y = cars[index-1].y ; 
                        fill('red');
                        ellipse(x,y,60,60);

                    }
                    else{
                        cars[index-1].shapeColor = "black";
                    }
                }
            }
            if(keyIsDown(UP_ARROW)&& player.index != null){
                player.distance += 10 ;
                player.update();
            }
            if(player.distance>=3240){
                GameState = 2 ; 
                player.rank += 1 ; 
                Player.updateplayerRank(player.rank);
            }
            drawSprites();
        }

    }
    end(){
        push();
        fill('skyblue');
        rectMode(CENTER);
        rect(width/2,cars[player.index-1].y-100,350,250);
        pop();
        imageMode(CENTER);
        image(trophie,width/2 -100 ,cars[player.index-1].y-100,100,150)
        fill('black');
        textSize(30);
        text("Your Rank is "+ player.rank ,width/2-50,cars[player.index-1].y-100);
        console.log('game ended');
        form.title.hide();
    }
}