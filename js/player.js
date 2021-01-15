class Player{
    constructor(){
        this.index = null ;
        this.distance = 0 ; 
        this.name = null ; 
        this.rank = 0 ; 
    };

    getplayerCount(){
        database.ref('playerCount').on('value' , (data)=>{
            playerCount = data.val();
        })
    }
    updatecount(count){
      database.ref('/').update({
          playerCount : count
      })  
    }
    update(){
        database.ref('players/player' + this.index).set({
            name: this.name ,
            distance: this.distance
        })
    }
    static getallplayerinfo(){
        database.ref('players').on('value' , (data)=>{
            allplayers = data.val();
        })

    }
    getplayerRank(){
        database.ref('carRank').on('value' , (data)=>{
            this.rank = data.val();
        })
    }
    static updateplayerRank(rank){
        database.ref('/').update({
            carRank : rank
        })
    }
}