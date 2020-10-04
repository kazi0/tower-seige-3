class Ground {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("brown");
      rect(0,0,this.width,this.height);
      pop();
    }
  }
  