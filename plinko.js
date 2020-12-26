class PLINKO{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.3,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=10;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display()
    {
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(184,5,105);
        ellipse(0,0,12);
        pop();
    }
}