class Mango{
    constructor(x,y,radius){
    var options={
       isStatic:true,
       restitution:0,
       friction:1
    }
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
    this.image=loadImage("Images/mango.png");
    
    World.add(world,this.body);   
    }
    display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    fill("white");
    imageMode(CENTER);
    image(this.image,0,0,this.radius*2,this.radius*2);
    pop();
    }

}
