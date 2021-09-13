class Cannon{
    constructor(x,y,w,h,angle){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.angle = angle
        this.cannonImg = loadImage("assets/canon.png")
        this.cannonbaseImg = loadImage("assets/cannonBase.png")
    }
 display(){
     push();
     imageMode(CENTER);
     rotate(angle);
     image(this.cannonImg,this.x,this.y,this.w,this.h)
     pop();
     image(this.cannonbaseImg,70,20,200,200)
     noFill()

    }   
}
