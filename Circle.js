class Circle{
    constructor(x,y,radius){
    var options = {
       
        restitution : 0.1,
        friction : 1,
        density : 1.2
    }

        this.body = Bodies.circle(x,y,radius,options)
        this.x = x
        this.y = y
        this.radius = radius
        this.image=loadImage("polygon.png")
       
        World.add(world,this.body)

    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop();
      }
}