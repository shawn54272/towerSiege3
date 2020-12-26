class Ground {

constructor() {

var options = {isStatic: true}

this.ground = Bodies.rectangle(600,600,30000,20,options)
World.add(world, this.ground)
    
}

display() {
push()
noStroke();
fill("brown");
rectMode(CENTER);
rect(this.ground.position.x,this.ground.position.y,900,20);
pop();
}










}