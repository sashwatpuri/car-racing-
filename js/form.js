class Form {
    constructor(){
        this.title = createElement('H1');
        this.input = createInput('name');
        this.button = createButton('Play');
        this.greetings = createElement('H2') ; 
        this.reset = createButton('Reset');
    }

    Display(){
        this.title.html("Car Racing Game");
        this.title.position(width/2-50 , 20);


        this.input.position(width/2 -40 , height/2 -80);
        this.button.position(width/2 +30 ,height/2);

        this.reset.position(width-100 , 50);

        this.reset.mousePressed(()=>{
            player.updatecount(0);
            game.updategameState(0);
            player.rank = 0;
            Player.updateplayerRank(0);
            

        })

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            player.name = this.input.value();
            playerCount += 1  ; 
            player.index = playerCount ; 
            player.update();
            player.updatecount(playerCount);

            this.greetings.html('Hello ' + player.name );
            this.greetings.position(width/2 - 40 , height/2 - 50);
        })
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greetings.hide();
    }
}