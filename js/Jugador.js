class Jugador {


    constructor(x,y){
         this.x = x
         this.y = y 
        
         this.shooterImg = loadImage("assets/shooter_2.png");
         this.player = createSprite(x,y, 50, 50);
         this.player.addImage(this.shooterImg);
         this.player.scale = 0.3
         this.player.debug = true
         this.player.setCollider("rectangle",0,0,300,300);
         this.bullets= new Group();


         
     }
     handelControl(){
        if(keyDown("UP_ARROW")||touches.length>0){
           this.player.y = this.player.y-30
          }
          if(keyDown("DOWN_ARROW")||touches.length>0){
           this.player.y = this.player.y+30
          }
          if(keyDown("LEFT_ARROW")||touches.length>0){
            this.player.x = this.player.x-30
          }
          if(keyDown("RIGHT_ARROW")||touches.length>0){
            this.player.x = this.player.x+30
          }
     }

     shoot(){
        this.shooter_shooting = loadImage("assets/shooter_3.png");
        this.player.addImage(this.shooter_shooting );
       
        var bullet_Img = loadImage("assets/flying-bullet-png-5 (1).png");
        this.bullet = createSprite(this.player.x + 40,this.player.y-25,10,10);
        this.bullet.velocityX = 2;
        this.bullet.addImage(bullet_Img);
        this.bullet.scale= 0.02;
        this.bullets.add(this.bullet);
     }
     noShoot(){
        this.player.addImage(this.shooterImg);
     }
     zombAlt(){
      this.zombies = random()
     }

}
