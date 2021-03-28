class Ball {
  constructor(x,y,width,height,angle) {
    var options = {
      density: 1, 
      frictionAir:1
    }
      
     this.body = Bodies.rectangle(x,y,width,height,angle,options);

     this.image = loadImage("bird.png");
     this.width = width;
     this.height = height;

     World.add(world,this.body);
  }
  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
}