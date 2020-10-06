class Rope{
    constructor(A,B,xoffset,yoffset){

this.xoffset=xoffset;
this.yoffset=yoffset;

     var   cproperties={
            bodyA:  A ,
            bodyB:  B ,
            length: 300   ,
            stiffness: 0.4 ,
            pointB: {x: this.xoffset, y:this.yoffset}
        }
    
    
    this.link=Constraint.create(cproperties);
    
    World.add(world,this.link);
    }


    display(){


        strokeWeight(3);
line (this.link.bodyA.position.x,this.link.bodyA.position.y,this.link.bodyB.position.x+this.xoffset,this.link.bodyB.position.y+this.yoffset);
    

  }
}