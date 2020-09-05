class paper{

    constructor(x,y,radius){
        var options={
           
            restitution:0.5,
           
            density:1.2,
            friction:0.5
        }
     this.body=Bodies.circle(x,y,radius,options);
     this.radius=radius;
     this.image=loadImage("paper.png");
    
     World.add(world, this.body);


    }

   display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);

    //ellipse(0,0,this.radius,this.radius);
    pop();

    }

}