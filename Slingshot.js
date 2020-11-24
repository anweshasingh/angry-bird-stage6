class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png"); //loading images
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200,20); //adding image of the catapult
        image(this.sling2, 170,20); 
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if(pointA.x < 220) { //if the bird id pulled behind then stopper should be behind the bird
                stroke(65,42,24); //to give colour to line
                strokeWeight(4); //to give thickness to line
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3, pointA.x-30,pointA.y-10, 15,30);
            }
            else{ // if the bird is pulled in front then stopper should be in front
                stroke(65,42,24);
                strokeWeight(4);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3, pointA.x+25,pointA.y-10, 15,30);
            }
           
            
        }
    }
    
}