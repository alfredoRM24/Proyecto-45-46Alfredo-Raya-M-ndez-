class Game{

     constructor()
    {
        this.gameState = 0
        this.player = new Jugador(displayWidth-1150, displayHeight-300)
        this.zombie = new Zombie()
        
    }
    play(){
        
    this.player.handelControl();
    this.zombie.spawnZombies(50);

    if(keyWentDown("space")){

   this.player.shoot();
   

    } else if(keyWentUp("space")){
   this.player.noShoot();

    }
   
   for (var i=0;i<this.zombie.zombies.length; i++){
   for(var j=0; j<this.player.bullets.length; j++){
    if(this.player.bullets[j].isTouching(this.zombie.zombies[i])){
        console.log("text");
        this.zombie.zombies[i].lifetime = 0;
        this.player.bullets[j].lifetime = 0;
    }
   }
   }
  
  
    }
}