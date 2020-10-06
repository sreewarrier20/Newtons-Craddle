class Bob{
    constructor(x,y,radius){
        this.object=Bodies.circle(x,y,radius,{isStatic:false,restitition:0.3,friction:0.5,density:1.2});
        this.radius=radius;
       // this.img=loadImage("paper.png");
        World .add(world,this.object);
    }
    display(){
        push ();
        fill ("purple")
        translate(this.object.position.x,this.object.position.y)
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
       // imageMode (CENTER);
       // image (this.img,0,0,70,70);


        pop ();
    }
}
