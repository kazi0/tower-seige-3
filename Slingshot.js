class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 15
        }
        this.pointB = pointB;
        this.slings = Constraint.create(options);
        World.add(world, this.slings);
    }

    fly(){
        this.slings.bodyA = null;
    }

    attach(body){
        this.slings.bodyA = body;
    }

    display(){
        if(this.slings.bodyA){
            var pointA = this.slings.bodyA.position;
            var pointB = this.pointB;
            var pointA = this.slings.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    }
    
