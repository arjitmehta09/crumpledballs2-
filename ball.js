class Ball{
   
    constructor(x,y,r){
        var options ={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2,

           
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("images/paper.png");
        
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
        
    }
    display(){
        var angle = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
      
        imageMode(CENTER);
        image(this.image,0,0,70,70);
      
        pop();
    }

}

