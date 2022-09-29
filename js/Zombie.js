class Zombie{

    constructor()
    {
        //var random = Math.round(random(5,10));
        this.zombieImg= loadAnimation("assets/zombie3.png","assets/zombie4.png");
        this.zombies = new Group();
    }
    
    spawnZombies(frames){
       
        if(frameCount%frames === 0){
            this.zombie = createSprite(width+30,200,50,50);
            this.zombie.addAnimation("walking", this.zombieImg);
            this.zombie.scale = 0.05;
            this.zombie.velocityX= -10;
            this.zombies.add(this.zombie);
        }
    }

}