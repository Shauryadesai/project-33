class Drops{
    constructor(x,y){
        var options = {
        friction:0.001,
        restitution:0.1,
        }
        this.drops = Bodies.circle(x,y,5,options);
        this.dropImg = loadImage("snow5.webp")
        this.radius = 5; 
        World.add (world,this.drops)
    }
    display(){
    imageMode(CENTER)
    image(this.dropImg,this.drops.position.x,this.drops.position.y,this.radius,this.radius)
    }
    update(){
        if(this.drops.position.y< height){
            Matter.Body.setPosition(this.drops, {x:random(0,700),y:random(0,400)})
        }
    }
}